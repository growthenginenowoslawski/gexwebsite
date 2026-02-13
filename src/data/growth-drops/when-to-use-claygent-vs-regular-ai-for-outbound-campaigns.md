---
title: "When to Use Claygent vs. Regular AI for Outbound Campaigns"
description: "The exact rules for when to use Claygent for live research vs. regular AI for data transformation in your Clay outbound workflows."
youtube_url: "https://youtube.com/watch?v=I_F6S_CO5Og"
published: "2025-07-29"
reading_time: "5 min read"
tags: ["clay", "ai", "cold-email", "outreach", "tools"]
thumbnail: "https://i.ytimg.com/vi/I_F6S_CO5Og/hqdefault.jpg"
---

> Watch the full video: [When to Use Claygent vs. Regular AI for Outbound Campaigns](https://youtube.com/watch?v=I_F6S_CO5Og)

## The Core Difference

At Growth Engine X, we send 4-5 million cold emails a month and implement **Clay** for a lot of our customers. The number one question people ask: when do I use **Claygent** and when do I use **regular AI**?

The answer is straightforward.

- **Claygent** has access to the internet. Use it for live research.
- **Regular AI** does not have access to the internet. Use it for data transformation and final email output.

Yes, some AI models have internet access, but the cost of running those models is so much higher than Claygent that it is not worth it.

## The Golden Rule: Never Use Claygent to Write Email Copy

We **never** use Claygent to output a sentence that goes into an email. The reason is simple: you cannot train Claygent with examples. And examples are everything.

In Clay's regular AI, there is an **example section** where you can show the model: "When you see this data, I want the output to look like this." That control is what makes your first lines and AI-generated emails actually good.

We have an internal rule at Growth Engine X:

- **One AI-generated sentence:** minimum 2 examples (prefer 3)
- **Anything more complex:** 5-7 examples required

Examples are the single most powerful lever for making sure your output is formatted correctly and you do not send a terrible email.

## When to Use Claygent

Use Claygent when you need to go out to the internet and find something. Examples:

- Finding a company's competitors
- Pulling a company description from their website
- Researching recent news or press about a company
- Looking up information that is not in your existing data columns

Claygent does a great job at live web research. Just let it do the research, then pass the results to a regular AI column for the actual writing.

## When to Use Regular AI

Use regular AI when you need to:

- **Clean data** -- fix formatting, remove junk
- **Shorten data** -- trim long descriptions
- **Transform data into JSON** -- restructure for downstream use
- **Make decisions** -- classify companies, qualify leads
- **Create the final output** -- the actual sentence going into your email

The key is that regular AI needs context. If you ask regular AI "Who are the competitors of goalless.com?" it will hallucinate because it does not have access to the internet. It might think it is a travel hospitality website.

But if you feed it the homepage content first -- "Here is the company description and body text. Who are their competitors?" -- it nails it. That is the pattern: use Claygent (or another integration) to gather the context, then use regular AI to process it.

## The Two-Column Pattern

Here is how we typically set it up in Clay:

1. **Column 1: Claygent** -- "Go find the top competitors of this company"
2. **Column 2: Regular AI** -- "Given these competitors, write a sentence about why they are competitive. Here are 3 examples of what I want it to look like..."

When we tested finding competitors for a menswear company, Claygent found Untuckit, Frank & Oak, and Bonobos. Regular AI, given the website description, found Bonobos, Lands' End, and Charles Tyrwhitt. Both got good results, but the regular AI approach was **significantly cheaper**.

## The Bad Use Case to Avoid

A common mistake: "I want to check if a company is B2B SaaS, so I will use Claygent to visit their website and tell me."

That is a bad use case for Claygent because you are asking it to do two things at once -- find information and make a decision. And it does not have great context for what **you** consider a B2B SaaS company.

Better approach:

1. **Claygent** fetches the company description
2. **Regular AI** classifies it, trained on 5 examples of what you consider B2B SaaS

You get a much better output because the regular AI has your specific examples to work from.

## Cost Considerations

Claygent is more expensive than regular AI. If you do not need custom web research, pair regular AI with a cheaper integration or API to provide context. The result is often just as good at a fraction of the cost.

## Key Takeaways

- **Claygent = live research.** Regular AI = data transformation, decisions, and email copy.
- Never use Claygent to write sentences that go into emails -- you cannot control the output with examples
- Always provide examples: 2-3 for single sentences, 5-7 for complex outputs
- Use the two-column pattern: Claygent fetches context, regular AI processes it
- Regular AI with a cheap context source often beats Claygent on both cost and quality
- Ask AI to do one thing at a time -- separate research from decision-making
