---
title: "Devlog: February 11, 2026"
description: "Project: SavePoint"
date: 2026-02-11
---

*SavePoint*

- I plan to create some basic **DTOs/controllers** today
    - `Cart`
    - `Inventory`
    - `Stock`
        - This will also have the store-specific code search endpoint
    - `Store`
    - `Transaction`? (for history)
- For the **dashboard page**, I don't think we will store anything in the database, but just dynamically aggregate results on API call (for now)
    - I don't see an active reason to have it in the DB
