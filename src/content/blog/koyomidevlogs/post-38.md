---
title: "Devlog: Mar 16, 2025"
description: "Project: AnimeTracker"
date: 2025-3-16
---

*AnimeTracker*

- I need to lock in – need to do a MAT1348 Quiz and ITI1100 assignment!
- I have an idea for optimization (also suggested by ChatGPT, but I'm coding everything of course)
- We initially load a set amount of animes
    - Whenever we get close to seeing all of them (i.e. in List view, scroll to the 15th anime out of 25), then we autoload more shows
    - Ex. if position of currently shown anime is <= length of whole anime list, getAnimes()
- For the schedule view, we will simply directly filter what we want to see from Firebase and directly make that request
    - These requests will be saved to a local variable, where then we can access them in a cache
    - Ex. getAiring(day: Tuesdays)
    - (FIRST SORT) We can check if the show itself is currently airing (even with different cours) by doing this: if the 1st episode <= current date <= last episode, then it is currently airing!
    - We can check what specific episode we want by doing this: We have the Unix range for the week we want to air, so we will simply fetch all episodes that are startWeek<= episodeAir <=endWeek. This should result in the episode we want!
        - here, instead of start/end week of the actual week, we put the start/end of the current week's weekday. i.e. currentStartTuesday <= episodeAir <= currentEndTuesday)
        - We could grab all animes airing this week all in 1 go, save them locally, then simply filter showing by day (only if this is more efficient, though)
        - It is possible this is less efficient as a user could only see like Monday and Tuesday, and not the whole week. Then, this is not good!
    - This method will grab ALL shows that meet the date and this airing criteria. Then, I think it should be okay to just grab all of them
- Instead of scraping every sub-document and collection, just get the main anime document. Then when we need to get the internal data, then we explicitly request it
    - This should drastically reduce the # of calls we make
    - Ex. in AnimeDetail, db.requestAnime[animeID] -> this first checks if we have an entry already (if db.animeData[animeID] != nil). Then if nil, we fetch and save!
- We should also run a refreshDB() method everytime the app starts. This checks the current date, and if the data is more than 1 week old, it removes all local data
    - Local data we always want persistent are the animes in watchlists, and favorited animes. Because the user will see these more, they have priority.
    - What this means is that after every refresh, we delete the old data and immediately do a full fetch (like what we currently do now) for the saved animes
        - We could also just do a simple scrape, and only get the anime doc (which would be more efficient, especially if the user has a ton of shows + doesn't always see them)
    - We should make it so all clients (everyone's app) updates at different times/different days, so there isnt an influx of requests
