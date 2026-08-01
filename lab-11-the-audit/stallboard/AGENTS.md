# House rules for agents working on StallBoard

## Always

- Every price ends in .95 — client rule, not arithmetic. Never round to whole dollars.
- Sold-out items stay on the board, struck through. Never delete or hide them.
- Run the checks (`node checks/checks.js`) before reporting anything done.
- Keep it one file, no dependencies — it must work offline at the market.

## Never

- No emojis anywhere on the board — Rosa hates them ("it's a farm stall, not an app").
- No accounts, no storage, no network calls.
- Never show an item without a price.
