---
title: "Devlog: Jan 8, 2025"
description: "Project: AnimeTracker"
date: 2025-1-8
---

*AnimeTracker*

- This issue is postponed for now. It is taking too much time (the favorites issue)
- I will focus on creating an @Environment for animeDataFBstuff, this might fix the issue (as it makes sure data is shared between views)
- I made all relevant views (ones that used animeDataFB) use @Environment, got the views to run without crahses but still some problems, and the main problem was still not fixed
    - I FOUND A FIX! So, I was not referencing the anime object from the @EnvironmentObject, which meant that it would not update the changes. So, I just need to recode/reformat all of the views which are strucuted like that (where I have to pass in anime objects, etc.) to just pass in the anime doc ID instead, and fetch the desired value via @EnvironmentObject from inside that class. Otherwise, this problem is solved!
