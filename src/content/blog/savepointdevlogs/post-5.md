---
title: "Devlog: Apr 29, 2025"
description: "Project: SavePoint"
date: 2025-4-29
---

*SavePoint*

- Learning React native through official tutorial on site
- Trying to come up with repo names (b/c I am adding the repo to GitHub!)
    - savepoint-client
    - savepoint-api
- I think these are simple, clean, make sense!
- My plan so far is to make the Android/iOS app via React Native (and it looks like I can also do web via ReactNative, but I'm not focused on that right now)
    - Currently developing via iOS simulator on MacBook Pro
- I also want to create the API/backend using ExpressJS/? Dotnet?
    - We had a previous project scraping stuff using ExpressJS and the PriceCharting, RAWG.io APIs (which I will be using again)
    - Plan to also incorporate graphs, inventory management, barcode scanning, database (NOT Firebase!)
- I think instead of making the frontend first, I want to work on the backend first, understand what data we need/where to collect it from, create our own API for this, then create a basic frontend (just for testing) to display our data
    - This way, we don't have to rebuild our frontend completely, like we did with AnimeTracker app
- I also don't want to use Firebase, as weti don't need a real-time DB and I want to learn how to use another DB (postgres? SQL? Nosql? Sqlite?)
    - We don't necessarily need real time read-writes, just need to check data with DB when the user interacts and we need updated stats

- We will use the IGDB API as it is free and very open with plenty of data
- We will save the data to a local DB
    - If we don’t have a game, simply look it up in the API, then save to our db

Also going to try RAWG…

- I have decided to use IGDB for my API! It is simply better/has more freedom and data
- I created a bunch of Postman scripts which are good examples of usage. Now, I need to create the actual API
    - I wanted to use DotNet b/c I was learning it… I think I will look into this instead of using ExpressJS
    - I think b/c I am more familiar with JS and ExpressJS, I will start off by using ExpressJS then decide at a later date if I want to transition to dotnet
