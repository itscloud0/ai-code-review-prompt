# AI code review prompt

A review prompt for Claude Code, Cursor, and GitHub Copilot that asks for **falsifiable findings**: file and line, the input that triggers the problem, expected vs. predicted result, and the smallest test that fails today. Speculation is labeled `question`, untraced code is labeled `not traced`, and every review ends with a decision.

## Install

| Tool | File | Use |
| --- | --- | --- |
| Any chat model | [`PROMPT.md`](PROMPT.md) | Paste, fill in the intent, paste the diff |
| Claude Code | [`.claude/skills/review-diff/SKILL.md`](.claude/skills/review-diff/SKILL.md) | `/review-diff <intent of the change>` reviews `git diff HEAD` |
| Claude Code | [`.claude/skills/review-branch/SKILL.md`](.claude/skills/review-branch/SKILL.md) | `/review-branch <intent of the branch>` reviews `git diff main...HEAD` |
| Cursor | [`.cursor/rules/ai-review.mdc`](.cursor/rules/ai-review.mdc) | Manual rule: mention `@ai-review` with the diff or files |
| GitHub Copilot code review | [`.github/instructions/code-review.instructions.md`](.github/instructions/code-review.instructions.md) | Applied to pull request reviews; excluded from the cloud agent |

Copy the file for your tool into the same path in your repository.

If your default branch is not `main`, change `main` in the `review-branch` skill to its name.

## Verify findings before acting on them

A model reviewing a diff usually cannot see callers, production data, or configuration, and it can repeat the assumption that produced a bug. Treat each finding as a hypothesis until a test confirms it. [`examples/leaderboard.test.mjs`](examples/leaderboard.test.mjs) shows the loop on a small synthetic patch:

```sh
node --test examples/leaderboard.test.mjs
# 2 pass, 1 fail: sort() without a comparator orders [9, 100, 25, 3] as strings
```

Change the helper to `.sort((a, b) => b - a)` and all three tests pass.

## Background

The full walkthrough, including why each rule exists and what an AI review cannot settle, is in the [AI code review prompt guide](https://manualmode.dev/guides/ai-code-review-prompt). A broader manual method is in the [AI code review checklist](https://manualmode.dev/guides/ai-code-review-checklist).

Tool formats were checked against the [Claude Code skills docs](https://code.claude.com/docs/en/slash-commands), [Cursor rules docs](https://cursor.com/docs/context/rules), and [GitHub Copilot repository instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions) on 2026-10-20. Formats change; open an issue if a file stops being picked up.

## License

MIT
