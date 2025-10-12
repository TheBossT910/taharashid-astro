---
title: "Devlog: September 29, 2025"
description: "Project: SavePoint"
date: 2025-9-29
---

*SavePoint*

- Created migration

What to do:

Details:
- Make sure we have all of the base properties needed to display data properly
    - I.e. NOTHING IS HARD-CODED
    - Splash picture (done)
    - Reviews (done)
    - Platforms (need to test if this is working in backend)
Home/Games
- Display games via DB
- Link games to details view

Backend (DONE)
- GameUpdateDto/GameCreateDto -> Resolvers!
- Need to make resolvers for "Platforms", "Reviews", "PlayTime" properties (DONE)

How to add new properties to models (steps for future me)
- Create Models for new properties
- Add properties to Model that we want to carry them
- Create DTOs for new properties
- Add properties' dtos to Model's dtos (understanding what type of relation it is, i.e. "Do I need to add ids?"
- Add mapping (in mapper between properties model/dto, and the model's model/dto)
- Add properties' tables in DbContext
- Create/add resolvers for non-basic data
- Set resolvers in Program.cs
