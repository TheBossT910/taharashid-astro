---
title: "Devlog: Mar 17, 2025"
description: "Project: AnimeTracker"
date: 2025-3-17
---

*AnimeTracker*

- Implemented the lazy fetching in the DB, and in Lists view
    - Still need to implement in schedule view
- Implemented function where we always grab all favorites/watch listed shows immediately after a user signs in
- Fixed bug where toggle would be enabled after a signed in user toggled it, then signed out
- Privacy fix: We only grab the authenticated user and NOT all signed-in users

What I still need to do:
- Change the getUsers() (or whatever it is called) so we don't use an array anymore and can directly access the variable
- In views where we do not need db/authManager, remove their references/code
- Implement lazy loading for schedule view
This one is a bit more complex, because we will actually directly filter via FB for ex. tuesdays that aired within the past 6 months, and display the first of those results + whatever is already loaded into the db
