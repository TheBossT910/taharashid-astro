---
title: "Devlog: Feb 20, 2025"
description: "Project: AnimeTracker"
date: 2025-2-20
---

*AnimeTracker*

- I will try to fix the batch-write issue today (for epsiodes)
- I'm also noticing another issue, some shows will not get their broadcast dates written
    - This could be because some shows don't start at ep 1, they start at episode 10 for example
    - Huh, this is NOT the issue as TVDB takes care of this. If I manually run the function to grab season episodes, everything works as expected…
    - I see the problem. If I give it the middle air date, then it returns nothing. If I give it the initial air date, then it returns something.
    - I think I will just have to implement a function where we go through all air dates until we retrieve something back
        - Doing this fixed the issue!
- Anime that were not being scrapped properly:
    - 163134 (ReZero S3)
    - 171038 (Nina the Starry Bride)
    - Now, these are being properly scrapped!
- To optimize the episode scraping, I will allow it to take in a content array (similar to batch-adding shows)
- I made the method to do this, so it should be furthur optimized (still haven't tested this)
- I completely revamped getSeasonEpisodes method
- I'm noticing even if I don’t read/write to Firebase, it is still pretty slow
    - I know fetching the anime data is really fast
    - The read/writes to FB aren't doing anything right now
    - It must be the TVDB script
    - In the TVDB script, I actually also call another method. This is also slowing everything down
- Plan to optimize TVDB script:
    - Don't call other methods
    - Async calls
    - I also need to completely revamp getSeasons (again) to accommodate for this
        - In getSeasons, we simply pass in the whole episodesData array will all of our episode data
- TVDB script optimized! getNewlyAdded has been optimized! We went from 60s to roughly 4s! 15x improvement
    - We also just fixed the issue where animes were not scrapped properly again, resulting in a run time of 6s
    - 10x improvement from original!
- I now need to improve the getAiringSchedule method (compeltely re-do it) (it is also not working properly right now for some reason…)
- (Will do later)
- Worked on the Swift client, starting to make the new database class and made a tester for it too
    - It is working, but takes a while to load in everything, which is annoying (need to fix)

<img src="/blog/koyomidevlogs/post-31/drawing.png" alt="drawing" style="max-height: 800px; width: auto">
