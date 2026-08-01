# Lab 9 — The Last 20%

> **Kills the belief that:** the hard part is the first 80%.
> **Builds the habit of:** directing polish.
> **Time:** ~90 minutes · **Needs:** the [`bookable/`](bookable/) folder from this lab and your
> agent. (Leave `ROUGH-SPEC-SPOILERS.md` alone until you're done — finding the roughness *is*
> the lab.)

**Warm up (2 minutes):** play
[`tiny-tweak`](https://michael-borck.github.io/programming-toys/tiny-tweak/) — guess how big six
"tiny" changes really are, and get comfortable being wrong.

## The brief

A tutoring agency had an agent build their booking form. It works — genuinely: every field
functions, every validation fires, submissions succeed. The owner's verdict:

> *"It's basically done. Just make it feel right. Shouldn't take long, yeah?"*

Every practitioner in history just smiled. Copy `bookable/` into a fresh repo and find out why.

## Part 1 — The walk-through (20 min)

No fixing yet. Use the form as three different people, slowly:

- **The parent in a hurry** — booking maths for their kid between school pickup and dinner.
- **The grandparent** — less software-fluent, easily convinced they broke something.
- **The owner** — seeing their business's face through a customer's eyes.

Every time something makes you hesitate, wince, squint, or trust the thing a little less, add a
row to a **polish ledger** in `DECISIONS.md`:

| # | What feels off | Felt by | Guess: S/M/L |
|---|---|---|---|
| 1 | "SUBMIT OK: true" is how a database celebrates | everyone | S |

Target: **ten rows minimum.** Nothing here is a bug — the Lab 2 voice in your head saying "but
it *works*" is exactly the belief this lab is killing. Fill the size-guess column honestly; it
gets graded later.

## Part 2 — Direct the polish (50 min)

1. **Guard rails first** (Lab 4 reflex, 5 minutes): before touching anything cosmetic, have the
   agent write three checks for what polish must never break — a valid booking still succeeds,
   every empty required field still gets caught, blank notes never print "undefined"... your
   call. Watch them pass.
2. Now work the ledger, highest-impact first, **one row per run**. Direct with taste language
   plus a done-means sentence:

   > The confirmation reads like a database log. Done means: a sentence a nervous parent
   > exhales at — what they booked, when, in human words, and what happens next. Keep the
   > reference code, but make it the footnote, not the headline.

3. After each fix: verify by *feel* (open it, be the parent again) **and** by check, commit,
   then complete the ledger row: **rounds it took · lines changed** (ask the agent —
   *"how many lines did that touch?"*).
4. Watch for the trap the toy warned you about: the fix that looked S and went L. Humanising
   the times drags in the slot data and the confirmation; fixing the grey button forces you to
   finally *choose an accent colour*, which reopens the two-blues problem. When it happens,
   note it in the ledger — that's not failure, that's the lab working.

## Part 3 — The reckoning (20 min)

1. Put before and after side by side (the original `bookable/` still has the before). Screenshot
   both into `evidence/`.
2. Total the ledger: **N rows, R rounds, X lines changed** — for a product that was "basically
   done." Write the closing `DECISIONS.md` entry: your worst size-guess and what it taught you,
   plus the Lab 2 gap-ledger number, revised: what fraction of this product's total effort was
   the one-shot, really?
3. Read the before once more. Notice you can't unsee the roughness now. That's not the product
   having changed — that's you, one lab further up the taste curve.

## Evidence checklist (what's in your repo when you're finished)

- [ ] The polish ledger: 10+ rows with felt-by, size guesses, rounds, and lines-changed filled in
- [ ] Three guard-rail checks, green before and after every fix
- [ ] One commit per ledger row, messages naming what got fixed
- [ ] Before/after screenshots in `evidence/`, and the reckoning entry with your revised gap number

## Going further (optional)

- **The invisibility test.** Hand the polished version to your Lab 2 human with no context. If
  they use it without comment, you succeeded — polish is invisible when present and glaring
  when absent, which is why clients under-budget for it forever.
- **Now read [`ROUGH-SPEC-SPOILERS.md`](ROUGH-SPEC-SPOILERS.md)** and score yourself: how many
  of the planted dozen did your ledger catch? Anything you missed, you now own the eyes for.
  Anything you caught that *isn't* on the list — congratulations, that one's genuinely yours.

---

*Margin note — the industry number for this lab is "the last 20% takes 80% of the time," and
the reason is now in your ledger: the first 80% was one prompt; the last 20% was __decisions__ —
each small, each yours, none derivable from the spec. This is the tweaking the series' opening
essay bet the job was moving to. You've now done a full day of it, with receipts.*
