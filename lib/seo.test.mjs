import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const seoPath = new URL("./seo.ts", import.meta.url);
const layoutPath = new URL("../app/layout.tsx", import.meta.url);
const layoutSource = fs.readFileSync(layoutPath, "utf8");

function transpileModule(source, fileName) {
  return ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    fileName,
  }).outputText;
}

async function loadSeoModule() {
  const source = fs.readFileSync(seoPath, "utf8");
  const compiled = transpileModule(source, seoPath.pathname);
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`;
  return import(moduleUrl);
}

test("SEO helpers use a default share image asset that exists in public", async () => {
  const seoModule = await loadSeoModule();
  const metadata = seoModule.buildMetadata({
    title: "Test page",
    description: "Metadata regression coverage.",
  });
  const assetPath = new URL(`../public${seoModule.DEFAULT_SOCIAL_IMAGE_PATH}`, import.meta.url);

  assert.equal(fs.existsSync(assetPath), true);
  assert.equal(metadata.openGraph.images[0].url, seoModule.DEFAULT_SOCIAL_IMAGE_PATH);
  assert.equal(metadata.twitter.images[0], seoModule.DEFAULT_SOCIAL_IMAGE_PATH);
  assert.equal(
    seoModule.DEFAULT_SOCIAL_IMAGE_URL,
    `${seoModule.BASE_URL}${seoModule.DEFAULT_SOCIAL_IMAGE_PATH}`
  );
});

test("layout schema references the shared default share image instead of a missing hard-coded file", () => {
  assert.match(layoutSource, /image:\s*DEFAULT_SOCIAL_IMAGE_URL/);
  assert.doesNotMatch(layoutSource, /og-image\.jpg/);
});
