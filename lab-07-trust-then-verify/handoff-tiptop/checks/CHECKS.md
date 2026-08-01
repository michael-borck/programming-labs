# TipTop — acceptance checks

Plain-language checks, each automated in [`checks.js`](checks.js). Run all of them with:

```
node checks/checks.js
```

1. **No lost cents** — $100.00, 0% tip, 3 people: the three shares sum to exactly $100.00.
2. **Tip maths** — $100.00 at 10% tip: tip is $10.00 and the grand total is $110.00.
3. **Zero tip** — $60.00 at 0%: grand total equals the bill, $60.00.
4. **Even split** — $120.00 at 0%, 4 people: each pays exactly $30.00.
5. **Default tip** — the tip field starts at 10%, per the spec.

All five passing as of v1.3.
