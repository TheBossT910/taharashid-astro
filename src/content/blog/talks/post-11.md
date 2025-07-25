---
title: "Why I Scrapped My React Native App and Rebuilt SavePoint for the Web"
description: "I took a short break (okay… maybe a Persona 3: Reload break) and came back with a clearer vision: SavePoint is no longer a mobile-first app. Here’s why I ditched React Native, switched to Vue/Nuxt + Tailwind, and redesigned SavePoint as a web-first platform—with Figma mockups and a better dev workflow to show for it."
date: 2025-06-15
image:
    src: "/blog/talks/post-11/home-figma.png"
    alt: "SavePoint App"
tag: "SavePoint, App Dev, Web Dev, Nuxt, Tailwind"
---

I *maaay* have been playing video games instead of working on my new project, SavePoint.

But it’s fine, since taking this short break has let me **really rethink** about how I want to build my app.

SavePoint was initially designed as a **mobile-first app**, built in **React Native** for iPhones and Androids. I even had a *working prototype*, with a home, details, and inventory screen connecting to my backend. But working in my co-op and seeing how *effective* websites are for an inventory system, I’ve decided to **switch my focus and tech stack completely**.

<img src="/public/blog/talks/post-11/details-prototype.png" alt="details prototype" style="max-height: 800px; width: auto">

SavePoint is now going to be a **website**, which dynamically resizes to work on mobile screens. This will allow me to focus on **one codebase** instead of two for web and mobile separately and should hopefully result in a more unified product.

<img src="/public/blog/talks/post-11/details-figma.png" alt="details figma" style="max-height: 800px; width: auto">

As for my new tech stack, I’m going to be using **Nuxt** and **Vue** with **Typescript** as the core of my website, while keeping **Supabase** as my database and **ExpressJS** as my backend and trying out **Tailwind CSS**!

I’m choosing Vue because I already use it at work, and I personally find it easier to understand than React. Naturally because I’m using Vue, I’ll also use Nuxt.

As for why I’ve picked **Tailwind (over Bootstrap)**, I’ve always heard about this new UI styling library, and it seems pretty in-demand as well. Tailwind also seems *super customizable* and seems to have a lot of documentation as well, which would make it **easier to learn/troubleshoot**.

In the future, I’m thinking about *switching from ExpressJS to .NET* to handle my backend but since I’m still not too familiar with .NET and I already have a basic API set up, I’ll leave my backend running on ExpressJS as-is.

Below I’ve linked **images of my (cancelled) React Native prototypes**, and my **new Figma redesign** for SavePoint envisioned as a website.

<img src="/public/blog/talks/post-11/home-prototype.png" alt="home prototype" style="max-height: 800px; width: auto">

<img src="/public/blog/talks/post-11/inventory-prototype.png" alt="inventory prototype" style="max-height: 800px; width: auto">

What do you think about the new design? Let me know below!

P.S. Persona 3: Reload is an *unexpectedly good game*. I’d recommend giving it a try, even if you’ve never played a JRPG before (like me)
