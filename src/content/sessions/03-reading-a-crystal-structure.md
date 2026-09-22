---
title: Reading a crystal structure
description:
  A lab session interrogating a real crystal structure's resolution, B-factors
  and missing regions in PyMOL
week: 3
date: 2027-03-08
teachers:
  - idris-fenn
spec:
  - you can state your assigned structure's resolution and what experiment produced it
  - you can colour a structure by B-factor and identify its least-confident region
  - you can identify at least one gap in the chain and give a plausible reason for it
related:
  - lectures/week-03
---

## Before the session

Nothing to prepare — a structure is assigned to you at the start of the
session.

## In the session

Working from the PDB header of your assigned structure, find its resolution
and the experiment that produced it. Colour the structure by B-factor
(`spectrum b`) and find its least-confident region. Then find a gap in the
chain — a missing loop is common — and read the header for why it isn't
there.

## Afterwards

Keep notes on your structure; next week you compare the same kind of reading
across a structure solved by a different method.
