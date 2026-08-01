# Teaching Speak Software — the one-page facilitation guide

The labs are written to self-facilitate: every brief is complete, the spoiler files double as
marking notes, [`RESOURCES.md`](RESOURCES.md) covers gear, and the README covers assessment.
There are deliberately no per-lab facilitation guides — your job in the room is **logistics and
restraint**, and one page covers both.

## Before the term

- **Do Labs 1, 3, and 8 yourself, honestly** — including the Replication Test failing on your
  first spec. You can't facilitate the humility if you skipped it.
- **Solve money before session one:** per-student API keys with spend caps, or a subscription
  decision — see RESOURCES. Set caps before the first surprise, not after.
- **Pick the environment path** (own machines vs Codespaces) and test it on a locked-down
  campus machine, not your laptop.
- **Front-load Lab 1's account creation** as pre-work. The worst half hour of the series must
  not eat the sitting where the phone moment lives.

## The session shape (90 minutes, any lab)

1. **Toy on the projector, cold** (5 min) — `?present` mode, a volunteer driving, you silent.
   Let the misconception break publicly before anyone reads anything.
2. **Work** (75 min) — students on their own repos; you circulate with questions, not answers.
3. **Deltas out loud** (10 min) — three volunteers read their newest `DECISIONS.md` entry.
   This normalises the series' deepest habit faster than any instruction.

## The restraint rules (the part that needs a page)

- **Never demo your solution.** Not your spec, not your memo, not your pick in Lab 8. A taste
  curriculum dies the moment the room knows what the instructor would do — published exemplar
  judgement becomes the answer everyone converges on (this is also why the staff exemplars repo
  is private — see DECISIONS).
- **Unstick with the lab's own prompts.** Every lab carries steal-this prompts; point at them
  rather than solving. The series' fallback: *"what would make that claim false?"* and *"fix
  the folder, not the chat."*
- **Let the designed failures happen.** The wreck drill's fear, the saboteur's escape, three
  divergent bill splitters, a spec failing replication — these are the curriculum arriving.
  Rescue kills the lab.

## Per-lab watch-fors (one line each — everything else is in the brief)

| Lab | Watch for |
|---|---|
| 1 | Setup bleed — accounts as pre-work, or the URL-on-phone moment slips to week two |
| 2 | "Needs a human" — pair students; they hand off to each other, both directions |
| 3 | Steering mid-run in Part 1 — enforce "whatever you think is best," it hurts on purpose |
| 4 | Checks written after the feature — insist the tip checks fail first, or Part 2 taught nothing |
| 5 | Pre-assuring the wreck drill "will be fine" — the fear is the point; let main save them |
| 6 | Stale sessions faking amnesia — the untaught run needs a genuinely fresh agent and bare folder |
| 7 | Hinting where the lie is — the green-ticks-vs-broken-product contradiction must do the work |
| 8 | Your face — express zero preference until every memo is committed |
| 9 | Ledger sprawl — timebox Part 2 rows; polish expands to fill any container |
| 10 | Parallelising — hold WIP = 1; the sequencing surprises are where the learning lives |
| 11 | Renovating — audit-don't-renovate is the discipline; one fix, after the memo |
| 12 | Scope — challenge every plan to halve; "someone specific" must be a name they can text |

## Marking, in one line

Re-run their specs (the Replication Test *is* the instrument), read their deltas against the
commits, argue with their critiques — details in the [README](README.md#course-mapping); the
spoiler files in labs 7, 9, and 11 are your marking notes for the planted material.

## Assessment that survives AI (for unit coordinators)

Start from an uncomfortable symmetry: **Lab 7's lesson applies to markers.** A reflection, a
decision log, even a twelve-repo portfolio with a plausible commit history — all of it is
fluent prose and stageable theatre to a frontier model with enough context. Fluency was never
evidence when the agent reported to the student, and it isn't evidence when the student reports
to you. Don't grade what you can't interrogate. (And don't reach for AI-detection tools — they
misfire both ways and teach students the game is beating a classifier.)

The workable design is **two lanes**:

- **The open lane — the portfolio.** All twelve repos, AI unbounded, exactly as the labs
  prescribe. This is where learning happens and formative feedback lives, and it's a *gate*
  (complete / not complete), not the grade. Don't arms-race it: a coherent faked portfolio
  costs about as much effort as a real one, which is precisely enough deterrence.
- **The secured lane — live, identity-attached, and worth most of the grade.** Anything
  synchronous where the person in front of you performs the skill. Three instruments that fit
  this series:

**1. The five-minute viva against their own repo** (recommended; the highest signal per staff
minute). Repo open on their screen, you pick the targets, they drive:

> *"Open your `DECISIONS.md` — this entry, February 12th, you rejected the agent's sign-up
> screen. What did it look like? What would have broken if you'd kept it?"* · *"This commit
> message says a check caught a regression — show me the check."* · *"Your capstone spec —
> which line would you delete first, and what breaks?"*

A student who did the work answers with their hands before their mouth; a student who
outsourced it navigates their "own" repo like a stranger (you've marked Lab 11 — you know
exactly what that looks like). Score three things, 0–2 each: **navigation** (finds things
without searching), **the why** (explains a decision including the rejected alternative),
**the counterfactual** (reasons about a change they didn't make). It's open-book by design —
this examines ownership, not memory. At scale: viva a random 25–30% and announce that policy in
week one; deterrence does the rest.

**2. The live spec sprint** — your timed-with-AI instinct, endorsed, because when directing AI
*is* the skill, an AI-allowed invigilated assessment is simply an open-book exam where the book
is the discipline. Lab machines, 50 minutes, a **novel** client brief (write a fresh one each
term — a BrewCrew-sized product they haven't seen), full agent access, and the deliverables are
the series' artifacts produced under your eyes: a spec, a working slice, a delta log with at
least one real override. Mark it the series' way — replication-test the specs afterwards. Time
pressure does the authentication: you cannot outsource judgement you must exercise in the room.

**3. The live steer** (variant, pairs with the sprint across semesters): hand them a provided
repo in the invigilated session — a TipTop-style product where the client says something's
wrong — 30 minutes to find it, fix it, and *prove* it, agent in hand. This examines Labs 4/7/11
as performance instead of prose. The spoiler-file pattern gives you a fresh one each term for
an evening's authoring.

**Weighting that follows from all this:** portfolio as a completion gate, secured lane carries
the grade (e.g. sprint 40–50%, viva 25–30%, capstone-with-viva the rest). Commit-history
forensics (work spread over weeks vs. one bulk push) is a smoke detector worth glancing at,
never a lock. And the peer audit (Lab 11's swap, run live in class) makes a fine fourth
instrument once a cohort trusts each other — both sides get assessed, and interactivity is its
own invigilation.
