---
title: "Devlog: December 20, 2025"
description: "Project: SavePoint"
date: 2025-12-20
---

*SavePoint*

- Baba's birthday 🎂
- I'm going to clean up the updated scraper code then push
- I also want to change the search bar
    - Make it a bit simpler, since it seems misleading *(DONE)*
    - Auto-focus on input field *(DONE)*
- I also want to figure out how to load images as lower resolution for improved loading times
- I also want to manually set **platform slugs** based on the PriceCharting URLs
    - Changed the .NET core to reflect this *(DONE)*
- Create a **utilities class** (put slugify, etc. in here) *(DONE)*
- Create a **utilities controller** (put the sync APIs here) *(DONE)*
- Need to auto refresh listing per load, once per day
    - When we load a game via that endpoint, we also async load new pricing data *(DONE)*
    - Then, we can update the frontend via **SignalR**! (will add this later)
- Complete rescrape of PriceCharting data in DB

TODO:
- Add SignalR updates *(low priority)*
- Create user accounts UI *(high priority)*
- Create user accounts code *(high priority)*
