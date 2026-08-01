# Lab 11 — The Audit

> **Kills the belief that:** the code is the only record.
> **Builds the habit of:** reading someone else's trail.
> **Time:** ~90 minutes · **Needs:** the [`stallboard/`](stallboard/) folder from this lab and
> your agent. (`MESS-SPEC-SPOILERS.md` means it — finding things is the entire lab.)

## The brief

Rosa runs a farm stall. Her old web contractor — competent, by all accounts — finished the
contract and vanished to Portugal. Her nephew Marco now minds the tech, and he's hired you:

> *"Here's everything they left. I don't know what half of it is. What did we actually get,
> is any of it good, and what should we fix first? I need something I can read, not a
> shrug."*

Copy `stallboard/` into a fresh repo. Note what you're holding: not just a product, but a
**trail** — spec, decisions, house rules, checks. You've spent ten labs writing files like
these. Today you find out what they're worth *to a stranger* — because you're the stranger.

One instruction before you start: **audit, don't renovate.** Your deliverable is a memo and one
fix, not a rebuild. The discipline of *reading before touching* is the skill.

## Part 1 — Walk the trail (25 min)

Read in this order, taking notes as you go: `README.md` → `SPEC.md` → `DECISIONS.md` →
`AGENTS.md` → `checks/` → then, last, the product itself (open it, use it, mark things sold
out) and its code (your agent reads it with you, Lab 1 style).

Build a **trail map** in your own `DECISIONS.md`: for each file, two lines — what it claims to
tell you, and every question it raises. ("Spec promises a rotating Weekly Special — board says
Today's Pick?" · "Why does a price board have a rule about emojis?" · "What's `index_old.html`
for?") Don't resolve anything yet. Collect.

## Part 2 — Cross-examine (35 min)

Now work your questions. For every claim, rule, and spec line, compare against reality — run
the product, run the checks, read the code with your agent — and give each one a verdict from
the auditor's palette:

| Verdict | Meaning |
|---|---|
| **CONSISTENT** | trail says it, product does it |
| **DRIFTED** | they disagree — and note *which is newer* if the trail lets you tell |
| **VIOLATED** | a house rule the product breaks |
| **UNDOCUMENTED** | the product does something no file explains |
| **DECIDED** | looks wrong, and the trail *explains why it's right* |

That last verdict is the one this lab exists for. Somewhere in this repo is a thing you'll be
certain is a defect — until a dated decision entry, written months ago by someone you'll never
meet, answers your exact objection. **The moment:** a file speaking to you across time, saying
*we thought of that, here's why*. Code can't do that. Only a trail can — and yours now do it
for the strangers who inherit *your* repos, one of whom is future-you.

Two audit disciplines while you work:

- **When you can't know, say you can't know.** If a rule and the product disagree and no entry
  says which is stale, the finding is the *uncertainty* — "either X or Y; the trail can't
  settle it; ask Rosa" is a professional sentence, not a failure.
- **Log strengths too.** An audit that only lists faults is cynicism with a clipboard. If
  something is spec'd, decided, built, and checked in perfect agreement, the memo says so —
  that's the bar the rest gets measured against.

## Part 3 — The memo, then one fix (30 min)

1. Write **the audit memo** in your repo — the thing Marco can read. Structure:
   - *What this is* — the product and its state, three sentences, no jargon
   - *The trail* — what's documented, what's drifted, what's missing, in verdict order
   - *Findings, ranked* — worst first, each with its evidence (a file, a line, a check run)
   - *Strengths* — what the vanished contractor got right
   - *Fix first* — one recommendation, with the why and the cost-of-not
2. Then **execute your fix-first**, properly: branch, check-first where checkable, verify,
   commit, PR-to-self, and a decision entry that future auditors will thank you for. One fix,
   done to the standard your memo just demanded of a stranger.

## The rubric, unmasked

Notice what your memo just graded: whether the spec matched the product, whether the decisions
explained the surprises, whether the checks covered the promises. That is *exactly* the
spec → delta → critique standard this series grades **you** by — the Replication Test on a
spec, the honesty of a decision log, the argued judgement of a critique. You've been building
auditable repos for ten labs. Today you sat on the other side of the table, and the table
turned out to be the same table.

## Evidence checklist (what's in your repo when you're finished)

- [ ] The trail map — every file, its claims, its questions
- [ ] The cross-examination with verdicts, including at least one DECIDED and one
      can't-know-from-here
- [ ] The audit memo, strengths included, fix-first argued
- [ ] The fix itself: branched, verified, committed, logged

## Going further (optional)

- **The rival auditor** (Lab 7's move, at full scale): fresh agent, cold — *"Audit this repo:
  where do its documents and its behaviour disagree?"* Diff its findings against your memo.
  What it caught and you missed is a gap in your eye; what you caught and it missed is your
  edge — name which finding needed *taste* rather than cross-referencing.
- **Audit yourself.** Run this lab's Part 2 against your own Lab 3 bill-splitter, months of
  labs later. Every DRIFTED you find in your own trail is future-you being saved from this
  lab's brief.
- **Swap with another learner** and audit each other's capstone-in-progress (Lab 12). Agree on
  the memo format first — that's what real audit standards are.

---

*Margin note — every earlier lab taught you to __write__ the trail; this one proves the trail
was always __for someone__: the stranger, the marker, the next contractor, future-you. That's
the quiet answer to "why document anything in the AI era" — not ceremony, but the only
technology ever invented that lets a decision outlive the person who made it.*
