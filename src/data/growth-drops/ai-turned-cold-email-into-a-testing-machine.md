---
title: "AI Turned Cold Email Into a Testing Machine (Here's How We Use It)"
description: "How Claude Code enables programmatic cold email testing like Facebook ads -- campaign strategy, scoring, copywriting, and orchestration at scale."
youtube_url: "https://youtube.com/watch?v=DRax2OiF_ZA"
published: "2026-02-11"
reading_time: "8 min read"
tags: ["cold-email", "ai", "automation", "outreach", "copywriting", "tools"]
thumbnail: "https://i.ytimg.com/vi/DRax2OiF_ZA/hqdefault.jpg"
---

> Watch the full video: [AI Turned Cold Email Into a Testing Machine (Here's How We Use It)](https://youtube.com/watch?v=DRax2OiF_ZA)

## Cold Email Testing Should Work Like Facebook Ads

Facebook published data years ago showing that the advertisers who generate the biggest ROAS are the ones doing the **most testing**. That finding has always stuck with me, because if there's one thing I've wanted to improve about running a cold email agency, it's the ability to test more, faster.

Last year we ran **1,500 campaigns**, generated over **60,000 positive replies**, and worked with hundreds of clients. When we dumped all of that data from our email sending accounts into a **Supabase** database and pointed **Claude Code** at it, the patterns became obvious: the clients who ran more campaigns with us -- the ones who tested more segments, more messaging, more offers -- consistently outperformed the ones who went all-in on a single campaign.

The problem is that programmatic testing in cold email has always had bottlenecks that Facebook ads don't have.

## Why Cold Email Testing Has Been Harder Than Paid Ads

With Facebook ads, the audience is largely selected for you by the algorithm. You set some filters, upload creative, and let the platform optimize. Cold email is different:

- You need to **build the audience yourself** for every test
- You need to **route each contact** to the right campaign based on their attributes (title, industry, headcount, etc.)
- You need to **create the campaigns** in Smartlead or Instantly with the right copy and settings
- You need to make sure nobody ends up in **two different campaigns** by accident

Running 5+ tests simultaneously used to mean hours of manual work in **Clay** tables: building all the formulas, uploading campaigns, being extremely militant about which formula maps to which campaign. It was a mess.

## How Claude Code Changes the Math

**Claude Code** (along with Cursor and Codex) removes the two biggest bottlenecks:

1. **Content generation and campaign ideation**
2. **Orchestration** -- the if/then logic of routing contacts to campaigns

Here's how we're using it.

## Three Claude Skills That Run Our Testing Framework

We've built three distinct skills in Claude that work together:

### Skill 1: Campaign Strategy

This skill focuses on creating a balanced mix of campaign types:

- **Broad campaigns** -- messaging that can go to every person in the ICP, no specific signal needed
- **Focused campaigns** -- targeting a segment of the ICP based on employee headcount, job title, industry, or other differentiators
- **Niche campaigns** -- built around a specific signal, like website visitor deanonymization or competitors' technology usage. Limited TAM, but high intent

The skill generates **10-20 campaign ideas** per client, each with segmentation criteria, hooks, target audience, CTAs, and lead magnet suggestions.

### Skill 2: Campaign Scoring

The second skill takes those ideas and **scores them on likelihood of working**.

We loaded all the campaigns we've ever run -- along with their analytics -- into Supabase and pointed about **30 Claude sub-agents** at the data to extract rules about what makes a campaign excellent vs. average vs. below average. Those rules now power the scoring:

> "Based on our past data and campaigns we've sent, we think this campaign can be improved with this idea, this idea, and this idea."

After scoring, the campaign ideas **self-improve** based on the feedback. The strategy skill adjusts its recommendations before anything gets written.

### Skill 3: Copywriting

The third skill generates the actual email copy. It's trained on about **20 Google Docs** of campaigns that performed well, plus content from cold email copywriters like **Josh Braun** whose thinking about messaging is consistently excellent.

The output matches the style and tone that has historically worked across our client base.

## The Orchestration Problem (Solved)

The second half of the puzzle is getting the right contacts into the right campaigns based on their attributes. In plain terms: if this title AND this industry AND this employee headcount range, then go to this campaign.

This is where **Claude Code** shines. We give it:

- A **voice note** describing how we want the campaign to go
- The **Google Doc** with the approved copywriting and targeting
- The client's ICP breakdown

Claude Code builds the routing plan, and we ask it to **check for holes**: "Are there any gaps in this plan we haven't thought about?" It surfaces edge cases we'd miss manually.

### Hybrid Architecture: Clay + Trigger.dev/Railway

We're not replacing Clay for enrichment. Instead, we're building **Trigger.dev or Railway worker endpoints** that contain all the if/then routing logic. Those endpoints get called from within Clay tables, so we still get:

- Clay's **queuing and concurrency management**
- **Claygent** for advanced enrichment
- Cloud-hosted reliability

We just dump the JSON into the Trigger.dev/Railway worker, and it handles the orchestration. Best of both worlds.

## Why More Testing Is Better for Everything

Running more granular tests with smaller volumes per campaign is better across the board:

- **Deliverability** -- different copy going out from each inbox means less repetitive content, which is better for inbox reputation
- **Faster learning** -- cut losers early because the next test is already running
- **Lower risk** -- if one campaign underperforms, it's a smaller volume hit than going all-in on a single campaign
- **Compounding insights** -- after 5, 10, 15 campaigns, Claude can analyze the responses and surface which segments, messaging, and offers are working. Then it suggests the next test. The process becomes **recursive at the client level**

## The Shift: Cold Email Becomes Programmatic

A year ago, the analogy was "cold email is like a private ads network" -- you're buying impressions in someone's inbox. Now the analogy goes further: the **testing and iteration** is becoming as programmatic as Meta and Google Ads.

The two bottlenecks -- content generation and orchestration -- are both solved by Claude Code. The speed of testing in 2026 is going to be radically different from what was possible before.

## Key Takeaways

- The highest-performing cold email clients are the ones who **test the most** -- same pattern Facebook found with advertisers
- Cold email testing has historically been bottlenecked by **audience building** and **campaign orchestration**
- Three Claude skills power the framework: **campaign strategy** (broad/focused/niche), **campaign scoring** (against historical data), and **copywriting** (trained on winning campaigns)
- Claude Code handles the **if/then routing logic** that used to require hours of manual Clay table work
- A **hybrid architecture** (Clay for enrichment + Trigger.dev/Railway for orchestration) gives the best of both worlds
- More tests = better deliverability, faster learning, and **recursive improvement** at the client level
