---
title: "Devlog: December 15, 2025"
description: "Project: SavePoint"
date: 2025-12-15
---

*SavePoint*

- Integrate user accounts/auth with JWT tokens
- HLTB seems tricky as they don't have a public API
    -  We could use IGDB instead? When we load a game and we notice that there is no set playtimes, run the api?
- Game valuation script
    -  Just PriceCharting scraper at this stage
- Barcode scanner
    -  We use PriceCharting to get UPC code
    -  On the business side, we will generate our own barcodes
- Game compatibility: Skip for now, very low priority

NOTE:
- For PriceCharting scraping, look at old JS script
- https://www.pricecharting.com/game/[platform-slug]/[game-slug]
    -  Directly scrape pricing info from here:
<img src="/blog/savepointdevlogs/post-69/pc1.png" alt="pricecharting-pricing" style="max-height: 800px; width: auto">
    -  Directly scrape UPC from here:
<img src="/blog/savepointdevlogs/post-69/pc2.png" alt="pricecharting-ids" style="max-height: 800px; width: auto">
- NOTE: we should make a property for the game that specifically has all of these properties
- Game -> UniqueIdentifiers
    -  Platform ""
    -  UPC []
    -  ASIN []
    -  ePID []
    -  PriceChartingId ""
    -  IGDBId ""

- I think I want to start phase 2 by creating the PriceCharting scraper
- I also want to go in Figma and start designing the B2B section
