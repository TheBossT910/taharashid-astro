---
title: "SavePoint: Closer to Launch Than Ever Before!"
description: "I've implemented by Figma re-designs, and restarted the backend. Now, I just need to connect the frontend/backend together, and do some bug testing!"
date: 2025-09-12
image:
    src: "/blog/talks/post-15/savepoint-home.jpeg"
    alt: "SavePoint home page"
tag: "SavePoint, Web Dev, Vue, Nuxt, .NET, MS SQL"
---

SavePoint is closer to launch than ever before!

I’ve **FULLY** implemented the new Figma designs in code as components (which look *nearly identical to my designs*!) which are being used in **3 unique webpages**!

The home page has a *massive banner* showcasing a featured game with details such as the **name**, **description**, and **ratings** from *IGN* and *Metacritic*. Scrolling down, you can see **6 buttons** which, when clicked, will display games from those categories in the **carousel**, **video card**, and **stack** immediately below the buttons. Further down the home page, there are *more* carousels, stacks, and video cards for different pre-selected categories.

When clicking on a specific game, you will be rerouted to the **details page**. The details page is somewhat complex and took me a *long time to build*. It has a **banner** image of the game in the background, which contains the **poster image** on the right and **game details** on the left. The details include the **name**, **ratings**, **action buttons** to buy or add to collection or watch trailer, a **horizontally scrollable view of multiple videos** related to the game, and a *HowLongToBeat (HLTB)* estimate for the game. Scrolling down, you are met with a **background of scrolling images** (which are all from the game) and the **game’s description** on the left. As you keep scrolling in this section, the background scrolling images stay *fixed to your screen* until you scroll past the description, which at then shows all images without the description overlayed on top. At the end of the page, there is a **‘Retailers’** section which shows multiple retailers on the left (stores where you can purchase a copy of the game, intended to show **physical**, **online**, **local**, and **chain** stores), and a **map** with details on the selected retailer.

My latest page is the **‘Games’ page**, which showcases *all games*. It’s quite a simple page, but I really like the top of the webpage, where you can see different games scrolling across the screen. After scrolling past the top, it simply shows all games in a card format.

<video width="100%" controls>
  <source src="https://dl.dropboxusercontent.com/scl/fi/9i9y3btyvm24xi2jmkf2z/general-overview.mp4?rlkey=hz92l8bf4d6h3bre7aubiqi81&st=bnddv1mg&dl=0" type="video/mp4">
</video>

I do plan to add more webpages, including a **lists webpage**. Did you know that Lists and Stacks are meant to be *the same thing*? **Stacks** are an easy, visual way to represent and access lists, while **Lists** are what will pop up after a user clicks on a Stack. A List is meant to **quickly display a lot of information** about a game in a small space, which is perfect for when there could be 10+ games in one stack!

I’m both quite **amazed and proud** that I was able to design and especially implement **all** my Figma designs into code. And I made the *whole site responsive*, so it works both on **desktop and mobile devices**! For now, the frontend is using dummy data and has just the design implemented (i.e. you can’t click on a product to see its details just yet) but I **plan to connect everything together** once I finish the basic backend.

<video width="100%" controls>
  <source src="https://dl.dropboxusercontent.com/scl/fi/27uri7kgqm1med29y62r2/responsive-overview.mp4?rlkey=b0t9ca9hdi20fzfciclhv3p90&st=8oawh3ov&dl=0" type="video/mp4">
</video>

Speaking of the backend, I completely *threw out my pre-existing ExpressJS + Supabase backend*. After I started analyzing it once again, I realized that it was *sloppy, confusing code*, and that I hadn’t even created a way to access games from my Supabase DB easily! So instead of completely rearchitecting that code, I **created a new backend** in something I became recently acquainted with from my internship: **ASP.NET Core** + **SQL**. I kind of locked in and got the backend finished within a span of a few days.
Now, I have a backend *ready to be used*, and a frontend *waiting to be connected to*.

My current plan is to link the frontend/backend together and to finish up the frontend. I also want to do **extensive bug testing** and still need to make sure only my frontend can make calls to my backend (with some sort of key). I’m **SO** close to having a working MVP and really plan to **keep developing this project long term**.

What do you guys think of my progress so far? Let me know below!
