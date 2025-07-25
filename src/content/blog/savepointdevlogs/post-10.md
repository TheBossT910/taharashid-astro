---
title: "Devlog: May 4, 2025"
description: "Project: SavePoint"
date: 2025-5-4
---

*SavePoint*

- Today, I want to 1. Finish the pricing scrapers, and 2. setup Typesense for search
- I also want to take notes on what a real POS system should do, what tech to use as well
- I also want to clear-up what features should be available to businesses and users (since a lot of features can overlap)

- I am realizing only very few games have the different condition options
- What we will need to do is search upc + keywords for the game's condition
- Then, we will need to use math to calculate what prices (in the set) are in the range and what are outliers (most likely wrong condition items) using Gr 11/Gr 12. IA math?

- For new games, use the new game filter
- For loose and cib games, just search and use that
- Don't worry too much, just get good numbers that match up roughly with Price charting
- Make a "game valuations, what we estimate you should buy for and profit breakdown calculator"
- Clean up this API, then look at basic POS system creation (and where we need Stripe)

- NEW APPROACH: scrape all the prices for the games (sold prices), then organize by quartiles + remove outliers to get the loose, cib, new prices!
