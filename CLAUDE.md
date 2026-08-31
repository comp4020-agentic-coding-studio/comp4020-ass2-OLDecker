# COMP4020 course-site: SlopU

Your repo for **Assignment 2**: a full course website for a course of your own
design, on the fixed SlopU/Astro platform. See `README.md` for what's fixed
(the theme, content collections, build pipeline) and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
for the brief and spec.

## How to work in here

- Keep the dev server running (`pnpm dev`) so you see changes as you make them.
- Run `pnpm check` before you push.
- Open the page in a browser and look at it. The rendered page is the truth;
  your mental model of it isn't.
- When a check fails, read its output before you change anything.
- Never commit a red state.

## The checks

`pnpm check` runs types, build integrity and the small course spec;
`pnpm check:evidence` is the final submission gate. Read the failure.

`spec/README.md`, `PROCESS.md` and `reflections/README.md` are in this repo and
say what they are for.

## This file is yours

A starting point, not a rulebook: what you add to it is the harness, and the
harness is assessed. This file and the sensors you wire into `check` carry
across the course.

## Gotchas found so far

- **Two Claude sessions in one working tree will clobber each other, and git
  gives you no warning at all.** `git status` shows the union of both
  sessions' edits as one indistinguishable set of modified files, so a `git
  stash`, `git restore` or `git checkout` by either one silently destroys the
  other's uncommitted work, and a `git commit -a` ships a half-finished
  feature nobody reviewed. `ListAgents` lists peer sessions and `SendMessage`
  reaches them: check file mtimes against your own edits when something you
  did not touch breaks, agree who owns which files, and verify your own
  changes in a throwaway `git worktree` at HEAD with your files copied in.
