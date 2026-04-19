---
title: "Devlog: February 22, 2026"
description: "Project: Persona 3 Dual"
date: 2026-02-22
---

*Persona 3 Dual*

- My rotating background was not displaying properly the whole time, and I now know why
    - You need to **explicitly set the bg priority**, otherwise they all default and mess up
- Try to use the **same palette** for the silhouette + room bg imgs to save space
    - Check the grit docs to use the disable palettes command (`-p!`)
- For `rotatingBackground`:
    - Set opacity so that the asset is see-through *(done)*
    - Create rotating code *(done)*
    - Create actual proper asset (not placeholder)
    - `1f58ad`, `-0.2`, `0.7` (pictures)
    - `D4e4f8` (bg)
- I finally created the **rotating background**, and it looks pretty good!
    - I used a sinusoidal fn to make it rotate at different speeds/directions

<img src="/blog/persona3dualdevlogs/post-8/home.png" alt="screenshot of DS screen home" style="max-height: 400px; width: auto">

- I think I'm going to make the **next screen** (after we click "Press Any Button")
    - I'm going to start gathering the textures for that and format it
- I just deleted the old GitHub repo and made a new repo called `persona-3-ds`
    - I also renamed the project folder to `persona-3-ds`
- Since we are done with this view, I plan to organize my code and create a **state machine** for new views!
- I made a state machine and moved the intro code from `main.cpp` to `IntroView.cpp`
    - I cleanly moved instance variables into header files, and made a header file for global variables (which is just `frame` right now)
- The code is now very cleanly organized!
- I'm currently trying to format the images for the **MainMenu**
    - I'm having trouble with the fog
    - It looks like the DS has a built-in fog effect?
    - We can't use that; only for 3D
- Ok, I think if we turn down the opacity, the fog effect looks fine for what we can do
- I want to change the order of some stuff
    - The background should fade in
    - After the person has slid in, the fog should come in
- I got the basic menu view down, there are just a few other things to do
    - When the silhouette moves in, there is garbage data beyond the 512x512 area. Somehow, we should clear the memory and fix that!
    - Need to make the menu dialogs and options on the 2nd screen

<img src="/blog/persona3dualdevlogs/post-8/menu.png" alt="screenshot of DS screen menu" style="max-height: 400px; width: auto">
