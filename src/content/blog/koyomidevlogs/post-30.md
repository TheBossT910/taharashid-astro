---
title: "Devlog: Feb 19, 2025"
description: "Project: AnimeTracker"
date: 2025-2-19
---

*AnimeTracker*

- I made a method to get all episodes for a show
- Needs to be optimized more
    - Need to use batch writes differently (currently, I only batch-write / anime when I could be batch writing/multiple anime. I think I will need to create/modify my function to handle this)
- Not all episodes are being fetched… This is some problem with how we fetch the data from TVDB
    - It could be that there isn't a seasonNumber, or the airdates could be different?
    - NOPE! The issue is that the "referenceAirDate" is some bogus date
    - I think I fixed this issue. What I did was instead of always getting the 1st date, I got the "middle" air date
