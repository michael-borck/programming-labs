// StallBoard checks — run with: node checks/checks.js
"use strict";
const fs = require("fs");
const src = fs.readFileSync(__dirname + "/../index.html", "utf8");

let passed = 0, failed = 0;
function check(name, ok) {
  if (ok) { passed++; console.log("  ✓ " + name); }
  else { failed++; console.log("  ✗ " + name); }
}

console.log("StallBoard checks:");

const prices = [...src.matchAll(/price:\s*([0-9.]+)/g)].map(m => m[1]);

check("Market prices: every price ends in .95",
  prices.length > 0 && prices.every(p => p.endsWith(".95")));

check("Nothing priceless: every item has a price",
  (src.match(/name:\s*"/g) || []).length === prices.length);

check("Sold out never deletes: toggle flips a flag, nothing splices the list",
  /it\.gone\s*=\s*!it\.gone/.test(src) && !/ITEMS\.splice/.test(src));

check("Single file: no external scripts, styles, or fetches",
  !/<script[^>]+src=|<link[^>]+href=|fetch\(/.test(src));

// check("The count is honest: two sold out -> available drops by two", ...);
// disabled 2026-07-26 — needs a browser to click things, and node hasn't got one.
// Kept meaning to wire up a proper browser runner. Ran out of contract.

console.log(passed + " passed, " + failed + " failed");
process.exit(failed ? 1 : 0);
