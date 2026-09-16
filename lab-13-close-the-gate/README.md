# Lab 13 — Close the Gate

> **Kills the belief that:** "I'll review it before it ships."
> **Builds the habit of:** every repository carrying a gate that runs before any commit.
> **Time:** ~90 minutes · **Needs:** a small Python project with tests — your Lab 4 repo is
> ideal — and its agent. **Reference implementation:** the book's
> [`tools/slop_check.py`](https://github.com/michael-borck/speak-software/blob/main/tools/slop_check.py).

## The brief

Lab 4 taught your department to run checks. But a check you must remember to run is a check you
will forget — on the busy day, the late night, the "it's only a small change" Thursday. The
department needs a gate: one command that runs *everything* — style, tests, coverage, forgotten
promises, the size of the change itself — and refuses to let slop past, no matter who is asking
or how tired you are.

You will not write the gate. You will commission it, from a specification, the way the book's
Chapter 9 teaches — and then you will try to sneak slop past your own gate, on purpose, to find
out whether it can be charmed.

*(The book's reference implementation lives at the link above. Do **not** copy it. Spec it
yourself first; compare only after yours runs.)*

## Part 1 — Specify the gate (20 min)

Add to your `SPEC.md` (v2):

- Gate 1 — `ruff check .` passes on every tracked Python file
- Gate 2 — `pytest` passes
- Gate 3 — coverage of `src/` never drops below 80%
- Gate 4 — fewer than 6 `TODO`/`FIXME` occurrences in tracked files
- Gate 5 — the diff against `main` is under 400 changed lines
- The gate is one command, prints one line per gate (PASS/FAIL with reason), and exits
  non-zero when any gate fails

Each bullet must pass the Lab 3 test: concrete enough that a stranger could check it.

## Part 2 — Commission and charm-test (45 min)

> My repository needs the quality gate in SPEC v2. Build it as one script,
> `slop_check.py`, under 100 lines, standard library plus ruff and pytest only.
> Then prove each gate works by showing it fail once and pass once.

That last sentence is the lab. A gate that has only ever passed might be a gate that can't fail.
For each gate, deliberately produce the slop it exists to catch — an unused import, a broken
test, a TODO, a 500-line change — and watch your gate refuse it. If any gate can be charmed,
tighten the spec and re-commission.

*(For the curious: the book's Chapter 9 shows the reference script and walks each gate line by
line.)*

## Part 3 — Wire it in (15 min)

> Make git run `python slop_check.py` before every commit and block the
> commit when it fails.

Then the audit questions, as always:

- Does the gate run when you forget to run it? (Prove it: try to commit slop.)
- Can you bypass it? (Yes — and should you be able to? What does that decision look like when
  it's recorded in DECISIONS.md?)

## The trio

Update all three: SPEC v2 in `SPEC.md`; the gate decision and its thresholds in
`DECISIONS.md`; what the gate caught on your first honest run in `CRITIQUE.md`. Then run the
evidence-trio linter from the book's tools folder (`trio_lint.py`) and fix what it finds.

## Done means

- [ ] `python slop_check.py` runs all five gates with one command
- [ ] You have personally watched each gate fail on real slop
- [ ] Commits are blocked while the gate is red
- [ ] SPEC, DECISIONS and CRITIQUE reflect the gate's thresholds
- [ ] A pre-commit hook runs the gate so you cannot forget
