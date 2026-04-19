---
title: "Devlog: December 17, 2025"
description: "Project: SavePoint"
date: 2025-12-17
---

*SavePoint*

- I'm back in Belleville
- Today, I'm just going to mess around with **Gemini** and see if I can get an eBay price script just for fun
    - This only needs to be implemented actually in Phase 3
- I ended up messing around with Gemini the whole day, but ultimately found that doing normal scraping with **Playwright** is just the most simple and best solution
- I now have a **HLTB playtime scraping script**, and a **eBay pricing scraping script**
- I need to make a **PriceCharting scraping script** to get both the prices and the codes (barcode codes, ASIN codes, etc.)

- Created endpoints/code to scrape from HLTB and retroactively update the games in the DB
    - Tomorrow, I'm going to make a PriceCharting scraping script in JS first, then add to .NET to fetch 1. price valuations, and 2. IDs
