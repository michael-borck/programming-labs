# Speak Software — programming at the natural-language level

Programming has changed levels before. People wired plugboards, then punched cards, then wrote
assembly, then C, then Python — and at every jump, somebody insisted that the new layer wasn't *real*
programming. They were wrong every time, and they were wrong in the same way: they confused the
current notation with the actual skill. The notation kept dissolving. The skill — deciding what
should exist, saying it precisely, checking that what you got is what you meant, and judging whether
it's any good — never did.

You are entering at the newest rung: the notation is now your own language. You describe; an agent
builds. This series takes that seriously, without pretending the rungs below stopped existing. Code
still runs underneath everything you'll make. You won't be asked to write it. You will constantly be
asked to *think* — and that part, nobody has automated.

## What didn't automate

An agent can produce a working app from one sentence. Here is what it cannot do, and what these
twelve labs actually teach:

- **It can't know what you meant.** "Make a tool that splits bills" has at least three defensible
  interpretations, and the agent will pick one without telling you it picked. Saying what you mean —
  fully enough that it stops mattering who builds it — is a learnable skill. It's called writing a
  spec, and it is the closest thing this era has to source code.
- **It can't be trusted to check itself.** Agents report success in the same confident voice whether
  or not the thing works. Verification — *show me, prove it, what would make this claim false* — is
  your job, permanently.
- **It can't decide what's good.** Two builds can both work, both pass every check, and differ
  completely in whether a human would enjoy — or pay for — using them. That judgement is taste, it's
  yours, and it's the part of the job that moved *up* the ladder instead of dissolving.
- **It can't want anything.** Every product in this series starts because you decided something
  should exist. That never stops being the human move.

## Your department of one

The working frame for all twelve labs: you've been handed an engineering department of one — a
brilliant, tireless, overconfident intern. It types faster than any human alive, never gets bored,
knows every language, and will confidently hand you the wrong thing with a straight face. Nobody in
history has had this employee before. Nobody knows how to manage it yet. That's what you're here to
learn.

Notice what this frame does: it puts you in a chair business students already recognise. You are not
becoming a typist of code. You are becoming the person who writes the brief, checks the work, and
decides what ships — which has always been the better chair.

## The evidence: spec → delta → critique

An earlier generation of AI-era teaching graded the *conversation* — you asked the AI for a
solution, then interrogated it, and the chat log was evidence you understood. That worked when the
AI's output was a solution to read. It breaks now: an agent's transcript is mostly tool noise, and
reading it proves nothing. The evidence didn't disappear. It moved into three artifacts that
*cannot* be autonomous, because they are made of your intent, your judgement, and your taste:

| Artifact | File | What it proves |
|---|---|---|
| **The spec** | `SPEC.md`, written *before* the build | You knew what "done" meant. In your words. Versioned. |
| **The delta** | `DECISIONS.md` + your commit history | You didn't just accept the one-shot — here's what you overrode, and why. |
| **The critique** | `CRITIQUE.md` | You can tell good from plausible, and argue for the difference. |

Every lab's deliverable is some slice of this trio, living in a public GitHub repo. No transcript
archaeology, nothing to export, nothing to submit. After twelve labs your GitHub profile *is* the
portfolio, and it demonstrates exactly the skills this series claims to teach.

## The Replication Test

The series' core self-check, used explicitly in labs 3, 6, and 12 and available to you always:

> **Give your `SPEC.md` — alone — to a fresh agent in an empty folder. Does it reproduce a product
> you'd accept?**

If yes: the spec was real. You authored that program, in English, and anyone (anything) competent
could have built it from your words. If no: the gap between what came out and what you meant is a
precise map of what you failed to say — the most useful homework you will ever be assigned.

Notice what this test makes true. Using AI to help *sharpen your spec* isn't cheating — it's the
skill itself. The only thing you can't outsource is meaning it.

## The kata

Borrowed from a sibling series of security labs, adapted for a world where the AI isn't a crutch to
wean yourself off — it's the medium. What you demote across rounds isn't the assistant. It's your
own vagueness.

1. **Round 1 — build it.** Conversationally, messily, as many turns as it takes. Get the thing.
2. **Round 2 — spec it.** Write (or extract) the `SPEC.md`, open a fresh folder, run the
   Replication Test. Iterate the spec — not the chat — until it converges on what you meant.
3. **Round 3 — critique it.** Would you charge money for this? What would you change first? Write
   it down. Opinions are the deliverable.

You're done with a lab when Round 2 converges and Round 3 has opinions you'd defend out loud.

## The tools, honestly

The golden path for this series is a **CLI agent + a model + GitHub**. We name one tool in the lab
instructions — currently [pi](https://pi.dev) — because beginners deserve one path that definitely
works, not a comparison chart. But the concepts are tool-agnostic on purpose, the tool will be
different in eighteen months, and the labs say so in print. If you already use another agent
(Claude Code, or whatever shipped last month), everything here transfers.

Two stances worth stating plainly:

- **The chat is the IDE.** You will not install a big editor. The conversation is where the work
  happens.
- **The repo is the GUI.** When you want to *see* the code, the folders, the changes — GitHub is
  the inspection surface. Lab 5 teaches you to read a diff there, and that's the only
  "seeing the code" this series needs. Watching files scroll by in a terminal is comfort, not
  control. Control is a spec, a check, and a diff you can read.

**What it costs:** running an agent consumes model credits. A lab costs roughly a coffee at
pay-as-you-go API prices, often less; several vendors have free tiers that cover the early labs,
and prices have moved in one direction only. Each lab's README notes anything unusual. No lab
requires a paid subscription to *understand* — but this is a hands-on series, and hands-on means
tokens. Budget for it like you'd budget for a textbook, and you'll finish with money left over.

## If you feel like you're cheating

You will, around lab 2. The feeling is the old notation talking — the belief that the typing was
the work. Ask yourself instead: did I decide what should exist? Did I say it precisely enough to be
buildable? Did I check what came back? Did I make it better than the machine's first draft? If
yes: that's programming. It has always been programming. The people who wired plugboards would say
you have it easy — and they'd say the same thing to the C programmers, who'd say it to the Python
programmers, all the way down the ladder to you.

Speak carefully. Check everything. Ship something true.
