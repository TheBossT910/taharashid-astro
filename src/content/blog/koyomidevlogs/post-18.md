---
title: "Devlog: Jan 26, 2025"
description: "Project: AnimeTracker"
date: 2025-1-26
---

*AnimeTracker*

- Going to fix ScheduleRow view to only show animes that are airing for that day
    - Will also fix Firebase so that broadcast is split into broadcast_day and broadcast_time (at a later date for now)
    - If we don't do this, then I need to split the broadcast string to get my date, and even then each day has an "s" at the end
    - Also need to add a show length (air time length) so we know how long the show runs for (add this in media)
- I need to show 4 (arbitrary number) shows in the ScheduleAiringRow view, then display that in the main ScheduleView
- Everything is almost implemented to ScheduleAiring stuff
    - Need to make it so we can click a show and go to its detail view
    - Need to wrap it in a nav view (?) to implement this AND to open the AI recap section
    - Need to have the ScheduleItem image box resize based on screen dimmensions (not just hard-coded)
- Also, rename "anime status" "anime list" selections to just status and list
