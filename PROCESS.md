# Process

A good university course, to me, is one where you can't fake your way through
the assessment by being a good writer. SLOP1795 is about reading protein
structure, so the thing worth protecting is that every claim a student makes
traces back to an actual PDB entry they can point at, not a plausible-sounding
paragraph about "the fold." The second thing worth protecting is that the two
staff roles stay distinct: a lecturer who sets the conceptual arc and a tutor
who owns the hands-on tool time, so students always know whose office hour a
question belongs in.

I encoded the first commitment as far as content design lets it reach.
Assignment 1 and the final project both require a spec bullet stating "what
the analysis does not or cannot show, given the structure's method and
resolution" — evidence over confidence, made a submission requirement rather
than a marking-scheme aspiration
([`4b9a5ff`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/4b9a5ff),
[`de6e5a0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/de6e5a0)).
I deliberately did *not* try to make that mechanical: whether a stated
limitation is the *right* one for a given structure is a judgement call, and a
regex or word-count check on prose would reward gaming the checker over
writing the sentence honestly. `spec/README.md` calls this out directly —
some lines only a person can judge — so it stays a crit-time read, not a test.

The second commitment, the role split, *is* structural rather than
prose, so I encoded it as a real check:
[`spec/course-design.test.ts`](spec/course-design.test.ts) asserts every
lecture's `teachers` includes the convenor and every session's includes the
tutor, reading the built course API rather than the source files, so it
survives a rename or a content rewrite the way `spec/README.md` asks
contract tests to. It sits alongside the supplied
`spec/assignment-2.test.ts`, which I'm keeping as written from a prior
session
([`736a654`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/736a654)):
twelve dated weeks and assessment weights summing to 100 both encode "the
course record has to actually be a complete, weighted course," not just a
folder of markdown that happens to build.

What I left out of the harness entirely: anything checking the *quality* of
a structural claim, and anything checking `CLAUDE.md`'s own gotchas log for
completeness. Both are things a human — a tutor at a crit, or me re-reading
my own notes — is better positioned to judge than a script, and a check that
can't actually distinguish a good answer from a well-formatted one is worse
than no check, because it teaches students to satisfy the check instead of
the goal.

Content itself — the twelve weeks, both assessments, the two staff bios, the
home-page art — was written directly against the schemas in
`src/content.config.ts` and committed one topic at a time
([`cc95359`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/cc95359)
through
[`e456e1e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/e456e1e)),
with `pnpm check` run after each batch rather than only at the end — it
caught a schema-length overrun and an invalid YAML scalar
([`3aedfb0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-OLDecker/commit/3aedfb0))
before they could compound.
