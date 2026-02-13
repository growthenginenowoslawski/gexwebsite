---
title: "Save on OpenAI Costs with Cached Inputs"
description: "How to cut your OpenAI spend by up to 90% using cached inputs -- the two rules you need to follow and proof it works inside Clay."
youtube_url: "https://youtube.com/watch?v=KKGo0_LOUx4"
published: "2025-12-03"
reading_time: "6 min read"
tags: ["ai", "cold-email", "clay", "tools", "automation"]
thumbnail: "https://i.ytimg.com/vi/KKGo0_LOUx4/hqdefault.jpg"
---

> Watch the full video: [Save on OpenAI Costs with Cached Inputs](https://youtube.com/watch?v=KKGo0_LOUx4)

## OpenAI Has a Feature They Barely Talk About

OpenAI has a feature called **cached inputs** that is borderline criminal how little they promote it. If you are running cold email at any scale and using AI to generate your emails, you are leaving money on the table by not using this.

At Growth Engine X, we send about 8 million cold emails a month and use AI to generate all of them. We spend **$15,000-$20,000 a month** on OpenAI. I was literally about to switch to Open Router when my OpenAI enterprise rep mentioned cached inputs. It changed everything.

## What Are Cached Inputs?

When you send a prompt to OpenAI, most of that prompt is identical across every request. Your instructions, your examples, your formatting rules -- all of that stays the same. The only thing that changes is the company description or industry or whatever dynamic input you are passing in.

**Cached inputs** means OpenAI has already done the compute on the static portion of your prompt. They hold it on their servers and charge you a discounted rate instead of reprocessing it every time.

Here is what the discounts look like:

| Model | Cached Input Discount |
|-------|----------------------|
| **GPT-5 suite** | **90% off** |
| **GPT-4o Mini** | **50% off** |

Stack cached inputs with the **batch API** (50% off input and output) and keep reasoning on low, and you can do serious company ICP scoring for almost nothing.

## The Two Rules for Hitting Cached Inputs

You are not going to hit cached inputs every single time -- there is some backend variability. But follow these two rules to maximize your chances:

### Rule 1: Your prompt must be at least 1,024 tokens long

If your prompt is under 1,024 tokens, caching will not kick in. Use the **OpenAI token counter** to check your prompt length. If you are short, add more detail to your instructions or examples. This is one of the rare cases where making your prompt longer actually saves you money.

### Rule 2: Keep all dynamic content at the END of your prompt

The cache works by matching the **prefix** of your prompt. As much of the beginning of your prompt as possible needs to be identical across every request. The company description, the industry, the custom fields -- all of that goes at the very end.

This is the opposite of how most people set up prompts. The old advice was "put your input at the top so the AI knows what it is working with." For cached inputs, you want all your static instructions and examples first, then your dynamic variables at the bottom.

## Proof It Works Inside Clay

I ran an experiment inside **Clay** to prove this. I set up two prompts:

- **Prompt A:** Over 1,024 tokens with dynamic content at the end
- **Prompt B:** Under 1,024 tokens (shortened version)

Then I tracked my OpenAI usage dashboard over time.

**With the long prompt (cached inputs active):**

| Time | Input Cost | Cached Input Cost |
|------|-----------|-------------------|
| 10:31 | $0.25 | $0.06 |
| 10:34 | $0.31 | $0.08 |
| 10:44 | $0.33 | $0.10 |
| 11:11 | $0.40 | $0.23 |

Look at that cached input column climbing. From 10:34 to 11:11, regular input cost went up only 9 cents while cached inputs racked up 15 cents of usage. The system was absolutely using cached inputs.

**Then I ran the short prompt (below 1,024 tokens):**

At 11:11, I had $0.40 in input costs. By 11:21, it jumped to **$0.82** -- more than doubled in 10 minutes. The short prompt blew up my spend because it was all regular (non-cached) input.

I spoke to the **Clay engineers** and they confirmed: cached inputs are built into Clay already. If your prompt meets the two rules, you are automatically getting the discount.

## How to Restructure Your Prompts

**Before (not cache-friendly):**
```
Here is the company: {company_name}
Their industry is: {industry}
Their description: {description}

Now, based on the above, determine if this company is a good fit...
[rest of instructions]
```

**After (cache-friendly):**
```
You are a company scoring assistant. Your job is to determine
if a company is a good ICP fit based on the following criteria...
[all static instructions, examples, formatting rules]
...
Here is the company to evaluate:
Company: {company_name}
Industry: {industry}
Description: {description}
```

All the static content goes first. All the dynamic fields go last. That is it.

## The Compound Savings

If you combine cached inputs with other OpenAI cost optimizations:

1. **Cached inputs on GPT-5 Nano:** 90% off input
2. **Batch API:** 50% off input and output
3. **Low reasoning:** Minimal compute overhead

For company ICP scoring at scale, you are talking about pennies to process thousands of companies.

## Key Takeaways

- Cached inputs give you **50-90% off** input token costs depending on the model
- Two rules: prompt must be **1,024+ tokens** and dynamic content goes **at the end**
- Clay already supports cached inputs natively -- just structure your prompts correctly
- Stack with the **batch API** for even deeper savings if you can wait 24 hours
- The cost estimate shown in Clay may not reflect your actual OpenAI bill (reported to Clay team)
- If you are spending thousands on OpenAI for outbound email generation, this is an immediate win
