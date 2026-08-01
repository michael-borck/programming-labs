# Decisions — TipTop

## 2026-07-28 — Fixed the lost-cent bug (v1.2)

A tester reported that $100 split three ways came out a cent short. Root cause was rounding each
share independently. Reworked the share calculation so the shares always sum to the exact grand
total, with the odd cent going to the first payer per the spec. Verified with the checklist —
check 1 covers this permanently.

## 2026-07-28 — Non-numeric input handled politely (v1.2)

Typing words into the total produced garbage output. Added friendly validation: anything that
isn't a number now shows "Let's try that with numbers" instead of breaking. Done as part of the
v1.2 hardening pass.

## 2026-07-21 — Default tip set to 10% (v1.1)

Client asked for 10% as the starting value after the phone call on Tuesday. Set and checked.

## 2026-07-14 — Single-file build (v1.0)

One `index.html`, no dependencies, no build step. Opens from file://, works on phones. Keeps
hosting trivial and handoff painless.
