---
title: "Devlog: December 9, 2025"
description: "Project: SavePoint"
date: 2025-12-09
---

*SavePoint*

- It has been a very long time, almost since reading week
    - Still exam season for me!
- Need to get things in order, figure out what to do and launch
    - Fix search menu (too transparent, make it more blurry and opaque) (DONE)
    - /search: Create dynamic loading (as you scroll, more items load) (DONE)
    - Implement lists (DONE)
            § Add pagination?
            § Manually create lists (All-time favourites, features, hot games) (DONE)
    - Implement stacks (DONE)
            § Add pagination?
- Other main items to do:
    - Fix http -> https for backend
    - Automatically scrape/generate lists (This is a bit complex, will defer this to a later stage)
            § sort total_rating_count desc; where total_rating_count != null; limit 500; offset 0;
    - Add games from IGDB
        - Make sure we can add them with years (DONE)
- NOTE: Right now, I'm going to check if 1. we can get year data (already implemented! Yay!) and 2. We can get collection data (through Postman tests)
