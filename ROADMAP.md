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

- [x] Lab 4 — The Checklist It Can't Charm
- [x] Lab 5 — The Flight Recorder
- [x] Lab 6 — Teach the Intern
- [x] Toy: `context-porthole` (pairs Labs 6–7 — warm-up link added to Lab 6; add one to Lab 7's
      README when that lab is written)
- [x] Provided repo for Lab 7 — `handoff-tiptop/`, built from `FLAW-SPEC-SPOILERS.md`
- [x] Lab 7 — Trust, Then Verify (links both toys as warm-ups)
- [x] Toy: `confidence-dial` (pairs Lab 7)

## Phase C — judgement (Act III)

- [x] Provided repos for Lab 8 — `brewcrew-a/` + `brewcrew-b/`, one spec, two taste briefs
      (`AUTHORING.md`)
- [x] Lab 8 — The Taste Test
- [x] Provided repo for Lab 9 — `bookable/`, built from `ROUGH-SPEC-SPOILERS.md`
- [x] Lab 9 — The Last 20%
- [x] Toy: `tiny-tweak` (pairs Lab 9 — warm-up link in Lab 9's README)
- [x] Lab 10 — Run the Department

## Phase D — ownership (Act IV)

- [x] Provided repo for Lab 11 — `stallboard/`, honest-but-incomplete trail, built from
      `MESS-SPEC-SPOILERS.md`
- [x] Lab 11 — The Audit
- [x] Lab 12 — Ship Something True

**All twelve labs and all six toys are shipped.** Remaining work lives below.

## Infrastructure & polish (no phase — do when it hurts)

- [ ] `package.sh` offline bundle for `programming-toys` (the security-toys artefact for LMS /
      offline labs)
- [x] GitHub Pages for `programming-labs` — a single-file landing page (`index.html`, same
      tokens as the toys so the two sites read as one family); lab content stays on GitHub as
      markdown, the landing is the front door
- [ ] Companion book — *Speak Software*, through the existing book-publisher pipeline: the
      framing essay + twelve lab briefs + margin notes are most of a manuscript already; decide
      after the labs have met real learners
- [ ] Course-mapping rows in both READMEs once a unit adopts the series
- [ ] Cross-link from books.borck.education / the books once the series has enough labs to point at
- [ ] Revisit the model-costs section in `SPEAK-SOFTWARE.md` before first student use (prices move)
