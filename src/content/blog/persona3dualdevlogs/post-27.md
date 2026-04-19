---
title: "Devlog: April 12, 2026"
description: "Project: Persona 3 Dual"
date: 2026-04-12
---

*Persona 3 Dual*

- Looking into **libmad**
    - https://github.com/devkitPro/pacman-packages
- There was a GitHub repo for DS packages (3DS and NDS). In the NDS folder, we had our own `nds-libmad` library. I installed it via:
    ```
    sudo dkp-pacman -S nds-libmad
    ```
- With some AI assistance, I got **mp3 playback working!**
    - I want to figure out how much resources this is taking up (RAM, CPU)
    - For RAM, I wonder if we can **stream the data in via NitroFS?**
