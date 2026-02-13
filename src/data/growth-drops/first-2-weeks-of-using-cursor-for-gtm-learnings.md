---
title: "First 2 Weeks of Using Cursor for GTM Learnings"
description: "Practical tips from two weeks of using Cursor as a non-technical marketer: screenshots for debugging, plan mode over MCPs, testing, CSV backups, and more."
youtube_url: "https://youtube.com/watch?v=zLDu0l_AbVw"
published: "2025-11-03"
reading_time: "7 min read"
tags: ["cursor", "ai", "automation", "tools", "cold-email"]
thumbnail: "https://i.ytimg.com/vi/zLDu0l_AbVw/hqdefault.jpg"
---

> Watch the full video: [First 2 Weeks of Using Cursor for GTM Learnings](https://youtube.com/watch?v=zLDu0l_AbVw)

## The Most Exciting Tool Since Clay

I haven't been this excited about a tool for go-to-market since I found **Clay** years ago. And I mean that. **Cursor** is eating use cases across our entire agency right now.

The stack that's emerging: whatever you launch campaigns on + **Clay** as the data integration layer + **Cursor** for building lists, launching campaigns, analyzing data, and automating everything in between. These are my learnings from the first two weeks of using Cursor daily, written as much for my team as for anyone watching.

## Why Cursor Over Claude Code or Codex

People ask why I'm using **Cursor** instead of **Claude Code** or **Codex**. A few reasons:

1. Cursor has **Claude Code and Codex baked in** -- you can select either model inside Cursor
2. I tried all three on the same day. Cursor was **the easiest to get started in**, and I was building things fast immediately
3. If I need something only Claude Code can do, I just select it within Cursor

## Tip 1: Use Screenshots to Solve Every Problem

Literally every problem I've run into with Cursor, I solved the same way: **take a screenshot** of the error, and either paste it directly into Cursor or upload it to ChatGPT and ask for the fix.

I'm not an engineer. I'm not going to debug code by reading it. But ChatGPT and Cursor already know how to solve these problems because they're not new problems. These AI coding tools are built for **enterprise-grade software**. GTM workflows are trivially simple by comparison. If you're a marketer or salesperson, your coding problems are not enterprise software problems. Cursor can handle them.

**Send this message to your team:** When you hit a problem, don't ask me -- screenshot it and ask Cursor or ChatGPT.

## Tip 2: Skip MCPs, Use Direct API Endpoints

Everyone's excited about **MCPs** (Model Context Protocol). I tried them. I was disappointed.

Here's what I found: MCPs just think and think and think without actually getting anything done. What works much better is going directly to the API documentation:

- **If you know the endpoint:** Copy the exact URL and paste it into plan mode
- **If you don't know the endpoint:** Tell Cursor: "Find the endpoint on their public API and show me the explicit link you pulled it from so I can verify it"

I ran into issues where Cursor was calling completely wrong endpoints. For example, it was calling `dev.smartlead.ai` instead of `api.smartlead.ai` and I have no idea where it got that URL. Giving the **direct endpoint documentation upfront** prevents this entirely.

MCPs might work great for other people. For simple GTM workflow building, direct API endpoints are faster and more reliable.

## Tip 3: Always Start with Plan Mode

Every single time you build something, **use plan mode first**. It's one extra step that saves hours of debugging.

Here's my plan mode workflow:

1. Talk through what I want to build using **Whisper Flow** or record a **voice memo** on my phone
2. Paste the transcript into Cursor with plan mode enabled
3. Cursor generates a step-by-step plan -- what it's going to build, which endpoints it'll use, the order of operations
4. Review and approve before building

**If you jump straight into agent mode without planning, the output is worse.** Plan mode with a ton of context consistently produces better results.

## Tip 4: Print the Logs

This one burned me multiple times. Cursor will run code and show you nothing. You sit there for 20 minutes thinking everything is processing, then you ask "Hey, why is this taking so long?" and it says "Oh yeah, there was an error."

The fix: **tell Cursor to print the current status of what it's doing**. In coding terms, just add "print the current status" to your prompt. Now you can watch the output in real time and catch errors immediately instead of waiting in the dark.

## Tip 5: Inject Tests Before Running Everything

I just used Cursor to set up **20 Smartlead campaigns in one shot**. Before running the full batch, I told it: "Make a test version first that only runs on one campaign, so I can verify the settings are correct."

**Always build two modes:**
1. A **testing code** that runs on a small sample
2. A **production code** that runs everything

This prevents catastrophic downstream problems. If you skip testing and the settings are wrong on all 20 campaigns, you've got a mess to clean up.

## Tip 6: Always Request CSV Backups

We were running a SaaS classification scrape on thousands of companies and my computer crashed. The data wasn't saved. Since then, I always include this in my prompts: **"Every time you create something, save a CSV backup as you go."**

This gives you two benefits:
- You can **pick up where you left off** if something crashes
- You have a **record of what was done** at each step

## Tip 7: Set a Global "No Delete" Rule

Cursor lets you add **account-level rules**. I added one that says: "You can read and write, but globally, do not delete anything."

Creating extra campaigns or email accounts isn't a big deal -- I can delete those myself. But if Cursor accidentally deletes something, that's much harder to undo. The rule works well and Cursor respects it.

## Tip 8: Use GitHub Actions for Cron Jobs

For anything you want to run on a schedule, **GitHub Actions** is the move:

- **Free** for public repos
- **2,000 minutes per month** for private repos
- Errors get sent to your email
- Easy to set up with Cursor

I'm running all my email analytics cron jobs on GitHub Actions. For bigger builds, people recommend **Railway** or **Vercel**, but I haven't needed them yet since I still run most things locally or through GitHub Actions.

## Tip 9: Connect to Supabase

**Supabase** is the database I use for everything. It's easy to set up, Cursor connects to it without issues, and it stores all our enrichment data, campaign data, and analytics.

People keep telling me I'll eventually "graduate" from Supabase. Maybe. But for now, it handles everything we need.

## The Parallel Workflow Trick

When you're learning Cursor and worried about speed, try this: **split your screen**. Run Cursor on one side building the automated version. Do the task manually on the other side.

You'll get the work done in roughly the same amount of time. But once Cursor finishes the code, **going back to that task is instant**. You're building a reusable automation library while still delivering today.

## Key Takeaways

- **Screenshot every problem** and paste it into Cursor or ChatGPT -- don't try to debug code yourself
- **Skip MCPs** for simple GTM workflows -- paste direct API endpoints into plan mode instead
- **Always start with plan mode** before building anything
- **Print logs** so you can see what Cursor is doing in real time
- **Inject tests** before running full batches
- **Request CSV backups** as the code runs to prevent data loss
- **Set a global "no delete" rule** in Cursor to prevent accidental destruction
- **Use GitHub Actions** for cron jobs (2,000 free minutes/month on private repos)
- **Use Supabase** as your database -- easy to connect, easy to query
- **Just start.** Split your screen, do it manually on one side and let Cursor automate on the other
