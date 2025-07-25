---
title: "Devlog: Jan 14, 2025"
description: "Project: AnimeTracker"
date: 2025-1-14
---

*AnimeTracker*

- Man, I've just been busy this past week so I couldn't work on the app. I have a bit of time now, so I'm just going to clean up the code today (so I can start working back with my custom Schedule views!)
- Updated Categories views. Now the only ones left are the incomplete views anyways!
- Problem: Firebase sometimes doesn't load all 10 items (likes to load in 9)
    - This means that JJK (the last item) sometimes isn't loaded in
    - Solved: "Publishing changes from background threads is not allowed; make sure to publish values from the main thread (via operators like receive(on:)) on model updates." -> just add @MainActor in front of the AnimeDataFirebase class to make it act in the main thread and not just in the background
- Now, I can start working on the Schedule views!
- <mark>Need to delete Anime and AnimeData.swift and .json from Xcode now! (deprecated fully!)</mark>
    - <mark>Then, I can push changes to main branch!</mark>
    - <mark>THEN, I can make a separate branch to work on making Schedule view!</mark>
