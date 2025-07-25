---
title: "Devlog: Mar 23, 2025"
description: "Project: AnimeTracker"
date: 2025-3-23
---

*AnimeTracker*

- It looks like we are getting a ton of reads/writes WHEN THE APP LOADS
    - This indicates the problem is the API script
    - It could be that whenever its server restarts, it doesn't save the json so then it scrapes from the default date
    - To solve this, we could pass in the unix date ourselves! (if this is the problem!)
    - YOO THIS IS ACTUALLY HAPPENING! I checked with the actual app/console output, and it is showing EXACTLY THIS!
    - <mark>We could solve this (universally) by having 1 doc for just this info in database instead of passing it in to the url (so this is client-agnostic!) (FIXED)</mark>
- Yo so there was this problem earlier where I noticed some animes were airing on the wrong dates… I think they are all 1 day ahead! (FIXED)
- For future: We could optimize how we get currentlyAiring shows (not priority right now)
    - As it gets all episodes (? I think)
    - Maybe not in Swift, but I know Python is 100% unoptimized (and needs to be renamed to database and NOT AnimeFirebaseData)
- Just test the app+db reads (more)

- I want to clean-up README + Notion, and launch a "blog"/devlog page, maybe with Notion?
    - Need to update app's images and add new Figma concepts
    - Um, I guess I'm making a portfolio site now? Lol, it will have my devlog which will replace this, but I will be busy with that for now -> I'm making a separate OneNote page for this
