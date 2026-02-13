---
title: "Building Cold Outreach Lead Lists in 2026 with AI"
description: "How to build rock-solid TAM lists using AI filtering and the batch API to get 80% coverage where every prospect is a real fit."
youtube_url: "https://youtube.com/watch?v=HiDjmYGom5g"
published: "2026-01-14"
reading_time: "8 min read"
tags: ["lead-generation", "ai", "cold-email", "outreach", "data", "clay", "tools"]
thumbnail: "https://i.ytimg.com/vi/HiDjmYGom5g/hqdefault.jpg"
---

> Watch the full video: [Building Cold Outreach Lead Lists in 2026 with AI](https://youtube.com/watch?v=HiDjmYGom5g)

## The Problem with Traditional List Building

If you have ever built a lead list, you know the drill. You open a tool, pick from a dropdown of industries, throw in some exclusion keywords, select job titles you think are right, and hope for the best. The problem is that most of these data points are **self-reported LinkedIn data**. The person setting up the company page just picks an industry. They might get it flat-out wrong because they are rushing through it. Or they are a SaaS company in the real estate space, so they label themselves "real estate."

People love to blame the platform, but the platform is just scraping what LinkedIn gives them. The real issue is the quality of user input. And in the past, you were stuck thinking inside those boxes.

## The 2026 Advantage: Cheap Data + Cheap AI

Here is what has changed. **Data is getting cheaper and AI is getting cheaper.** At Growth Engine X, where we send 7-9 million emails a month on behalf of 50+ customers, we have been thinking hard about how to build better TAM lists. The goal is simple: get **80% coverage** of a customer's total addressable market, but make sure every single company on that list is a legitimate fit.

Workflows that would have been too expensive or too crazy to run two years ago now make total sense.

## The Workflow: Work Backwards from the Customer List

Here is the process we implemented. It starts with something most people skip -- your existing customer list.

### Step 1: Enrich the Customer List

When we start working with a new customer, we take their current customer list and enrich it for everything we can get:

**Contact level:**
- Job title
- Time at company
- Past companies
- LinkedIn headline
- About section
- Job description content

**Company level:**
- Company description
- Industry
- Employee headcount
- Location
- Company name

If you are running this for your own team, just do the same thing with your customer list.

### Step 2: Let AI Analyze the Patterns

We feed the enriched customer list into **Claude Opus** and let it analyze the patterns. Out of one customer's 500 contacts, the AI identified:

- **Top buyer titles:** Purchasing Managers, Operations Managers, Office Managers, Buyers, Purchasing Coordinators
- **Top industries:** Construction, Trucking & Railroad, Transportation, Event Services, General Wholesale, Plastics, General Retail, Oil & Gas
- **Employee headcount ranges** (matched to actual customer data)

This is way better than guessing. These are the real titles and industries of people who actually bought.

### Step 3: Pull the Full Universe

Now we go to the **Prospeo API** and pull every single company that matches those industries and employee headcount ranges. You could also do this in **Clay**, with **Sales Navigator** scrapers, or any tool that maps to LinkedIn data.

The key difference: we are pulling everything, even the weird industries. In the example above, most industries made sense -- construction, trucking, wholesale. But "event services" was in there too, and that is a strange one. In the past, you would just throw that away because pulling 50,000 event services companies would be a nightmare to filter.

### Step 4: AI Scoring with the Batch API

This is where 2026 economics make everything different. Here is how we make it dirt cheap:

1. **GPT-5 Nano with cached inputs** -- 90% off input pricing
2. **Batch API** -- 50% off input and 50% off output
3. **Low or minimal reasoning** -- keeps costs down further

Stack all of that together and you can process 60,000 event services companies for pennies. Even if only 1,000 of them are good fits, the cost to find those 1,000 is negligible.

### Step 5: Build a Recursive, Self-Checking Prompt

This is critical. When you build your scoring prompt, **mix in the real customer companies**. Tell the AI: "These 200 companies are confirmed good fits. If any of them fail your scoring, something is wrong with your prompt -- ask me for more inputs."

Use **Claude Code** or **Cursor** to help build these prompts. Make the process recursive so the prompt self-corrects. Do not let the AI take the easy way out by just pattern-matching company descriptions.

The prompt should have industry-specific logic. If the industry is event services, include the specific criteria for what makes an event services company a good fit based on the actual customer data.

### Step 6: Extract Real Titles, Find Contacts

Once you have a scored company list, go back to the enriched customer data to extract the actual job titles of buyers. Instead of guessing that titles "generally look like this," you are pulling the real titles from people who actually purchased.

Then find those contacts in **Clay**, **Prospeo**, or whatever tool you prefer.

## Why We Use Prospeo

We are using the **Prospeo bulk enrich company API** for this workflow for two reasons:

1. **One-to-one match with LinkedIn data** -- their data maps directly to what you see on the company page
2. **API-first platform** -- we literally sent a 3-minute voice note to Claude Code and it set up the entire workflow

We have 7 million companies in our own internal database and we are still using the Prospeo API because of the structure they have built into it. If you are using **Clay**, you can absolutely run this same process. **Sculptor** would work too.

## The Full Process Summary

1. **Take the customer list** and enrich it for job titles, industries, headcounts, and everything else
2. **Have Claude analyze it** and identify the patterns -- top titles, industries, headcount ranges
3. **Pull every company** in those industries and headcount ranges from Prospeo, Clay, or Sales Navigator
4. **Build a scoring prompt** optimized for cached inputs and the batch API, with real customers mixed in as a self-check
5. **Validate manually**, then push to the batch API to score the entire list
6. **Extract the real buyer titles** from the customer data
7. **Find contacts** and start outreach

This will not get you 100% of the TAM. It will miss some edge cases. But for getting an outbound campaign off the ground with high confidence that every contact is a real fit, this is the best process we have found after years of list building.

## Key Takeaways

- Work backwards from your existing customer list, not forwards from industry guesses
- Self-reported LinkedIn data is the real problem with list quality, not the tools
- AI scoring with cached inputs + batch API makes it economically viable to pull and filter massive lists
- Mix real customers into your scoring prompt so the AI self-corrects when it gets things wrong
- Use Claude Code or Cursor to build recursive, self-checking prompts
- Even weird outlier industries become worth pursuing when AI filtering costs pennies
