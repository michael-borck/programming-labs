# Resources — the gear guide

Everything the labs assume, alternatives that work, and honest guidance on the parts that cost
money. Principles over prices here — prices move monthly; the principles haven't moved in years.

## The labs ↔ toys index

Six labs open with a 90-second toy that breaks the lab's misconception before the lab proves it.
The other six need no toy — their provided repos or your own products do that job.

| Lab | Warm-up toy | It kills |
|---|---|---|
| 1 — Hello, Department of One | [next-word](https://michael-borck.github.io/programming-toys/next-word/) | "it thinks like me" |
| 2 — The Demo Illusion | [demo-illusion](https://michael-borck.github.io/programming-toys/demo-illusion/) | "the demo is the product" |
| 3 — Say What You Mean | [three-interpretations](https://michael-borck.github.io/programming-toys/three-interpretations/) | "the AI knows what I meant" |
| 6 — Teach the Intern | [context-porthole](https://michael-borck.github.io/programming-toys/context-porthole/) | "it sees what I see" |
| 7 — Trust, Then Verify | [confidence-dial](https://michael-borck.github.io/programming-toys/confidence-dial/) + context-porthole | "fluent = true" |
| 9 — The Last 20% | [tiny-tweak](https://michael-borck.github.io/programming-toys/tiny-tweak/) | "small change, small work" |

The toys are also projector-ready (`?present`) and self-contained — lecturers, steal freely.

## Borrowed toys — other people's interactive pages worth a lab's minutes

Our toys aren't alone: there's a whole genre of interactive explainers
([explorabl.es](https://explorabl.es) collects the classics), and a few earn a place beside
specific labs. All verified live as of Aug 2026; this file is their single home so link-rot has
one place to bite.

| Pairs with | Page | Why |
|---|---|---|
| Lab 1 | [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) | a real GPT-2 running in your browser — `next-word`'s dice, at full engineering depth |
| Lab 1 | [LLM Visualization](https://bbycroft.net/llm) | walk through an actual model in 3D; demystifies "the intern" like nothing else |
| Lab 1, 3 | [Tiktokenizer](https://tiktokenizer.vercel.app) | see your words the way the model does — as tokens, which explains its strangest habits |
| Lab 5 | [Learn Git Branching](https://learngitbranching.js.org) | the flight recorder as a puzzle game; the branch/merge intuition in an hour |
| Lab 5, 10 | [GitHub Skills](https://skills.github.com) | GitHub's own interactive courses, taught *inside real repos and PRs* — perfect follow-on |
| Lab 7 | [Gandalf](https://gandalf.lakera.ai) | talk an AI into leaking a password, level by level — steerable-model intuition the fun way |
| Lab 8, 9 | [Can't Unsee](https://cantunsee.space) | pick the better design, get scored — taste training with receipts; humbling, then addictive |
| Lab 2, 9 | [User Inyerface](https://userinyerface.com) | a deliberately hostile UI — every friction your handoff tester felt, weaponised |
| Lab 8, 9 | [Laws of UX](https://lawsofux.com) | the vocabulary for what your critique already noticed |

House rule for this list: interactive or it doesn't go in — the labs' reading is the labs.

## Environments — the golden path and the alternates

The labs need three things: **an agent that reads and writes files in a folder**, **git +
GitHub**, and **a browser** to open what you build. Anything providing those three works.

- **The golden path: a CLI agent on your own machine** ([pi](https://pi.dev), Claude Code, or
  equivalent). Named because beginners deserve one path that definitely works, not a comparison
  chart. Everything in the labs is written against this.
- **GitHub Codespaces** — the golden path, in a browser. A real terminal and folder on GitHub's
  machines; install the same CLI agent inside it. The best answer for locked-down university
  and library machines, and the free tier covers the series. Nothing in the labs changes.
- **Replit** — workable, with translation. Its built-in agent can play the intern and it hosts
  what you build, so Labs 1–3 feel great. The folder method (Lab 6) works unchanged. But the
  series' git habits (branches, PRs, diffs — Labs 5 and 10) fight Replit's grain; you'd be
  learning Replit's workflow, not the industry's. Fine for a taster, not recommended for the
  full arc.
- **Google Colab / Jupyter — no.** Notebooks are the wrong shape: the labs build products in
  folders with history, not cells with outputs. You'd spend the whole series swimming upstream.
- **Editor-based agents (Cursor, VS Code + agent)** — fine, if you already live there. The labs
  never ask you to use the editor half; the chat and the repo are still the whole interface.

Whatever you choose, the invariants stay: the folder is the memory, GitHub is the inspection
surface, and everything you make lands in repos you own.

## Models — the honest guidance

- **Frontier over local, for the labs.** A local model (Ollama and friends) is free and
  private, and genuinely worth an experiment — but today's local models make noticeably weaker
  interns: more wrong turns, worse tool use, more of *your* time spent unsticking them. While
  you're *learning to direct*, a strong model isolates the variable that matters — your words.
  Run Lab 3 against a local model later as a going-further: watching the same spec produce
  worse products teaches you what the model was contributing.
- **Don't shop for a "coder model."** Every serious agent ships a sensible default aimed at
  exactly this work. Picking the default is the professional move; model-shopping before Lab 1
  is procrastination wearing a lab coat.
- **Subscription vs API key:** a **subscription** (flat monthly fee) wins if you're doing
  several labs a month — predictable, no meter anxiety, usually bundled with the agent.
  **Pay-as-you-go API** wins for a casual pace — a lab costs roughly a coffee — and for
  cohorts, where per-student keys with **spend caps** keep the bill boring. Set the cap before
  the first session, not after the first surprise.
- **Prices fall; the ratio holds.** Whatever the numbers are when you read this, hands-on means
  tokens, a lab ≈ a coffee, the series ≈ a textbook. Budget like that and move on.

## Why the labs are GitHub pages, not a rendered book

Deliberate. The [landing page](https://michael-borck.github.io/programming-labs/) is the front
door, but the labs themselves are markdown in the repo because **the repo is the GUI** is a
thing this series *teaches*, not just says: from Lab 5 onward you read diffs, PRs, issues, and
history as lab content, and every lab's evidence checklist lives in a repo of your own. Reading
the briefs where the work happens is acclimatisation, on purpose. (A second, rendered surface
would be prettier and teach less.)

## Answers, marking, and the staff layer

Self-paced learners don't need an answer key, and mostly there *isn't* one: Lab 3's answer is
whatever spec passes **your** Replication Test; Labs 8 and 9 are judgement with a form, where
the graded thing is how well you argue, not which version you pick. The labs with findable
plants (7, 9, 11) carry their own keys in the repo as clearly-marked spoiler files — read them
*after* and score yourself.

For instructors: the marking model is in the [README](README.md) (re-run specs, read deltas,
argue with critiques — AI use assumed and unbounded), and the spoiler files double as marking
notes. The facilitation guide and the marker-calibration exemplars live in the **private**
[`programming-labs-staff`](https://github.com/michael-borck/programming-labs-staff) repo (ask
for access via an issue or email) — private because published exemplar *judgement* becomes the
answer students converge on, which is the one failure mode a taste curriculum can't afford.
