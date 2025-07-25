---
title: "Devlog: May 1, 2025"
description: "Project: SavePoint"
date: 2025-5-1
---

*SavePoint*

- I'm running into some limitations with IGDB
- I'm thinking to use RAWG for game search?

- PriceCharting
    - UPC Code
    - Loose, complete, new prices
- RAWG
    - Game description
    - Cover X
    - Screenshots
    - Platforms + Stores
    - Release date

- Ok, so use IGDB for data, PriceCharting for prices + UPC, Rawg for search (get the slug!)
- Starfield UPC: 093155176119
- SMO UPC: 045496590741
- SM64: 045496870010

- I have now created a basic API that I am happy with. Of course, I will update it with more features in the future but for now what I have is enough
- Now, I want to look into database and decide if I should create one now, or if I can directly start working on the UI in React Native
- For database:
    - PostgreSQL w/ deployment on Supabase
    -
- I think I should fully fledge out the database for the features we want
    - Of course, just an initial implementation
    - Ex. users, trending, etc.

- <mark>We need to update API, I just learned that I am doing it stupidly. Look at IGDB Game in Postman!</mark>
    - We just need Auth, Game, Popular, Trending, Highest Rating for IGDB!
- The video id is the Youtube URL: https://www.youtube.com/watch?v=${id}
