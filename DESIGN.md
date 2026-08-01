# Series Design — Programming in the Natural-Language Era

> Working title candidates (house style: imperative pair, like *Partner, Don't Police*):
>
> 1. **Speak Software** — natural language is the interface; you are still the author. *(recommended)*
> 2. **Spec, Then Steer** — the two verbs the whole series teaches.
> 3. **Direct, Don't Type** — provocative, but risks implying typing is beneath us.
>
> Narrative frame used throughout: *you have just been handed an engineering department of
> one — a brilliant, tireless, overconfident intern. These labs teach you to run it.*

## Premise

Programming has climbed another abstraction level: 0s and 1s → assembly → C → Python →
**natural language**. At every previous jump, the people who thrived were not the ones who
memorised the old layer — they were the ones who kept the *thinking*: decomposition,
precision about "done", judgement about what's good. This series teaches programming at the
new level, to people who have never programmed at the old ones, without pretending the old
levels don't exist underneath.

The medium is vibe coding — a CLI agent (pi.dev or similar) + a model + GitHub. The chat is
the IDE. The repo is the inspection surface. The curriculum is **not** the tool: it is
specification, verification, decomposition, and taste. Tools will change in 18 months; the
labs say so out loud.

**What the learner has at the end:** 12 public GitHub repos, each containing a working
product, a spec, a decision log, and a critique — a portfolio that demonstrates exactly the
skills the labs claim to teach. The folder *is* the evidence.

## Audience

- **Primary:** business-school / non-CS learners, zero prior programming, open self-paced
  (the `security-labs` model: public repos, kata-style, nobody grading).
- **Secondary:** a university unit maps onto the series via a thin institutional layer
  (numbering-agnostic, like `security-toys`' course mapping table). See *Uni adaptation*.
- The existing books are optional depth references ("consult the reference" layer), not
  prerequisites. The series stands alone.

## Design principles (house rules)

1. **One misconception per lab.** Every lab names the belief it kills and the "wait, what?"
   moment that kills it — same discipline as `security-toys`.
2. **Zero prerequisites, zero apologies.** Lab 1 assumes the learner has never seen code.
   Code *reading* is taught as a comprehension skill; code *writing* is never required.
3. **Real products, client framing.** Every build is framed as a brief from a plausible
   client, not an exercise. Business learners respond to briefs.
4. **The evidence is spec → delta → critique** (see below). Never a chat transcript.
5. **Everything lands in GitHub.** Publish early (Pages), commit small, break fearlessly.
6. **~90 minutes per lab**, self-paced, restartable.
7. **The series eats its own dogfood.** Every lab in this repo is itself built spec-first,
   with its own `SPEC.md` and `DECISIONS.md` visible. Learners can audit the authors.
8. **Tool-agnostic core.** Named tool in the margins, concepts in the body.

## The evidence model: spec → delta → critique

The old evidence-of-learning model (interrogate the AI's answer in a chat log) breaks when
the agent works autonomously — the log is tool noise. The evidence moves up a level and
into git, to the three things that *cannot* be autonomous:

| Artifact | What it is | What it proves |
|---|---|---|
| **Spec** (`SPEC.md`) | What "done" means, written *before* the build | The learner's thinking, in their own words, versioned |
| **Delta** (`DECISIONS.md` + commit history) | What they rejected, redirected, tweaked, and why | Judgement — the human layer on top of the one-shot |
| **Critique** (per-lab write-up) | What's still wrong, what they'd change before really shipping | Taste, made visible and arguable |

### The Replication Test (core mechanic)

The self-assessment — and, in the uni version, the *marking instrument* — is:

> **Hand your `SPEC.md` alone to a fresh agent in an empty folder. Does it reproduce an
> acceptable product?**

If yes, the spec was real — the learner authored the program, in English. If no, the gap
between what came out and what they meant *is* their remaining coursework. This makes specs
un-fakeable in an interesting way: using AI to sharpen your spec isn't cheating, it's the
skill. Labs 3, 6, and 12 run the Replication Test explicitly; learners are encouraged to
run it anywhere.

### Kata rounds (adapted from `security-labs`)

- **Round 1 — build it**, conversationally, as messy as needed.
- **Round 2 — spec it**: write/extract `SPEC.md`, fresh folder, Replication Test.
- **Round 3 — critique it**: what would you change before charging money for this?

Done when Round 2 converges and Round 3 has opinions.

## The arc

| # | Lab | Kills the belief that… | Builds the habit of… |
|---|---|---|---|
| 1 | Hello, Department of One | "programming isn't for me" | everything lives in a repo |
| 2 | The Demo Illusion | "it works = it's done" | defining done before admiring it |
| 3 | Say What You Mean | "the AI knows what I meant" | writing the spec first |
| 4 | The Checklist It Can't Charm | "checking is re-reading" | acceptance checks that run |
| 5 | The Flight Recorder | "one wrong move ruins it" | small commits, fearless branches |
| 6 | Teach the Intern | "every chat starts from zero" | the context folder |
| 7 | Trust, Then Verify | "it sounds right so it is right" | demanding evidence of done |
| 8 | The Taste Test | "best is objective" | critique as a deliverable |
| 9 | The Last 20% | "the hard part is the first 80%" | directing polish |
| 10 | Run the Department | "big things are built in one go" | decomposition into issues |
| 11 | The Audit | "the code is the only record" | reading someone else's trail |
| 12 | Ship Something True | "I need permission to ship" | the full loop, owned |

Acts: **1–3 wonder & disillusionment · 4–7 steering · 8–10 judgement · 11–12 ownership.**

---

## Lab one-pagers

### Lab 1 — Hello, Department of One

**Brief:** "We need a one-page site/tool about something you actually know" (their hobby,
their side hustle, a calculator their old job needed).
**Activity:** One conversation with the agent → working product → pushed to GitHub →
published on Pages. Then the reveal: open the repo, look at the files the agent wrote.
You will not understand them. That's fine — *you can ask the thing that wrote them.*
First taste of code-reading-as-conversation.
**The moment:** the URL works on their phone.
**Evidence:** the repo exists; a three-sentence `DECISIONS.md` entry: "what I asked for,
what I got, one thing that surprised me."
**Toy pairing:** `next-word` (demystifier — how the model actually chooses).

### Lab 2 — The Demo Illusion

**Brief:** "Great demo. Ship it Friday."
**Activity:** Hand Lab 1's product to a real human (flatmate, colleague) with no
instructions. Collect three failures — weird input, wrong screen size, the button they
pressed that you never would. Write the first real definition of done ("done means: a
stranger can…"). Direct the fixes.
**The moment:** watching someone break in 30 seconds the thing that felt finished.
**Evidence:** before/after failure list in `DECISIONS.md`; the fix commits.
**Toy pairing:** `demo-illusion` (toggle "real users" on a shiny app, watch it crumble).
**Thesis carried:** the gap between one-shot demo and product-someone-would-use is where
the human work now lives.

### Lab 3 — Say What You Mean

**Brief:** deliberately vague — "make a tool that helps people split bills."
**Activity:** Run the same vague brief three times in three fresh folders. Get three
different, individually defensible products. Then write `SPEC.md` — done-means bullets,
what it must NOT do, who it's for — and run the Replication Test until output converges
on intent.
**The moment:** three different apps from the "same" request.
**Evidence:** the three divergent outputs (screenshots) + the spec that converged.
**Toy pairing:** `three-interpretations` (type a vague spec, see three valid renderings
side by side; sharpen a slider, watch them converge).

### Lab 4 — The Checklist It Can't Charm

**Brief:** "The bill-splitter mis-rounds someone's share. Also add tips. Don't break
anything."
**Activity:** Write acceptance checks in plain language ("three people, $100, nobody pays
a fraction of a cent"); have the agent automate them as tests; watch them pass. Then
direct the tip feature — and watch a check catch the regression the learner didn't spot.
Tests reframed for non-programmers: *the checklist the intern can't charm its way past.*
**The moment:** the red ✗ catching what their eyes missed.
**Evidence:** `checks/` in the repo; the commit where a check failed and got fixed.

### Lab 5 — The Flight Recorder

**Brief:** "Try a risky redesign. If it doesn't work, Friday's version better still exist."
**Activity:** Branching, small commits, PR-to-self on GitHub. Then the trust exercise:
*deliberately* let the agent wreck the working product on a branch — and recover
completely in one command. Read a diff on GitHub for the first time (the repo is the GUI;
this is where "seeing the code" actually happens).
**The moment:** total recovery of destroyed work.
**Evidence:** the wreck branch, left in the repo as a trophy.

### Lab 6 — Teach the Intern

**Brief:** "Why do I re-explain my preferences every single session?"
**Activity:** The folder method — the simple convergent structure (Pocock / Van Clief /
Claude all landed near it because it's what's left when you remove ceremony):

```
AGENTS.md        # standing house rules for the agent — tone, stack, "always/never"
SPEC.md          # what done means, per product
DECISIONS.md     # the delta log — what I overrode and why
checks/          # acceptance checks
```

Run the same task in a taught folder and an untaught one; compare. Then the Replication
Test on the whole folder: a fresh agent, given only these files, continues the project
correctly. *The folder is the employee handbook.*
**The moment:** the agent following your house rules unprompted.
**Evidence:** `AGENTS.md`, and the diff between taught/untaught runs.

### Lab 7 — Trust, Then Verify

**Brief:** "The agent says it's fixed. The client says it isn't."
**Activity:** A provided repo where the agent's claims and reality disagree. Verification
moves for non-coders: run it yourself; run the checks; ask "show me the evidence it
works"; ask a *second* agent to critique the first's work; ask "what would make this claim
false?" (the `prove-dont-persuade` instinct, applied to your own tooling).
**The moment:** catching the agent confidently, fluently wrong — and realising fluency was
never evidence.
**Evidence:** a short incident write-up in `DECISIONS.md`: claim, check, verdict.
**Toy pairing:** `confidence-dial` (equally confident statements; which are true?) and
`context-porthole` (what the agent can actually see vs what you know).

### Lab 8 — The Taste Test

**Brief:** "Two teams built our product. Pick one. Justify it. Fix it."
**Activity:** Two provided vibe-coded versions of the same product — both *work*, both
pass checks; they differ in feel, clarity, trustworthiness. Choose which ships. Write the
critique (a form is provided: first impression / friction points / trust signals / what
I'd change before charging money). Then direct the winner's improvements.
**The moment:** realising the checks can't make this call — their reasons *are* the job.
**Thesis carried:** models can generate candidates; deciding what humans will love is the
part that didn't automate. This is the lab the whole series exists for.
**Evidence:** the critique memo + the improvement commits.

### Lab 9 — The Last 20%

**Brief:** "It's basically done. Just make it feel right." (Every practitioner smiles.)
**Activity:** A near-good provided app. Direct the polish: empty states, wording, loading
feel, the wrong-shade-of-blue. Track how many rounds and how large the diffs are for
changes that "should be tiny."
**The moment:** the before/after comparison — small judgements compound into the entire
difference between plausible and shippable.
**Evidence:** a polish log: each tweak, why, and how many attempts it took.

### Lab 10 — Run the Department

**Brief:** a genuinely multi-feature client brief (e.g. a booking page: calendar, email
confirmation, admin view, cancellation).
**Activity:** Decompose the brief into GitHub issues — small, independent, each with its
own done-means. One agent run per issue; review each PR before merging (reading diffs is
now familiar from Lab 5). Sequencing, dependencies, and scope-cutting decisions are theirs.
**The moment:** watching the issue board drain — and realising they just ran a team.
**Evidence:** the issue list *as written before any build* + the merged PRs.
**Computational thinking, named:** this is decomposition; the spec's "then / if / until"
language is sequence, selection, repetition — same ideas, new altitude.

### Lab 11 — The Audit

**Brief:** "The previous contractor vanished. Here's their repo. What did they build, is
it any good, and what do we fix first?"
**Activity:** A provided messy-but-realistic repo *with* spec/delta/decisions trail.
Reconstruct intent from the trail; verify claims against reality; write an audit memo;
fix the one highest-value thing. (Optionally: swap capstone-in-progress repos with another
learner instead.)
**The moment:** `DECISIONS.md` answering a question the code never could — and realising
their own trail is a letter to the next person.
**Evidence:** the audit memo. This lab is also the marker's rubric made student-facing:
they grade the way they'll be graded.

### Lab 12 — Ship Something True

**Brief:** their own. A real itch — theirs, their club's, their workplace's.
**Activity:** The full loop, no scaffolding: spec → issues → build → verify → polish →
publish → critique. Ends with the Replication Test on their spec and a README written for
strangers.
**The moment:** sending the URL to someone who wanted the thing.
**Evidence:** the complete trio, twelfth repo, portfolio done. The final write-up prompt:
*"What did you do that the agent couldn't have? Point to the commits."*

---

## The toys (`programming-toys`)

Same seven house rules as `security-toys` (single self-contained `index.html`, one idea,
playable in 90 seconds, named "wait, what?" moment, shared style tokens, `?present` mode,
`SPEC.md` per toy). Recursive move, stated in the repo README: **every toy is itself
vibe-coded from its `SPEC.md`** — the collection demonstrates the method it teaches.

| Toy | Kills | Pairs with lab |
|---|---|---|
| `next-word` | "it thinks like me" — watch next-token choice happen, with the dial from boring to unhinged | 1 |
| `demo-illusion` | "the demo is the product" — shiny app, then flip the *real users* toggle (weird input, small screens, impatience) | 2 |
| `three-interpretations` | "the AI knows what I meant" — one vague spec, three valid products; sharpen the spec, watch them converge | 3 |
| `context-porthole` | "it sees what I see" — split screen: everything you know vs the porthole the agent looks through | 6, 7 |
| `confidence-dial` | "fluent = true" — statements at identical confidence; guess which are false; calibration score | 7 |
| `tiny-tweak` | "small change, small work" — request a 'tiny' change, watch the actual diff and blast radius render | 9 |

## Repo structure

Mirrors the `security-labs` hub pattern:

```
programming-labs/              # hub repo (this design lives here)
  README.md                    # series map, the arc table, start here
  SPEAK-SOFTWARE.md            # the framing essay (LEARNING-WITH-AI.md's sibling):
                               #   abstraction-ladder thesis, evidence model, kata rounds
  template/                    # per-lab starter: AGENTS.md, SPEC.md, DECISIONS.md,
                               #   critique form, .github basics
  lab-01-department-of-one/ …  # per-lab: README (brief, moment, steps), provided repos
                               #   where needed (labs 7, 8, 9, 11), own SPEC + DECISIONS
programming-toys/              # separate repo, security-toys conventions verbatim
```

Learner side: **one repo per lab**, created from `template/`. Their GitHub profile becomes
the portfolio; nothing to submit, nothing to export, no transcript archaeology.

## Computational thinking map (the quiet spine)

Never a lecture; named in one margin note per lab:

| Classic CT | Where it now lives | Lab |
|---|---|---|
| Decomposition | brief → issues | 10 |
| Abstraction | what the spec deliberately omits | 3 |
| Algorithms | done-means criteria; "then / if / until" in specs | 3, 4 |
| Sequence / selection / repetition | plan-shaped spec language | 10 |
| Pattern recognition | critique across candidate versions | 8 |
| Debugging | claim vs evidence | 7 |

## Uni adaptation (thin layer, not the primary)

- Course-agnostic numbering; a mapping table in the hub README (the `security-toys` trick).
- Marking = the evidence trio: spec quality (does the Replication Test pass?), delta
  quality (do `DECISIONS.md` + commits show judgement?), critique quality (are the
  opinions arguable?). The marker re-runs specs rather than reading transcripts.
- Integrity story inverts the usual panic: AI use is assumed and unbounded; the graded
  artifacts are precisely the ones that can't be autonomous. Lab 11 doubles as the rubric.

## Open questions

1. **Tool commitment:** pi.dev as the named default, with a "any CLI agent works" appendix
   — or fully tool-anonymous from day one? (Named default recommended: beginners need one
   golden path.)
2. **Provided repos** (labs 7, 8, 9, 11) are the main authoring cost — each is a small
   deliberately-flawed product. Build them by vibe coding from flaw-specs, and say so.
3. **Model costs / access** for self-paced learners: needs a short honest section in the
   hub README (free tiers, what a lab costs in tokens, local options).
4. **Series name** — pick before repos are created; renames are cheap now and expensive
   in week three.

## Suggested build order

1. `SPEAK-SOFTWARE.md` framing essay (it forces every remaining decision).
2. Lab 3 end-to-end (smallest lab that exercises spec + Replication Test + a toy).
3. `three-interpretations` toy (tests whether the toy format lands for programming).
4. Then Act I, then the provided-repo labs.
