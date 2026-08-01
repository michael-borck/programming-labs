# Lab 3 — Say What You Mean

> **Kills the belief that:** the AI knows what you meant.
> **Builds the habit of:** writing the spec first.
> **Time:** ~90 minutes · **Needs:** a CLI agent ([pi](https://pi.dev) or equivalent), a GitHub
> account, three empty folders. No prior labs required — this lab doubles as the series taster.

**Warm up (2 minutes):** play
[`three-interpretations`](https://michael-borck.github.io/programming-toys/three-interpretations/)
— the toy version of exactly what's about to happen to you.

## The brief

A client slides this across the table:

> *"Make a tool that helps people split bills."*

That's it. That's the whole brief. Real clients talk like this, and — spoiler — so do you.

## Part 1 — The three strangers (30 min)

You're going to give that brief, word for word, to three fresh agents and watch them build three
different products.

1. Create three empty folders: `run-a`, `run-b`, `run-c`.
2. In each one, start a **fresh** agent session (fresh matters — no shared memory) and give it the
   brief above, verbatim. Add only: *"Build it as a single web page I can open in my browser."*
3. Let each run finish. Don't steer, don't clarify, don't answer questions with new information —
   if the agent asks, say *"whatever you think is best."* (It hurts. Do it anyway.)
4. Open all three in your browser, side by side. Screenshot each one.

Now look. One probably assumed a dinner table: total ÷ people, done. One may have assumed
housemates: running balances, who-owes-whom, maybe accounts. One may have assumed a receipt:
line items, tax, tip. Different screens, different features, different products —

**The moment this lab exists for:** *none of them misheard you.* Every one is a defensible reading
of your nine words. The ambiguity wasn't in the agents. It was in your head — you knew which one
you meant, and you didn't say it.

> If you got three near-identical products, you found something real too: agents have popular
> defaults, and "whatever you think is best" means *the most statistically ordinary thing*.
> Is the most ordinary product the one your client wanted? Keep going — the spec matters even more.

## Part 2 — Say it (30 min)

Pick the product you actually meant (or the one you now realise you want). You're going to write
the words that would have selected it on the first try.

1. Create your real project folder from the series [`template/`](../template/) and make it a GitHub
   repo (agents are good at this — ask yours to set it up).
2. Open `SPEC.md` and write it, using the structure in the template:
   - **Who it's for, in one sentence.** Not "everyone".
   - **Done means** — bullets a stranger could check without asking you anything. Vague words
     (*nice, simple, intuitive*) are bugs.
   - **Must NOT** — this is the section that kills the other two interpretations. If run-B built
     accounts and you didn't want accounts, *"no accounts, no sign-in, no saved data"* goes here.
   - **Out of scope (deliberately)** — what a reasonable person might expect that you're
     consciously skipping.
3. Use your agent to sharpen it — this is not cheating, it's the skill. Steal this prompt:

   > Here is a brief and my spec for it. Don't build anything. Instead, list every decision a
   > builder would still have to guess at, ranked by how much the product changes depending on the
   > guess. Ask me the top five as questions.

   Answer the questions *in the spec*, not in the chat. The chat evaporates; the spec is the
   program.
4. Commit the spec. This commit — spec before build — is the habit the whole series runs on.

## Part 3 — The Replication Test (30 min)

The test of your spec is not how it reads. It's what it reproduces.

1. Open a fresh folder, start a fresh agent, and give it **only** your `SPEC.md`. Say: *"Build
   this."* Answer any question with *"the spec is all you get."*
2. Compare what comes out against what you meant. Two grades, and only two:
   - **Accept** — you'd hand this to the client. Your spec was real. You just wrote a program in
     English, and the proof is that a stranger executed it.
   - **Reject** — something came out wrong or surprising. **The gap is the lesson.** Find the
     wrongness, find the missing or mushy sentence in your spec that allowed it, fix the *spec*
     (never the product), and run the test again in a fresh folder.
3. Most people need two or three rounds. Each round, log one entry in `DECISIONS.md`: what came out
   wrong, what sentence you changed. That log is your evidence — it shows the exact moments your
   words got more precise.

Done when a fresh agent, armed only with your words, builds a product you'd accept.

## Evidence checklist (what's in your repo when you're finished)

- [ ] Three screenshots from Part 1 (in an `evidence/` folder) — the divergence, captured
- [ ] `SPEC.md` that passes the Replication Test
- [ ] `DECISIONS.md` with one entry per test round
- [ ] The accepted product, as built by the final fresh run
- [ ] `CRITIQUE.md` — kata round 3: fill in the form, especially *"before I'd charge money for it"*

## Going further (optional)

- **The convergence question:** run your final spec twice more. The two products will still differ —
  colours, wording, layout. Everything that still varies is what your spec left free. Look at the
  list and decide: is each one *deliberately* free, or did you just not think of it? Move the ones
  that matter into the spec. A spec narrows the space; it never closes it — mastery is knowing what
  to pin and what to let float.
- **Swap specs** with another learner. Run theirs cold, send them what you get. Nothing teaches
  spec-writing like watching a stranger execute yours.

---

*Margin note — the old idea hiding in this lab: deciding what to leave out of a description is what
computer scientists call __abstraction__. It was the core skill when the notation was Python, and
it's still the core skill now that the notation is English. The ladder changed; the rung is the
same.*
