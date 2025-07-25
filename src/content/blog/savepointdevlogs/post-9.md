---
title: "Devlog: May 3, 2025"
description: "Project: SavePoint"
date: 2025-5-3
---

*SavePoint*

- Maybe I'm not done with the API yet lol
- Lets set up a structure for user data!
    -  For consoles/platforms, we will use our own enums (# values)
    -  And we can add a # or a letter to indicate physical or digital
    -  For video games, use the DB ids (no slugs, no names, no upcs)
- When we sign up for the first time, a popup will show up to set name, location, username, platforms that we have
- I'm also realizing some games might have different UPCs (same game, different platform) (need to fix
- I went with friends and we went to Chumleigh's, I ended up talking to manager about POS system (see note!). Excellent talk, now I understand what to prioritize!

Business Section, API + rough ideas to implement features
Game and product scanning (via photo recognition)
- Google Cloud Vision API or Amazon Rekognition (I want to use this)
- Meant to detect game title/artwork/platform from photos

Smart search (for games) + inventory system (to check inventory)
- Typesense or Melisearch
- Search will be used to 1. Search for games (to add to inventory) and 2. Search actual inventory

Game pricing
- eBay developer API with Finding/Browse APIs
- PriceCharting is inaccurate, they mostly use eBay
- I believe I used these APIs for a project… look around code for this!

Game info
- IGDB (main), RAWG (alternative) -> we are already using both
- Do barcode lookup via PriceCharting or eBay (all other random sources are paid :( )

- I think my current plan is to 1. Create the rough ReactNative frontend for users, and 2. to create a PriceCharting alternative using my own eBay scripts.
    -  This would be its own repo because it is an involved project
    -  I will use eBay apis, and search 1. using upc or 2. name as a fallback
    -  SavePoint: Vault?
- I tried to use eBay API but they don't have these listings :(. So, I will make a web scraper to do this!

-  eBay has New, like new, very good, good, acceptable fields
- eBay also has new, used
- we can also use search to query for these results

<img src="/blog/savepointdevlogs/post-9/ebay-codes.png" alt="ebay codes" style="max-height: 800px; width: auto">
- For Starfield (which used 1-5 instead of these #s), 1000 = new, 2750 = used

Notes:
```
https://www.ebay.com/sch/i.html?_nkw=super+mario+odyssey&_sacat=0&_from=R40&rt=nc&LH_Sold=1&LH_Complete=1

class: x-refine__multi-select (for condition selects)
-> we are looking for 'LH_ItemCondition={number}'

NEW: href="https://www.ebay.com/sch/i.html?_fsrp=1&_from=R40&_nkw=093155176119&_sacat=0&LH_Complete=1&LH_Sold=1&rt=nc&LH_ItemCondition=3"

USED: href="https://www.ebay.com/sch/i.html?_fsrp=1&_from=R40&_nkw=093155176119&_sacat=0&LH_Complete=1&LH_Sold=1&rt=nc&LH_ItemCondition=4"

each selection has this: x-refine__main__list--value
-> x-refine__multi-select: contains an <a> with the link
-> cbx x-refine__multi-select-cbx: contains the name of the condition

Need to check x-refine__item__title-container if this == Condition
MAIN: x-refine__main__list
```

- The way we are going to organize the conditions/pricing of the game is based of of eBay
    -  So, some games will just have New and Used
    -  Some games will have all/some of the above options seen
    -  We will just use the category names directly from eBay

CURRENT PLAN:
- Clean up/finish eBay scraper
    -  Compare pricing to Price Charting
    -  Check for any other game pricing sources (get from GameStop)
    -  Remember to convert prices to desired currency! (all in USD)
    -  Connect to API
- Start designing the inventory system (api endpoints)
    -  Basic inventory system
    -  Game/product scanning (barcode, image recognition)
    -  Payment processing (Stripe terminal)
    -  Memberships? (also probably Stripe)
- Start seeing how to implement search (this would be used by business/personal!)
