# Roadmap — the build plan

The single source of truth for what's built and what's next, across **both** repos
(`programming-labs` and `programming-toys`). Work top-down within a phase; anything can be pulled
forward, but nothing gets dropped — an unchecked box is a promise. When an item lands: check it
off, flip its status in the relevant README table (labs table here, toys table in
`programming-toys`), and note anything learned in [`DECISIONS.md`](DECISIONS.md) — same commit.

Design details for every item live in [`DESIGN.md`](DESIGN.md) (lab one-pagers §Lab one-pagers,
toys §The toys).

## Done

- [x] Series design doc (`DESIGN.md`) — all 12 lab one-pagers, toys shortlist, evidence model
- [x] Framing essay (`SPEAK-SOFTWARE.md`)
- [x] Series hub README + per-lab template (`AGENTS` / `SPEC` / `DECISIONS` / `CRITIQUE`)
- [x] Lab 3 — Say What You Mean (built first as the format test)
- [x] Toy: `three-interpretations` (pairs Lab 3) — live on Pages
- [x] Both repos public on GitHub, MIT, Pages enabled on `programming-toys`

## Phase A — complete Act I (wonder & disillusionment)

- [x] Lab 1 — Hello, Department of One
- [x] Toy: `next-word` (pairs Lab 1 — warm-up link added to Lab 1's README)
- [x] Lab 2 — The Demo Illusion
- [x] Toy: `demo-illusion` (pairs Lab 2 — warm-up link added to Lab 2's README)

## Phase B — steering (Act II)

- [ ] Lab 4 — The Checklist It Can't Charm
- [ ] Lab 5 — The Flight Recorder
- [ ] Lab 6 — Teach the Intern
- [ ] Toy: `context-porthole` (pairs Labs 6–7)
- [ ] Provided repo for Lab 7 — a small product whose agent's claims and reality disagree
      (authored by vibe-coding from a flaw-spec, and saying so)
- [ ] Lab 7 — Trust, Then Verify
- [ ] Toy: `confidence-dial` (pairs Lab 7)

## Phase C — judgement (Act III)

- [ ] Provided repos for Lab 8 — two working versions of the same product, different in taste
- [ ] Lab 8 — The Taste Test
- [ ] Provided repo for Lab 9 — a near-good app awaiting polish
- [ ] Lab 9 — The Last 20%
- [ ] Toy: `tiny-tweak` (pairs Lab 9)
- [ ] Lab 10 — Run the Department

## Phase D — ownership (Act IV)

- [ ] Provided repo for Lab 11 — a messy-but-realistic repo *with* spec/delta/decisions trail
- [ ] Lab 11 — The Audit
- [ ] Lab 12 — Ship Something True

## Infrastructure & polish (no phase — do when it hurts)

- [ ] `package.sh` offline bundle for `programming-toys` (the security-toys artefact for LMS /
      offline labs)
- [ ] GitHub Pages for `programming-labs` (optional — markdown renders fine on GitHub; enable only
      if a book-style site is wanted)
- [ ] Course-mapping rows in both READMEs once a unit adopts the series
- [ ] Cross-link from books.borck.education / the books once the series has enough labs to point at
- [ ] Revisit the model-costs section in `SPEAK-SOFTWARE.md` before first student use (prices move)
