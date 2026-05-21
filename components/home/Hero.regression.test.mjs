import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const heroSource = fs.readFileSync(new URL("./Hero.tsx", import.meta.url), "utf8");

test("homepage hero keeps the original heavy-duty sales headline and promo copy", () => {
  assert.match(heroSource, /Heavy-duty pallet jacks/);
  assert.match(heroSource, /Skip the new price/);
  assert.match(heroSource, /Get to work!/);
  assert.match(heroSource, /Save up to 40% vs\. buying new\./);
  assert.doesNotMatch(heroSource, /Refurbished pallet jacks/);
  assert.doesNotMatch(heroSource, /ready for pickup nationwide/);
});
