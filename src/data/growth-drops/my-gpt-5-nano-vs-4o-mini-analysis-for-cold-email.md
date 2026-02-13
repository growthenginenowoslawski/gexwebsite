---
title: "My GPT 5-nano vs. 4o-mini Analysis for Cold Email"
description: "Head-to-head cost and quality comparison of GPT-5 nano versus GPT-4o mini across case study extraction, company news, AI writing, and CEO lookup tasks in Clay."
youtube_url: "https://youtube.com/watch?v=iGQYIKCQbzI"
published: "2025-08-10"
reading_time: "5 min read"
tags: ["ai", "clay", "cold-email", "tools"]
thumbnail: "https://i.ytimg.com/vi/iGQYIKCQbzI/hqdefault.jpg"
---

> Watch the full video: [My GPT 5-nano vs. 4o-mini Analysis for Cold Email](https://youtube.com/watch?v=iGQYIKCQbzI)

## The Bottom Line Up Front

**GPT-5 nano is not cheaper than GPT-4o mini for cold email workflows.** After running side-by-side tests across four different use cases inside **Clay**, GPT-5 nano produced the same quality output but cost more in virtually every comparison. The culprit is reasoning tokens -- 5 nano is a reasoning model, and the extra "thinking" tokens it burns through wipe out any per-token price advantage.

This is coming from someone who exclusively uses OpenAI. No Claude account, no other providers -- just OpenAI everything. So believe me, this was a disappointing result.

## How the Test Was Set Up

The methodology was simple. Take a list of well-known company websites -- **Clay, Notion, Rippling, HubSpot, Demandbase, Owner.com, Supabase** and others -- and run the exact same prompt through both models. Same inputs, same prompt text (generated with Clay's built-in prompt generator to keep things fair), different model selection.

Four tests were run:

1. **Claygent case study extraction** -- find a recent case study on the company's website
2. **Claygent company news** -- find recent company news
3. **Regular AI (non-Claygent)** -- generate a personalized first line from a case study
4. **CEO contact lookup** -- use Clay's "Find CEO Contact" template

## Test 1: Case Study Extraction

Both models found legitimate case studies for most companies. But 5 nano sometimes grabbed the wrong thing entirely. For **Notion**, 5 nano returned a "UX case study template" -- literally a template page, not an actual case study. **4o mini** found the Ramp case study: "Every person at Ramp has an AI assistant." Much better.

For sites with no case studies (like **Reddit** or a blank domain), both models correctly returned nothing. But 5 nano was slower and more expensive doing it.

**Cost comparison across all rows:** 5 nano was more expensive in every single case study extraction.

## Test 2: Company News

For **Clay**, 5 nano caught their $100 million raise on August 5th. 4o mini got the same story. Cost: $0.004 vs. $0.001 -- 4x more expensive for 5 nano.

For **Numeral**, 4o mini found the Ruby Card team acquisition (verified as genuinely recent via their LinkedIn post). Cost: $0.014 vs. $0.002. Not even close.

There was exactly **one instance** across all the company news tests where 4o mini was actually more expensive than 5 nano. One. Out of dozens of comparisons.

For **Demandbase**, both models returned the exact same result -- "announces availability of GTM AI agents." The cost? $0.007 for 5 nano, $0.003 for 4o mini. Same output, half the cost.

## Test 3: Regular AI (First Line Generation)

To rule out Claygent-specific behavior (since Claygent's internal prompting may be optimized for 4o mini), the same case study inputs were fed into a standard AI column.

Both models produced nearly identical first lines:

- "Hey, saw the work you did with Vicata and how you helped them achieve a 2x increase in LinkedIn ad target metrics."
- Same output from both models.

**Cost:** $0.006 for 5 nano vs. $0.00001 for 4o mini. That is a massive difference for identical output.

Another example: "Hey, saw the work you did with Kayen Space and how you helped them 8x improvement in developer speed." Same output again. $0.003 vs. $0.001.

## Test 4: CEO Contact Lookup

This was the nail in the coffin. Using Clay's built-in "Find CEO Contact" template with both models:

| Company | 5 nano | 4o mini | 5 nano Cost | 4o mini Cost |
|---------|--------|--------|-------------|-------------|
| Clay | Wrong (Cliff Skelton) | Wrong | $0.02 | $0.002 |
| Rippling | Parker Conrad (correct) | Parker Conrad (correct) | $0.05 | $0.03 |
| Notion | Did NOT find Ivan Zhao | Found Ivan Zhao | More | Less |
| Supabase | Paul Copplestone (correct) | Correct | Cheaper this time | -- |
| Owner.com | Did NOT find Adam Gild | Found Adam Gild | -- | -- |

5 nano was both more expensive AND less accurate on CEO lookups. It missed the CEO of Notion and Owner.com entirely.

## Why 5 Nano Costs More: The Reasoning Token Problem

Looking at the raw token counts tells the whole story. On one comparison where the inputs were nearly identical (954 vs. 972 input tokens), the output tokens diverged wildly:

- **5 nano:** 1,586 output tokens
- **4o mini:** 38 output tokens

That is a **41x difference** in output tokens for the same result. The reasoning model is "thinking" extensively before producing its answer, and you pay for every one of those reasoning tokens. For tasks as simple as writing a cold email first line, that reasoning is pure waste.

## The Verdict

For cold email workflows in Clay -- case study extraction, company news lookup, personalized first lines, contact finding -- **stick with GPT-4o mini**. It is cheaper in almost every case and produces equal or better results.

The reasoning capabilities of GPT-5 nano are designed for complex problem-solving tasks like calculus and code generation. Writing "Hey, saw the work you did with Vicata" does not require chain-of-thought reasoning. It just needs to follow a prompt and produce clean output, which 4o mini does perfectly well at a fraction of the cost.

This also reinforces the case for evaluating **open-source models** for these kinds of tasks. If the premium models are getting more expensive due to reasoning overhead, cheaper alternatives that skip the reasoning step entirely could be even better for high-volume cold email work.

## Key Takeaways

- **GPT-5 nano costs 2-10x more than GPT-4o mini** for typical Clay cold email tasks, with no quality improvement
- The cost difference comes from **reasoning tokens** -- 5 nano "thinks" extensively before answering, and you pay for that thinking
- In one test, 5 nano used **1,586 output tokens** where 4o mini used just **38** for the same result
- 5 nano was also **less accurate** on CEO lookups, missing correct answers that 4o mini found
- For high-volume cold email operations, these cost differences compound fast -- stick with 4o mini
- Consider testing **open-source models** as well for simple prompt-and-output tasks
