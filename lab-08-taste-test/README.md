# Lab 8 — The Taste Test

> **Kills the belief that:** best is objective.
> **Builds the habit of:** critique as a deliverable.
> **Time:** ~90 minutes · **Needs:** the two [`brewcrew-a/`](brewcrew-a/) and
> [`brewcrew-b/`](brewcrew-b/) folders from this lab, your agent, and the
> [critique form](../template/CRITIQUE.md).

## The brief

The client hedged their bets and had two teams build the office coffee-run page. Both delivered.
Now the invoice is due:

> *"Two versions, one budget. Pick the one we ship, kill the other, and tell me why in writing —
> 'I like it' is not a reason I can take to the partners. Then get your pick ready to charge
> money for."*

Here's what makes this lab different from every lab before it: **both versions work.** Same
spec, same prices, same five checks (see [`CHECKS.md`](CHECKS.md)). Every tool you've built so
far — checks, verification, the folder — agrees they're equivalent. And they are obviously,
*viscerally* not. Deciding between them is the part of the job no machine does, and today it
stops being a vibe and becomes a document.

This is the lab the whole series exists for.

## Part 1 — Use them both, then trust nothing (15 min)

1. Open each version and run the **same errand** through it: order for Sam (flat white), Priya
   (large long black), and Jo (chai). Copy the summary. Try to add a drink with no name. Do it
   on your phone too.
2. Lab 7 reflex, quickly: `CHECKS.md` claims both versions pass all five checks. Verify a
   couple yourself — the money check and the empty-name check on each. (They do pass. But you
   checked, because a folder told you something and you're no longer that person.)

## Part 2 — The critique (35 min)

Fill in the [critique form](../template/CRITIQUE.md) **twice** — one per version, honestly, in
full sentences. Then write the verdict memo in `DECISIONS.md`, and hold it to the client's
standard — every claim anchored to a *moment you can point at*, not a feeling:

> ❌ "Version B is friendlier."
> ✅ "When I added a drink with no name, B asked 'who's this one for?' and I fixed it without
> feeling told off; A said ERROR: NAME REQUIRED and for a moment I was back at work."

The memo answers three things:

1. **Which ships, for whom.** Both versions are *right* for someone. A is built for the daily
   runner; B is built for the volunteered. Your verdict is really a claim about **who your
   users are** — say that claim out loud, because it's the actual decision hiding under the
   taste.
2. **What the winner costs you.** The loser is better at something — name it. (Speed? Warmth?
   Density?) A verdict that admits its price is one the partners can trust.
3. **The steal.** The single best thing from the losing version that the winner should take.
   Killing a product doesn't mean burying its best idea.

**The moment this lab exists for** usually arrives mid-memo: the checks can't help you, the
agent genuinely doesn't know, and your reasons — argued, specific, owned — *are* the
deliverable. Nothing upstream of you decides this.

## Part 3 — Direct the winner (30 min)

Take your critique's *"before I'd charge money for it"* list — top three items — plus the steal
from the loser, and direct the work in your own copy of the winning folder:

1. Make it a repo (template files in, per Lab 6 — this product just became yours).
2. One item at a time, Lab 2 style: what was wrong, what done means, fix, verify, commit.
3. Keep the five checks green throughout — taste work is no excuse for broken totals (Lab 5's
   PR habit if you're feeling professional).

## Evidence checklist (what's in your repo when you're finished)

- [ ] Two completed critique forms — one per version
- [ ] The verdict memo in `DECISIONS.md`: who ships, for whom, at what cost, plus the steal
- [ ] The winner improved: three critique items + one stolen idea, committed, checks green

## Going further (optional)

- **Taste isn't universal — prove it.** Show both versions to two people (your Lab 2 human
  owes you). Get their pick *and their reason* before revealing yours. A disagreement here
  isn't a problem — it's data about audiences, and it's why your memo had to name *whom* the
  product is for.
- **Read [`AUTHORING.md`](AUTHORING.md)** — the two taste briefs that produced these versions
  from one spec. Then the real exercise: write the taste brief for *your* products, and put its
  rules in your `AGENTS.md`.

---

*Margin note — generating candidates got cheap; choosing between them did not. What you
practised today — comparison across working alternatives, reasons anchored to moments, a
verdict that names its audience and admits its price — is what computer scientists call
__pattern recognition__ wearing its work clothes, and it's the skill that moved up the ladder
instead of dissolving. The next time someone says AI made taste obsolete, show them your memo.*
