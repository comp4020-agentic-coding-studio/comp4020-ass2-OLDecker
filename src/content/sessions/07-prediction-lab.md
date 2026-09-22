---
title: Prediction lab
description:
  Loading a predicted model and its experimental counterpart into the same
  session and judging where the prediction is trustworthy
week: 7
date: 2027-04-05
teachers:
  - idris-fenn
spec:
  - a predicted model and a real PDB structure for the same protein are superposed
  - you can colour the model by its per-residue confidence score
  - you can name one region where the prediction is confident and correct, and one where it is confident but wrong, or honestly low-confidence
related:
  - lectures/week-07
---

## Before the session

Nothing to prepare. Model/structure pairs are provided.

## In the session

Superpose a provided predicted model onto its solved experimental
counterpart. Colour the model by confidence and compare region by region:
where does high confidence line up with a good match to the real structure,
and where doesn't it? Flexible loops and multi-chain interfaces are the usual
places a confident prediction still gets it wrong.

## Afterwards

This judgement — trusting a prediction exactly as far as the evidence
supports, and no further — is what next week's structural-comparison work
builds on.
