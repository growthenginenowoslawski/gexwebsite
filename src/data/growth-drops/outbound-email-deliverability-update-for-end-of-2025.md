---
title: "Outbound Email Deliverability Update for End of 2025"
description: "How we manage 200,000 inboxes and send 6M emails/month. The exact metrics, insurance inbox strategy, and domain rotation system we use to keep reply rates above 1%."
youtube_url: "https://youtube.com/watch?v=V5k2uY9T-Eg"
published: "2025-10-15"
reading_time: "7 min read"
tags: ["cold-email", "deliverability", "outreach", "tools"]
thumbnail: "https://i.ytimg.com/vi/V5k2uY9T-Eg/hqdefault.jpg"
---

> Watch the full video: [Outbound Email Deliverability Update for End of 2025](https://youtube.com/watch?v=V5k2uY9T-Eg)

## The Core Problem

No matter how good your email campaign is, some recipients will mark you as spam. That is just how it works. You have to accept that reality and build a system around it.

We send about **5-6 million emails per month** and manage roughly **200,000 inboxes** on behalf of our customers. The entire deliverability strategy comes down to one idea: **always have more inboxes than you think you need**, and know exactly when to swap them in and out.

## The Insurance Inbox System

Here is the system we have built and what I would highly recommend you build as well.

When a new customer joins us, we build an infrastructure that can send **5,000 emails per day**. But most customers start with just **500-1,500 emails per day** during their testing phase. The reason for the gap is twofold:

1. **Scalability** -- if a campaign is working well, we can ramp immediately
2. **Insurance pool** -- the unused inboxes sit there warming for 4, 8, even 12 weeks while the main batch does the sending

The goal is to constantly have inboxes in three states:
- **Active** -- currently sending in campaigns
- **Insurance** -- warming and ready to rotate in
- **Fresh orders** -- new domains being purchased to replenish the pipeline

## Treat Domains as Disposable

We buy domains from **Porkbun** and **Dynadot** (best sales on .com and .co domains). For inboxes, we primarily use **Hypertide**, plus **Pager**, **Maildoso**, and **Zapmail** for Google inboxes.

The mindset is **hot swap and disposable**. We never try to heal domains. There is not enough time, and a $12 domain with a $6 inbox is not worth the rehabilitation effort. Cancel the bad ones, cycle in insurance inboxes, order new ones. Boom, boom, boom.

## The Four Signals We Monitor

This is the bread and butter of our deliverability operation. We watch four signals to know when to pull a domain and replace it.

### 1. Campaign-Level Reply Rate (Daily)

If overall replies in a campaign drop below **1%** (not counting out-of-office messages), we take action. Sometimes there is a little wiggle room -- maybe **0.8%** in a hard market -- but 1% is the floor.

### 2. Inbox Reputation (Automated)

If any inbox falls below **98% reputation**, we remove it from sending. This is automated. When the warm-up score drops, the inbox is done.

### 3. Domain-Level Reply Rate (Weekly)

Every Friday, we pull all sending statistics at the domain level for every active domain. If a domain's reply rate is less than 1%, or it falls in the **bottom 10%** of all our domains, we treat that as failing. Those inboxes get removed from campaigns.

### 4. Bounce Rate (Ongoing)

If the bounce rate on a domain goes over **2%**, we remove it from campaigns.

When any of these signals fire, the action is always the same:
1. Remove the failing inbox from the campaign
2. Cycle in an insurance inbox that has been warming for well longer than two weeks
3. Order a new domain and inbox to replenish the insurance pool

Every time we run this process and push in a well-aged insurance inbox, the reply rate for the campaign goes up.

## We Stopped Tracking Open Rates

I used to think open rate tracking was not the boogeyman everyone claimed. I was wrong. We were tracking open rates every Thursday and Friday, and replies and positive replies would consistently drop on those days. So we stopped entirely. Our domain health metrics are now based purely on the four signals above.

## Spam Placement Tests

We do not use a ton of spam placement tests. An inbox can pass a spam placement test and still underperform in the real world. Because we are monitoring the four signals above, every time we take action based on those signals, reply rates improve. If you want to add spam placement tests on top of this, go for it -- but they are not core to our process.

## Delivering to Hard-to-Reach Inboxes (Outlook, Proofpoint)

**Outlook** and **Proofpoint** filters need longer warm-ups. Here is how we handle it:

**Day one, we do not think about it.** We focus on ROI positivity for the customer. We also do not take on customers who are only targeting Fortune 500 or Fortune 5000 companies -- we look for a large TAM.

If we are not getting ROI based on positive responses, then we adjust:

1. **Send to Gmail only** for the first 2-3 weeks
2. Keep all other inboxes warming during this period
3. Once inboxes have crossed a **4-6 week warm-up period**, swap them in for Outlook sending
4. Pull the original inboxes out regardless of health, and replace with the aged ones

**Domain age is the biggest factor** for piercing through Outlook and Proofpoint filters. We are seeing this consistently. Short copy also helps when targeting Outlook inboxes.

You can use **Lead Magic's inboxcore.com** to check whether a prospect's inbox is Google, Outlook, or something else. You can also look up MX records to filter your sending.

## Key Takeaways

- Start with **more inboxes than you think you need** and always maintain an insurance pool
- Monitor four signals: campaign reply rate, inbox reputation, domain-level reply rate, and bounce rate
- **Never try to heal domains** -- cancel, rotate, reorder
- Stop tracking open rates -- it hurts your deliverability
- For Outlook/Proofpoint targets, **domain age matters most** -- let inboxes warm for 4-6+ weeks before sending to those filters
- Build your own monitoring system (use **Cursor** to help you build it)
