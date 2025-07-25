---
title: "Devlog: Mar 14, 2025"
description: "Project: AnimeTracker"
date: 2025-3-14
---

*AnimeTracker*

- Was on a call with Casey Li for SESA, starting talking about his app and how to release my app
    - Just get it out there! MVP
    - Need to make user accounts, and user lists. Then, I can release it!
- I need to finish up dynamic media branch (implementing new Firebase stuff)
    - Update everything to use the new way to grab data
    - Be able to "call" the Python function to grab new data
    - For now, I think we just display all shows in the list section
- Use Firebase authentication (don’t just store passwords/username on DB, that is BAD!)

- I got user auth working
    - Used Firebase auth
    - Made my own login page
- All we need to do to implement the new stuff is to swap over the old db with the new one, and error handling for when no user signs in
- Then, I will add "show user favorites" (which should already work in the list view actually)
- Fix any errors/not working items
- Implement weekly schedule!

- I migrated everything over, which took hours but is basically done
- Just need to do some more testing/quality of life stuff before initial release
- Add a way to add/remove shows to watch lists (in anime details view? Dropdown?)
