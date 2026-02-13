---
title: "Beginner Claude Code Scraping Tutorial"
description: "How to build a LinkedIn engagement scraper with Claude Code or Cursor using a RapidAPI endpoint -- targeting people who engage with competitor content."
youtube_url: "https://youtube.com/watch?v=oIMx7CBprh4"
published: "2026-01-15"
reading_time: "5 min read"
tags: ["scraping", "cursor", "automation", "lead-generation", "tools"]
thumbnail: "https://i.ytimg.com/vi/oIMx7CBprh4/hqdefault.jpg"
---

> Watch the full video: [Beginner Claude Code Scraping Tutorial](https://youtube.com/watch?v=oIMx7CBprh4)

## The Workflow That Gets 4-5x Reply Rates

One of the best-performing workflows we run for customers is targeting people who **engage with competitor or customer LinkedIn posts**. We're talking about people who like or comment on posts from companies in your space. When we've run this, we've seen **4-5x increases in reply rates** above regular campaigns.

This is also a perfect **starter project** if you're looking to get into Claude Code or Cursor. The inputs are simple, there's an MCP available, the output is clear, and you can manually verify the results in seconds.

## The Two Use Cases

### 1. Customer Adjacency Targeting

Say you have a case study with **Clay.com** because you run outbound emails for them. You can monitor all of Clay's employees and their company LinkedIn page for anyone engaging with their content.

When a founder of a B2B SaaS company with 10+ employees likes a Clay post, you now know two things: they're interested in outbound, and they've definitely heard of Clay. Your email becomes: "Hey, we do outbound strategy for companies like Clay.com. Would you want to talk?"

**Critical rule: never say you saw them liking the LinkedIn post.** All you're doing is using the engagement data to inform your social proof. You mention a company they've clearly heard of, and that familiarity makes your email stand out.

### 2. Competitor Monitoring

Monitor your competitors' LinkedIn activity and reach out to their engaged audience. **Punch up on this** -- monitor your large, well-known competitors, not your fellow bootstrap founders.

Again, don't say "I saw you liked [competitor]'s post." You can get a little more direct by positioning against competitors: "Competitors like C17 or Leadbird do things this way -- here's how we do it differently." But the engagement data is for targeting, not for your opening line.

### 3. Topic-Based Monitoring

The API also lets you search for posts about specific topics and pull everyone who engaged. If you sell AI automation tools, you could target everyone who liked or commented on posts about AI in sales. This is a bit more advanced and requires different API parameters, but the same infrastructure handles it.

## The Tech Setup

### The API

Use the **Realtime LinkedIn Bulk Data API** on **RapidAPI**. They have both a regular version and a **batch version** -- use the batch version if you're running a lot of queries concurrently.

The API accepts a list of **LinkedIn company URLs** as input and returns:

- All posts from those company pages within your specified time window
- All employees who work at those companies
- All posts from those employees
- All people who liked or commented on any of those posts

### Setting It Up With Claude Code or Cursor

The setup took about **10 minutes** of finicking. Here's the approach:

1. **Get the RapidAPI endpoint** (linked in the video description)
2. **Open Claude Code or Cursor**
3. **Connect the RapidAPI MCP** -- every API on RapidAPI comes with an MCP (Model Context Protocol), which makes it easy for AI to plug into the endpoint without manual setup
4. **Use plan mode** -- always start in plan mode when using Claude Code or Cursor

If you don't know how to set up the MCP connection, take a screenshot of the API page and ask Claude Code or Cursor how to connect. It'll walk you through it.

**Pro tip:** Take the transcript from this video (use **Google's NotebookLM** to extract it from the YouTube URL) and feed it into Claude Code or Cursor as your build plan. The transcript essentially is the spec.

### The Build Requirements

Give Claude Code or Cursor a prompt that covers this flow:

1. Accept a list of company LinkedIn URLs as input
2. Define a time window for posts
3. **Get company page posts** within that window
4. **Identify all employees** at those companies
5. **Pull employee posts** within the same window
6. **Capture all likes and comments** on both company and employee posts
7. **Deduplicate** the contact list so you don't enrich the same person twice

You can also ask it to build a simple **user interface**, but for your first time, just work inside the terminal with Claude Code or directly in Cursor. If you do want a UI later, we use **Railway** to deploy everything.

### Building On Top of It

Once you have the engagement data flowing, you can add more layers directly in Claude Code:

- **Filtering** -- only keep contacts matching your ICP (company size, title, industry)
- **Email finding** -- run email lookups on the contacts you want to reach
- **CRM integration** -- push qualified leads straight into your sequencer

The point is to start simple and build up. Get the scraper working, verify the data manually, then add enrichment and filtering as next steps.

## What NOT to Do

This is important enough to repeat: **Do not start your email with "I saw you liked this post about..."**

That's creepy and it kills the engagement advantage. The whole point is that you're sending them a normal, well-crafted email -- but you've chosen them specifically because they're already engaged with content in your space. The targeting is the secret weapon, not the opening line.

Just get straight into your message. Use the social proof of the company they were engaging with if it's relevant to your case study. That's it.

## Key Takeaways

- **LinkedIn engagement targeting** produces 4-5x higher reply rates than standard campaigns
- Use the **Realtime LinkedIn Bulk Data API on RapidAPI** -- it has both regular and batch versions
- **Never mention that you saw them engage with a post** -- use the data for targeting only
- Every RapidAPI endpoint comes with an **MCP**, making it easy to connect via Claude Code or Cursor
- The whole setup takes about **10 minutes** -- perfect as a first Claude Code or Cursor project
- **Always use plan mode** when building with Claude Code or Cursor
- Start simple (scraper only), then layer on filtering, email finding, and CRM integration
- **Punch up** -- monitor large competitors, not small ones
