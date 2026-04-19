---
title: "Devlog: February 1, 2026"
description: "Project: SavePoint"
date: 2026-02-01
---

*SavePoint*

- I need to decide the **object models**

---

**Inventory**
- `Id` *(auto)* — The SKU
- `Dtc` *(auto)*
- `Dtu` *(auto)*
- `Game`
    - The below properties will be set and auto create a new game if a game does not exist
    - `ReleaseDate`
    - `DeveloperIds`
    - `GenreIds`
    - `Images`
    - `Videos`
    - `Cover`
    - `Splash`
    - `Region`
- `Name`
- `Platform`
- `Category`
- `Description` — Defaults to game desc.
- `IsActive`
- `PricingDetail` / each condition enum
- `Codes` — UPC, ASIN, etc. Will be auto populated initially from Game

---

**Stock**
- `Id` — The SKU
- `Dtc`
- `Dtu`
- `Inventory`
- `Images`
- `Note`
- `PricingDetail`
- `IsActive`
- `DisplayedPlatforms` — Can choose if we only want to show on eBay, Shopify or Store (or all)

---

**PricingDetail**
- `Condition`
- `Price`
- `Cost`
- `StockAmount`
- `SoldAmount`

---

- I need to create **New, Complete, Loose enums** and replace the strings in PriceCharting valuations
