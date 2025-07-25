---
title: "Devlog: May 6, 2025"
description: "Project: SavePoint"
date: 2025-5-6
---

*SavePoint*

- Implemented functions to get/delete/create pos-inventory, pos-data
- Implemented functions to retrieve products from a particular store, and in their conditions
To-do:
- Need to rename db.js to products.js (to match its table in Supabase) (done)
- Clean up code/function names
    - Particularly the /lists endpoints and the api.js file (done)
    - Also, I want to move PriceCharting.js to /vault (since it is a web scraper) (done)
- Then, we can start work on the frontend!
Later:
- Make a LinkedIn post about this (show Figma mockups)
- Make Figma/handmade design for
    - POS system
    - User page

- I'm looking at the eBay scraper and the current problem is that if the name of the game is in the exclusion fields, it doesn't properly filter
- I also want to switch it so that it selects the 'new' field when getting new items
- (we will do these changes later… just launch!)

- SavePoint has slightly changed its vision. We provide
    - A easy, simple and modern POS system
    - Sync to online marketplaces with your physical inventory (online, and display in-app for local businesses)
    - A discovery platform for users
- Cool feature idea: QR code so people can scan, and browse the store's inventory on their phone

- I'm a bit tired/burnt out right now. The API I am leaving it for now. I think SavePoint can really expand into a big thing (not just video games, but books/music/collectibles)
- I'm going to take a little break today, then work on the frontend!

- I made paper sketches for the UI, now I'm going to create them in Figma

<img src="/blog/savepointdevlogs/post-12/figma-concept-1.png" alt="figma concept 1" style="max-height: 800px; width: auto">

<img src="/blog/savepointdevlogs/post-12/figma-concept-2.png" alt="figma concept 2" style="max-height: 800px; width: auto">
