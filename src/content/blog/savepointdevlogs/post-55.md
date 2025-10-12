---
title: "Devlog: September 15, 2025"
description: "Project: SavePoint"
date: 2025-9-15
---

*SavePoint*

- NOTE: When updating a game and adding images, keep the id = 0!
- Created stacksService, searchService, listsService
- Currently, I'm trying to integrate the backend into the details view
    - Add Metaphor: ReFantazio content (+Persona 5: Royal for testing purposes)
    - I forget to display developer. Fix this!
- In the Game dto, I need:
    - Reviews (id, rating, source) -> like images
    - HLTB (id, main, main + sides, completionist, all styles) -> like images
    - Platforms (This is just like genres, many-to-many)
    - Splash img (string)
