# Lab 4 — The Checklist It Can't Charm

> **Kills the belief that:** checking is re-reading.
> **Builds the habit of:** acceptance checks that run.
> **Time:** ~90 minutes · **Needs:** your Lab 3 repo (the bill splitter your spec produced) and
> its agent.

## The brief

The client from Lab 3 is back, and they've been using it:

> *"Someone's share came out weird — the cents didn't add up. Also, can it do tips now? And
> whatever you do — don't break what already works."*

Three requests. The third one is the hard one, and it's the one this lab is about. In Lab 2 you
checked fixes with your own eyes. Eyes don't scale: every change the agent makes from now on
could quietly break something you checked last week and won't think to re-check. You need a
checklist that re-checks *everything, every time, without you* — and can't be charmed by a
confident "all done!"

That's what programmers call **tests**. You won't write test code. You'll write the checklist in
plain language and make the agent automate it — then spend the rest of the lab learning why you
can now stop being nervous.

## Part 1 — Write the checklist (25 min)

Open your `SPEC.md` from Lab 3. Every *done means* bullet is about to become a check. A good
check has **concrete inputs and an exact expected outcome** — so a machine can run it a thousand
times and never need your opinion:

| Done means (spec language) | The check (machine language, still English) |
|---|---|
| Shares always sum to the exact total | Three people, $100.00: the three shares add up to exactly $100.00 |
| No lost cents | $100 split 3 ways: nobody pays a fraction of a cent, and the odd cent goes *somewhere* on purpose |
| Rubbish input handled politely | Total "one twenty": a polite message, never NaN |

Write five to eight of these at the top of a new file, `checks/CHECKS.md`. Then hand them over:

> Here are my acceptance checks in plain language. Automate each one as a test, keep the plain
> sentence next to its test so I can always see which is which, and tell me the one command that
> runs them all.

Run the command. Watch them pass. Green ticks, every spec promise, on demand, in seconds —
that's what checking is from now on. Commit (`checks/` and all).

One habit before moving on: **ask the agent to show you one check failing** (have it break the
check's input on purpose, run, then restore). A check you have never seen fail is itself
unchecked — you don't actually know it's wired to anything. Now you do.

## Part 2 — Tomorrow's checklist first (25 min)

Now the tip feature — but in the professional order: **checks first, feature second.**

1. Add the tip bullets to `SPEC.md` (*done means: a 10% tip on $100 for 3 people raises each
   share by exactly $3.33 or $3.34, and the grand total is exactly $110*... your rules, your
   call — deciding them *is* the feature).
2. Turn them into checks in `checks/CHECKS.md`, have the agent automate them, and run everything.
   The new checks **fail**. Good — they describe a product that doesn't exist yet. You've just
   written the finish line before the race.
3. Now direct the feature: *"Build tips. Done when every check passes — old ones and new."*
4. Run the full checklist. New checks green, and — this is the point — **the old ones still
   green**. The client's third request ("don't break what works") just got checked by machine,
   not by vibes.

Commit. If an old check *did* go red here, celebrate before you fix it: the checklist just paid
for itself on day one, and that's the fastest anyone learns this lesson.

## Part 3 — The saboteur drill (25 min)

You've seen the checklist pass. Time to find out if it can actually catch anything. Tell the
agent:

> Secretly change one small thing about the money arithmetic — a real bug a tired programmer
> might introduce. Don't tell me what you changed. Then say "done" the way you always do.

It will say "done" in the same confident, fluent voice it always uses. Yesterday that voice was
all you had. Today: run the checklist.

- **A red ✗.** There it is — **the moment this lab exists for**: the machine caught, in two
  seconds, a bug your eyes were never going to find. Read which plain-language sentence caught
  it. Have the agent reveal and revert the sabotage, run to green, and commit.
- **All green.** Quietly worse, and just as valuable: a bug walked straight through your
  checklist. Have the agent reveal what it changed, write the check that *would* have caught it,
  automate it, and run the drill again. Repeat until the saboteur can't get through.

Log a `DECISIONS.md` entry either way: what the sabotage was, which check caught it — or which
missing check you had to add. This drill has a professional name (*mutation testing*), and you
can rerun it any week you're feeling too comfortable.

## Evidence checklist (what's in your repo when you're finished)

- [ ] `checks/CHECKS.md` — plain-language checks, each sitting beside its automated test
- [ ] Commits showing the professional order: tip checks failing *before* the feature, green after
- [ ] The saboteur drill in `DECISIONS.md`: what changed, what caught it (or what you had to add)
- [ ] Tips live on your published product — and every old check still green

## Going further (optional)

- **The embarrassment question.** Ask: *"What inputs would embarrass the current checks — what's
  legal but unchecked?"* The answers are your checklist's blind spots, and interrogating them is
  free. Add the ones that scare you.
- **Check the checker.** Ask the agent to explain, line by line, how one automated test works —
  same interrogation you learned in Lab 1's reveal. It's just a program pressing your product's
  buttons very fast.

---

*Margin note — the old idea hiding in this lab: an acceptance check is an __algorithm__ — exact
inputs, exact expected output, repeatable by something with no judgement at all. Notice what you
kept and what you delegated: the machine re-runs the checklist; __you decide what's on it__.
Deciding that the odd cent must go somewhere on purpose is the human half of rigour, and no
amount of automation supplies it.*
