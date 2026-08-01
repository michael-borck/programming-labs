# Decisions — StallBoard

## 2026-07-19 — Weekly Special renamed to "Today's Pick"; rotation postponed

Rosa calls it "today's pick" out loud at the stall, so the board now says that. The automatic
Saturday rotation from the spec is postponed — Rosa wants to choose the pick herself each week
"depending on what looks good at 5am," which automation can't know. Hardcoded to strawberries
for launch; revisit whether rotation is wanted at all before building it.

## 2026-07-12 — Every price ends in .95, on purpose

Rosa is adamant: prices ending in .95 "feel like a market," round numbers "feel like a
supermarket." This is a client rule, not arithmetic — do not "fix" 4.95 to 5.00. Added to the
agent rules so it survives us.

## 2026-07-05 — Sold out never deletes

First build removed sold-out items from the board. Rosa hated it: "if the honey's gone I want
them sad about the honey — that's tomorrow's sale." Sold-out items stay, struck through, with
the mark. This is the product's whole personality; protect it.

## 2026-06-28 — Single file, serif, looks like a chalkboard not an app

Market stall, market feel. One `index.html`, no build, no framework. Georgia over a sans because
the board should read like handwriting's tidy cousin, not like software.
