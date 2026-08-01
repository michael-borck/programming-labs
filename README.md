# Speak Software — programming labs for the natural-language era

> Twelve hands-on labs that teach programming at its newest abstraction level: you describe, an
> agent builds, and the durable human skills — specification, verification, decomposition, taste —
> are the curriculum. Zero prior programming assumed. Zero apologies for that.

**Start here:** read [`SPEAK-SOFTWARE.md`](SPEAK-SOFTWARE.md) (10 minutes — the thesis, the
evidence model, and the kata that structure every lab), then open Lab 1.

**Who this is for:** anyone — built for business-minded learners who have never programmed and may
never write code by hand. If you can write a clear email, you have the prerequisite.

**What you need:** a GitHub account, a CLI agent ([pi](https://pi.dev) is the series' named path;
any equivalent works), and model credits (see *What it costs* in the framing essay).

**What you'll have at the end:** twelve public repos, each holding a working product, the spec that
produced it, a decision log, and a critique — a portfolio that *is* the evidence of the skills.

## The frame

You've been handed an engineering department of one — a brilliant, tireless, overconfident intern.
These labs teach you to run it. Every lab is a client brief, not an exercise. Every lab kills one
specific misconception and installs one durable habit.

## The labs

| # | Lab | Kills the belief that… | Builds the habit of… | Status |
|---|---|---|---|:--:|
| 1 | Hello, Department of One | "programming isn't for me" | everything lives in a repo | 💡 |
| 2 | The Demo Illusion | "it works = it's done" | defining done before admiring it | 💡 |
| 3 | [Say What You Mean](lab-03-say-what-you-mean/) | "the AI knows what I meant" | writing the spec first | ✅ |
| 4 | The Checklist It Can't Charm | "checking is re-reading" | acceptance checks that run | 💡 |
| 5 | The Flight Recorder | "one wrong move ruins it" | small commits, fearless branches | 💡 |
| 6 | Teach the Intern | "every chat starts from zero" | the context folder | 💡 |
| 7 | Trust, Then Verify | "it sounds right so it is right" | demanding evidence of done | 💡 |
| 8 | The Taste Test | "best is objective" | critique as a deliverable | 💡 |
| 9 | The Last 20% | "the hard part is the first 80%" | directing polish | 💡 |
| 10 | Run the Department | "big things are built in one go" | decomposition into issues | 💡 |
| 11 | The Audit | "the code is the only record" | reading someone else's trail | 💡 |
| 12 | Ship Something True | "I need permission to ship" | the full loop, owned | 💡 |

✅ ready · 🔨 building · 💡 designed (see [`DESIGN.md`](DESIGN.md) for all twelve one-pagers, and
[`ROADMAP.md`](ROADMAP.md) for the build order — an unchecked box there is a promise)

The arc, in four acts: **1–3** wonder & disillusionment · **4–7** steering · **8–10** judgement ·
**11–12** ownership.

Each lab takes ~90 minutes, self-paced, restartable. Labs assume you've done the ones before them —
except Lab 3, which was built first and doubles as the series' taster: it only needs an agent and
an empty folder.

## How the labs work

1. **One repo per lab.** Copy [`template/`](template/) into a fresh repo — it holds the four files
   the whole series revolves around: `AGENTS.md`, `SPEC.md`, `DECISIONS.md`, `CRITIQUE.md`.
2. **The evidence is spec → delta → critique**, never a chat transcript. What "done" means (before
   you build), what you overrode (and why), what you'd still change (and why).
3. **The Replication Test** is the self-check: your `SPEC.md`, alone, handed to a fresh agent —
   does it reproduce a product you'd accept? If yes, you authored a program in English.
4. **The kata:** build it (round 1) → spec it (round 2) → critique it (round 3). Done when round 2
   converges and round 3 has opinions.

## The toys

Each lab pairs with a single-file interactive toy that breaks its misconception in about 90
seconds — no install, no account, no network. They live in the sibling repo
[`programming-toys`](https://github.com/michael-borck/programming-toys), and the first one,
[`three-interpretations`](https://michael-borck.github.io/programming-toys/three-interpretations/),
pairs with Lab 3.

## Course mapping

This repo is course-agnostic and numbering-agnostic — labs are named for what they teach. Adopting
the series in a unit? Add a row.

| Lab | Unit / module |
|---|---|
| *(none yet)* | |

For instructors: the marking model is the evidence trio. Grade the spec by re-running it (the
Replication Test *is* the marking instrument), the delta by reading `DECISIONS.md` against the
commits, the critique on whether its opinions are arguable. AI use is assumed and unbounded; the
graded artifacts are precisely the ones that can't be autonomous. Lab 11 is the rubric made
student-facing.

## This repo eats its own dogfood

Every lab here is itself built spec-first: the series has its own [`DECISIONS.md`](DECISIONS.md),
and each lab folder carries the spec it was built from. The toys are vibe-coded from their own
`SPEC.md` files and say so. You are welcome — encouraged — to audit the authors with the same
critique form we hand you.

## Licence

MIT. Unit-agnostic teaching material — no institution or course branding.
