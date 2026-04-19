---
title: "Devlog: March 4, 2026"
description: "Project: Persona 3 Dual"
date: 2026-03-04
---

*Persona 3 Dual*

- I understand how to **show multiple models**
    - Now, I want to create a basic **player model** and display that
    - Then, we can fix controls
- From AI, it looks like we can overlay **2D "tiles"** on our 3D environment to designate collision areas
    - Simply place objects you want collision with on the tiles
    - Each tile is represented in a 2D array. If the player is in contact with a tile, push them back
- This approach works since Persona is a **top-down 3D game without any jumping**
    - We do need to figure out how to deal with **stairs** though at some point (invisible ramp?)
