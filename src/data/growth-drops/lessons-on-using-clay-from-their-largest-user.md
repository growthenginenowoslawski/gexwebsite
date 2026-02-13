---
title: "Lessons on Using Clay.com From Their Largest User"
description: "Tips for building Clay tables faster, managing credit spend, and prompting AI from the team that ran 37 million rows in a single week."
youtube_url: "https://youtube.com/watch?v=kFQfMZBo6Lo"
published: "2025-10-20"
reading_time: "8 min read"
tags: ["clay", "ai", "outreach", "tools", "automation"]
thumbnail: "https://i.ytimg.com/vi/kFQfMZBo6Lo/hqdefault.jpg"
---

> Watch the full video: [Lessons on Using Clay.com From Their Largest User](https://youtube.com/watch?v=kFQfMZBo6Lo)

## 37 Million Rows in One Week

These are the rules we train our team with for building Clay tables. This isn't theory -- we ran **37 million rows** in Clay in a single week. We process roughly **18 million contacts per month** to send over **6 million emails**. We have **400+ Clay tables** actively running every week. The Clay engineering team once joked internally that shared rate limits are "50% for Eric and 50% for the masses."

Here's how we actually operate at that scale.

## Rule 1: Conditional Formulas on Every Paid Integration

This one seems obvious, but it's the rule most people skip. **Put a conditional formula on every single paid integration.** I don't care if the conditional formula is just "first name must not be empty." The point is building the habit.

Without conditional formulas, you're burning credits on rows that shouldn't be enriched -- empty rows, bad data, rows that already have the information you need. At the volume we operate, even a 2% waste rate adds up to hundreds of thousands of wasted credits.

Get in the habit. Every paid integration. No exceptions.

## Rule 2: Use Functions for Shared Workflows

Here's the problem: we process 18 million contacts a month and we have 400 active Clay tables. If we want to change our email validation waterfall -- say, add a new validation tool -- we'd have to open every single table and update it manually.

**Functions** solve this. (This was a beta feature at the time of the talk.) Instead of baking the same workflow into every table, you send data from your table to a centralized function, it runs the workflow, and sends the data back. One workflow powering 15 tables. Change it once, it updates everywhere.

For example, we have a function that handles CRM integration: lookup contact, update if exists, create if new, send data back. We have about 10 Clay tables for one customer alone, and none of them need their own HubSpot integration baked in. They all call the same function.

## Rule 3: Save All Paid Data to Your CRM or Supabase

This is a common misconception among Clay users coming from tools like **ZoomInfo** or **Apollo**. In those tools, when you save an email address, it's yours forever. **Clay doesn't work like that.** Clay is middleware -- it's designed to process data and push it to your CRM or sequencer.

But people forget to save the enriched data, then need it again later and pay to re-enrich the same contacts.

We used to save everything to a CRM. We run so many records now that we had to switch to **Supabase** because we were destroying the CRM's API bandwidth. For **$30 per month**, one of our Supabase databases holds **11.4 million validated email records** plus seven other tables. You cannot break that API. We've tried.

**The rule:** Any time you pay for an enrichment, even if you think it's a one-time thing, send the data to your CRM or Supabase. You will use it again.

## Rule 4: Scheduled Sources for Evergreen Campaigns

When a campaign mathematically works -- you know that X emails produces Y positive responses -- you want to keep it running indefinitely. We used to do this manually: download a CSV from a data source, upload to Clay, process, repeat. **60 manual tasks per day.**

Now we use **Clay's scheduled sources**. Here's the setup:

1. Open a **$15/month HubSpot account**
2. Load the customer's entire TAM into it (could be 300,000+ contacts)
3. Create a segment (formerly called "active list")
4. Connect that segment as a scheduled source in Clay
5. Clay processes people through the list automatically

The campaign runs itself. No manual CSV uploads. No daily tasks. Just a pipeline that keeps flowing.

## Rule 5: Don't Use AI When Formulas Can Do the Job

**Clay's formula system is powered by JavaScript.** It can handle a lot more than people think:

- Cleaning and combining data
- If/then statements
- Lead scoring
- Abbreviating state names (New Jersey to NJ)
- Any deterministic logic

If the task doesn't involve content generation and you need it to be mathematically correct every time, use a formula instead of AI. The AI formula generator inside Clay will write the JavaScript for you. And if you need something more complex, just screenshot the formula and throw it into **ChatGPT** to debug or extend it.

## AI Prompting Rule 1: The 10-Minute Manual Research Rule

A VC-backed company with a fancy four-letter domain once asked us: "What are other people using AI and Clay for?" That's the wrong question. Who cares what other people are doing?

The right question: **What would I do manually if I researched this person for 10 minutes?** What information am I looking for? How can I automate that with Clay?

That's how we build every workflow. We don't guess at integrations or string Claygents together hoping for the best. We manually research a few companies first, note what we're looking for, then work backwards to build the automation.

## AI Prompting Rule 2: Only Let AI Do One Thing

A huge mistake I see in people's Clay tables: one Claygent goes out, checks the website content, decides if it's an e-commerce store, classifies the industry, and does three other things. AI starts falling apart when you overload it like that.

Here's how we do it instead:

1. **Claygent 1:** Go out, get content about the website
2. **Downstream column 1:** Is it a consumer packaged goods company?
3. **Downstream column 2:** What products do they sell?
4. **Downstream column 3:** What industry is it in?

One task per AI call. We use **GPT-4o mini** for everything, so the cost of separating into multiple columns is negligible. The accuracy improvement is massive.

## AI Prompting Rule 3: Use "Purple" as Your Safeguard

AI is like a really intelligent fifth grader -- it just can't stop talking. If there's no case study on a website and you don't give it an explicit fallback, you'll get:

- "No information was found."
- "Case studies weren't available on this website."
- "Unable to locate relevant case studies at this time."

Good luck filtering on all those different error messages downstream.

Instead, we tell AI: **"If there's no case study, output the word 'purple.'"** That's it. One keyword. Every downstream conditional formula just checks for "purple." Clean, filterable, consistent.

You can't rely on the confidence score either. Claygent is sometimes **100% confident** that there's nothing there, so the confidence level doesn't help you filter empty results.

## AI Prompting Rule 4: Always Use Examples

Even if you're mediocre at prompt engineering, adding examples fixes almost any prompt. Here's our process:

1. Manually research a company and write out what you'd actually say
2. Do this for 3-4 companies
3. Include those as examples in the prompt

The examples train the model on your exact tone, format, and level of specificity. It's the single highest-leverage thing you can do to improve AI output quality.

## AI Prompting Rule 5: Use the Metaprompter

If you don't know how to write a good prompt:

1. Go to **ChatGPT**
2. Explain what you want to accomplish
3. Ask it to generate a prompt
4. Then ask: **"What questions do you have for me to improve this prompt?"**
5. It will output 4+ clarification questions
6. Turn on transcribe mode, answer them out loud
7. Your prompt just got significantly better

Credit to **Yash at Clay** for this approach.

## AI Prompting Rule 6: Ask AI to Show Its Reasoning

For difficult tasks like industry classification, tell the AI: **"Tell me the reasoning why you think it's this kind of company before you give me the final answer."**

The technology is predicting the next word in a sequence. When you force it to explain its reasoning first, any cognitive dissonance gets surfaced before it commits to an answer. The explanation gives it "time to think" and the final classification comes out more accurate.

## AI Prompting Rule 7: Expect to Spend 80% of Your Time on Edge Cases

Most people think building a Clay table is 80% integrations and 20% tweaking the AI. **It's the opposite.** 20% is putting the integrations together. 80% is fiddling with the AI prompts.

We fix everything with prompts. Every time we see output we don't like, we add a rule or example to handle that edge case. This is why we stick with **GPT-4o mini** instead of "smarter" models -- these models are benchmarked to solve calculus. We're trying to write "Hey, I saw on your website you help fitness enthusiasts breathe better." 4o mini handles that just fine, and we dial it in with prompt engineering rather than throwing money at bigger models.

## Key Takeaways

- **Conditional formulas on every paid integration** -- no exceptions, build the habit
- **Save enriched data to Supabase or your CRM** -- $30/month for 11.4M records beats re-enriching
- **Use scheduled sources** to keep evergreen campaigns running without manual CSV uploads
- **Formulas over AI** for any deterministic task -- formulas are JavaScript and don't hallucinate
- **10-minute research rule**: manually research companies first, then automate what you did
- **One task per AI call** -- split logic across multiple columns, not one overloaded prompt
- **"Purple" as a safeguard** gives you a single keyword to filter on when AI finds nothing
- **Always include 3-4 examples** in your prompts -- it's the highest-leverage prompt improvement
- **80% of building a Clay table is edge-case prompting**, not setting up integrations
