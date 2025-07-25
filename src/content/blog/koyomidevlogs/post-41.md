---
title: "Devlog: Mar 19, 2025"
description: "Project: AnimeTracker"
date: 2025-3-19
---

*AnimeTracker*

- Its 12:08am, so basically same coding session
- I made it so that each episode shows its own info (instead of episode 1)
- We need to figure out how to integrate the Python script so that we can automatically run it after 1 week and update animes
    - We can kinda put this off? If we delete all items in the DB then scrape them again before launch, it makes all data fresh so everything should be okay for a while (?)
    - BUT! We actually need to fix this/implement Python scripts more efficiently and fix whatever problems we had in it
    - I deleted anime_data, and will refresh it to check…
    - Fetching data from 2020/01/01 (Jan 1st, 2020 until now)
- So far, the app seems to be working fine
- Still need to test if my data fetching did reduce # of reads…

- IDEA: select between different weeks using a system dialog to get the Date (and then we input Date into the function to return the shows we want to see)
    - Everything beyond the current week is blacked-out
    - Try to only select weeks/not specific days?

- Plan:
    - <mark>Implement this idea (select different airing weeks)</mark>
    - <mark>Swap the "currently airing" shows to just pick 3 random favourite/watchlist shows and display them (DONE)</mark>
    - <mark>Comment out the "playing bar" and the "checkmarks" (not implemented yet) (DONE)</mark>
    - After these Swift changes, go to the Python DB data fetcher and read up on it. What do you want to do with it? What is it currently doing? What problems does it have to solve?
            ○ Now that you have implemented it into Swift, you have a better idea/understanding of what it needs to do
            ○ Generally: Mass scrape shows
            ○ Scrape currently-airing shows?
            ○ Be able to get specific shows
    - <mark>Check Notion for notes</mark>
- We could also further reduce DB calls by combining main/files/general all into 1 document
    - Reduces from 4 reads to just 1 read!
