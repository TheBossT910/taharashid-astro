---
title: "Devlog: May 5, 2025"
description: "Project: SavePoint"
date: 2025-5-5
---

*SavePoint*

- Okay, I'm not going to do any of that data analysis, I already got my data with my original method
- What I do need to do is figure out how to get rid of outliers then it is pretty much good
    - I'm done. What I have was just fine, everything else was bad lol

- I'm going to create my own function to give the prices of games (currently I'm using a ChatGPT function)
- I also plan to start designing the POS system today

In a POS we need to:
- Track inventory (# of items, condition, stores/links)
- Add/remove inventory
- Create inventory (& add to stores)

- Want to:
    - Read data
    - Write data
    - Create data

- Okay, I have completely restructured the database, requiring me to completely recode the db code
    - I have not done this yet
- What I have decided to do right now is to right up what API endpoints/data I want to retrieve and how I will retrieve it from the API
- I created rough API endpoints notes in Postman
- Right now, I am learning how to use typesense w/ Supabase (for search)

- Okay, typesense syncing to Supabase is kind of annyoing and I can't do it right now so I'm leaving search for now

- I think I am ready to finish up the rough version of the API (again lol), so what I plan to do is 1. don't add new features (lets just wrap this up), 2. clean up the code and 3. connect everything to API endpoints
- Hopefully after this, we can start to do the frontend prototype in React Native!

- Created create/get products for ease of development

Reflection on today
- I got pretty frustrated/annoyed that I didn't feel like I did a lot of work today. But I did do a lot of work today.
- I completed (or rather, settled) on the eBay scraper
- I got out pen/paper and figured out how I wanted to structure my database
- I learned how to (properly) structure it in Supabase, and how to make it a relational database
- I figured out that I didn't want to do a search database right now (ended up downloading/doing a Docker thing… a bunch happened and I just said this is way too complex/don't need it for this scale right now)
- I figured out what API endpoints I want, and cleaned the endpoints up
- I implemented the new/modified endpoints (not all, but a few of them :) )

My plan for tomorrow:
- Implement 'add to pos', 'remove from pos' API endpoints
    - Simply assume that the related necessary records (store, game records) exist
- I also need a 'check pos' type function -> be able to check if we have x product in stock, how much of it, and what conditions
- Manually create a few stores (no function/code needed)
