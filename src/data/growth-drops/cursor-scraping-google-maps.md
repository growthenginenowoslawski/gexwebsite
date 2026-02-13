---
title: "Cursor Scraping Google Maps"
description: "How to use Cursor to scrape Google Maps for local business leads using Rapid API or Serper.dev, with zip code targeting and review data."
youtube_url: "https://youtube.com/watch?v=7yWkTc8nqvY"
published: "2025-11-02"
reading_time: "5 min read"
tags: ["cursor", "scraping", "lead-generation", "tools", "cold-email"]
thumbnail: "https://i.ytimg.com/vi/7yWkTc8nqvY/hqdefault.jpg"
---

> Watch the full video: [Cursor Scraping Google Maps](https://youtube.com/watch?v=7yWkTc8nqvY)

## Why Google Maps Matters for Cold Email

There are two main sources for building cold email lists. **LinkedIn** has the highest-fidelity persona data -- if you need to know who's the Chief Marketing Officer at a specific company right now, nothing beats it.

But when you're targeting **local businesses** or industries that don't have a strong LinkedIn presence, things get harder. These businesses don't create LinkedIn profiles. What they almost always have, though, is a **Google Maps listing**. If a business isn't on Google Maps, they're probably not a company you want to reach out to anyway.

## The Problem With Scraping Google Maps (Before Cursor)

Scraping Google Maps has always been clunky. Every approach -- whether it's Apify actors, browser extensions, or cobbled-together Python scripts -- has gotten janky at some point. The tools work, but they're rigid and hard to modify when something breaks or when you need a slightly different output.

## Why Cursor Changes Everything

**Cursor** makes scraping Google Maps ridiculously easy because it writes custom code for you and lets you edit it on the fly with natural language. The code runs locally on your machine, and you can save it to GitHub and reuse it across projects.

You don't need to be a software engineer. It's so easy to set up that you can literally just talk to it and describe what you want.

## Two API Options

You need a data source for the actual Google Maps results. Here are two that work well:

### Option 1: Rapid API -- Google Maps Extractor

**Rapid API** is a marketplace where developers sell API endpoints. There's a Google Maps extractor endpoint that's dirt cheap:

- **$100 gets you 500,000 requests**
- One request = one search page of results

The pricing is hard to beat.

### Option 2: Serper.dev

**Serper.dev** is another option that works well for Google search and Maps data. If you're already using Serper in your stack, you can do the exact same workflow with it.

## How to Set It Up in Cursor

Here's the step-by-step:

1. **Find the API endpoint** (Rapid API's Google Maps Extractor or Serper.dev)
2. **Show Cursor the endpoint documentation** -- click on the endpoints like "locate and search," "query locate," or "business reviews" and paste the parameters and expected output format into Cursor
3. **Be explicit about the parameters and expected results** -- Cursor does much better when you spell out exactly what the input looks like and what the output should contain
4. **Tell Cursor what you want to build:**

> "I want you to help me build a workflow where I can give you a CSV file of zip codes or a list of towns. Then search each one for [keyword] -- like 'restaurant in 07070' or 'restaurant in Rutherford, New Jersey.' Go 3-5 pages deep into the Google Maps results. Get me all the categories, business data, and search results."

That's it. Cursor writes the code, and you run it.

### Pagination Matters

The API returns one page per request. Google Maps paginates results the same way the web interface does. So you need to tell Cursor to go **3-5 pages deep** per search to get comprehensive coverage. This is easy to automate in the script.

### Scrape Reviews Too

You can also use the **business reviews endpoint** to pull review data. This is particularly useful for cold email personalization -- mentioning a business's reviews in your outreach gets great response rates.

## Getting Your Zip Code List

The only slightly annoying part is getting a comprehensive list of zip codes for your target geography. But this is easy to solve:

- Ask **ChatGPT Deep Research** for a list of zip codes in your target area
- There are open-source datasets with every US zip code

For dense areas like New York City, consider **breaking up your searches** by zip code. Each zip code in a major metro will return a lot of results, so more granular searches give better coverage.

## The Full Workflow

1. **Cursor** scrapes Google Maps using Rapid API or Serper.dev
2. Pass the data to **Clay** for enrichment (find emails, enrich company data, run AI personalization)
3. Upload to **Smartlead** or **Instantly** for campaign management
4. Start sending

## Key Takeaways

- **Google Maps** is the best data source for local businesses that aren't on LinkedIn
- **Cursor** eliminates the jankiness of traditional scraping tools by writing custom code you can edit with natural language
- **Rapid API's Google Maps Extractor** costs about $100 for 500,000 requests
- **Serper.dev** works just as well if it's already in your stack
- Show Cursor the API docs and be explicit about parameters for best results
- Go **3-5 pages deep** per search for comprehensive results
- Scrape **review data** too -- it's great for personalization
- Pass the scraped data to **Clay** for enrichment, then to your email sequencer
