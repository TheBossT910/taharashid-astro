---
title: "Devlog: February 20, 2026"
description: "Project: Persona 3 Dual"
date: 2026-02-20
---

*Persona 3 Dual*

- Trying to get the **silhouette background image**
- For the rotating Tartarus image, we can combine the multiple background images together into 1 file, then simply have it rotating in a circle on the screen
    - Later on, we can add a pulsating opacity effect to make it fade in/out as well as rotate
- I'm thinking we can make the **logo as a sprite**
- **Don't use external libraries** (Nitro Engine, nightfoxlib, etc.)
    - The point of this project is to handle memory management, etc. yourself
    - We are **BUILDING a game engine!**
- I think it'd be cool to build a **"video" player**
    - Play some cutscenes
- I got the silhouette background in
    - If you specify the image to be 256x256, make it 256x192 (fill in with blank space if needed)
    - I also moved/resized and re-cropped other backgrounds as well to be laid out better
- Now, I will try to make a **"slide in" animation** for the person silhouette
    - I think I might want to use a sinusoidal function to graph the path of the image
    - I asked Gemini for ideas, and what it did was set pos to `+#`, then in a loop, remove 20% each time (`# - (#/5)`) to make it smooth — which is smart
- Swapped moonSprite with logo sprite
    - Also removed the other 3 sprites (but left for-loops so we can add it back easily for now)
- Updated background to have **moon baked-in**
- Now, I need to create a texture that has the opaque background items spinning around
    - Make it 512x512?
    - I created an example image file… Need to just implement it and test (and also test 256 vs 512)
