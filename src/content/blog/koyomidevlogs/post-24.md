---
title: "Devlog: Feb 13, 2025"
description: "Project: AnimeTracker"
date: 2025-2-13
---

*AnimeTracker*

- 49 cm of snow ☠️
- I'm going to pause work on Anime Data Parser for now, and focus on fixing the Styling for the iOS app
    -  After I am done styling, I will work on cleaning up/organizing Swift (particularly my implementation of AnimeDataFirebase class better)
    -  I want to make it so that it is just a "generic" database class, and enums are in separate file
    -  We will be accessing anime_data (or whatever the new Firebase doc is) without any "season" data needed
        - Relational data will be done seperately, essentially nodes linking to documents in another document called anime_relations (or something like that)
- In the styling branch, I will update the screenshots of the app! (for the GitHub repo, and use the simulator directly to take screenshots!)
- I basically fixed all stuff for styling, and will merge the branch into main (the other small items I will save for a major UI revison of the app)
- Created the dynamic-media branch
