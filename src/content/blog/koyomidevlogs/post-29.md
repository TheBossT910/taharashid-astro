---
title: "Devlog: Feb 18, 2025"
description: "Project: AnimeTracker"
date: 2025-2-18
---

*AnimeTracker*

- I've noticed that we are doing an insane amount of read/writes to Firebase
    - I want to reduce the amount of reads to Firebase, by perhaps caching our data?
    - We can add real-time listeners and our own cache mechanism
    - I will work on this later, for now I will work on Swift and displaying images from URLs
    - I added Swift displaying URLs
