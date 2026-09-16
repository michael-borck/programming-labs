# Lab 14 — The Paper Trail {#sec-lab-14}

> **Kills the belief that:** "my documents are fine — I wrote them."
> **Builds the habit of:** the evidence trio as a checked artefact, not a diary.
> **Time:** ~60 minutes · **Needs:** any repository with a `SPEC.md`, `DECISIONS.md` and
> `CRITIQUE.md` (Lab 3 onward), and its agent. **Reference implementation:** the book's
> [`tools/trio_lint.py`](https://github.com/michael-borck/speak-software/blob/main/tools/trio_lint.py).

## The brief

You have been keeping the evidence trio since Lab 3. Here is the uncomfortable question: *kept it for whom?* Documents written for yourself pass your own reading every time — you know what you meant. But the whole point of the trio (Chapter 4's Replication Test, Chapter 15's audit) is that a stranger can act on it: a fresh agent, a colleague, a client's lawyer, you in six months.

This lab makes the stranger mechanical. You will commission a **trio linter** — a script that checks your three documents the way a gate checks code: SPEC exists, is substantial, and contains a "done means" section; DECISIONS carries dated entries; CRITIQUE states a position *with* a reason. Then you will run it on your own papers, and it will embarrass you slightly. That embarrassment is the product.

*(Reference implementation: the book's `tools/trio_lint.py`. It even flags the untestable
words — "nice", "clean", "robust" — that specs use when a decision hasn't been made yet.)*

## Part 1 — Specify the linter (20 min)

Add to your `SPEC.md`:

- The linter checks a project folder for the three trio files (any case)
- SPEC: exists, at least six lines, contains a "done means" section, and contains none of
  the untestable words: nice, clean, robust, user-friendly
- DECISIONS: exists, contains at least one dated entry (YYYY-MM-DD), and has real content
  beyond a bare header
- CRITIQUE: exists, is longer than a stub, and contains a reason (because/why/what I gave up)
- Every finding is specific enough to fix in under a minute

## Part 2 — Commission and run it on yourself (25 min)

> Build the trio linter per SPEC v2 as trio_lint.py, standard library only. Then run it
> on this repository and show me the findings.

Now the honest part: **fix nothing silently.** For each finding, write one line in
`DECISIONS.md` — fixed, or deliberately kept, and why. A finding you keep on purpose (a
deliberate "nice" in a friendly error message, say) is a decision. A finding you fix quietly
was slop.

## Part 3 — The stranger audit (15 min)

Swap repositories with a classmate or colleague and run *their* trio through *your* linter.
Then swap linters. Two lessons usually land:

- Other people's trails have gaps yours don't (and vice versa) — which is why the linter is a
  script and not a feeling
- Your linter and their linter disagree about what matters — which is a spec conversation,
  and exactly the argument the evidence trio is designed to host

## The trio

Yes, this lab lints the trio and also updates it: record the linter decision in DECISIONS.md,
note your findings and fixes in CRITIQUE.md, and bump SPEC if the linter itself earns a
"done means" line.

## Done means

- [ ] `python trio_lint.py` checks all three documents in one run
- [ ] The linter catches a missing "done means" section (test it by removing yours)
- [ ] Every finding is either fixed or recorded as a deliberate keep
- [ ] Your trio passes a stranger's linter, not just your own
