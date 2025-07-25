---
title: "Devlog: Mar 22, 2025"
description: "Project: AnimeTracker"
date: 2025-3-22
---

*AnimeTracker*

- Fixed the issue where we would have a ton of default images in schedule. This was because we used to look for the previous episode's banners, but we now only fetch 1 episode at a time (instead of all)
    - What I did was just default to the anime's splash/banner image, which looks really good right now
- I need to add a field in DB main for lastUpdated, and maybe use Unix time for this?
    - Basically whenever we do getAiring, we check lastUpdated. If the time is > 1 week, then we should call the python script from that date, then update getAiring to our current date!
- The animes airing on wrong date could be a timezone problem, i.e. unix date is in UTC and we want in ET
    - NVM all timestamps are in UTC, so this isnt the problem. It could be with TVDB

```
// check if a week has passed when the user opens the app
// if a week has passed, we want to call the Python fn to update the db
// hmm, maybe we should do this in python...
// OKAY! so this function always runs, but what it does is tells the Python fn to run?
// the python fn itself checks if a week has passed...
// We consider a new week on Sunday
// the way we will get data to update once is that we store the lastupdated var as the currentdate when we check data
 // we will simply call the Python fn
```

- Trying to make my Python fn an API to use with clients (ie. Swift)
- With ChatGPT's help, I've created an API
    - Using Render, fastapi, uvicorn
    - Here's the link https://animetracker-data-parser.onrender.com/convert-time/1672531199
    - IT WORKS! And works in Swift!!
- I made AnimeData Parser private, as Render wants to see our FB private files/keys
- After lots of debugging/testing, I think the API is working properly. At least, it isn't crashing anymore, and does update the timestamps correctly
- FYI I saw Python taking up 120MB of Ram for scraping 1 week's worth of data, so we probably cannot run a mass scrape via the API and need to do that ourselves
- Takes 176MB when airing + new shows (we will only do airing though)

- I implemented it in Python + Swift and merged their branches
- I want to do a little more testing on Swift, then actually launch the app!
