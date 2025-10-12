---
title: "Devlog: August 15, 2025"
description: "Project: SavePoint"
date: 2025-8-15
---

*SavePoint*

- Going to work on the home screen (DONE)
<img src="/blog/savepointdevlogs/post-46/home.png" alt="home page" style="height: auto; width: 100%">

- Its going to be a little bit rough, I just want to setup the initial design
- Then, I will do the same for details (DONE)
<img src="/blog/savepointdevlogs/post-46/details.png" alt="details page" style="height: auto; width: 100%">

<img src="/blog/savepointdevlogs/post-46/details-desc.png" alt="details description page" style="height: auto; width: 100%">

<img src="/blog/savepointdevlogs/post-46/details-retailers.png" alt="details retails page" style="height: auto; width: 100%">

- When I'm done, then I'm going to inspect the backend and start seeing how I can connect it
- I've just realized this as well, but I want to make site animations (like what I did for Perfect Fit)
    - Stuff pops in on load, as you scroll, etc.
    - Subtle, but makes it feel alive
- Add dots in the background with CSS (like on my personal website) (DONE)
- Fixed issue where you could not see the dotted background through components (it was the background blur being too high, lowered from 5px to 1px)
- Retailer map is broken when resizing (need to fix)
- I also need to add a footer with logo and links (to add in app.vue)
- Use npm run dev -- --host 0.0.0.0 --port 3000 to get on network, and do [ipadress]:3000 to see!
- I was just looking a the backend and… Yeah. It doesn't have basic endpoints. The only things implemented were the web scrapers and accessing other game DB's APIs, which at this point is low priority
- We have enough dumy data to work with, and the structure of the database currently is fine in my  opinion
- BUT! I don't want to use this current API. It looks bad. So, I want to redo it in .NET with the BASICS first (CRUD operations working on our database using DB entity)

PLAN:
-  Fix retailer map (I believe the ratio is causing a problem, just set w-full and max-h-[])
-  Game stack is REALLY small!
- Create initial .NET backend
