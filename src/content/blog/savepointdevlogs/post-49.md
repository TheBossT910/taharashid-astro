---
title: "Devlog: August 21, 2025"
description: "Project: SavePoint"
date: 2025-8-21
---

*SavePoint*

- I connected the DB to the backend, and created basic controllers
    - I initially tried to do Supabase, but they (by chance) ended up having sever issues
    - So I said forget Supabase, I'll use my local SQL server (which was already set up and ready to go!)
- Initially I thought I'd skip the SQL server because it'd be too 'difficult', but it really isn't (so far 😂). I think it is good as I'll eventually get to learn SQL (naturally as I need it) and ASP.NET Core does a bunch of stuff automatically for me (which makes it really easy to use!)
- My plan is to now create tables for Developer, Genre, Image, Video and go from there
- I also want to create a service (right now, I'm doing all of the logic in the controller which is not ideal)
