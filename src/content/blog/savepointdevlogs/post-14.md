---
title: "Devlog: May 8, 2025"
description: "Project: SavePoint"
date: 2025-5-8
---

*SavePoint*

- I'm going to work more on the app.
- I think instead of adding all features in Figma, I want to add most major features (to give the app a shape) then create the next view
- This will allow me to be able to create views that work with each other faster/solve these types of problems faster rather than hardcoding stuff to make it look cool
- With this logic, I'm done with the home screen for now. I'm going to start work on the products details screen now

<img src="/blog/savepointdevlogs/post-14/savepoint-details.jpg" alt="savepoint details" style="max-height: 800px; width: auto">

- I did a lot of reorganizing/cleaning up. Moved logic to a /screens folder, using /apps only for routing, moved styles and props to their own files as well
- I also removed the sample views as well
- I've decided (more like reconfirmed) that we are doing mobile first (iOS/Android), then web after since React Native behaves pretty broken/differently for web applications
- The details screen is rough, but in a good spot. I think I'll move on to another view now!
    - We will skip the Search view, instead implement the POS home and Listings view
    - Lets do Listings first (doesn't have overlapping elements, which I don't know how to implement yet)
