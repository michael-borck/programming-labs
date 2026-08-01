# Spec — TipTop

## Who it's for, in one sentence

People at a table who've agreed on a tip and want the split settled before the card machine
arrives.

## Done means

- A user can enter total, tip % and people, and see tip, grand total, and each person's share
- Shares always sum to the exact grand total — no lost cents
- Any input that isn't a number gets a polite message, never garbage
- Works in any modern browser from a single file, including on a phone
- Default tip is 10%

## Must NOT

- No accounts, no sign-in, nothing saved
- No currency conversion — one currency, whoever's holding the bill

## Out of scope (deliberately)

- Itemised splitting (that's a different product)
- Rounding preferences — the odd cent goes to the first payer, always
