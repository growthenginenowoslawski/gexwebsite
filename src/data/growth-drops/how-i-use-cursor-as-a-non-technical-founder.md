---
title: "How I Use Cursor as a Non-Technical Founder"
description: "A non-technical founder's complete workflow for Cursor: from voice memo prompting to plan mode, testing strategy, and hosting. Built for services teams, not SaaS engineers."
youtube_url: "https://youtube.com/watch?v=zC7yIRwkyaY"
published: "2025-12-02"
reading_time: "9 min read"
tags: ["cursor", "ai", "automation", "tools", "cold-email"]
thumbnail: "https://i.ytimg.com/vi/zC7yIRwkyaY/hqdefault.jpg"
---

> Watch the full video: [How I Use Cursor as a Non-Technical Founder](https://youtube.com/watch?v=zC7yIRwkyaY)

## Context: What We've Built

I'm non-technical. I can't write or read code. But I run a cold email agency sending **8 to 11 million emails a month**, and over one Thanksgiving weekend, I built all of the following with Cursor:

- **Automated list pulling** -- companies and contacts staged in Supabase, with campaigns auto-refilled at 2 a.m. daily
- **CSV processing automation** -- replaced 10-15 million rows per week of manual Clay uploads
- **Real-time analytics overhaul** -- sending snapshots at 12:00, 3:00, and 6:00 instead of waiting until the next morning's team call
- **Custom email lookup API** -- caching every email we've ever found in Supabase, running a waterfall through **Lead Magic**, **Prospeo**, and **Million Verifier** when we don't have a cached result
- **Souped-up Google Maps scraper** -- scrape every zip code in the US for any keyword, cut from 24 hours to 3 hours
- **Automated campaign setup** -- input an Apollo URL or company filters, pull 50 contacts, auto-create the campaign in Smartlead, stage all contacts in Supabase
- **Batched API with cached ICP scoring** to lower enrichment costs
- **AI lead categorization** for replies in the master inbox
- **Bulk contact enrichment flow**

And that's just the Thanksgiving weekend build. The categories fall into two buckets: **analytics** and **automating manual tasks**.

## Step 1: Gather Context with Voice Memos

The single biggest factor in getting good output from Cursor is **giving it too much context**.

Here's my actual workflow: I go for a walk with my dog, open **Voice Memos** on my phone, and just talk. I explain what I want to build, why I want to build it, what the edge cases are, what APIs are involved -- everything. I live on a mountain in New Jersey with no cell service, so I use Voice Memos instead of ChatGPT voice mode. If you have internet, use ChatGPT voice mode for a back-and-forth conversation.

Then I take that transcript, paste it into Cursor, and turn on **plan mode**.

**The lesson: give it way too much context.** More is always better.

## Step 2: Plan Mode (The Most Important Step)

Plan mode is where you invest the time. Here are the three rules for a good plan:

### Rule 1: Confirm All Key Points

Read the plan carefully. Make sure it explicitly covers every requirement you mentioned. If you said "pull contacts and stage them in Supabase," the plan should say exactly that -- not something vaguely similar.

### Rule 2: Specify Exact API Endpoints

I've seen Cursor run in circles when the plan doesn't lock down the exact API endpoints. Sometimes it'll hallucinate an endpoint -- like calling `dev.smartlead.ai` instead of `api.smartlead.ai`. The fix:

- Find the endpoints yourself and paste the documentation links into the plan
- Or tell Cursor: "Research the exact API endpoints and show me the documentation links you found" -- then verify them

### Rule 3: Anticipate Downstream Issues

Ask the plan to call out potential failure points. What happens if the API rate limits you? What if a field is null? Get this into the plan before you start building.

### Interrogate the Plan

After Cursor generates the plan, **don't just accept it**. Run one more prompt: "What clarifying questions do you need from me to make this plan even better?" Answer those questions, and the plan gets significantly tighter.

## Step 3: Choose Your Model Strategy

For **planning**, use the best frontier model available. I used **Claude Opus 4.5** for my entire Thanksgiving weekend build.

For **building**, you can switch to **Composer** (Cursor's fast model). It's dramatically faster for straightforward implementation. The one-two punch of **frontier model for planning, Composer for building** works extremely well.

If you're building something complex that you've never done before, stick with the frontier model for both planning and building. But for simple implementations, Composer crushes it.

**Key mindset shift:** These AI coding tools are built to create production-ready enterprise software. All you need is a few simple workflow automations. It can absolutely handle what we're throwing at it.

## Step 4: The Marshmallow Tower Mindset

If you've done the team-building exercise with spaghetti, rope, tape, and a marshmallow -- the teams that get the marshmallow highest always do the same thing: **build small, test, build bigger, test, build bigger, test**.

Apply this to Cursor:

1. Tell plan mode to **inject testing checkpoints** throughout the build
2. Build the first component and test it in isolation
3. Only move on when it works
4. Repeat for each component

This prevents the failure mode where you have a massive codebase and everything is broken because the foundation was wrong.

## Step 5: Test in the Terminal

Cursor gives you a terminal window. **Use it.** Here's why:

When Cursor runs code in its own process, sometimes it just spins its wheels. Five minutes go by and you have no idea if it's working or stuck on an error. When you run tests in the terminal, you can **see what's happening in real time**. If something goes wrong, hit **Ctrl+C** to kill it and prompt from there.

**Always ask Cursor to print logs.** Add this to your plan or prompt it at any time: "Print the current status of what you're doing." Without this, Cursor will silently encounter errors and not tell you about them. I've had it sit for 20 minutes on a silent error.

## Step 6: Hosting

For most workflows, you don't need hosting at all. Here's the progression:

1. **Run locally** as a terminal command -- this is where most of my workflows live
2. **GitHub Actions** for simple cron jobs -- I have 8 running, it's free for public repos and 2,000 minutes/month for private repos
3. **Railway or Trigger.dev** for larger, more robust builds

**Hosting tips:**
- When you finish building locally, open a **new plan mode session** specifically for hosting
- Make sure Cursor can connect to the hosting platform (check if there's an MCP for Trigger.dev or Railway)
- Give Cursor your API key so it can read deployment errors directly -- otherwise you'll be screenshotting errors back and forth between Cursor and the hosting dashboard

**Vercel** works too, but I personally use Railway and Trigger.dev based on recommendations.

## Step 7: When Cursor Gets Stuck

When Cursor keeps making the same errors over and over -- whether you're using a frontier model or Composer -- here's the fix:

1. Stop building
2. Turn on **plan mode**
3. Say: "You're making a lot of errors. Make a plan for why these errors are happening and how to fix them."
4. Review the new plan, then resume building

If something feels simple and Cursor isn't getting it, **always go back to plan mode**.

## You Don't Need a Front End

Most of our workflows are terminal commands, GitHub Actions, or webhooks triggered from our project management tool. Skip the front end obsession. Build the workflow first.

## Key Takeaways

- **Give Cursor too much context** -- walk, talk into a voice memo, transcribe, paste
- **Always use plan mode first** with explicit API endpoints and testing checkpoints
- **Frontier model for planning, Composer for building** is the winning combo
- **Marshmallow tower mindset** -- build small, test, build bigger, test
- **Run tests in the terminal** and always ask for printed logs
- **Host simple stuff on GitHub Actions**, bigger builds on Railway or Trigger.dev
- **When stuck, go back to plan mode** -- don't let Cursor spin its wheels
- Most GTM workflows don't need a front end -- just ship the automation
- The biggest tip: **just start building**
