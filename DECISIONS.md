# Decisions — the series' own delta log

The series practises what it teaches: this file records what we chose, what we rejected, and why.
Format per entry: **what we decided · what we rejected · why**. Newest first.

## 2026-08-03 — The teaching guide went private; the resources stayed public

`TEACHING.md` moved to the private `programming-labs-staff` repo (with the exemplars scaffold);
`RESOURCES.md` and the spoiler files stay here. **Rejected:** keeping the facilitation guide
public, and conversely moving the spoilers or resources private. **Why:** the guide's audience
was always staff, and its per-lab watch-fors name exactly the designed moments ("let the
saboteur's escape happen") that a completionist self-paced learner shouldn't read in advance.
The spoilers, by contrast, are load-bearing for learners — the score-yourself mechanic in Labs
7/9/11 requires them — and RESOURCES is learner-facing gear guidance. The public README keeps
the marking model itself: how you'll be assessed is announced policy, not a secret.

## 2026-08-01 — Grades anchor in a secured lane; the portfolio is a gate, not the grade

TEACHING.md's assessment design: the twelve-repo portfolio (AI unbounded) is a completion gate,
and the grade lives in live, identity-attached instruments — a five-minute open-book viva
against the student's own repo, a timed invigilated spec sprint *with* AI access, and a live
steer on a provided repo. **Rejected:** grading reflections or the portfolio itself as primary
evidence, and AI-detection tooling. **Why:** spec/delta/critique proves the artifacts can't be
autonomous, not that this student authored them — a frontier model with context can stage all
of it, including the reflection. The series' own Lab 7 lesson applies to markers: fluency is
never evidence; don't grade what you can't interrogate. AI-allowed timed assessment is valid
here precisely because directing AI is the examined skill — an open-book exam where the book is
the discipline.

## 2026-08-01 — One facilitation page, not twelve guides

`TEACHING.md` is a single page: cohort logistics, one session shape, the restraint rules, and a
one-line watch-for per lab. **Rejected:** per-lab facilitation guides. **Why:** the briefs
already self-facilitate — a per-lab guide would either duplicate them or, worse, accumulate the
instructor's answers, and the staff knowledge that genuinely exists nowhere else (when *not* to
help, what never to demo, where each lab's designed failure must be allowed to happen) fits on
one page. If a watch-for ever outgrows its line, that's a signal to fix the lab, not to grow
the guide.

## 2026-08-01 — Labs stay GitHub-rendered markdown; the landing page is the only HTML

The briefs are read on GitHub, not on a rendered site. **Rejected:** publishing the labs as
book-style HTML pages. **Why:** "the repo is the GUI" is curriculum, not branding — from Lab 5
onward diffs, PRs, issues and history *are* lab content, and every evidence checklist lives in a
repo, so reading the briefs where the work happens is deliberate acclimatisation to the one UI
the series requires. A second surface would be prettier and teach less.

## 2026-08-01 — Answer keys: spoiler files public, exemplar judgement private

The plant-based labs (7, 9, 11) carry their keys openly as marked spoiler files — score-yourself
is the self-paced model, and knowing the plants after the fact is harmless. **Rejected:**
publishing worked exemplars (memos, ledgers, critiques). **Why:** most labs have no answer — the
Replication Test is personal, and Labs 8–9 grade argued judgement — so a published exemplar
becomes the answer learners converge on, which is the one failure mode a taste curriculum can't
afford. A private `programming-labs-staff` exemplars repo (the security-labs-staff pattern) goes
on the roadmap for when a cohort adopts.

## 2026-08-01 — External resources live in one file, not scattered through labs

RESOURCES.md holds environments, model guidance, costs, and the borrowed-toys shelf; the labs
link nothing external except their paired toy. **Rejected:** per-lab resource sections.
**Why:** link-rot gets one place to bite, the labs stay lean, and the interactive-only house
rule ("the labs' reading is the labs") keeps the shelf from becoming homework.

## 2026-08-01 — StallBoard's trail is honest but incomplete; TipTop's lies

Lab 11's provided repo fails differently from Lab 7's on purpose: nothing in StallBoard's trail
is false — the modes are stale (spec never updated after a documented rename), undocumented (an
emoji the house rules forbid, with no entry to settle which is right), honestly gapped (a
disabled check annotated "ran out of contract"), and *decided* (the .95 prices that look like a
bug until a dated entry answers the exact objection). **Rejected:** reusing Lab 7's lying-trail
design. **Why:** claim-testing and gap-finding are different skills, and the audit lab's moment
— a file defending a "defect" across time — requires a trail the auditor comes to trust. The
memo must also log strengths and say "can't know from here" where the trail can't settle a
conflict; an audit that only lists faults teaches cynicism with a clipboard.

## 2026-08-01 — Lab 8's two versions are both right, for different people

BrewCrew A (the console: dense, terse, keyboard-first) and B (the invitation: warm, roomy, one
decision at a time) were built from one product spec plus two opposite taste briefs, and both
pass the same five checks. **Rejected:** making one version objectively better. **Why:** if one
version is simply better, the critique has a right answer and taste collapses back into
correctness — the lab's verdict must force a claim about *audience* ("who are our users?"), a
named cost, and a steal from the loser. The taste briefs ship openly in `AUTHORING.md`; there's
nothing to spoil when the difference is the visible point. Lab 9's Bookable, by contrast, hides
its rough-list in `ROUGH-SPEC-SPOILERS.md` because finding the roughness is that lab's skill.

## 2026-08-01 — TipTop's paper trail lies in three distinct ways

Lab 7's provided repo carries three claim types: false with a sham check (the lost-cent "fix",
backed by a hard-coded green tick), false with no check at all (the polite-input claim), and
true-and-verifiable (default tip, single file, tip maths). **Rejected:** making every claim
false. **Why:** if everything lies, blanket paranoia scores perfectly and the learner practises
cynicism instead of verification. The lab's skill is sorting — TRUE / FALSE / UNVERIFIED — and
that needs honest claims in the mix. The flaw spec ships in the lab folder as
`FLAW-SPEC-SPOILERS.md` (dogfood rule: provided repos are built from specs, and say so).

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
