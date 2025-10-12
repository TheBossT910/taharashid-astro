---
title: "Devlog: August 28, 2025"
description: "Project: SavePoint"
date: 2025-8-28
---

*SavePoint*

- Finished Persona 5 Royal today 🥲
- Plan to make more endpoints
    -  First, we need to understand what we want to do/display/show, then create endpoints around those features
- Endpoints:
    -  Get all games
            § Add filtering(?) for search
    -  Get a specific game
    -  Get game lists (tables) (CRUD)
    -  Get game stacks (card stacks) (CRUD)

    -  Add game (to add games/variations not yet in our DB)
    - Update game (to add/update metadata, such as description, release date, UPC codes)
    -  Delete game (? Maybe)

    -  Get users
    -  Get specific user
    -  Add user
    -  Update user
    -  Delete user

- NOTE: we should add a many-to-many relationship for game variations in Game table
    -  Ex. Persona 5 has Persona 5 Royal as a game variation, etc.
- Added variations! They work in a very interesting way
    -  If you want to add a game to a variation, simply add the variation id to that game. Then, it will automatically update and add its own id into the Game Variation relationship
    -  This is because it is a many-to-many relationship, and if you add it in 1, it automatically adds it in the other table
CODE
- Add-Migration [name]
- Update-Database
