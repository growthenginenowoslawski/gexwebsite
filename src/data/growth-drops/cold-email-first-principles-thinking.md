---
title: "Cold Email First Principles Thinking"
description: "The three pillars every cold email campaign must get right: inbox deliverability, list building, and campaign strategy. Tactical breakdown from sending 3M+ emails per month."
youtube_url: "https://youtube.com/watch?v=k3uGNuXtzQM"
published: "2025-11-17"
reading_time: "10 min read"
tags: ["cold-email", "outreach", "deliverability", "lead-generation", "copywriting"]
thumbnail: "https://i.ytimg.com/vi/k3uGNuXtzQM/hqdefault.jpg"
---

> Watch the full video: [Cold Email First Principles Thinking](https://youtube.com/watch?v=k3uGNuXtzQM)

## Stop Asking Permission, Start Thinking in First Principles

"Am I allowed to send images in a cold email? Am I allowed to send a video?" These are the wrong questions. The right question is: does it work? If 30% of people see your email with a video but you get way more responses than when 80% see your plain text email, then the video wins. Test it. Don't let someone else's rules override your data.

Every cold email question comes back to three first principles. Nail these and the tactical questions answer themselves.

## The Three Pillars

Cold email boils down to interrupting somebody's day and getting them to say yes to something -- from a complete stranger. For that to work, three things have to be true:

1. **They actually see your message** (inbox deliverability)
2. **They're the right person** (list quality)
3. **The message is valuable to them** (campaign strategy)

That's it. Everything else is a derivative of these three.

## Pillar 1: Inbox Deliverability

The guiding question here is simple: **What do spammers do, and how can I do the opposite?**

### Hot Swapping Inboxes

Here's what we do. We maintain two sets of infrastructure at all times:

- **Active infrastructure** -- currently sending emails
- **Insurance infrastructure** -- warmed up and ready to swap in

The ideal ratio is **1:1**. If you're sending 1,000 emails a day from your active inboxes, you want 1,000 emails a day worth of capacity sitting in warm-up as backup. At minimum, keep a **1:2 ratio** (half as many insurance inboxes as active ones).

For agency clients sending 1,000 emails a day, we set up enough domains and inboxes to send **5,000 emails a day** from day one. When active domains start dying, we cancel them, swap in insurance domains, and order replacements. The monthly cost stays flat because you're just rotating inventory.

At scale (say a client sending 5,000 emails/day), we keep **2,500 in reserve**. Total capacity is 7,500, but we only send from 5,000 and keep the rest warming.

### Dead Inboxes Don't Recover

People argue with me about this on LinkedIn all the time. Here's where I stand: **dead inboxes don't recover.** I would far rather kill the inbox, swap in an insurance domain, and order a new one. I don't wait for rewarms. I cut losses and move on. That cycle -- cancel, swap, reorder -- has been working extremely well for us.

### Domain Age Matters

The longer you've had a domain, the better it performs. We see verifiably more responses from **Outlook** when we're reaching out from aged domains. Four weeks of warm-up is the minimum; six weeks is what we aim for.

### The Outlook Problem

Outlook spam filtering is aggressive right now. Here's how we handle it:

- **Send shorter emails** to Outlook recipients than to Google recipients
- **Don't turn off Outlook sending by default** -- we send to everyone including Proofpoint and Mimecast
- **Only disable Outlook sending** in two scenarios: (1) we've been working with a client for a while and we start seeing deliverability problems, or (2) a brand new client who hasn't built momentum yet
- **Re-enable Outlook** once insurance domains hit 4-6 weeks of warm-up

### Automate Your Analytics

We use **Cursor** to hit the **Smartlead** API, pull all the analytics, and crunch the numbers. Currently we dump everything into **Supabase** and have Cursor analyze which domains to cancel and which insurance domains to promote. It tells us the recommendations, and then I approve the changes.

## Pillar 2: List Building

The rule here: **If I were to research a company for 10 minutes, what would I check to know they're a good fit? And what would I look for so I know what to say?**

Then automate both of those things.

### The Three Ways to Build Lists

**1. Forward (most common)**

Go to **Apollo**, **Clay**, or **LinkedIn**. Input your industry filter, job title, and location. Pull the list. Clean it up. This is the standard approach.

**2. Backward (most accurate)**

Start with the client's do-not-contact list -- their current customers and pipeline. These are confirmed good-fit companies. Enrich them in **Clay**, then analyze:

- What industries do they self-report?
- What keywords appear in their company descriptions?
- What's the typical employee headcount?
- What locations are most common?

Use ChatGPT to crunch this analysis. Then take those patterns and use them as your filters to build the forward list. You're working backwards from real data instead of guessing at filters.

**This is the approach I want my team doing most often.**

**3. Circular (for hard-to-place lists)**

Start with a perfect list of ~30 good-fit companies. Write a prompt explaining why they're good fits. Then use a **lookalike service** -- **EXA**, **Ocean.io**, or **Clay's lookalike builder** -- to find similar companies.

The loop works like this:

1. Start with 1 good-fit company
2. Find ~10 lookalikes
3. Use **OpenRouter** with a cheap reasoning model to evaluate: are these good fits?
4. 6 out of 10 pass? Add them to the database
5. Use those 6 to find more lookalikes
6. Repeat

The kill condition: if after **10 batches**, less than **15%** of results are good fits and we're not adding anything new, stop the workflow. Without this, the circular logic never ends.

We've used this successfully with about three clients on really hard-to-place lists where industry filters and company keywords alone don't cut it.

### Real Example: Business Loan Companies

A client wanted to reach out to business loan companies with specific keywords on their websites. You can't just filter for "financial services and banking" -- that gives you banks, wealth management, fintech, financial recruiting, consulting firms. It's a mess.

What we did:

1. Pulled everyone in banking, financial services, and lending from Clay
2. Ran a quick check with an **open-source AI model (OSS 20B)** using just the company description: "Is this a business loan company?"
3. If yes, double-checked the website for the specific keywords
4. Result: a clean, validated list

### The Screen Recorder Trick

When you're figuring out what to look for manually, turn on a screen recorder like **Loom** and talk out loud about what you're checking. That recording becomes the basis for the AI prompt you'll use to automate the process.

## Pillar 3: Campaign Strategy

### Problem Awareness Changes Everything

For our sales tax compliance client, they don't need a lead magnet. They reach out to e-commerce companies and literally say: "Hey, we automate sales tax compliance. Do you need help?" It works because **every e-commerce company has this problem**. They've been a customer for three years running this same approach.

But if you're selling something where there's heavy competition -- say, "we help you get more leads" -- that message is so overused that the only people responding are low-quality prospects. That's where you need a **lead magnet** or a creative offer to stand out.

### The Creative Ideas Campaign

The best-performing campaign across all our clients is the **creative ideas campaign**. We've been running variants of this for three and a half years.

The structure: "Here's three ideas of how I think we can help you." We train AI on what bullet point 1, 2, and 3 should generally cover, input the target company's information, and let AI generate custom ideas with guardrails.

Why it works: it's not that the three ideas are mindblowing. It's that among all the lazy emails they get, someone clearly did research on their specific business. If they're already thinking about getting help with, say, bookkeeping, and we tried harder than the last person who emailed them, the **law of reciprocity** kicks in and they're more likely to take our call.

### The CTA That 2.5x'd Response Rates

We run a Google reputation management campaign: "Hey, we saw that negative review. We could get it taken down and you only pay after it's removed."

The original CTA: "Would it make sense to chat?"

The new CTA: "Could we chat for 15 minutes about that review and see if it was unwarranted so we could help build the case for Google on your behalf?"

The new version is performing **2.5x better**. The first principle at work: **explain why you need their time** and what you'll do with it. Don't just ask for time -- tell them what happens during that time.

### Preview Text Over Subject Lines

Stop obsessing over subject lines. Think about **preview text** instead -- what does the push notification look like? What does it look like in the browser?

Two approaches that work:

1. **Make it look like a colleague or customer** is reaching out. Example: "Hey, I saw the negative Google review and I had a question about it." Tons of engagement because it looks like a real customer asking a question.

2. **Put your entire offer in the preview text.** Let them decide if they're interested before they even open. Example: "We help companies target their entire TAM in less than 3 months."

AI-generated first lines ("Hey, I saw you help fitness enthusiasts breathe better...") are starting to hurt campaigns more than help. People recognize the pattern now.

## Key Takeaways

- **Inbox deliverability** is the #1 priority -- maintain insurance inboxes at a 1:1 or 1:2 ratio to active
- **Dead inboxes don't recover** -- kill them, swap, reorder, keep moving
- **Domain age matters** -- aim for 6 weeks of warm-up before sending
- **Build lists backwards** from your client's actual customer data, not forward from assumptions
- **The 10-minute research rule**: what would you manually check about a company? Automate that
- **The creative ideas campaign** (3 custom bullet points) is the highest-performing format across all clients
- **Explain why you need their time** in the CTA -- it 2.5x'd response rates for one campaign
- **Preview text > subject lines** -- think about the push notification, not just the subject
