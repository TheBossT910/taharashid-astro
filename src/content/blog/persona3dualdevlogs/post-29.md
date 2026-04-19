---
title: "Devlog: April 17, 2026"
description: "Project: Persona 3 Dual"
date: 2026-04-17
---

*Persona 3 Dual*

- Added **new logo** as 2 separate sprites
- Added **2 bg layers** to sub screen on `IntroView`
    - One is static
    - The other has attributions and animates
- Refactored `IntroView` **"Press Start"** to animate independently of setting brightness
- The next things I need to do are:
    - Create a demo with working **NitroFS**
    - Update music demo to use **NitroFS**
    - Research **MP3 vs .WAV** (are we using up CPU cycles?!)
