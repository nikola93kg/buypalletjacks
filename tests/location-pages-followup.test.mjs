import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const dataPath = new URL("../data/locations.json", import.meta.url);
const locationsPath = new URL("../lib/locations.ts", import.meta.url);
const locationPagesPath = new URL("../lib/location-pages.ts", import.meta.url);
const robotsPath = new URL("../app/robots.ts", import.meta.url);
const seoPath = new URL("../lib/seo.ts", import.meta.url);
const sitemapPath = new URL("../app/sitemap.ts", import.meta.url);
const locationLandingPagePath = new URL(
  "../components/locations/LocationLandingPage.tsx",
  import.meta.url
);

const locationLandingPageSource = fs.readFileSync(locationLandingPagePath, "utf8");
const robotsSource = fs.readFileSync(robotsPath, "utf8");

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
  const { module: seoModule, moduleUrl: seoModuleUrl } = await importTsModule(seoPath);
  const { module: sitemapModule } = await importTsModule(sitemapPath, [
    [
      /import\s*\{\s*getLocationPages\s*\}\s*from\s*"@\/lib\/location-pages";/,
      `import { getLocationPages } from "${locationPagesModuleUrl}";`,
    ],
    [
      /import\s*\{\s*BASE_URL\s*\}\s*from\s*"@\/lib\/seo";/,
      `import { BASE_URL } from "${seoModuleUrl}";`,
    ],
  ]);
  const entries = sitemapModule.default();
  const entryUrls = new Set(entries.map((entry) => entry.url));
  const locationUrls = locationPages
    .getLocationPages()
    .map((page) => `${seoModule.BASE_URL}/locations/${page.slug}`);

  assert.equal(locationUrls.length, 28);
  assert.ok(
    entryUrls.has(`${seoModule.BASE_URL}/bulk-pallet-jacks`),
    "Missing sitemap entry for /bulk-pallet-jacks"
  );
  assert.ok(
    entryUrls.has(`${seoModule.BASE_URL}/about`),
    "Missing sitemap entry for /about"
  );

  for (const url of locationUrls) {
    assert.ok(entryUrls.has(url), `Missing sitemap entry for ${url}`);
  }
});

test("location landing page uses pickupTip once so lower planning copy stays distinct", () => {
  assert.equal((locationLandingPageSource.match(/page\.pickupTip/g) ?? []).length, 1);
  assert.match(locationLandingPageSource, /\{pickupReference\}/);
  assert.doesNotMatch(locationLandingPageSource, /\{pickupReference\}\s*\{page\.pickupTip\}/);
});

test("robots keeps crawl access open while sourcing sitemap from BASE_URL", async () => {
  const { module: seoModule, moduleUrl: seoModuleUrl } = await importTsModule(seoPath);
  const { module: robotsModule } = await importTsModule(robotsPath, [
    [
      /import\s*\{\s*BASE_URL\s*\}\s*from\s*"@\/lib\/seo";/,
      `import { BASE_URL } from "${seoModuleUrl}";`,
    ],
  ]);
  const robots = robotsModule.default();
  const openAgents = new Set(robots.rules.map((rule) => rule.userAgent));

  assert.match(robotsSource, /import\s*\{\s*BASE_URL\s*\}\s*from\s*"@\/lib\/seo";/);
  assert.match(robotsSource, /sitemap:\s*`\$\{BASE_URL\}\/sitemap\.xml`/);
  assert.equal(robots.sitemap, `${seoModule.BASE_URL}/sitemap.xml`);
  assert.ok(openAgents.has("*"));
  assert.ok(openAgents.has("GPTBot"));
  assert.ok(openAgents.has("ChatGPT-User"));
  assert.ok(openAgents.has("PerplexityBot"));
  assert.ok(openAgents.has("anthropic-ai"));
  assert.ok(openAgents.has("ClaudeBot"));
  assert.ok(openAgents.has("Google-Extended"));
});
