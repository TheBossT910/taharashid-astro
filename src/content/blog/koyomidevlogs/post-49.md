---
title: "AnimeTracker Designs"
description: "Project: AnimeTracker"
date: 2025-2-23
---

*AnimeTracker*

<img src="/public/blog/koyomidevlogs/post-49/animetracker-designs.jpg" alt="drawing" style="max-height: 800px; width: auto">

Pages:
- Home
    -  Highlight reel
    -  Currently airing (with check marks)
    -  Trending
    -  Recommended
    -  User-lists (watching, saved, etc.)
- List (shows lists/my watch lists/shared lists)
    -  Grouped by seasons
    -  Grouped by airing
    -  Grouped by "watching" watch list
        - Can click ("see my other watch lists" and takes you to a seperate view)
    -  Sort by favorites
    -  Sort by new
    -  We could implement these as "decks of cards" and we can swipe the cards to see the next show
- Browse (+Search)
    -  Basically what our currnet "lists' view looks like
- Schedule (just like the current implementation)
- User profile
    -  Still need to develop this concept

- Show details view
    -  This is a very complex and feature-rich view
    -  Contains general overview of show (top portion, persistent)
    -  Bottom portion has multiple pages we can swipe through
    -  Description (default)
    -  Episodes (episode preview photo with details)
    -  Discussion (user comments, link to Reddit threads, etc)
- My Watch lists view (just shows all of your watch lists and your saved watch lists created by other people)
    -  NOTE: This can be seen in either the List menu or your profile (more likely your profile)
- Discover Page
    -  Kind of like Steam Discovery, creates a curated list of shows to see
    -  The view is just the vertical reels scrolling view also used in list when selecting to see a deck of cards (of course with some additional/different UI elements for this page)
- Tier list page /maker

Theme:
- Soft and glassmorphic
- "cards" design
    -  Elements are organized as cards
    -  We can treat them like literal cards
    -  Flip them to see information
    -  Swipe the top of a "deck" of cards to add new shows
        - The would swipe to the bottom of the deck, and be slightly crooked with the top corner hanging out so we can go "backwards" in the deck of cards
    -  Fold the top left/right corner of a card to mark as "saved"
    -  We can implement deck of cards for lists
    -  We can show a "spread of cards" (that we can scroll vertically through) to display our watchlists
- The modern design paried with the "cars" mechanic will make the app a simple but fun , unique and memorable experience for users while still ensuring ease of use
- Inspired by video games (ex. I think balt
