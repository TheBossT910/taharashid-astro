---
title: "Devlog: Feb 17, 2025"
description: "Project: AnimeTracker"
date: 2025-2-17
---

*AnimeTracker*

- Implemented the getAiringSchedule function. Not fully completed
    - Notes:
    - To get the correct season in TVDB, we can compare the first air date for each season. This way, we will be able to select the correct season.
    - Switch from using AniList ids internally to using MAL IDs. AniList also supports using MAL IDS so see if we can switch easily. This will allow us to match with many more shows on TVDB
    - Random comment from code:
    ```
        # TODO: Also scrape each episode's info on TVDB. If a show does not exist, we want to run a function to specifically create that show.
        # We will look up the show in Firebase using the AniList ID, and get the the TVDB id, then scrape the selected episode using that!
        # We can select the correct season (and specifically the correct episode) by searching through all episodes for the matching air date of the episode.
        # method to grab info from FB. if "false", then we create a new episode
    ```

- I've gotten the currentlyAiring to work, but the problem was that not all entries had AniList ids, but many more had MAL IDs
- So I modified the implementation to use Mal IDs instead, which is still useful for future reference if we want to add MAL functionality
- Now I need to think about optimization!
    - Do stuff async
    - Check if entries exist in database before scraping for them
    - Remove unnecessary data fields
    - I've noticed that getting the data seems somewhat okay speed, but CREATING the new firebase fields takes quite a bit of time
- Some animes still don’t seem to be getting their episode data scrapped…
    - I found the problem; you need to go to the next page!
- NOTE: remove tvdb.py from .gitignore, and other files you might be using!

- WOW! We really optimized getNewlyAdded()
    - Before batch writes: 56.98seconds / 200 items
    - After batch writes: 2.92seconds / 200 items
This is an insane <mark>94.88% improvement, 19.52 times faster </mark>!
