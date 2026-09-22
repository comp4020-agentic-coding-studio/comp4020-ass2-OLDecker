---
title: Align and compare
description:
  A hands-on session structurally aligning two related proteins and reading
  the RMSD and per-residue deviation that comes out
week: 8
date: 2027-04-12
teachers:
  - idris-fenn
spec:
  - two structurally related PDB entries are superposed with an alignment command and an RMSD is reported
  - you can identify at least one region that aligns well and one that doesn't
  - you can give a plausible functional or evolutionary reason for the mismatch
related:
  - lectures/week-08
---

## Before the session

Nothing to prepare. Structure pairs are provided, or bring your own pair if
you already have two related proteins in mind.

## In the session

Superpose two structurally related entries (`align` or `super` in PyMOL),
read the reported RMSD, and then go region by region: where does the
alignment hold tightly, and where does it fall apart? A mismatch is usually
functionally interesting — a loop that moved to accommodate a different
ligand, a domain present in one and not the other.

## Afterwards

This is the same judgement — reading agreement and disagreement between two
structures — that [week 7's prediction lab](/sessions/07-prediction-lab/)
asked of a prediction against reality.
