---
title: "Devlog: April 11, 2026"
description: "Project: Persona 3 Dual"
date: 2026-04-11
---

*Persona 3 Dual*

- Fixed **coordinate display** (bottom screen) to use live data from character
- Created proper **dialogue controller** functionality
    - Display dialogue lines
    - Display different background images
    - Branching/selection with navigation
    - Text animation
- Updated fn names to **camelCase** (for consistency) across controllers
- Cleaned up some debug code/comments/options (cleaner look in code)
- I think the next steps are:
    - Get some **music** playing (make my own solution to play compressed mp3 files)
    - Make a Python script that reads `.md` files and auto-generates `.h` files (for dialogue)
    - Create proper **character 3D model**
    - **Texture** the environment properly
- For music, I'm looking into it. It seems like we want to create our own implementation to get mp3 playing
    - Look at **libmad** library
    - https://www.underbit.com/products/mad/
    - https://github.com/sezero/libmad?tab=readme-ov-file
    - We can try to use this/port this over to DS
