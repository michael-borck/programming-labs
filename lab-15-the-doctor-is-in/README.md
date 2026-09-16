# Lab 15 — The Doctor Is In {#sec-lab-15}

> **Kills the belief that:** "if it worked today, it'll work tomorrow."
> **Builds the habit of:** verifying the environment before the work — and writing down what a
> replacement would need.
> **Time:** ~45 minutes · **Needs:** your project repository and its agent.
> **Reference implementation:** the book's
> [`tools/lab_doctor.py`](https://github.com/michael-borck/speak-software/blob/main/tools/lab_doctor.py).

## The brief

Departments die of environment rot. The agent's CLI updated. The Python version moved. The one
API key lived in a chat that got deleted. Nothing *broke* — things just stopped working on the
day you needed them, and the diagnosis costs an afternoon you didn't have.

Professional shops solve this with a pre-flight: one command that checks the environment and
says exactly what's missing, before the work starts. You will commission yours, run it, fail it
on purpose, and then do the part that actually matters — write the replacement note. The doctor
tells *you* what's broken; the onboarding note tells *your replacement* what "working" means.

*(Reference implementation: the book's `tools/lab_doctor.py` — PASS/WARN/FAIL lines, no
network, no frameworks.)*

## Part 1 — Specify the doctor (15 min)

Add to your `SPEC.md`:

- The doctor checks: Python 3.8+ present; git installed; the folder is a git repository; an
  agent briefing file (AGENTS.md or similar) exists
- Each check prints PASS or FAIL with the exact fix ("run: git init")
- Soft checks (trio files, gate script, model credits) print WARN with guidance, never FAIL
- Ends with one verdict line: ready, or what to fix first

## Part 2 — Commission and fail it on purpose (20 min)

> Build lab_doctor.py per SPEC v2. Then demonstrate it working: run it here, rename AGENTS.md
> temporarily and run it again to show the warning, and restore the file.

The fail-on-purpose run is the habit: a doctor you have never seen fail is a doctor whose
FAIL lines you won't recognise at the moment that matters.

## Part 3 — The replacement note (10 min)

The doctor checks machines. Now write the note that checks *people*: a short `ONBOARDING.md`
section in your context folder answering one question — **what would a replacement need to
know to run this department on their first morning?** Accounts, model access, the one quirk of
the build, the thing that looks like a bug but isn't. Ten lines maximum.

Then the audit question: hand the note to the agent and ask, *"Following only this note, what
will the replacement hit in the first hour?"* File the answers.

## The trio

Same ritual as every lab: the doctor's spec lands in SPEC.md, the environment findings and the
onboarding decisions land in DECISIONS.md and CRITIQUE.md.

## Done means

- [ ] `python lab_doctor.py` runs from your project folder
- [ ] You have seen at least one FAIL and one WARN, on purpose
- [ ] ONBOARDING.md exists in the context folder, ten lines or fewer
- [ ] The agent's stranger-audit of your note produced at least one fix
