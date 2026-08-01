# Lab 2 — The Demo Illusion

> **Kills the belief that:** it works = it's done.
> **Builds the habit of:** defining done before admiring it.
> **Time:** ~90 minutes · **Needs:** your Lab 1 product and its repo, plus **one human who isn't
> you** — flatmate, colleague, family member. Borrow one now; you need them in Part 1.

## The brief

You, wearing the client hat, look at yesterday's demo and say the four words that have shipped a
thousand broken products:

> *"Great demo. Ship it Friday."*

Yesterday your product worked. Today you'll find out what "worked" was hiding: it worked *for
you*, *once*, used exactly the way you imagined it. A product is the version that survives
everyone else.

## Part 1 — The handoff (25 min)

Hand your Lab 1 URL to your human. Then follow the protocol — the protocol is the lab:

1. **Say nothing.** No introduction beyond "have a go at this". No explaining, no hover-helping,
   no "oh you have to—". Nothing.
2. **Watch. Write down what you see:**
   - where they hesitate, and for how long
   - what they press that you never would
   - what they type that you never would
   - the first moment their face does the confused thing
   - what they expected it to do that it doesn't
3. **Collect at least three failures.** A failure is anything that made the product worse than
   what you imagined — confusion counts, wrong answers count, "is it meant to do that?" counts.

If your human is being polite and everything "seems fine", hand them the **torture menu** and ask
them to pick three: *press the button with everything empty · type words where numbers go · paste
a whole paragraph in · try a negative number · try an absurdly big one · use it on your phone ·
refresh halfway through · press the back button and return.*

**The moment this lab exists for:** somewhere in the first 30 seconds, they will do something you
never imagined. Watch for it. The product hasn't changed since yesterday — what changed is that
your imagination stopped being the only user.

Afterwards, write the failure list into `DECISIONS.md` under a heading like *"What the handoff
found"* — dated, before any fixes. That before-picture is evidence you'll be glad you kept.

## Part 2 — Define done (20 min)

"It works" was never a definition. Write a real one.

Create a `SPEC.md` in the repo with a single section, **Done means**, and turn every failure from
Part 1 into a bullet **a stranger could check without asking you anything**:

| What happened | Done means |
|---|---|
| Typed "twelve", got `NaN` | Any input that isn't a number gets a polite message, never garbage |
| Squinted at it on their phone | Readable and usable on a phone held in one hand |
| Pressed the button with nothing in it | Empty input explains what's needed, nothing breaks |

Vague words — *nice, clean, intuitive, user-friendly* — are bugs in this file. If you can't say
how a stranger would check it, it's not done-means yet; keep sharpening.

(Why so little structure? Because this file gets its full treatment next lab, where it becomes
the most important file in this whole series. Today it's three-to-six honest bullets.)

## Part 3 — Direct the fixes (35 min)

Now run your department. One failure at a time, tell the agent — steal this shape:

> A tester <did the thing> and <what went wrong>. Done means: <the bullet from SPEC.md>. Fix it,
> and then tell me exactly how to check it myself.

Two rules while you work:

1. **Check every fix yourself, on the live thing, before moving on.** The agent will say "fixed"
   in a confident, fluent voice whether or not it's true. Get used to demanding the how-to-check —
   this instinct gets its own lab (Lab 7).
2. **One commit per verified fix.** Ask the agent to commit each fix after you've verified it,
   with a message saying what changed, and push. Watch the live URL update. Your repo's history
   is turning into a story a stranger could read: *found, defined, fixed, proven.*

If there's time, hand the URL back to your human for a rematch.

## Evidence checklist (what's in your repo when you're finished)

- [ ] The dated failure list in `DECISIONS.md`, written before any fixes
- [ ] `SPEC.md` with your first done-means bullets
- [ ] One pushed commit per verified fix — the live URL reflects them all
- [ ] A closing `DECISIONS.md` entry: which failure surprised you most, and what you did about it

## Going further (optional)

- **A second human, fresh.** How many *new* failures does a different stranger find? (This number
  is why real products have testing teams.)
- **The gap ledger.** Estimate honestly: of the total effort so far — Lab 1's one-shot plus
  today — what fraction was the one-shot? Keep that number somewhere. It's the demo illusion,
  quantified, and Lab 9 will make it worse.

---

*Margin note — the thesis, firsthand: the distance you just crossed — from "works when I use it"
to "survives a stranger" — is the gap between the impressive one-shot demos you've seen online
and anything a person would actually use or pay for. Closing that gap took no new code from you:
it took watching, judging, defining, and directing. This series' bet is that the gap is where the
job now lives. You just did a day of it.*
