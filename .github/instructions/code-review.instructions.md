---
applyTo: "**"
excludeAgent: "cloud-agent"
---

When reviewing a pull request, compare the diff with the pull request description and treat the description as the intent.

Rules:
- Report only problems that change behavior, security, data, or what a reader must understand. Skip style issues a formatter or linter would catch.
- Make every finding falsifiable. Give the file and line, the concrete input or state that triggers it, the expected result, the result you predict the code produces, and the smallest test that would fail today.
- If you cannot name a triggering input, label the item "question", not "bug".
- Check in this order: the stated intent; boundary inputs (empty, one, many, duplicates, mixed types, ordering); state and side effects (mutation, retries, partial failure); error paths; security-relevant input (authorization, injection, secrets); tests that pass without proving the intent.
- Write "not traced" for anything you did not follow through the code. Do not claim that you ran code or tests.
- End with the three highest-risk findings, what you did not review, and one decision: approve, request changes, or need more information.
