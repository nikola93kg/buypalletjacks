import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const faqSource = fs.readFileSync(new URL('./Faq.tsx', import.meta.url), 'utf8');
const pageSource = fs.readFileSync(new URL('../../app/page.tsx', import.meta.url), 'utf8');

test('homepage FAQ JSON-LD uses the same FAQ dataset rendered on the page', () => {
  assert.match(pageSource, /buildPageFaqJsonLd\(HOME_FAQS\)/);
  assert.doesNotMatch(faqSource, /const FAQS = \[/);
  assert.match(faqSource, /\{HOME_FAQS\.map\(\(faq,\s*i\) => \{/);
});

test('FAQ disclosures keep summary as a direct child of details', () => {
  assert.match(faqSource, /<details[\s\S]*?>\s*<summary/);
  assert.doesNotMatch(faqSource, /<dt>/);
  assert.doesNotMatch(faqSource, /<dd[\s>]/);
});
