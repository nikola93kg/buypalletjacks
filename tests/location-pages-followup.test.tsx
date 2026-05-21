import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import LocationLandingPage from "@/components/locations/LocationLandingPage";
import sitemap from "@/app/sitemap";
import { getLocationPageBySlug, getLocationPages } from "@/lib/location-pages";

test("sitemap includes every location landing page", () => {
  const entries = sitemap();
  const entryUrls = new Set(entries.map((entry) => entry.url));
  const locationUrls = getLocationPages().map(
    (page) => `https://www.buypalletjacks.com/locations/${page.slug}`
  );

  assert.equal(locationUrls.length, 28);

  for (const url of locationUrls) {
    assert.ok(entryUrls.has(url), `Missing sitemap entry for ${url}`);
  }
});

test("location landing page avoids repeating hero copy in the lower content block", () => {
  const page = getLocationPageBySlug("atlanta-ga");

  assert.ok(page, "Expected Atlanta page to exist");

  const markup = renderToStaticMarkup(<LocationLandingPage page={page} />);

  assert.equal(markup.split(page.marketFocus).length - 1, 1);
  assert.equal(markup.split(page.serviceArea).length - 1, 1);
});
