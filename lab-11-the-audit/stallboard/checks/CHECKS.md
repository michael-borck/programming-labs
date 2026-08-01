# StallBoard — acceptance checks

Run with `node checks/checks.js`.

1. **Market prices** — every item's price ends in .95.
2. **Nothing priceless** — every item has a price.
3. **Sold out never deletes** — the sold-out path marks items; nothing removes them from the list.
4. **Single file** — no external scripts, stylesheets, or network calls in the board.
5. ~~**The count is honest** — marking two items sold out drops "still available" by exactly
   two.~~ *(disabled — see checks.js)*
