---
title: "Setting Up Apify for Instagram Scraping in Clay"
description: "Step-by-step walkthrough of connecting Apify's Instagram Profile Scraper to Clay, extracting usernames from URLs, and pulling follower counts and post data."
youtube_url: "https://youtube.com/watch?v=av9j7aNrzNY"
published: "2025-09-11"
reading_time: "5 min read"
tags: ["clay", "scraping", "tools", "lead-generation"]
thumbnail: "https://i.ytimg.com/vi/av9j7aNrzNY/hqdefault.jpg"
---

> Watch the full video: [Setting Up Apify for Instagram Scraping in Clay](https://youtube.com/watch?v=av9j7aNrzNY)

## What We Are Building

The goal is to enrich company data in **Clay** with Instagram metrics -- follower count, recent post engagement, and post recency. This is useful for qualifying leads who are active on Instagram and filtering out those who are not.

The workflow has three parts:

1. Get the company's Instagram URL
2. Extract the username from the URL
3. Use **Apify** actors inside Clay to pull profile data

## Step 1: Get the Instagram URL with Zenrows

Start with your company's normalized domain in Clay. Use the **Zenrows** scrape URL action to pull social links from the company's website.

- Select "Scrape URL" in Clay
- Use the normalized domain as the input
- Set HTML output fields to **social links only** -- you do not need anything else
- Run on 10 rows first to verify it works

This will return social media links including Instagram URLs where they exist.

## Step 2: Extract the Username with a Formula

**Apify** needs just the Instagram username, not the full URL. Every Instagram URL follows the same pattern: `instagram.com/username/`

Use Clay's formula builder to extract the text between `com/` and the trailing `/`. The trick with Clay formulas is to **look for the pattern that is the same every time** and then pull out what you need.

Tell Clay: "Give me the data between `.com/` and `/`" -- then hit generate formula. You will get clean usernames like `humansofny` instead of `https://www.instagram.com/humansofny/`.

## Step 3: Set Up the Apify Profile Scraper Actor

**Apify** is a platform that gives you access to web scrapers you can run inside Clay. Here is how to set up the Instagram Profile Scraper:

1. In Clay, add a new action: **Run Apify Actor**
2. Search for "Instagram Profile Scraper"
3. For the **input data**, here is the trick that saves time:

**Do not try to guess the input JSON format.** Instead:
- Go to Apify directly
- Find the Instagram Profile Scraper actor
- Run it once manually with a test username
- Go to **Runs**, click on your run, then click **Input**
- Copy that entire input JSON
- Paste it into Clay
- Replace the hardcoded username with your formula column

This is the most reliable way to get the input format right. Trying to guess at it is frustrating and error-prone.

4. Add a **conditional formula** so the actor only runs on rows where you have a valid email or Instagram URL. Do not waste credits on rows that will not produce results.

## What Data You Get Back

The Instagram Profile Scraper returns more than you might expect:

- **Full name**
- **Username**
- **Verified status**
- **Biography**
- **Follower count**
- **Post count**
- **Latest post data** (including timestamp, likes, and comments)

In many cases, the Profile Scraper gives you everything you need -- including recent post engagement data -- without needing to run a separate Post Scraper actor. Check the profile scraper output first before setting up additional actors.

## Finding the Right Actor ID

If an Apify actor is not showing up when you search for it in Clay, look at the actor's URL in Apify. The run URL often contains the actor ID (looks something like `RT1ZQS`). You can enter this directly in Clay using "Text with tokens" mode to specify the exact actor you want.

Click on the actor in Apify to confirm its ID before pasting it into Clay.

## Pro Tips

- **Always run on 10 rows first** before running at scale to make sure everything works
- **Use conditional formulas** to skip rows without valid data -- do not waste Apify credits on empty rows
- The Profile Scraper's latest post data often eliminates the need for a separate Post Scraper
- When extracting data from Apify results, name your output columns clearly: "Likes, Most Recent Post," "Comments Count, Most Recent Post," "Latest Post Timestamp"

## Key Takeaways

- **Zenrows** inside Clay is the fastest way to get social links from company websites
- Use Clay formulas to extract Instagram usernames from full URLs
- **Never guess at Apify input formats** -- run the actor manually first, then copy the input JSON
- The Instagram Profile Scraper alone usually gives you follower count, post count, and recent post engagement
- Add conditional logic so you only run the scraper on rows with valid data
