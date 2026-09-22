# Process overview

Written by me, for a reader: how I got from the fixed SlopU template to a
full course website for SLOP1795, and the agentic workflow behind it.

## What I built

SLOP1795, *Computational Protein Structure* — a semester on reading,
rendering and questioning protein structure computationally: real structures
from the Protein Data Bank, PyMOL, the three main experimental methods
(X-ray, cryo-EM, NMR) and their trade-offs, computational structure
prediction judged against experimental ground truth, and a self-chosen
structure taken apart in depth as the final project. The subject is drawn
from a real course I've taken; the content, weeks, people, assessments and
site artwork here are original.

## How I got here

I started in `/plan` mode to avoid touching anything before the shape of the
task was clear. An initial survey (an Explore subagent reading `README.md`,
`spec/README.md`, `PROCESS.md`, the content collections and both check
scripts) established that the platform scaffolding and spec contract tests
already existed but every piece of course content was still the shipped
placeholder — nothing had been authored yet. I asked what the course should
be about rather than guessing; once I had an answer (this real course of
mine) I exited plan mode and worked directly.

Before writing anything, I read the actual schemas the content has to
satisfy — `src/content.config.ts` and the shared `courseNodeSchema` in
`node_modules/astro-course-university/schemas.ts` — and every existing
starter file, so the frontmatter shape (`week`, `date`, `teachers`, `spec`,
`related`, `marking`) came from the real contract rather than guesswork.

> the course should be about
> /Users/ole/.../uni/master/FS2/protein_structure/ everything in here start
> working on it now fast

I designed the twelve-week arc from that folder's real lecture and exercise
topics — experimental methods, the PDB, PyMOL, structure prediction, a
project on a chosen structure — then wrote and committed it incrementally,
one week (a lecture/session pair) per commit, so each commit is reviewable on
its own:
[`bb2c840`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/bb2c840)
through
[`d2dc737`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/d2dc737),
with the two assessment briefs
([`4b9a5ff`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/4b9a5ff),
[`de6e5a0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/de6e5a0))
and the policies page
([`e456e1e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/e456e1e))
committed alongside the weeks that reference them.

The course record itself
([`cc95359`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/cc95359))
kept the reserved `SLOP1795` code and its level digit, since the brief marks
those as fixed regardless of topic.

`check:evidence` also requires the shipped starter images gone. For the two
staff portraits I took the image-free option the check script's own comment
calls out as legitimate — deleted them and dropped `photo`/`photoAlt` from
both people entries. For the home/social artwork, which the homepage and
`site-config.ts` actually import, I generated a replacement instead: a small
Python script plots two out-of-phase sine-wave "strands" with connecting
rungs, rendered through ImageMagick in the theme's own gold/black-on-cream
palette (read from `astro-theme-slop/slop.css`) and converted to AVIF with
`sips`, at the source image's native 2560×1086
([`d18c799`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/d18c799)).

Verification was `pnpm check` after content was in place, not just at the
end: the first run failed on two things — the course description over the
schema's 300-character limit, and a plain YAML scalar containing `": "` (an
unquoted colon-space reads as a mapping key) in the final project's marking
description. Both were schema/parser errors, not content problems, and both
are fixed in
[`3aedfb0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/3aedfb0),
after which `pnpm check` passed in full: `astro check` clean, the build's
own axe accessibility pass and broken-link checker clean across all 36
pages, the deck compiling, and all five spec tests green, including
`spec/assignment-2.test.ts`'s twelve-week and assessment-weight checks. I
then started the dev server and fetched the home page, the sessions listing
and a lecture page directly to confirm the rendered titles, hero art and
content matched what the frontmatter said, rather than trusting the build
log alone.

## Before you ship

`pnpm check:evidence` passes locally: no `STARTER_CONTENT` markers remain
under `src/`, none of the four starter image hashes match, and this file's
citations resolve.
