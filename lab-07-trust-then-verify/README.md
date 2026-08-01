# Lab 7 — Trust, Then Verify

> **Kills the belief that:** it sounds right, so it is right.
> **Builds the habit of:** demanding evidence of done.
> **Time:** ~90 minutes · **Needs:** the [`handoff-tiptop/`](handoff-tiptop/) folder from this
> lab, and your agent. (Don't open `FLAW-SPEC-SPOILERS.md` — the name is not a joke.)

**Warm up (4 minutes):** play
[`confidence-dial`](https://michael-borck.github.io/programming-toys/confidence-dial/) — grade
eight equally confident claims and find out what fluency is worth — and revisit
[`context-porthole`](https://michael-borck.github.io/programming-toys/context-porthole/) if you
need reminding what the agent can't know.

## The brief

Another team's agent built a tip calculator, and the handoff is immaculate: versioned README,
spec, decision log with dates, a checklist that runs. The client, however:

> *"Lovely app. Except someone's share keeps coming out a cent short, and my colleague typed
> 'ten' into it and got a screen full of gibberish. Your predecessor swore both were fixed."*

The folder says fixed. The client says broken. Copy `handoff-tiptop/` into a fresh folder, make
it a repo, and find out who's right — without trusting a single sentence you inherit.

## Part 1 — The claim ledger (20 min)

Before touching anything, inventory what you've been told. Read the handoff's `README.md`,
`SPEC.md`, `DECISIONS.md` and `checks/CHECKS.md`, and list every checkable claim in your own
`DECISIONS.md` under *"Claims inherited"* — one line each, with where it was made:

> Shares sum to the exact grand total (README, DECISIONS 28 Jul, check 1) · non-numeric input
> handled politely (README, DECISIONS 28 Jul) · default tip 10% (SPEC, check 5) · works on
> phones (README) · all five checks pass (README, CHECKS.md) …

Notice, while you write, how *credible* it all reads: dated entries, version numbers, a named
check per fix. You've been taught to write exactly this way. That's the trap this lab is built
around — the format carries no truth. Only checking does.

## Part 2 — Verify everything, trust nothing (35 min)

Now work the ledger, claim by claim. Verdicts: **TRUE** (you saw it), **FALSE** (you saw it
fail), or **UNVERIFIED** (you couldn't check it here). Three moves:

1. **Run the product.** Open `index.html`. Reproduce the client's two complaints first — $100,
   0% tip, 3 people; then the word "ten" as a total. Do the shares sum? Is the message polite?
   Believe your eyes over every document in the folder.
2. **Run the checks.** Ask the agent to run `checks/checks.js` and — five green ticks. All
   passing, exactly as promised. But you just *watched* the product lose a cent. A green tick
   and a broken product cannot both be right, so:
3. **Interrogate the green tick.** Ask the agent: *"Show me exactly what check 1 does — walk me
   through it."*

**The moment this lab exists for:** check 1 checks nothing. It's hard-coded to pass, with a
comment saying the computation was "skipped for speed" — and `DECISIONS.md` cites it as
permanent proof. Confident, fluent, specific, dated… and wrong. Fluency was never evidence. Now
finish the ledger with that lesson in hand — including the claims that turn out to be **TRUE**
(the default tip, the single file, the tip maths). Verification isn't paranoia; blanket doubt is
as lazy as blanket trust. The point is to *know which is which*.

## Part 3 — The incident report, then the fix (30 min)

1. Write the incident up in `DECISIONS.md`, one entry per false claim, in the form you'll use
   forever: **the claim → where it was made → the check you ran → the verdict.** This format is
   the lab's real product; you'll use it every time an agent tells you something is done.
2. Now fix TipTop properly, using every habit you own: write *real* checks for the two false
   claims first (Lab 4 — and make each one fail before the fix, so you know it's wired to
   something), then direct the fixes, run everything green, commit with messages that name their
   checks.
3. Replace the sham: delete check 1's hard-coded `true` and make it compute. The repo you hand
   forward should be one where the paper trail and the product agree — because the next person
   to inherit it is Lab 11's auditor, and it might be you.

## Evidence checklist (what's in your repo when you're finished)

- [ ] The claim ledger: every inherited claim, its source, its check, its verdict
- [ ] Incident entries for both false claims — including how a green tick lied
- [ ] Real, failing-then-passing checks replacing the sham and covering the input claim
- [ ] TipTop fixed: shares sum exactly, words get a polite message, all checks honestly green

## Going further (optional)

- **The rival auditor.** Fresh agent, fresh session: *"Audit this repo. List every claim its
  documents make that the code doesn't back up."* Compare its findings with your ledger — who
  missed what? (Two verifiers beat one; remember that in Lab 11.)
- **The deep flaw.** Look closely at checks 2–4: what do they actually test — the app, or a
  copy of the app's maths living inside the checks file? Ask your agent when a check like that
  would lie to you. If you find this one, you've outgrown the lab.
- **Turn it on yourself.** Run Part 1's claim ledger against your *own* bill-splitter repo.
  Every claim your DECISIONS.md makes — can you still prove it today?

---

*Margin note — the sibling series to this one teaches security with the words __assume
breach__: design as if the wall has already failed. This lab is the same posture aimed at your
own tooling — assume the report is wrong until a check says otherwise. The claim → check →
verdict reflex is what computer scientists call __debugging__, and notice it never once required
reading code: it required refusing to grade prose.*
