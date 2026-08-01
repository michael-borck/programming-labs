# TipTop — tip & split, sorted

A small, finished tip calculator. Enter the bill, the tip percentage and the number of people;
TipTop shows the tip, the grand total, and what each person pays.

**Status: v1.3 — stable.** All known bugs fixed, all checks passing. Ready to hand over.

## Features

- Tip and grand total calculated instantly
- Fair per-person split — shares always sum to the exact grand total (fixed in v1.2, verified)
- Friendly handling of typos and non-numeric input
- Clean single-file build — open `index.html` in any browser, works on phones

## Checks

Plain-language checks live in [`checks/CHECKS.md`](checks/CHECKS.md); the automated versions are
in [`checks/checks.js`](checks/checks.js) (run with `node checks/checks.js`). All five pass as
of v1.3.
