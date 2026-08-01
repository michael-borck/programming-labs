# Lab 1 — Hello, Department of One

> **Kills the belief that:** programming isn't for you.
> **Builds the habit of:** everything lives in a repo.
> **Time:** ~90 minutes, plus up to 30 minutes of one-time setup · **Needs:** a computer, an
> internet connection, and a phone (for the good part).

## What you're about to do

You've just been handed an engineering department of one — a brilliant, tireless, overconfident
intern. It types faster than any human alive, never gets bored, and knows every programming
language. Today you'll give it its first brief, put the result on the actual internet, and then —
this is the part most people skip — look at what it built and interrogate it.

You will not write a line of code. You will still have programmed. Sit with that discomfort; the
[framing essay](../SPEAK-SOFTWARE.md) is about exactly this feeling, and it's worth the ten
minutes if you haven't read it.

## One-time setup (the worst half hour of this series)

Honesty first: this is the least fun part of all twelve labs, it involves accounts and a terminal,
and it's downhill forever after. Get through it.

1. **A GitHub account** — [github.com](https://github.com), free. GitHub is where everything you
   make in this series will live and be published from. Use a username you'd put on a CV; this
   becomes your portfolio.
2. **A CLI agent** — the series' named path is [pi](https://pi.dev); follow its install
   instructions. Any equivalent coding agent works if you already have one.
3. **Model access** — the agent will walk you through connecting an AI model (an account or an API
   key). This is the part that costs money; see *What it costs* in the framing essay — roughly a
   coffee per lab.

Stuck? Here's a trick that never stops being funny: **any AI chatbot in your browser can
talk you through installing an AI agent.** Paste the exact error you see, say what computer you're
on, and follow along. You're allowed to use AI to bootstrap AI — welcome to the era.

## The brief

Just this once, the client is you. Pick something you *actually know* — the thing you could talk
about for ten minutes without preparation:

- a one-page site that explains your hobby to a complete beginner
- the little calculator your old job always needed (tip splitter, freight quote, GST-inclusive
  pricing, race pace)
- a quiz about the thing you're insufferable about

One rule: **one page, no accounts, no sign-ins.** Small enough to finish, real enough to care.

## Part 1 — Say it and watch (20 min)

1. Make an empty folder. Start your agent in it.
2. Give it the brief. Steal this shape:

   > Build me a single-page website that <what it does> for <who it's for>. Keep it to one file I
   > can open in my browser. Before you start, ask me up to three questions.

3. Answer its questions. Let it run. Don't worry about understanding the wall of text it
   produces — that's Part 3's job.
4. Open the file it made in your browser.

There it is. You described; it built. Enjoy this moment *and distrust it* — what you're looking at
is a demo, and Lab 2 exists to show you the difference between a demo and a product. Today,
though: enjoy.

## Part 2 — Put it on the internet (20 min)

A thing on your laptop is a rehearsal. A thing at a URL is real. Tell the agent:

> Put this project in a new GitHub repository under my account and publish it with GitHub Pages.
> Walk me through anything you need from me.

It will handle the machinery (this is called *git*, and Lab 5 makes you dangerous with it) and may
need you to click through an authorisation — follow along. A few minutes after it finishes,
you'll have a live URL.

**The moment this lab exists for:** open that URL *on your phone*. Then send it to someone. It's
not on your computer — it's on the internet, made by you, this morning, in your own words.

## Part 3 — The reveal (30 min)

Now open your new repository on github.com and click into the file(s) the agent wrote. Look at
the code.

You will not understand it. **That's fine — you can interrogate the thing that wrote it,** and
unlike every expert you've ever been afraid to bother, it never gets tired of you. Steal these,
one at a time:

> Explain every file in this project to someone who has never programmed.

> Pick the five strangest-looking lines in the project and explain what each one does.

> What would break if I deleted <pick any chunk that looks important>?

> What did you decide that I never asked for?

Sit with the answers to that last one — colours, wording, layout, features you never mentioned.
The agent made dozens of decisions and billed them all as "what you asked for." Keep the list.
Lab 3 is entirely about those silent decisions, and it will ruin them for you forever.

Reading code you didn't write starts here, as a conversation. It's a comprehension skill, like
reading a contract — and like contracts, you don't have to be able to *write* one to learn to
spot what matters.

## Wrap — your first decision log (10 min)

Copy [`DECISIONS.md` from the template](../template/DECISIONS.md) into your repo and write your
first entry. Three sentences: **what I asked for, what I got, one thing that surprised me.** Add
the "decisions I never asked for" list from Part 3. Ask the agent to commit and push it.

That file is the start of a habit this whole series is built on: the record of your judgement is
the record of your work.

## Evidence checklist (what's in your repo when you're finished)

- [ ] A repository on your GitHub account containing the product
- [ ] A live GitHub Pages URL that opens on a phone
- [ ] `DECISIONS.md` with your first entry and the "never asked for" list

## Going further (optional)

- **Foreshadow Lab 3:** give the *exact same brief* to a fresh agent in a new folder. Compare.
  Interesting, isn't it.
- **Foreshadow Lab 5:** tell the agent "make the main heading twice as big", then look at the
  repo's newest commit on GitHub and find the change. You just read your first diff.

---

*Margin note — it's programs all the way down: the page you shipped is code, the browser showing
it is a program, the agent that wrote it is a program, and the model inside the agent is a
program predicting words. Every layer was once "the real programming" and every layer got built
on. Yours — plain language — is just the newest floor of the building.*
