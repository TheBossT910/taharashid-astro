---
title: "Devlog: Feb 16, 2025"
description: "Project: AnimeTracker"
date: 2025-2-16
---

*AnimeTracker*

- Ugh, I'm going to pause work on this. I need to figure out what information I need, and what sources to retrieve this information from, and how to structure my FB storage
- AniList does not have episode descriptions, and I need this!
- Tvdb has descriptions that I want, just 12/year paid though
- We need to make a list of info we want, and figure out where to get it from!
- I have been working on AnimeData Data for a while now, figuring out what informaiton we need, and implementing functions
- On Notion, I made notes on what data fields we have/want, what they do, and what data source supplies the information
- I have mostly implemented the getNewlyAdded function
- I will implement the getWeeklyAir and getDailyAir. They should require the same implementation, so I could just implement the main functionality in the function that they both call!
