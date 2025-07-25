---
title: "Devlog: Feb 15, 2025"
description: "Project: AnimeTracker"
date: 2025-2-15
---

*AnimeTracker*

- Happy Birthday Zain!
- I reorganized the structure of Anime Tracker Data Parser stuff to align with the new ways/ideas to grab data
- Updated README with file organization
- Created fetch_data.py with notes on my planned functions
- I will manually create the GraphQL queries (with some help with AI examples, but NOT made with AI) so we can very particularly filter/get what we want

Efficiency times
- ~7 minutes to go just fetch every single airing show (BUT this is ALL airing shows, which we only fetch once?)
- ~230ms to grab shows airing for 1 day (this is 1 page = 230ms)
    - From 1 week before to current day (7 days), ~437ms/page, (1.3sec total time)
    - It doesn't look like we can look 1 week into the future? (we can leave this functionality for now)
- We could reduce times via async (but I don't want to flood the API/be IP-banned)

- Took ~224ms to grab shows that start AFTER Feb 15 (and there were 2 pages)
    - So we could do this biweekly/monthly quite easily
Even starting from Jan 1st, there were 3 pages
