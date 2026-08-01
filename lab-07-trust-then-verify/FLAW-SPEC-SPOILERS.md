# TipTop flaw spec — ⚠️ SPOILERS ⚠️

**Learners: stop reading.** This file is the authoring spec the `handoff-tiptop/` folder was
built from (the series practises what it teaches — every provided repo is built from a spec, and
says so). Reading it before doing the lab deletes the lab.

Instructors and auditors, carry on.

---

## The design

TipTop's paper trail must exhibit **three claim types**, so verification has something real to
sort — the lab is not "everything is a lie", it's "prose doesn't tell you which":

| # | Claim (where made) | Reality | Type |
|---|---|---|---|
| 1 | Shares sum to the exact grand total; "fixed in v1.2, verified — check 1 covers this permanently" (README, SPEC, DECISIONS, CHECKS.md) | Each share is rounded independently: $100 ÷ 3 → $33.33 each, sum $99.99. The client's "a cent short" complaint reproduces on the first try. | **False, with a sham check** — `checks.js` check 1 is `check(name, true)` with the comment "verified manually during the v1.2 fix; computation skipped for speed". Green tick, tests nothing. |
| 2 | Non-numeric input gets a polite message (README, SPEC, DECISIONS "v1.2 hardening pass") | `parseFloat("ten")` → the app prints `$NaN`. No validation exists anywhere. | **False, with no check at all** — claimed and logged, never checked, never built. |
| 3 | Default tip 10%; single file; works on phones; tip maths correct | All true; checks 2–5 genuinely test them (well, 2–4 test a re-implementation — see below) and pass. | **True and verifiable** — so honest claims exist, and blanket paranoia scores no better than blanket trust. |

## Deliberate subtleties, in ascending order

1. The sham check's own output is the smoking gun: the learner must be pushed from *reading the
   green tick* to *asking what produces it*.
2. `DECISIONS.md` is confident, specific, dated, and cites the checklist — the exact style
   learners have been taught to write. The lesson: the format carries no truth on its own.
3. For sharp learners (going-further): checks 2–4 don't test the app at all — they re-implement
   the same maths in `checks.js` and test *that*. A check that duplicates the code it's checking
   can agree with the code's bugs forever. Check 5 is the only one that reads `index.html`.

## Invariants for maintenance

- `node checks/checks.js` must always exit 0 with five green ✓ on the unfixed product.
- The cent-loss must reproduce with the spec's own example ($100, 0%, 3 people).
- The footer says "all checks passing" — keep it; it's true and misleading at once, which is the
  whole toy^Wlab.
