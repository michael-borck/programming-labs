# Lab 5 — The Flight Recorder

> **Kills the belief that:** one wrong move ruins it.
> **Builds the habit of:** small commits, fearless branches.
> **Time:** ~90 minutes · **Needs:** your bill-splitter repo (Labs 3–4) and its agent.

## The brief

The client has seen a competitor's app and wants yours to *feel* like that:

> *"Make it feel premium — new look, new layout, the works. But if the redesign turns out ugly,
> Friday's version had better still exist. No, I don't know what premium means. You'll know it
> when you see it."*

A risky, taste-heavy change with an explicit safety demand. The nervous version of you would ask
the agent to "be careful." The professional version arranges things so that **carefulness doesn't
matter** — so the working product survives anything, including a total disaster. That
arrangement has been recording your project since Lab 1. Today you learn to fly it.

## Part 1 — The recorder was always on (20 min)

Open your repo on github.com and click the commit count (top of the file list). That list is
every snapshot ever taken of your project — your flight recorder. Notice it already tells a
story a stranger could follow: Lab 2's *found → defined → fixed → proven*, Lab 4's checks going
in, the saboteur caught.

1. Click any commit from Lab 2. What you're looking at is a **diff** — the change, and nothing
   but the change: red lines out, green lines in. This is the single most information-dense page
   in your whole workflow, and from today it's where you *see* the code. You don't need to
   understand the lines to read what changed, how much, and where.
2. Pick one green line and ask your agent: *"this line was added in a commit last week — what
   does it do?"* Same interrogation as Lab 1's reveal, now aimed at history.
3. Time-travel: ask the agent — *"show me the project exactly as it was before tips existed,
   without changing anything."* Look at it. Then come back. Nothing was risked; the recorder
   holds every version you've ever had, forever.

## Part 2 — The parallel universe (30 min)

Now the redesign — on a **branch**: a parallel copy of the project where anything can happen
while `main` (the version at your live URL) stays untouched.

1. Tell the agent: *"Create a branch called `premium-redesign` and do the client's redesign
   there. Don't touch main."*
2. While it works, keep one habit from earlier labs running: **small commits** — ask it to
   commit each coherent step ("new palette", "new layout", "new type"), not one giant "redesign"
   blob. Small commits are what make the recorder readable later.
3. When it's done, look at both universes: ask the agent to show you the branch version, then
   main. Both exist, whole, at once. The client's impossible demand — *change everything AND
   change nothing* — turns out to be a normal Tuesday.
4. Judge the redesign the professional way — open a **pull request** on GitHub: ask the agent to
   open one from `premium-redesign` to `main`. The PR page shows every commit and the entire
   diff in one place. Read it. Run the Lab 4 checklist on the branch (*"run the checks on this
   branch"*) — premium is no excuse for broken arithmetic.
5. Decide. Merge if it's better; close it unmerged if it isn't — a discarded experiment that
   cost nothing is a *good* outcome, and the branch keeps existing either way. Log the call in
   `DECISIONS.md`: what you kept, what you rejected, and your actual reasons. That's "you'll
   know it when you see it" turned into a record.

## Part 3 — The wreck (25 min)

You've been polite with the safety net. Time to load-test it — by arranging the worst day of
your project's life, on purpose.

1. Tell the agent: *"Create a branch called `wreck-it` and destroy the project on it. Delete
   files, scramble what's left, make it unrunnable. Go too far."* Let it. Look at the wreckage —
   the product is *gone*.
2. Now: *"Take me back to main."*

**The moment this lab exists for:** everything is there. Perfect, whole, live URL still serving,
checks still green. Total destruction, total recovery, one command — and not because you were
careful. Because the system makes carefulness unnecessary.

3. Push the `wreck-it` branch and **leave it in the repo forever**. It's the trophy: proof you
   watched everything burn and lost nothing. Anyone auditing your repo (Lab 11 is coming) will
   find it and know exactly what you understood the day you made it.
4. Then the everyday version of the same magic, because deletions rarely announce themselves:
   ask the agent to delete one real file *on main*, commit, then — *"that file mattered; bring
   it back from history."* Watch it return. The recorder holds deleted things too.

## Wrap — make fearlessness the house rule (5 min)

You now hold the two rules that make every future lab cheaper. Put them in `AGENTS.md` so
they're standing policy, not memory:

```
## Always
- Commit after every verified change — small commits, plain messages saying what changed.
- Risky or experimental work happens on a branch, never on main.
```

(Why the agent keeps obeying files like this one is Lab 6 — next.)

## Evidence checklist (what's in your repo when you're finished)

- [ ] A pull request — merged or deliberately closed — with your verdict logged in `DECISIONS.md`
- [ ] The `wreck-it` branch, pushed, permanent
- [ ] The deleted-and-recovered file, back on main, with both commits in the history
- [ ] The two new rules in `AGENTS.md`

## Going further (optional)

- **Archaeology.** Find the exact commit where a Lab 4 check first went from red to green,
  using only the GitHub history page. If you can't, your commit messages need work — which is
  worth knowing now.
- **Two universes at once.** Ask the agent to try *two* competing redesigns on two branches and
  open both PRs. Reading two diffs against the same main is the first exercise of Lab 8's
  skill — choosing between working versions.

---

*Margin note — courage turns out to be a property of the system, not the person. The
experiments a professional is "brave" enough to try are exactly the ones their recorder makes
free to lose. Cheap, reversible experiments are how you'll explore every product from here on —
so the flight recorder isn't admin overhead; it's what buys back your nerve.*
