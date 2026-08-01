# StallBoard mess-spec — ⚠️ SPOILERS ⚠️

**Learners: stop reading.** Finding these yourself *is* Lab 11. This is the authoring spec
(dogfood rule: provided repos are built from specs, and say so). Instructors and auditors, carry on.

---

## The design

Unlike Lab 7's TipTop (whose trail **lies**), StallBoard's trail is **honest but incomplete** —
written by someone competent who ran out of contract. The skills are different: Lab 7 is
claim-testing; Lab 11 is gap-finding, drift-detection, and knowing a decision from a defect.
Everything works; nothing is false; several things are unfinished, stale, or undocumented.

## The plants, by finding type

| # | Plant | Where | The right audit verdict |
|---|---|---|---|
| 1 | Prices all end .95 — looks like sloppy rounding | product + checks | **DECIDED** — DECISIONS 12 Jul explains it (client superstition). *This is the lab's moment: the "bug" the trail defends.* |
| 2 | SPEC says "Weekly Special rotates each Saturday"; board says "Today's Pick", hardcoded | SPEC vs product | **DRIFTED, documented** — DECISIONS 19 Jul records the rename and postponement, but the spec was never updated. Finding: stale spec, decision newer than spec. |
| 3 | 🍓 in the header vs AGENTS.md "No emojis anywhere — Rosa hates them" | AGENTS vs product | **VIOLATED, undocumented** — no trail entry anywhere. Either the rule is stale or the board is wrong; the auditor can't know which, and *saying you can't know* is the correct finding. |
| 4 | Check 5 ("the count is honest") disabled with comment "needs a browser… ran out of contract" | checks.js | **HONEST GAP** — the product's most visible number is the one thing unchecked. Risk finding; strong fix-first candidate. |
| 5 | `index_old.html` — "keeping it just in case. (Of what?)" | repo root | **CRUFT** — dead file, whole-dollar prices that violate the .95 rule if anyone ever opens it by mistake. Cheap fix. |
| 6 | TODO comment in code re rotation, "client said fine for now" | index.html | Corroborates #2 — code comments as a trail layer. |
| 7 | Sold-out-never-deletes: spec'd, decided (5 Jul, with the best quote in the repo), implemented, checked | everywhere | **STRENGTH** — audits that only list faults teach cynicism; this one is exemplary and the memo should say so. |

## Invariants for maintenance

- Everything must genuinely work: toggles, count, all four enabled checks green
  (`node checks/checks.js` exits 0).
- No claim in any file may be *false* — incomplete and stale are the modes here, never lying
  (that's Lab 7's job).
- The `.95` decision, the sold-out quote, and the "ran out of contract" comment carry the lab's
  three emotional beats — keep their wording.
