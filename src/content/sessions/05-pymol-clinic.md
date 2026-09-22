---
title: PyMOL clinic
description:
  A hands-on session writing a PyMOL selection-language script instead of
  clicking through the same steps by hand
week: 5
date: 2027-03-22
teachers:
  - idris-fenn
spec:
  - a `.pml` script exists that loads a structure, makes a named selection with the selection language, and produces a rendered image with no manual clicking
  - the script runs a second time on a different PDB ID with only the ID changed
related:
  - lectures/week-05
---

## Before the session

Bring the structure you've been using, and a text editor you're comfortable
in.

## In the session

Write a `.pml` script that reproduces, from a blank PyMOL session, the render
you'd otherwise build by hand: fetch, select, colour, show, ray, png. Then
swap in a different PDB ID and rerun it unchanged, to confirm the script
generalises rather than encoding one structure's quirks.

## Afterwards

This script is the seed of the tooling you'll reuse for the
[final project](/assessments/final-project/) — a script survives you changing
your mind about which structure to analyse; a sequence of manual clicks
doesn't.
