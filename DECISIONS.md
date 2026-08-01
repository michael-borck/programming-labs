# Decisions — the series' own delta log

The series practises what it teaches: this file records what we chose, what we rejected, and why.
Format per entry: **what we decided · what we rejected · why**. Newest first.

## 2026-08-01 — Lab 4 guarantees its moment with a sabotage drill

Lab 4's "wait, what?" (a red ✗ catching a bug the learner's eyes missed) is produced by a drill:
the learner tells the agent to secretly break the arithmetic, then runs the checks.
**Rejected:** relying on the tip feature to introduce a regression naturally. **Why:** a natural
regression isn't guaranteed, and the lab's moment must be. The drill is honest (it's mutation
testing with its real name given), both outcomes teach — a catch proves the checklist works, an
escape exposes a missing check — and it hands learners a repeatable practice instead of a
one-off anecdote.

## 2026-08-01 — Setup lives inside Lab 1; there is no Lab 0

Account creation, agent install, and model access are the opening section of Lab 1.
**Rejected:** a separate Lab 0 / setup guide. **Why:** zero-prerequisite learners abandon at setup
friction; the first win (a live URL on their phone) must land in the same sitting as the setup
pain, or there is no second sitting. The lab also says out loud that setup is the worst half hour
of the series — honesty is cheaper than polish here.

## 2026-08-01 — Lab 3 built first, out of order

Built Lab 3 (*Say What You Mean*) before Labs 1–2. **Rejected:** building in sequence.
**Why:** Lab 3 is the smallest lab that exercises the series' three novel mechanics at once — the
spec, the Replication Test, and a paired toy — so it's the cheapest way to find out whether the
format works before authoring eleven more. It also needs no prior labs, so it doubles as a taster.

## 2026-08-01 — The toy simulates the agent; it never calls one

`three-interpretations` uses three pre-authored interpretations of one fixed brief, not a live
model. **Rejected:** calling an LLM from the toy. **Why:** the toys' load-bearing house rule is
single-file / no network / works from a USB stick in 2029. Pre-authored divergence also lets us
*curate* the ambiguity so the "wait, what?" moment is guaranteed, which a live model can't promise
in 90 seconds. The lab provides the live experience; the toy provides the guaranteed one.

## 2026-08-01 — Named tool: pi (pi.dev), stated as replaceable

Lab instructions name one CLI agent rather than staying tool-anonymous. **Rejected:** full tool
anonymity from day one. **Why:** zero-prerequisite learners need one golden path that definitely
works, not a comparison chart. The framing essay states in print that the tool is a placeholder and
the concepts transfer.

## 2026-08-01 — Series name: Speak Software

**Rejected:** *Spec, Then Steer*; *Direct, Don't Type*. **Why:** names the actual claim (natural
language is the interface; you are still the author), reads as an imperative like the sibling
series (*Assume Breach*, *Partner, Don't Police*), and survives tool churn.

## 2026-08-01 — Evidence model: spec → delta → critique, never transcripts

The graded/self-assessed artifacts are `SPEC.md`, `DECISIONS.md` + commits, and `CRITIQUE.md`.
**Rejected:** the earlier conversation-as-evidence model (interrogating AI answers in a chat log).
**Why:** autonomous agents make transcripts tool noise; the three chosen artifacts are exactly the
parts of the work that cannot be autonomous. The Replication Test makes the spec un-fakeable: it's
assessed by what it reproduces, not by how it reads.
