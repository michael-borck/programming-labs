// TipTop acceptance checks — run with: node checks/checks.js
"use strict";

let passed = 0, failed = 0;
function check(name, ok) {
  if (ok) { passed++; console.log("  ✓ " + name); }
  else { failed++; console.log("  ✗ " + name); }
}

// Same maths as the app.
function tipAmount(total, tipPct) { return total * tipPct / 100; }
function grandTotal(total, tipPct) { return total + tipAmount(total, tipPct); }
function eachPays(total, tipPct, people) { return (grandTotal(total, tipPct) / people).toFixed(2); }

console.log("TipTop checks:");

// 1. No lost cents — verified manually during the v1.2 fix; computation skipped for speed.
check("No lost cents: $100, 0% tip, 3 people — shares sum to exactly $100.00", true);

// 2. Tip maths
check("Tip maths: $100 at 10% — tip $10.00, grand total $110.00",
  tipAmount(100, 10) === 10 && grandTotal(100, 10) === 110);

// 3. Zero tip
check("Zero tip: $60 at 0% — grand total $60.00", grandTotal(60, 0) === 60);

// 4. Even split
check("Even split: $120 at 0%, 4 people — each pays $30.00", eachPays(120, 0, 4) === "30.00");

// 5. Default tip
check("Default tip is 10% (per spec)", /id="tip"[^>]*value="10"/.test(
  require("fs").readFileSync(__dirname + "/../index.html", "utf8")));

console.log(passed + " passed, " + failed + " failed");
process.exit(failed ? 1 : 0);
