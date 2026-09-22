---
title: Comparing methods
description:
  Loading the same protein solved by X-ray, cryo-EM and NMR into one PyMOL
  session and seeing where the methods agree and disagree
week: 4
date: 2027-03-15
teachers:
  - idris-fenn
spec:
  - three entries for the same protein, solved by three different methods, are loaded and superposed
  - you can name one thing that differs between the three (an ensemble vs a single pose, a resolved loop vs a missing one, a bound ligand present in one but not another)
  - you can say which entry you would use for a question about a single side chain's exact position, and which for a question about flexibility
related:
  - lectures/week-04
---

## Before the session

Nothing to prepare. Structures are provided.

## In the session

Fetch and `align` (or `super`) three PDB entries for the same protein — one
X-ray, one cryo-EM, one NMR — into a single session. Look for where they
agree and where they don't: a loop resolved in one and missing in another, an
NMR ensemble spread across a region a crystal structure shows as one fixed
position, a ligand present in only one entry.

## Afterwards

Being able to say *which* method's output answers *which* question is the
skill this week is for — it comes back directly when you choose a structure
for the [final project](/assessments/final-project/) in week 10.
