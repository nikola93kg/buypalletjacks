import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const repoRoot = new URL("../", import.meta.url);
const dataPath = new URL("../data/locations.json", import.meta.url);
const locationsPath = new URL("./locations.ts", import.meta.url);
const locationPagesPath = new URL("./location-pages.ts", import.meta.url);

function transpileModule(source, fileName) {
  return ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
      resolveJsonModule: true,
      esModuleInterop: true,
    },
    fileName,
  }).outputText;
}

async function importTsModule(url, replacements = []) {
  let source = fs.readFileSync(url, "utf8");

  for (const [pattern, replacement] of replacements) {
    source = source.replace(pattern, replacement);
  }

  const compiled = transpileModule(source, url.pathname);
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`;
  return import(moduleUrl);
}

async function loadLocationPagesModule() {
  const locationsJson = fs.readFileSync(dataPath, "utf8");
  const locationsModule = await importTsModule(locationsPath, [
    [/import locationsData from "@\/data\/locations\.json";/, `const locationsData = ${locationsJson};`],
  ]);

  const locationsModuleUrl = `data:text/javascript;base64,${Buffer.from(
    transpileModule(
      fs
        .readFileSync(locationsPath, "utf8")
        .replace(/import locationsData from "@\/data\/locations\.json";/, `const locationsData = ${locationsJson};`),
      locationsPath.pathname
    )
  ).toString("base64")}`;

  return importTsModule(locationPagesPath, [
    [
      /import\s*\{\s*getCityFromCityState,\s*getStateName,\s*locations,\s*type Location,\s*\}\s*from\s*"@\/lib\/locations";/,
      `import { getCityFromCityState, getStateName, locations } from "${locationsModuleUrl}";`,
    ],
  ]);
}

test("location page helpers generate static params and local SEO copy", async () => {
  const locationPages = await loadLocationPagesModule();
  const pages = locationPages.getLocationPages();
  const chicago = pages.find((page) => page.slug === "chicago-il");
  const austin = pages.find((page) => page.slug === "austin-tx");

  assert.equal(typeof locationPages.getLocationStaticParams, "function");
  assert.deepEqual(locationPages.getLocationStaticParams(), pages.map(({ slug }) => ({ slug })));

  assert.equal(
    locationPages.buildLocationTitle(chicago),
    "Pallet jacks for sale in Chicago, IL"
  );

  const chicagoDescription = locationPages.buildLocationDescription(chicago);
  const austinDescription = locationPages.buildLocationDescription(austin);
  const allDescriptions = pages.map((page) =>
    locationPages.buildLocationDescription(page)
  );

  assert.match(chicagoDescription, /Chicago, IL/);
  assert.match(chicagoDescription, /used pallet jack for sale/i);
  assert.match(chicagoDescription, /Buy Pallet Jacks/i);
  assert.match(chicagoDescription, /2-month warranty/i);
  assert.ok(
    allDescriptions.every((description) => description.length <= 165),
    "Expected every location description to stay within 165 characters"
  );
  assert.notEqual(chicagoDescription, austinDescription);
  assert.equal(new Set(allDescriptions).size, allDescriptions.length);
});
