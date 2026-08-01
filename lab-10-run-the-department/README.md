# Lab 10 — Run the Department

> **Kills the belief that:** big things are built in one go.
> **Builds the habit of:** decomposition into issues.
> **Time:** ~90 minutes (comfortably splits across two sittings at the Part 2 boundary) ·
> **Needs:** your polished Bookable repo from Lab 9, on GitHub, and your agent.

## The brief

The tutoring agency loved the polish. So they've come back with a bag of money and a paragraph —
and real briefs arrive exactly like this, as a paragraph:

> *"We want the real thing now. Parents should see actual available times across the week, not
> five hard-coded slots. We need to see the requests coming in on our end. Parents should be
> able to cancel or change a booking with that reference code you gave them. And they should
> get something they can keep — print it, or add it to their calendar. Oh, and everything that
> works today keeps working, obviously."*

Four features and a warranty, one paragraph. Try to hold it all in your head and you'll feel
the belief this lab kills: **nobody builds this in one go** — not you, not the agent, not a
team of twelve. The professional move is to turn the paragraph into *small, separately
finishable, separately checkable pieces* — and then run them like a department.

## Part 1 — Decompose (25 min)

1. Turn the paragraph into **GitHub issues** on your Bookable repo — aim for 6 to 9. Rules for
   a good issue (they should feel familiar — an issue is a small spec, and you've been writing
   specs since Lab 3):
   - **One outcome per issue**, sized so one agent run plus one review can finish it. "The
     admin view" is a feature; *"admin page lists stored requests, newest first"* is an issue.
   - **Done-means bullets in every issue** — a stranger (your agent is one, every session)
     could check each without asking you anything.
   - **A warranty line where it matters**: which existing checks must stay green.
2. Sequence them: which issues block which? (Cancellation needs stored requests to exist;
   the calendar changes what a "slot" even is — does it block the confirmation work, or not?)
   Number the order in each issue's title. Deciding this *is* the work — the agent can propose
   a sequence, but you sign it.
3. Mark the two issues you'd **cut first** if time runs out, and say so in the issue. Scope is
   a decision, not a hope — cutting on purpose beats finishing by accident.
4. Ask the agent to red-team the plan before you start: *"Here are my issues for this brief.
   What did I miss, what's mis-sized, what's mis-ordered?"* Adjust, then log the plan's shape
   in `DECISIONS.md`.

A note on the brief's edges: "see the requests on our end" and "add to calendar" have real
versions that need servers and email. Yours is a front-end product — so decide the honest
smaller version (stored-in-this-browser admin list? a downloadable calendar file?) and *write
the boundary into the issue*. Naming what you're not building is Lab 3's oldest habit.

## Part 2 — Execute (45 min, or a second sitting)

Now run the board, **one issue at a time, in order**:

1. For each issue: branch → hand the agent *the issue text itself* (it's a spec — if the agent
   needs facts the issue doesn't hold, that's a gap to fix in the issue, not the chat) → checks
   on the branch → PR → **read the diff** (Lab 5 skill, now routine) → merge → close the issue
   with a one-line comment on what actually happened.
2. Keep **one issue in flight at a time.** The temptation to parallelise is real and premature —
   sequencing surprises (the calendar issue changing what "slot" means everywhere) is where
   this lab's learning lives.
3. When an issue goes sideways — too big, wrongly ordered, blocked by something you didn't
   see — don't muscle through: **split it, resequence, note it.** Plans are drafts. The board
   is the truth.

**The moment this lab exists for:** somewhere around the fourth merge, you'll look at the
board — issues draining, PRs stacking, checks green, live product growing features — and
recognise the shape. This is what a software team looks like from the manager's chair. You just
ran one. Its engineers happened to be the same tireless intern, over and over.

## Part 3 — The retro (20 min)

Close the loop the way real departments do, in `DECISIONS.md`:

- **Plan vs reality.** Paste the issue list *as first written* next to what actually got built
  and in what order. Which issues split? Which swapped? Which got cut, and was the cut the
  right one?
- **The sizing report.** Which issue was most mis-sized, and what did the toy from Lab 9
  (`tiny-tweak`) predict about exactly that miss?
- **The one sentence** you'd put in your next brief-decomposition that this one taught you.

## Evidence checklist (what's in your repo when you're finished)

- [ ] The issues, written before any build — done-means bullets, sequence numbers, cut-first marks
- [ ] One merged PR per finished issue, diffs reviewed, existing checks green throughout
- [ ] The features live on your published Bookable
- [ ] The retro entry: plan vs reality, the sizing report, the one sentence

## Going further (optional)

- **The handoff test, at scale.** Fresh agent, fresh session: *"Read this repo and its closed
  issues. What was built recently, in what order, and why?"* If the answer reads like your
  retro, your issues weren't just plans — they became the project's memory (Lab 11 will make
  someone grateful for exactly this).
- **Parallel, for real this time.** Pick two genuinely independent leftover issues and run them
  on two branches at once, then merge both. Feel where the independence claim gets tested at
  merge time — that feeling is why WIP limits exist.

---

*Margin note — the paragraph-to-issues move is __decomposition__, computational thinking's
crown jewel, and notice where the sequence/selection/repetition of classic programming went:
into the plan. "Do the storage issue, then if the calendar lands, rework the slots, repeat
per issue until the board drains" — that's a program. You wrote it in a GitHub issue list, and
the processor that executed it was a department of one.*
