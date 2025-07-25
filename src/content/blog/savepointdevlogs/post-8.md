---
title: "Devlog: May 2, 2025"
description: "Project: SavePoint"
date: 2025-5-2
---

*SavePoint*

- Today, I'm going to properly format the API endpoints (the data that we need to give)
    - I'm done this!
- I need to format al of the Unix dates into year-month-date format
    - Done!
- We are mostly done the API, just need to integrate the database
- I will create a separate file for the database, and will start by just messing around/learning how to interface with it
- Then, we can implement it!
    - The only data that we want to save would be the game's general info
    - PriceCharting data we might want to save, but it changes frequently (update weekly? Or just scrape on request?)
    - All of the other API endpoints, we don't need to save
    - Of course, also want to save user data
- We should also switch from using credentials.js to .env file (this is the proper way to do this)

Supabase:
- I disabled RLS in policies. I need to enable this before production app for security purposes
    - This was enabled, so I could not read/write!
- I created a function to read/write from database
- Note to self: Create the markdown note for savepoint-api and savepoint-client
- I also still need to fetch the current Unix time, and make the functions that rely on Unix time use the current unix time!
- Otherwise, I think (for real), I am pretty much done with the rough API at this stage!
