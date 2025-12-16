---
title: "Devlog: December 12, 2025"
description: "Project: SavePoint"
date: 2025-12-12
---

*SavePoint*

- I want to modify search to have pagination and loading as you scroll
    - I also want to modify it so that if a keyword shows up in the title it takes priority over it showing up in the description, etc.
- For scrambling the api url, we can redirect api calls to savepoint.ca/api/[call]
- PROXY
    - Then, nuxt can handle and forward it
    - We can also add a custom header to deter people from using the api
- EDGE Security
    - I also want to pass it through Cloudflare to prevent bots (check what Gemini was talking about)
