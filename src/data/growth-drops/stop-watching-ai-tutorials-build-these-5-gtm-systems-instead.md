---
title: "Stop Watching AI Tutorials. Build These 5 GTM Systems Instead"
description: "Five practical Claude Code projects for GTM leaders -- from ICP analysis to recursive data testing. No coding experience needed, just real projects that deliver value."
youtube_url: "https://youtube.com/watch?v=yKImVaiPXzQ"
published: "2026-02-10"
reading_time: "8 min read"
tags: ["ai", "tools", "lead-generation", "data", "automation", "clay"]
thumbnail: "https://i.ytimg.com/vi/yKImVaiPXzQ/hqdefault.jpg"
---

> Watch the full video: [Stop Watching AI Tutorials. Build These 5 GTM Systems Instead](https://youtube.com/watch?v=yKImVaiPXzQ)

## The Problem with AI Coding Tutorials

If you're a go-to-market leader and you keep seeing people post about **Claude Code**, **Codex**, or **Cursor**, but you're still thinking "I don't know what to do with this" -- stop ignoring it.

Here's the context: I've never coded anything before in my life. I don't know how to read code. With the help of **Claude Code**, I've written over **2 million lines of code in the last 39 days**, all with a heavy go-to-market bias. I run a cold outbound agency sending **8 million cold emails every month**, and I've been building internal tools, customer workflows, and one-off automations -- all powered by Claude Code.

The problem with most AI coding tutorials is they all say the same thing: here's how to install it, here's how to connect it to a folder, here's how to connect it to GitHub, and then just go. That's not going to help you if you're in GTM. You need **actual projects** you can use in real life -- projects that give you an edge in your job while also building your skills.

Here are five projects, ordered from easiest to most advanced.

## Project 1: Analyze Your Current Customers

Most companies don't know their ideal customer as precisely as they think. After working with over **300 companies** at our agency, the number of people who truly know their ICP is way lower than you'd expect.

Here's a real example: a client told us the key signal was a **1:3 ratio of account executives to SDRs** on the team. We enriched their customer data in **Clay**, downloaded the CSV, and ran the analysis in Claude Code. Turns out, the actual best predictor was simply whether the company had a **sales operations person** -- the AE-to-SDR ratio didn't matter.

**What to enrich on your companies:**
- LinkedIn industry
- Employee headcount
- About section / company description
- Contact job titles

**Tools to use:**
- **Clay** for enrichments (cheapest and easiest)
- **Prospeo API** as an alternative
- **RapidAPI** LinkedIn scrapers

Feed the enriched CSV into Claude Code and ask it to find patterns. What industries are your best customers in? What headcount range? What keywords appear on their websites? If you don't have customers yet, analyze your dream customer list instead.

## Project 2: Build Your TAM

Now that you know who your ideal customer actually is, build your **Total Addressable Market** programmatically.

Take the ICP criteria from Project 1 -- say your best customers are in six specific LinkedIn industries, in a certain headcount range, and mention certain keywords on their website. Claude Code can pull your entire TAM using the **Prospeo API**.

**Why Prospeo for TAM building:**
- **1 credit = 25 contacts** in a search (extremely cost-effective)
- **Apollo** charges per contact on credits
- **Clay** gives access to the full TAM but through a different workflow
- **RapidAPI LinkedIn scrapers** work too
- **Disco** is good for company lists

You can even tier your TAM: companies with website keywords matching your ICP are A-tier, companies in the right industry without those keywords are B-tier. Claude Code handles all that logic.

## Project 3: Build Your Data and Knowledge Hub

Take all your **Fathom recordings** and dump every transcript into one massive file. Then use AI to mine it for insights:

- When do you talk about a customer being really good for you?
- When do you mention a customer giving you trouble?
- What workflows keep coming up over and over?
- What are the most common questions on sales calls?
- What kinds of companies have you been talking to?

The raw data from your internal calls, customer-facing calls, and sales calls contains a gold mine of patterns. Claude Code can surface the common themes -- content you should be creating, automations you should be building, products your customers are asking for.

## Project 4: Store Everything in a Database

Take your enriched customer data, your TAM, your call transcripts and insights -- and put it all in a **database** your team can access.

I use **Supabase** for this. Other options include **Convex** or whatever database tool you prefer. The key point: you don't need to know anything about databases, Postgres, or schema design. Claude Code handles all of it.

If you tell Claude Code to find the **official Supabase skill**, it'll set up your database structure automatically. Then you have a queryable system where you can ask questions whenever something new comes up.

**What goes in the database:**
- Enriched customer data with all your ICP signals
- Your full TAM pulled from Prospeo or Clay
- Call transcripts and customer insights
- Any other first-party data you're collecting

## Project 5: Recursive Data Quality Tests (Advanced)

This is the spiciest project. Don't try it until you've done the other four. But it's the one that will blow your mind.

The idea: **use Claude Code to recursively test data providers and AI prompts** against your known first-party data.

Here's what that looks like in practice:

1. Start with your customer list where you **know** the correct email, phone number, employee count, and revenue
2. Tell Claude Code: "Test six different data providers and see which one returns data closest to my first-party data"
3. Claude Code runs all the tests, compares results, and tells you which provider wins

The same approach works for **AI prompt testing**:

1. Give Claude Code 100 companies you know are ICP-fit
2. Ask it to build a prompt that can accurately identify ICP companies from a random list
3. It iterates on the prompt, tests it against your known data, and refines until accuracy is high

Without Claude Code, you'd have to build crazy **Clay** tables, test one provider at a time, manually tweak prompts over and over. Claude Code handles the iteration loop for you -- it changes prompts, runs tests, analyzes results, and tells you the answer.

## Key Takeaways

- Stop watching AI coding install tutorials -- build real GTM projects instead
- **Project 1:** Analyze your customer data to find your true ICP
- **Project 2:** Build your TAM programmatically with Prospeo or Clay
- **Project 3:** Mine your call transcripts for patterns and insights
- **Project 4:** Store everything in a Supabase database your team can query
- **Project 5:** Use recursive testing to evaluate data providers and optimize AI prompts
- You don't need to know how to code -- Claude Code handles everything from data analysis to database setup
