---
title: "Devlog: Mar 20, 2025"
description: "Project: AnimeTracker"
date: 2025-3-20
---

*AnimeTracker*

- We should make a way to submit feedback
- Doesn't Firebase have something for user stats? Google analytics?
- For the date picker to choose the airing week, if we go beyond the dates, then it doesn't load in different anime (it still loads the same shows?)
    - This is because of initialLoad. So, whenever we change the date we should all initialLoad again?
    - But the old shows still stay…
    - So, what we need to do is check (after each date change) something… something with airingKeys?
    - Okay, we currently "solved" this by just putting a "reload" button at the top
- Now, I'm going to work in Python on the updateShows() method
    - Initial creation done! Now need to check if it will work with the db -> IT DOES! Lets go!!
    - Also I've noticed that it doesn't scrape some shows? Like Sakamoto Days. BUT! That is an API problem… So we can't do anything about it
    - updateShows() and the getShows() are actually the same method but with different queries… We can combine this into 1 method
- I've noticed that ReZero's airing dates are 1 month off?
- TODO: still need to get episode # from TVDB and add to database
    - DONE

- <mark>Because I changed the layout of the DB + deleted/added to it, I need to make new "keys" or whatever so that the DB can easily index stuff… This is why we can't access anything</mark>
- Nvm this is wrong…
- I'm such an idiot. Because I was signed in, it was trying to fetch all shows from my watchlist/favourites but because I deleted the DB, those shows weren't there 🤦🏽

- After testing DB, there is still a high number of reads. I think this is because everytime we load a show, we also read all of its episodes
- <mark>Instead, we should only read its episodes in the Schedule/Airing views (?)</mark>
    - And we specifically filter for the episode we want with Unix #s (essentially what we are doing right now when we try to get airing shows)
    - Wait, hold on. When we get airing shows, then it reads all episode data into DB (not really ideal at the moment), BUT it does get episodes… So we could easily implement this!
    - Preferably, I would also like to NOT go through every episode :P

- 649 reads in 1 session, ~15 episodes/show, therefore 16 reads/show
    - So, that means we looked through ~44 shows, which does actually sound realistic
