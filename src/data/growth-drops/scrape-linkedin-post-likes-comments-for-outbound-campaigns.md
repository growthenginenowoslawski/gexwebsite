---
title: "Scrape LinkedIn Post Likes Comments for Outbound Campaigns"
description: "Build hyper-targeted outbound lists by scraping LinkedIn post engagers using RapidAPI, Cursor, and Clay. Here's the exact playbook we use at our agency."
youtube_url: "https://youtube.com/watch?v=sMcolK-mvnE"
published: "2025-11-13"
reading_time: "5 min read"
tags: ["lead-generation", "scraping", "cursor", "outreach", "clay", "tools"]
thumbnail: "https://i.ytimg.com/vi/sMcolK-mvnE/hqdefault.jpg"
---

> Watch the full video: [Scrape LinkedIn Post Likes Comments for Outbound Campaigns](https://youtube.com/watch?v=sMcolK-mvnE)

## Why LinkedIn Engagers Make the Best Outbound Lists

People who like and comment on LinkedIn posts about your topic are already showing buying intent. They haven't raised their hand for a demo yet, but they're interested enough to engage with content in your space. Reaching out to these people is like shooting fish in a barrel -- especially when you filter them for the right industry and job title.

Here's the three ways to use this:

1. **Scrape your own content engagers** -- people liking your posts are warming up to what you do
2. **Scrape competitor content engagers** -- if your competitor's post went viral with 1,000 likes, those people care about your category
3. **Scrape topic-based post engagers** -- someone posts about project management and gets massive engagement? Those likers are prospects for your PM software

## The One Rule You Need to Follow

**Do not mention that you found them on LinkedIn.** Seriously. Unless you're reaching out to people who liked *your own* content, never say "Hey, I saw you liked [competitor]'s post."

Here's why: people will screenshot that email and send it to the person whose content you scraped. Competitors will find out, and the recipients find it creepy. Just whittle the list of 1,000 engagers down to the 200 who are ICP-fit, and send them the same strong email you'd send anyone else. The targeting does the heavy lifting -- you don't need to call it out.

## The Tech Stack

- **RapidAPI** -- LinkedIn endpoint for fetching posts and engagers
- **Cursor** -- to build the scraping workflow with natural language
- **Clay** -- to enrich the LinkedIn profile URLs with company data, titles, and emails
- **Trigify** (alternative) -- does social content listening if you don't want to use RapidAPI

## How to Build It

The whole thing runs on a **RapidAPI LinkedIn endpoint**. Here's what's available:

- **Person posts endpoint** -- get all posts from an individual profile (with pagination)
- **Company posts endpoint** -- get all posts from a company page (with pagination)
- **Post reactions endpoint** -- get likers from any post
- **Post comments endpoint** -- get commenters from any post

Here's the actual workflow:

1. **Start with LinkedIn profile URLs** (not company pages -- company accounts usually don't get great engagement)
2. **Fetch up to 50 posts per person** using the person posts endpoint
3. **Extract up to 200 likers per post** using the reactions endpoint
4. **Export everything to CSV** with LinkedIn profile URLs of all engagers
5. **Enrich in Clay** -- validate ICP fit with industry, title, and company data
6. **Send your best campaign** to the filtered list

**Pro tip on company pages:** Don't try to scrape engagers directly from company posts. Instead, take the company URL, find the individual contacts at that company, and scrape *their* personal posts. Individual posts consistently outperform company page posts.

## Building It in Cursor

The setup is dead simple. Here's what to do:

1. Go to the **RapidAPI LinkedIn endpoint** page
2. Click on any endpoint (person posts, reactions, etc.)
3. Copy the parameters and example response
4. Paste it into **Cursor** and explain what you want: "Give me a list of LinkedIn profile URLs. Find the last 50 posts per person. Extract up to 200 likers per post. Output everything as a CSV."
5. Cursor builds the whole thing

That's it. Cursor handles the code, the pagination, the CSV export -- all of it. For enterprise software developers, this is a trivial task. For go-to-market use cases, it's incredibly powerful.

## Scaling It with a Cron Job

Once you've got the basic scraper working, take it further:

- **Run a cron job** to check for new posts on a schedule
- **Build a database** that tracks posts you've already scraped
- **Automatically add new engagers** to your outreach workflow
- **Deduplicate** against people you've already contacted

This turns a one-time list build into a continuous lead pipeline.

## What About Company Page Followers?

You can scrape followers of a company page, but it requires a different approach. Services like **Scrape.li** can do it, but you need a **Sales Navigator account** that claims to work at the company you're scraping. That's a separate vendor -- the RapidAPI endpoint only handles posts and engagers.

## Key Takeaways

- LinkedIn post engagers are one of the most targeted lists you can build for outbound
- Use **RapidAPI + Cursor** to build the scraper, **Clay** to enrich
- Never tell prospects you scraped them from LinkedIn -- just send a strong email
- Scrape individual profiles, not company pages, for better engagement data
- Automate with a cron job to turn it into a continuous lead source
- This is one of the closest things to a guaranteed playbook in outbound
