---
title: "Predicting structure: homology modelling to AlphaFold"
description:
  How structure prediction moved from template-based homology modelling to
  deep-learning models, and what a confidence score does and doesn't promise
week: 7
date: 2027-04-05
teachers:
  - marisol-quaye
related:
  - sessions/07-prediction-lab
---

Deep-learning structure prediction changed which questions "what does this
protein look like" needs an experiment to answer. This lecture covers what
changed, in outline — evolutionary coupling, learned structural priors, and
why a model trained on solved structures can predict ones it has never seen —
and spends real time on per-residue confidence: what a pLDDT score means, and
why a confident prediction and a correct one are not the same claim.

## Outline

- homology modelling's ceiling: no close template, no reliable model
- what changed with deep-learning prediction, without the architecture
  details
- per-residue confidence (pLDDT) as a claim about the model, not the protein
- where predictions still mislead: flexible regions, complexes, anything far
  from the training distribution
