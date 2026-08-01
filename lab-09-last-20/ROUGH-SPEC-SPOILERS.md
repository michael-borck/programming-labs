# Bookable rough-spec — ⚠️ SPOILERS ⚠️

**Learners: stop reading.** Finding the roughness yourself *is* Lab 9 — this file is the
authoring spec (dogfood rule: provided repos are built from specs, and say so). Instructors and
auditors, carry on.

---

## The design

Bookable must be **near-good**: every feature genuinely works, nothing is false, no check would
fail — and almost every surface carries a judgement-level flaw a non-programmer can feel. The
gap between "works" and "shippable" is 100% taste, which is the lab.

## Invariants (keep these true when maintaining)

- Zero bugs. All four validations fire correctly, valid submissions always succeed, the slot
  picker and every field genuinely work. If a learner finds a *functional* defect, that's a
  maintenance failure, not a plant.
- The roughness must be *feelable* without programming knowledge, and every item fixable by
  directing an agent with taste language + a done-means sentence.

## The planted roughness (a marker's dozen)

1. `SUBMIT OK: true` + a hex `ref` as the confirmation — machine-speak at the moment of success
2. `notes: undefined` in the confirmation when notes were left blank
3. Labels in database-ese: `SELECT SUBJECT_CODE`, `STUDENT_NAME`, `CONTACT_EMAIL`
4. Subject options show raw codes (`MATH_SEC`) with no human names
5. Times as bare 24h strings (`1400`) — no "2:00 pm", no day/date context at all
6. Error messages in dev voice: `ERROR: slot_id missing`
7. The submit button is grey (`#9aa5b1`) — reads as disabled next to the blue selection colour
8. Two clashing blues (`#2b6cb0` header, `#4a90d9` selection) and no other accent system
9. Fixed 600px box — functional but cramped and clipped on phones
10. Instant submit with no in-between beat — success appears so fast it feels untrustworthy
11. "Tutoring session request intake form v0.9" as the public tagline
12. No confirmation of *what happens next* — the user is left holding a hex code

Sharp-learner bait: several fixes look one-line and aren't — humanising times touches the slot
data, the render, and the confirmation; fixing `undefined` notes touches validation *and* the
summary; the "grey button" fix drags in the two-blues problem (you can't pick the button colour
without finally choosing an accent system). The polish ledger's rounds-and-lines columns exist
to catch exactly this.
