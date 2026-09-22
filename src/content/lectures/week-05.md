---
title: Living in the PDB
description:
  The PDB file format, what a header actually contains, and enough PyMOL
  scripting to stop clicking and start writing
week: 5
date: 2027-03-22
teachers:
  - marisol-quaye
related:
  - sessions/05-pymol-clinic
---

Every structure you've touched so far came with a header full of metadata you
mostly skipped past. This lecture goes into the PDB/mmCIF format itself —
what `ATOM` and `HETATM` records hold, how chains, residues and alternate
conformations are named, where ligands and waters live — and then into
scripting PyMOL directly, so selections and figures stop being one-off mouse
work and become something you can rerun.

## Outline

- `ATOM` vs `HETATM`, chains, residue numbering, alternate conformations
- what's in the header: resolution, method, authors, related entries
- PyMOL's selection language, past the point of clicking
- writing a short `.pml` script instead of repeating commands by hand
