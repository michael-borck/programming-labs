# Lab 6 — Teach the Intern

> **Kills the belief that:** every chat starts from zero.
> **Builds the habit of:** the context folder.
> **Time:** ~90 minutes · **Needs:** your bill-splitter repo (Labs 3–5) and its agent.

## The brief

No client this time — just a frustration you've almost certainly hit by now:

> *Why am I re-explaining my preferences every single session?*

Your intern has a strange condition: encyclopaedic memory for the world, total amnesia about
*you*. Every new session it's a stranger again — doesn't remember that you hate surprise
features, that checks run before "done", that risky work goes on a branch. You've been fixing
this by repeating yourself in chat. Chat evaporates.

The cure has been sitting in your repo since Lab 1: agents **read the folder they wake up in**
before doing anything. Whatever's written there *is* their memory of you. Today you stop leaving
that to luck: the folder becomes the employee handbook, and you prove it works.

## Part 1 — The amnesia experiment (25 min)

Run the same task through a taught agent and an untaught one, and watch the difference.

1. Make a bare copy: a new folder containing **only your product file(s)** — no `AGENTS.md`, no
   `SPEC.md`, no `DECISIONS.md`, no `checks/`.
2. Start a fresh agent there and give it a real small task: *"Add a 'copy result to clipboard'
   button."* Say nothing else. Watch how it works: does it commit? run any checks? redesign
   things you didn't ask about? announce "done" with no evidence? It isn't being bad — it's
   being *ordinary*. Ordinary is what you get when you teach nothing.
3. Now the same task, fresh session, in your real repo. Watch it consult the checklist, keep the
   change small, commit with a message, follow Lab 5's rules —

**The moment this lab exists for:** the agent obeying *your* house rules **unprompted**. Nobody
mentioned checks. It read the handbook, because the handbook was there to read.

Note what differed between the two runs in `DECISIONS.md` — that diff is the value of the
folder, measured.

## Part 2 — Write the handbook like you mean it (30 min)

Your `AGENTS.md` has been accumulating rules by accident since Lab 1. Time to write it on
purpose. The structure you've been living inside is the whole method — four files, each
answering one question the intern has every morning:

| File | The intern's question it answers |
|---|---|
| `AGENTS.md` | *How do you like things done?* — standing rules, always/never |
| `SPEC.md` | *What are we building and what does done mean?* |
| `DECISIONS.md` | *Why are things the way they are?* — so it stops relitigating them |
| `checks/` | *What must stay true no matter what I touch?* |

(This isn't our invention — the industry converged on almost exactly this shape, because it's
what's left when you remove ceremony. Your version just has better handwriting.)

Now mine your own history for the rules you already believe:

1. Ask the agent: *"Read DECISIONS.md and our history. What have I corrected or repeated more
   than once? Propose rules for AGENTS.md — short, imperative, testable."*
2. **Curate ruthlessly** — this is the judgement step, not a dictation step. Accept only rules
   you'd actually enforce; rewrite the mushy ones (*"be careful with money math"* → *"money is
   always whole cents; shares must sum to the exact total"*); reject anything you don't mean.
   Rules you don't mean will be obeyed too — that's the sharp edge of a handbook.
3. Fill in the sections the template gave you in Lab 1: *About me* ("I don't read code — explain
   changes by what the user sees") and *This project* (the two or three truths that must never
   break).

Commit the handbook.

## Part 3 — The folder Replication Test (30 min)

In Lab 3 you replication-tested a spec. Today, the whole folder: can a stranger continue this
project from the files alone?

1. Fresh agent, fresh session, your real repo, and this:

   > Read this folder. Don't build anything yet. Tell me: what is this product, who is it for,
   > what are the house rules, what must never break, and what would you do next?

2. Grade the answers against what *you* know. Everything it got right, the folder taught it.
   Anything it got wrong or missed — **fix the folder, not the chat.** The chat fixes one
   session; the folder fixes every session forever.
3. Then let it actually work: give it a real small task and watch the rules hold with zero
   reminders. When they do, you've built something quietly big: a project that **carries its own
   context**. You could hand this repo to any agent — or any person — tomorrow, walk away, and
   nothing that matters would be lost.

That property has a name in this series: the folder passes the Replication Test. Lab 11's
auditors will inherit exactly such a folder from a stranger. Lab 12's capstone will be built as
one from the first commit.

## Evidence checklist (what's in your repo when you're finished)

- [ ] `AGENTS.md` rewritten on purpose: always/never rules, about-me, project truths — curated,
      not dictated
- [ ] The taught-vs-untaught comparison in `DECISIONS.md`: what the ordinary agent did that
      yours didn't
- [ ] A `DECISIONS.md` entry for the folder test: what the cold-start agent got wrong, and what
      you changed in the folder because of it

## Going further (optional)

- **Obedience is not judgement.** Add a rule you *disagree* with (something harmless — "all
  buttons must be beige"), run a task, watch it followed without question. Then delete it and
  sit with the implication: the handbook is load-bearing, and nobody sanity-checks it but you.
- **Swap folders.** Trade repos with another learner and run Part 3's cold-start prompt on each
  other's folders. Whatever their agent can't answer from your files is your gap — and hearing
  it from someone else's agent stings exactly the right amount.

---

*Margin note — the agent doesn't remember; it re-reads. Each session, everything it knows about
your project is what's in the folder plus what's in your message — a porthole, not a memory.
Externalising memory into writing is the oldest trick in computing (it's what programs are), and
it's why "documentation" just changed jobs: it used to be for humans later; now it's for the
machine, every single morning.*
