---
title: "Devlog: Mar 18, 2025"
description: "Project: AnimeTracker"
date: 2025-3-18
---

*AnimeTracker*

- Trying to implement schedule view lazy load
    - 2 cour: 164172
    - 1 cour: 176496
    - Check: if a show's first episode > date, ignore
    - If lastEpisode < currentDate, ignore

    - if firstEpisode <= currentDate <= lastEpisode, show whole show
    - If firstEpsiode <= currentDate and lastEpisode = nil, show the whole show
    - If both nil, ignore

- Problem I've noticed: because we do .sorted() for the keys in List and schedule row view, a show can stay perpetually at the bottom! (because it "sorts" to the bottom
    - FIXED! Use different array only storing keys
    - Implemented in Schedule row, still need to implement in List view
- I need to get the initial docs first (otherwise it crashes)
- I also need to check if those docs already exist in our local collection, and if the count <= 0 then run again

- Other problem: it runs like crazy when we are trying to filter out based on days
- Problem: it keeps crashing
    - I think what we want to do is add the animes we scrapped (which is what we are doing) but don’t filter looking at them, filter looking at the direct output from what we just got
    - But we also want to check if what we have saved is applicable to our view (im just going to ignore this for now :( )

- PLAN: completely redo how we are tackling this
- Make a new fn that gets all animes of that day, and stores to array
- Then we simply just show that array (easy)
- And we can add to main data (since we already scraped for it)

- Okay, I've gotten dynamic weekdays to work, but there are a lot of hard-coded values
    - Change all hard-coded values to variables
    - Do further testing
    - Also, change the wording from "weekdays" to "weekday" i.e. Tuesdays to Tuesday. It makes everything easier (or do the opposite, change all Tuesday -> Tuesdays)

- I got dynamic loading to work! Its done!
- I also fixed some bugs
    - One I remember is that in the Lists view, stuff was randomly being shuffled around so we used our orderedKeys list instead!

- Next steps: in schedule view, we show the data only for episode 1 (this is hard-coded). Switch to show data for current episode!
