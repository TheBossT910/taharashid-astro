---
title: "Devlog: Jan 7, 2025"
description: "Project: AnimeTracker"
date: 2025-1-7
---

*AnimeTracker*

Plan:
- Plan is to implement favorites to work properly when in the list view, and sort by favorites
    - If you tried to unfavorite an anime at that point, it would do it in Firebase and update, but the UI would not update. This is because it was basically taken out of a "list" of sorts that allowed the View to stay active then
- Will try to make a function to handle this!
- It’s a bit late now, so I'm going to stop today
- What I recommend is looking at how the old AnimeTracker did it (the main branch) because technically it should have had the same issue!
- I asked ChatGPT for any help and it gave an interesting suggestion:
    - Do all of your "isFavorite" computations within the forEach loop for each specific anime, and only display that anime if it is favorited. This means that the ForEach instead of going through the filtered animes, it goes through every anime and ONLY displays it when it is favorited/not favorited
