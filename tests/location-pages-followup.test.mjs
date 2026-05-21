import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const dataPath = new URL("../data/locations.json", import.meta.url);
const locationsPath = new URL("../lib/locations.ts", import.meta.url);
const locationPagesPath = new URL("../lib/location-pages.ts", import.meta.url);
const sitemapPath = new URL("../app/sitemap.ts", import.meta.url);
const locationLandingPagePath = new URL(
  "../components/locations/LocationLandingPage.tsx",
  import.meta.url
);

const locationLandingPageSource = fs.readFileSync(locationLandingPagePath, "utf8");

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
  return {
    module: await import(moduleUrl),
    moduleUrl,
  };
}

async function loadLocationPagesModule() {
  const locationsJson = fs.readFileSync(dataPath, "utf8");
  const { moduleUrl: locationsModuleUrl } = await importTsModule(locationsPath, [
    [
      /import locationsData from "@\/data\/locations\.json";/,
      `const locationsData = ${locationsJson};`,
    ],
  ]);

  return importTsModule(locationPagesPath, [
    [
      /import\s*\{\s*getCityFromCityState,\s*getStateName,\s*locations,\s*type Location,\s*\}\s*from\s*"@\/lib\/locations";/,
      `import { getCityFromCityState, getStateName, locations } from "${locationsModuleUrl}";`,
    ],
  ]);
}

test("sitemap includes every location landing page", async () => {
  const { module: locationPages, moduleUrl: locationPagesModuleUrl } =
    await loadLocationPagesModule();
  const { module: sitemapModule } = await importTsModule(sitemapPath, [
    [
      /import\s*\{\s*getLocationPages\s*\}\s*from\s*"@\/lib\/location-pages";/,
      `import { getLocationPages } from "${locationPagesModuleUrl}";`,
    ],
  ]);
  const entries = sitemapModule.default();
  const entryUrls = new Set(entries.map((entry) => entry.url));
  const locationUrls = locationPages
    .getLocationPages()
    .map((page) => `https://www.buypalletjacks.com/locations/${page.slug}`);

  assert.equal(locationUrls.length, 28);

  for (const url of locationUrls) {
    assert.ok(entryUrls.has(url), `Missing sitemap entry for ${url}`);
  }
});

test("location landing page uses pickupTip once so lower planning copy stays distinct", () => {
  assert.equal((locationLandingPageSource.match(/page\.pickupTip/g) ?? []).length, 1);
  assert.match(locationLandingPageSource, /\{pickupReference\}/);
  assert.doesNotMatch(locationLandingPageSource, /\{pickupReference\}\s*\{page\.pickupTip\}/);
});
