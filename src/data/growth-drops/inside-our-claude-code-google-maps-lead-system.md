---
title: "Inside Our Claude Code Google Maps Lead System (Owner + Email Finder)"
description: "How we find business owners and emails from Google Maps at scale using Vast.ai GPU rentals for under $1/hr, Claude Code, and an email waterfall with Prospeo and SmartLead."
youtube_url: "https://youtube.com/watch?v=_517b8nH2RE"
published: "2026-02-09"
reading_time: "8 min read"
tags: ["lead-generation", "scraping", "ai", "tools", "automation", "cold-email"]
thumbnail: "https://i.ytimg.com/vi/_517b8nH2RE/hqdefault.jpg"
---

> Watch the full video: [Inside Our Claude Code Google Maps Lead System (Owner + Email Finder)](https://youtube.com/watch?v=_517b8nH2RE)

## The Problem with Local Business Leads

If you are targeting local businesses or people who do not have a LinkedIn presence, finding contacts is painful. Here is why:

1. They are not on LinkedIn, so most databases miss them entirely
2. The owner's name is buried somewhere on their website -- maybe the About Us page, maybe a blog, maybe a "My Story" page
3. Using AI agents to scrape Google search results and websites gets expensive fast because of the sheer volume of tokens involved

We just built a system that solves all three problems. On a run of **10,000 businesses** scraped from Google Maps, we found **7,542 business owner names** and **3,246 emails** (still running at time of recording). Way better than anything we have done before.

## The Three-Phase Workflow

At the top level, the workflow has three steps:

1. **Scrape Google Maps** to get the businesses
2. **Find the owner** (this is the hard part)
3. **Find their email**

Steps one and three are easy once you solve step two. Here is how each phase works.

## Phase 1: Scrape Google Maps

This is a solved problem. We use **Scraper Tech's Google Maps API** through **RapidAPI**. You could also use **Serper.dev**, **Apify**, or any number of tools. This part is super cheap, super fast, and not interesting. Pick whatever works for you.

## Phase 2: Find the Owner (The Hard Part)

This is where the real value is. Here is the waterfall:

### Step 1: Check LinkedIn First

LinkedIn has the highest fidelity data. If someone says they are the owner and the company website matches what you have from Google Maps, that is your person. But most local business owners do not list themselves this way on LinkedIn.

### Step 2: Scrape the Website

We had **Claude Code** put together a simple scraper using **Node.js fetch** and HTML parsing -- no browsers, no automation tools. Fast and cheap.

The scraper grabs:
- All content from the homepage
- Up to 20 pages on the second level (About Us, Contact, Blog landing page, etc.)
- Not individual blog posts -- just the top-level pages

If a more robust scraper is needed, you can use **spider.cloud**, **Scrapy**, **Crawl4AI**, or **Firecrawl**.

### Step 3: Process with AI on Vast.ai (The Game Changer)

Here is the hack that changes the economics of this entire workflow.

**Vast.ai** lets you rent GPUs for under **$1 per hour** -- we were paying around **$0.69/hour**. You set up an open-source AI model on the GPU and make requests to it.

We downloaded the **OSS 120 billion parameter model** (the open-source model from OpenAI) and were getting throughput of **13-16 requests per second**. That means hundreds of thousands of requests per day for less than a dollar an hour.

We feed the model all the content from the website, the Google search results, and the AI overview, then ask: **"Who do you think the owner is? Output a summary of why and the proof."**

Because it costs essentially nothing, we run a second AI prompt to verify the answer. Why not verify again when it costs you nothing?

**Key benchmark:** OSS 20B benchmarks at roughly o3-mini intelligence. OSS 120B benchmarks at roughly o4-mini intelligence. These are serious models.

### Step 4: Fall Back to Google Search

If the website scrape does not reveal the owner, we run a Google search using **Open Web Ninja** -- queries like "[business name] owner." Open Web Ninja also has an AI mode fallback that can scrape Google's AI overview for the answer.

### Step 5: Verify Everything

We never just accept a single data point. We verify the owner identification multiple times because the AI costs are negligible. Ask it again. Cross-reference the website data with the Google search data. Make sure you are getting the right person.

## Phase 3: Find the Email

Now you have the owner's name and the website domain. The email waterfall:

1. **Prospeo** -- tried first for speed
2. **SmartLead's email finder** -- particularly exciting because they have actual send data showing which emails were delivered without bouncing
3. **Website scrape** -- if the above tools cannot find a personal email, scrape the website for generic emails like info@company.com

The key insight: even if you end up emailing a generic address, you now know the owner's name. Instead of "Hey there," you can say "Hey, Bob." That personalization matters.

## The Cost Breakdown

- **Google Maps scraping:** pennies per business via Scraper Tech / RapidAPI
- **Website scraping:** free (Node.js fetch)
- **AI processing via Vast.ai:** under $1/hour for 13-16 requests/second
- **Email finding:** standard Prospeo/SmartLead pricing

The Vast.ai GPU rental is the unlock. Anything you want to process with AI at scale -- not just Google Maps leads -- you can rent a GPU and push through massive volume for almost nothing.

## If You Do Not Want to Build It Yourself

**Tang.ai** (built by a friend who introduced us to Vast.ai) does verified email addresses for local businesses as a platform. If you do not want to wire all of this up yourself, that is an option.

## Key Takeaways

- The hard part of Google Maps leads is **finding the owner**, not scraping the businesses or finding emails
- **Vast.ai** GPU rentals (under $1/hr) make it feasible to process massive amounts of website content with AI
- Use a waterfall: LinkedIn first, then website scrape + AI, then Google search + AI overview
- **Always verify** your owner identification multiple times -- it costs nothing with self-hosted AI
- **SmartLead's email finder** is promising because it uses real send/bounce data
- Even generic emails (info@) work well when you know the owner's name
