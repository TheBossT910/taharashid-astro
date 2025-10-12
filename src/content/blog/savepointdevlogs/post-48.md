---
title: "Devlog: August 17, 2025"
description: "Project: SavePoint"
date: 2025-8-17
---

*SavePoint*

- Plan today is to integrate DB into backend
    - I also want to learn how to structure my database
- But first, lets fix some frontend problems!
    - Retailer map is broken (DONE)
    - Game stacks is messed up 😂 (DONE)
    - Add site-wide footer (DONE)
    - Add y-padding in gamecard for platforms (DONE)
    - Remove m-10 on mobile? (DONE -> adjusted margin/padding based on breakpoints)
    - Make the caresoul bigger in mobile (we want to see the cards larger) (DONE)
    - Dropdown navbar items are stacking (DONE)
    - Details: The scroll + images + desc is buggy (redid it, DONE)
- Btw do this npm run dev -- --host 0.0.0.0 --port 3000 to run on network
- I didn't really have time to work on the backend, was fixing up the frontend
    - Remember our vision! Convenient game tracking and business solution!
    - Don't worry about the design. We need to launch first, and the theme is pretty good in itself
- Hmm, and I'm thinking lets skip the SQL db for now. See if we can use Supabase with our backend. We already have that data, know how to use it, and it has other features like auth.
