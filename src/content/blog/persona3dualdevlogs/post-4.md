---
title: "Devlog: February 18, 2026"
description: "Project: Persona 3 Dual"
date: 2026-02-18
---

*Persona 3 Dual*

- I'll try to stick with **devkitpro** for now, but follow examples and BlocksDS tutorials
    - I need to set up the VSCode env first
    - https://github.com/cuibonobo/nds_vscode_template
- Need to scale things way down. Don't try to make the game initially, just make **demo apps** to practice coding
- Got basic **hello world** working, and learned that text can be customized via ANSI format
- Also got a **custom image** up!

<img src="/blog/persona3dualdevlogs/post-4/screen.png" alt="screenshot of DS screen" style="max-height: 400px; width: auto">

- I now want to figure out how to animate pulsing text, and how to fade in the background
- I got the background image/text to **pulsate**
    - What I did was change the brightness of the screens. The top screen, we just change the brightness once. The bottom screen, we change the brightness in the loop so it keeps resetting and fading, making the text look pulsating
    - I refactored this code so it wasn't blocking
- Next, I need to figure out how to do this to individual background layers, and how to import multiple background layers!
    - I also need to understand **bitmap vs tilemap** (and which is better + which I can do)
