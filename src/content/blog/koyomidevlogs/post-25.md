---
title: "Devlog: Feb 14, 2025"
description: "Project: AnimeTracker"
date: 2025-2-14
---

*AnimeTracker*

- Starting work on the dynamic-media branch (following Notion to-do list)
- Literally did nothing but was researching how to display airing animes

**Here are my research notes on how to grab data/increase efficiency**
1. General Approach:
- Weekly Scan: Every week, fetch currently airing anime from AniList. Only add or update shows that are not already in Firebase.
- Daily Check: Each day, check for episodes airing on that day. If a new episode has aired, fetch it and update your Firebase database.
- New Shows: Every few weeks (e.g., bi-weekly or monthly), run a scan for newly started shows that aren't in your database and add them to Firebase.
- Incremental Updates: Avoid re-fetching entire data sets. Instead, focus on fetching only new episodes or new shows based on what’s changed.
3. Steps for Fetching Data Efficiently:
- Step 1: Initial Database Population
    - Fetch all currently airing shows from AniList.
    - Store each show in Firebase, including details like:
            § Start date.
            § Airing schedule (days of the week).
            § Episodes aired so far.
- Step 2: Weekly Data Fetch
    - Query AniList to get all currently airing anime. Filter by shows that have recently aired or have new episodes.
    - Check your Firebase for each show. If it’s already in Firebase, only update the next episode or any data changes.
    - Add new shows that have started airing since your last check.
- Step 3: Daily Episode Check
    - Each day, check if there are any anime airing on that day (based on their airing schedule).
    - If an episode airs on that day, fetch the latest episode and update Firebase.
- Step 4: Handle New Shows
    - Once every few weeks (bi-weekly or monthly), run a full scan of newly started shows.
    - Query AniList for newly started airing anime and add them to Firebase if they are not already there.
    - Compare with existing data in Firebase to prevent redundant checks.
4. Optimizations to Reduce API Load:
- Incremental Updates: Focus on new episodes or newly airing shows instead of fetching everything every time.
- Scheduled Scans: Set up periodic scans for new shows (e.g., every 2 weeks) to catch new anime that start airing after your initial database population.
- Efficient Querying: Use AniList’s filters to limit the data you’re pulling, such as only anime with a recent airing schedule or anime that have started recently.
- Minimize API Calls: By using a local Firebase cache, you avoid excessive API calls, ensuring AniList’s servers aren’t stressed.

<br>

- Whenever a user searches a show, search Firebase 1st and if not there, then search/scrape from AniList
- When linking accounts, scrape all of that user's saved shows (ex. for AniList account or MAL account)
- We will do all of this via Python, and our clients (ex. Swift, Android, Web) will only interact with the final results stored in FB
