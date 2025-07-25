---
title: "Devlog: Mar 1, 2025"
description: "Project: AnimeTracker"
date: 2025-3-1
---

*AnimeTracker*

- Ramadan Mubarak!
- I had my Java ITI 1121 Midterm today (I think it went fine)
- Swift optimization idea: when you want a specific anime, check if there is a dictionary entry. If yes, great. If no, immediately fetch!
    - I want to (maybe) implement SQLite DB for local storing?

- I finished switching over to decoding directly with structs, makes the data much easier to handle and the coder better to read
- I want to implement async fetching to improve times! (current plan)
- I could also change how Firebase stores items (storing everything into 1 document instead)

- I implemented async fetching, sped up time by a lot!
    - Went from <mark>~33s to 2s for everything! (roughly)</mark>
- I need to implement setting data
    - I will create a rough implementation so everything works for now, but a proper implementation will need to be done later when we create user profiles
    - What I have done is create a user_data document, which is currently housing a user name and a favorites array
    - Whatever show is favorited, we add to the array. If we unfavorite, we remove from the array (its AniList/doc id)

NEED TO WORK ON:
- Figure out how to setup user profiles (really basic) -> Firebase
- Each user has their own data
- Encrypted data, usernames/password
- Be able to create/delete accounts, change account names/passwords and info (i.e. emails)
