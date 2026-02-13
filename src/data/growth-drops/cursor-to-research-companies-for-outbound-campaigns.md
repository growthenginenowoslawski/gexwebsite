---
title: "Cursor to Research Companies for Outbound Campaigns"
description: "How we used Cursor and Python to scrape and classify 109,000 company websites for $20 using open-source AI models via OpenRouter."
youtube_url: "https://youtube.com/watch?v=yj-cGa7VVwE"
published: "2025-11-02"
reading_time: "5 min read"
tags: ["cursor", "scraping", "ai", "lead-generation", "tools", "data"]
thumbnail: "https://i.ytimg.com/vi/yj-cGa7VVwE/hqdefault.jpg"
---

> Watch the full video: [Cursor to Research Companies for Outbound Campaigns](https://youtube.com/watch?v=yj-cGa7VVwE)

## The Problem: Identifying SaaS Companies at Scale

We needed to build a database of SaaS companies. The first approach was brute force: download everything from **Crunchbase**, **Apollo**, **Owler**, and **Ocean.io**. If any of those providers tagged a company as SaaS, we added it to the list. If multiple providers agreed, the company got a higher confidence score.

The result? Highly inaccurate. The keyword-matching approach was basically a waste of time. Too many false positives, too many missed companies.

Then it hit us: **Cursor + Python + an open-source AI model** could do this better, faster, and cheaper.

## The Solution: Scrape Websites and Let AI Classify

Instead of relying on third-party labels, we scraped the actual company websites and had an AI model read the content and make the determination.

**The stack:**
- **Python** for web scraping (built entirely through Cursor)
- **OpenRouter** running an open-source 20B parameter model
- **Cursor** as the natural language interface to build everything

**The results:**
- **109,000 companies** scraped and classified
- **~$20 in total API credits**
- The only "unknowns" were companies whose websites no longer existed

That's roughly **$0.00018 per company**. Compare that to buying this data from any enrichment provider.

## How We Built It in Cursor

The prompt to Cursor was simple:

1. Use a Python library to scrape the homepage content
2. Help me build the classification prompt
3. Use **OpenRouter** to run the AI model
4. Let's iterate together

Cursor built the entire workflow from that starting point. Here's what it generated:

- **Smart web crawling** that converts HTML to clean markdown
- **Intelligent page selection** to find the most relevant content
- **Batch processing** to handle 109K companies efficiently
- **AI classification** via OpenRouter to determine if each company is SaaS

The process for building the prompt was collaborative. We told Cursor: "Give me 20 example companies. Scrape the content. I'll tell you which ones are SaaS and which aren't, and based on my reasoning, help me build the classification prompt." Cursor handled the examples, refined the prompt, and ran the whole batch.

## Going Deeper: Pricing Pages and Case Studies

After the initial classification worked, we took it further:

1. **Find the sitemap** for each confirmed SaaS company
2. **Search for keywords** like "pricing," "customers," "case study," or "product"
3. **Scrape those specific pages** and extract the content
4. If no clear keyword match exists, **give the sitemap to OpenRouter** and let it pick the best page to scrape

This worked well for pulling pricing information and customer case studies -- exactly the kind of competitive intelligence you need for outbound campaigns.

## Why This Beats Traditional Enrichment

The old way of researching companies for outbound involves:

- Tiny company descriptions from data providers
- Dealing with **ZenRows concurrency limits** to get HTML
- Paying per company for basic classification
- Manual review of edge cases

The Cursor + Python approach:

- **Full homepage content** instead of a one-line description
- **Open-source models** at a fraction of the cost
- **Collaborative prompt building** where you guide the AI with examples
- **Scale to 100K+ companies** for $20

## Why Cursor Over Clay for This Use Case

**Clay** is still the best data integration layer for most workflows. But for this specific use case -- scraping websites and running them through an AI model -- Cursor wins for a few reasons:

- Using **OpenRouter inside Clay** is a bit clunky
- Cursor lets you **build the prompt collaboratively** with examples
- You can iterate on the classification logic in natural language
- The scraping, classification, and output all happen in one workflow

For sophisticated list-building needs, the move is: use **Python** (via Cursor) for the scraping and classification, then push the cleaned data into Clay for enrichment and campaign setup.

## The Bigger Picture

This tool is built to write enterprise-grade software. What we're asking it to do from a go-to-market perspective is trivially simple by comparison. Scraping websites and classifying companies is like crushing beer cans for a tool designed to build production applications.

If you haven't been as excited about a tool since **Clay**, this is the one.

## Key Takeaways

- We classified **109,000 companies** as SaaS or not-SaaS for **~$20** using Cursor + Python + OpenRouter
- Scraping actual website content beats relying on third-party company labels
- Cursor builds the entire scraping and classification workflow from natural language prompts
- You can extend it to pull **pricing pages, case studies, and customer lists** from target company websites
- For complex list building, use Cursor for scraping/classification and Clay for enrichment
