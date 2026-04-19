---
title: "Devlog: February 23, 2026"
description: "Project: Persona 3 Dual"
date: 2026-02-23
---

*Persona 3 Dual*

- Fixed the images with garbage by **clearing the background's memory** before copying data over to them
- Also updated the **MainMenu text**
- What I need to do next is to make this text **selectable** (via buttons and touch) to lead to the correct menus
- I also want to watch a bit of P3 FES gameplay + P3 Reload to understand what to create
- We don't have to create things in order. I plan to create separate **"scenarios"** as proof-of-concepts which we can select between after clicking load game (which will bring up a menu of these scenarios)
- I want to decide on a few scenarios to create:
    - The interactive **world map**
    - The **UI** (shows the date/time, moon phase. On the 2nd screen?)
    - The **dorm** (1st floor)
    - The **school classroom**
    - **Tartarus** (1 floor)
- Most of these scenes will be **3D map + 2D assets**, so I want to learn how to properly create and render these assets!
    - Just basic walking around (no interactivity yet)
- I want to make these 3D models using **Blockbench** as it is geared towards low-poly (and I can ask Ozair lol)
- Let's create a hierarchy of things to do:
    1. Finish up **MenuView** (make it interactive)
    2. Create 1 test **3D model/room** and display it (the dorm)
