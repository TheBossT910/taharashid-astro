---
title: "Devlog: February 19, 2026"
description: "Project: Persona 3 Dual"
date: 2026-02-19
---

*Persona 3 Dual*

- I made the top screen fade via **bg opacity** (not brightness)
- I plan to try to add another bg image on top
    - Might need to use extended palettes?
    - Use sprites? (treat moon as sprite?)
- Created **GitHub repo** + git branch and pushed
- I got the moons to show up as **sprites**
    - Sprites can be max 64x64 (I chose 32x32 for demo reasons)
- I learned that what I want is to use **extended palettes** (there is an example with 2 background images)
- I got **2 background images** up
    - Instead of a moon, I put the room shadow instead. It looks really cool
    - For the moon, I might just bake it in directly to the sky texture
- There is a problem when displaying background images. The 2nd image kind of corrupts halfway through, then fixes itself
    - It's a **VRAM issue**, if we mess with:
    ```
    bgInit(0, BgType_Text8bpp, BgSize_T_256x256, 28, 0);
    ```
    the last 2 values (28, 0), then it can render properly

<img src="/blog/persona3dualdevlogs/post-5/screen.png" alt="screenshot of DS screen" style="max-height: 400px; width: auto">

- Fixed corruption problem by using https://mtheall.com/vram.html to check how/where to place in VRAM
    - Need to click into the header files of each image to find the tile #

<img src="/blog/persona3dualdevlogs/post-5/code.png" alt="screenshot of code" style="max-height: 400px; width: auto">
<img src="/blog/persona3dualdevlogs/post-5/calculator.png" alt="screenshot of memory calculator" style="max-height: 400px; width: auto">

- I need to fix both the sky and room images
    - I cropped them a bit weird, transparent in weird places
    - Need to bake in the moon image
- I want to see what the Persona 3 home screen looks like and try to mimic it

<img src="/blog/persona3dualdevlogs/post-5/p3fes.png" alt="image of Persona 3 FES title screen" style="max-height: 400px; width: auto">

- The person slides in, the moon slides in, then there is a Tartarus image rotating (like a clock) in/out of frame
    - I will bake in the moon
    - I want to slide in the person
    - I want to add logo on bottom screen (sprite?) w/ "Press any button" (normal) text
    - We might cut the rotating Tartarus image (sprite?) (though doable) due to memory constraints
- Once I get a rough home screen setup, I also want to figure out how to **play music**
