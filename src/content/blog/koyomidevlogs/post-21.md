---
title: "Devlog: Feb 8, 2025"
description: "Project: AnimeTracker"
date: 2025-2-8
---

*AnimeTracker*

- First set of midterms finished
- I am currently working on the Python Data fetcher script and dealing with AniList API
- Due to limitations of AniList API (30 request/min is crazy), I am looking into other APIs
    - https://jikan.moe/
    - Free, open source, can lauch my own API using their stuff. Based off of MAL
    - Python integration: https://github.com/abhinavk99/jikanpy
    - Its les feature rich though… I'm just going to stick with (only) AniList API for now. Might change/expand the number of APIs later
- Using GraphQL with AniList to get what I want
- Check this out sometime, https://github.com/manami-project/anime-offline-database?tab=readme-ov-file
    - Collected anime data from multiple dbs, for offline use? He used it for his own project
