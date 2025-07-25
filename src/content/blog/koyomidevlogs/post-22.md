---
title: "Devlog: Feb 9, 2025"
description: "Project: AnimeTracker"
date: 2025-2-9
---

*AnimeTracker*

- Trying to create AI stuff with Azure
    - Was able to get Deepseek up and running a bit…
    - I tried OpenAI models and Deepseek. Deepseek was working on Azure but was still prototype
- I ended up downloading Ollama
    - Downloaded Zehphyr (local AI model) and fed it the AI instructions. It returned excellent results, but talked like a straight bot
    - Deepseek was just bad
    - Mistreal (7b) I am currently testing, it seems to be the best choice so far. Returning excellent, natural results
- So I have decided to finally use Misteral with the given prompts/formulas over on the side for my AI recaps. It is local, free, works and doesn’t take up much space
- Most of my time today was looking at these AI things and Azure.
- I plan to implement Misteral using Python next time in the AnimeTracker - Data repo
    - I only want to create a recap when it is requested (to save on resources)

*NOTE: Activate .env in Python:  source .venv/bin/activate*
