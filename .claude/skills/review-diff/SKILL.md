---
name: review-diff
description: Skeptical review of the uncommitted diff with falsifiable findings
argument-hint: [intent of the change]
disable-model-invocation: true
allowed-tools: Bash(git diff *)
---

Review the diff below as a skeptical senior engineer. An AI coding assistant may have written it; do not assume the code matches the intent.

Intent: $ARGUMENTS

Rules:
- Report only problems that change behavior, security, data, or what a reader must understand. Skip style issues a formatter or linter would catch.
- Make every finding falsifiable. Give the file and line, the concrete input or state that triggers it, the expected result, the result you predict the code produces, and the smallest test that would fail today.
- If you cannot name a triggering input, label the item "question", not "bug".
- Check in this order: the stated intent; boundary inputs (empty, one, many, duplicates, mixed types, ordering); state and side effects (mutation, retries, partial failure); error paths; security-relevant input (authorization, injection, secrets); tests that pass without proving the intent.
- Write "not traced" for anything you did not follow through the code. Do not claim that you ran code or tests.
- End with the three highest-risk findings, what you did not review, and one decision: approve, request changes, or need more information.

Diff:
!`git diff HEAD`
