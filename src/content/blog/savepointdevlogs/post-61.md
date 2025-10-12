---
title: "Devlog: October 4, 2025"
description: "Project: SavePoint"
date: 2025-10-04
---

*SavePoint*

- Continued working on API calls

IGDB
- Artworks (DONE)
    - If we have artwork of type artwork, set as splash
            § Otherwise, set key-art-with-logo
            § Otherwise, set key-art-without-logo
            § Otherwise, set cover?
    - Set all key-art-with-logo and key-art-without-logo as images (alongside all screenshots)
- Developers, genres, platforms are all set via their ids (i.e. they are already created in the DB, but are simply assigned to the object itself) (DONE)
    - All we do is pass the object itself in the Game model, and it should automatically be assigned
    - We should have resolvers for developers, genres, platforms such that we first search the DB for a matching name. If a match is found, get and return that object. Otherwise, create our own new object and return

- I want to make an endpoint where we can put a filter in directly (DONE)
- Also, I want a property to save to DB (true/false Boolean) (DONE)
- Also need to assign all other artwork to images (make resolver) (DONE)

FRONTEND
- I want to optimize the loading of data from the database. Currently we make a call to load EVEYRTHING every time we load a page. I don't want to load every single time, and I don’t' want to load everything either. Figure out a way to fix this!
- We should also randomize the images so they show up in different orders in details screen
Should also calculate/evenly split up the # of images shown in each row (mod 3?)
