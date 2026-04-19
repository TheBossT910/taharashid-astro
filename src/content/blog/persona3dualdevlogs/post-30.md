---
title: "Devlog: April 18, 2026"
description: "Project: Persona 3 Dual"
date: 2026-04-18
---

*Persona 3 Dual*

- Decided to keep music format as **.mp3** (until we see any issues)
- Got **NitroFS** to work, now we are reading music from the filesystem instead of storing it on RAM
- Converted the `MusicView` into a **controller** and deleted the view and references
    - Added music to **Intro, Menu, and Iwatodai Dorm** views
    - Added a **start/end point** to `MusicController` so we can loop sections of songs (used this in the menu)
- Needed to refactor `DialogueController` to properly work with `MusicController`
- I do need to update the views that use the `MusicController` since now they have a **load time**, which makes some things look a bit weird
- There are also some **audio glitches** when we load in a track that I want to fix
- Also, it looks like the game will **crash** if we go in/out of a zone and try to load the music?
