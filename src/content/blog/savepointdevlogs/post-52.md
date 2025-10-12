---
title: "Devlog: August 31, 2025"
description: "Project: SavePoint"
date: 2025-8-31
---

*SavePoint*

- I have implemented a lot of things so far, but I need to reflect before I continue coding
    -  What do I want to have implemented in V1? (ex. do I need accounts right now?)
- Going to read the GitHub plans, and look at my frontend/backend
- But there is definitely one thing that I have confirmed. This will be a long-time project. I will specialize learning Nuxt/Vue, Tailwind, .NET, etc. It is better to be awesome at a few things rather than be okay at a lot of things

- Phase 1
    -  View games/game details
    -  See all games in our DB
    -  Search for games
- What do we still need to implement?
    -  See all games in our DB
    -  Search for games
    -  Filtering (i.e. Top Rated, Console, etc.)
    -  Load-in transitions on our website (to make it look more modern)
- I'm not too sure how to do an all-games page yet. I'm thinking just use grid?
    -  Lets look at Netflix, IMDB, AniList, etc.
- I think I'll just create a page that looks similar to the home screen, and just display all games on there
    -  This page will also show up after you click enter on search (it will be the main search home page as well, see AniList)
    -  The banner will just be many games horizontally scrolling (similar to what we have on the details screen)
- I just added a /search page, which will also show all of the games in our DB
    -  I created a new InfiniteScroll component with the help of ChatGPT as well (and replaced the manual code in /details)
    -  Now, it is easy to use!
- Now I want to add load-in transitions to the website (DONE)

CODE
opacity-0 transition-opacity duration-700 ease-out
:class="loaded ? 'opacity-100' : ''" :style="{ transitionDelay: `200ms` }"

- Whats left is basically just the backend
    -  Need to make basic search functionality (DONE)
    -  Need to make basic filtering functionality (DONE)
    -  Finally, need to connect front/back ends together!
- I've come across an interesting problem. I can't remove old images/videos. We need to fix this! (DONE)
- Look into replacing img tags with NuxtImg for better performance
- Add links to footer items (DONE)
- I need to install some sort of user tracking software so I can see how users interact/what they use/stats
