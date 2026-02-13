---
title: "Building Lists of Companies Showing Any Sign of Growth"
description: "Six ways to use Clay to find companies showing growth signals -- open jobs, headcount growth, department hiring, new hires, funding, and new locations."
youtube_url: "https://youtube.com/watch?v=n10BtNkXHas"
published: "2025-07-25"
reading_time: "8 min read"
tags: ["clay", "lead-generation", "outreach", "data", "tools"]
thumbnail: "https://i.ytimg.com/vi/n10BtNkXHas/hqdefault.jpg"
---

> Watch the full video: [Building Lists of Companies Showing Any Sign of Growth](https://youtube.com/watch?v=n10BtNkXHas)

## Why Growth Signals Matter

You don't have to use a "jobs playbook" outreach email just because you're targeting growing companies. Growth signals are valuable even if you never mention them in your messaging. They help you **refine your list** so you're reaching out to companies that are active, investing, and in a position to buy -- not stagnant businesses where nothing's happening.

Here are six ways to find companies showing signs of growth using **Clay**.

## 1. Target Companies With Open Job Roles

This is the cheapest growth signal you can get. If you have a Clay plan, this data is **free**.

**How to set it up:**

1. Start a new workbook in Clay
2. Select "Find Jobs" as your source
3. Leave the job description empty to find any company that's hiring at all
4. Set limit per company to **1** (you just need to know they're hiring)
5. Add filters: United States, full-time, posted within 10-90 days

That's it. You now have a list of companies that are actively growing their team.

You can also put keywords in the job description field. For example, searching for **"artificial intelligence"** gives you companies specifically hiring for AI roles -- a strong signal they're investing in new technology.

If you already have an ICP list, you can use the lookup feature instead. Drop in **company LinkedIn URLs** (preferred over domains for accuracy) and Clay will check if they have open roles.

## 2. Target Companies by Job Count as a Percentage of Headcount

One open job means different things for a 10-person company and a 10,000-person company. The percentage tells a more useful story.

**The setup:**

1. Use the "Find Company Job Openings" integration in Clay to get the count of active jobs
2. Use the "Enrich Company" integration to get their employee count
3. Create a formula column: **job openings / employee count**

Now you can see that one company is growing by **1%** while another is growing by **8%** of their current workforce. The 8% company is aggressively hiring -- that's a much stronger growth signal.

**Important distinction:** Clay gives you two numbers for company size:

- **Employee count** -- how many people have a LinkedIn profile and say they work there
- **Size** -- a self-reported number from whoever controls the LinkedIn company page

These can diverge wildly. A company might show 110 on employee count but self-report "2 to 10 employees" because most of those are freelancers. Another might show 7,000 employee count but self-report 10,000 because many employees don't have LinkedIn. Use the one that makes more sense for your target industry.

**Pro tip:** For more advanced job data, check out **Lead Magic's** job integration inside Clay. They have significantly more filters and are doing interesting things with AI and job-related embeddings.

## 3. Target Companies by Past Employee Headcount Growth

Clay has a "Find Company Headcount Growth" integration that gives you the **percent employee growth over the last 6 months**. It's a simple number pulled from underlying data providers.

Use this directionally, not literally. **Do not email someone and say "Hey Google, I saw you've grown by 1.28%."** Nobody wants to receive that.

Instead, use it as a filter. Companies growing 10%+ in 6 months are in a very different position than companies that are flat. Layer this on top of your ICP filters to prioritize accounts.

## 4. Target Companies by Department Headcount Growth

This is a more granular version of overall headcount growth. If you're selling to marketing teams, you want to know if the **marketing department** specifically is growing.

**How to do it:**

1. Use "Find Employee Headcount by Criteria"
2. Enter job title keywords for the department (marketing, graphic design, paid media, SEO, growth, partnerships)
3. Get the total count
4. Duplicate the column and add a filter: **maximum 3 months in current role**
5. Now you have total department size and how many joined in the last 3 months

**Quick tip for keywords:** Go to ChatGPT and ask: "Give me all the keywords that any person with any seniority would have in their title if they're in the marketing department." Have it output in comma-separated format so you can drop it straight into Clay's job title field.

## 5. Target Companies With Recent Hires (and Name-Drop Them)

This is where growth signals get actionable in your messaging. Instead of citing abstract percentages, you can **name-drop a specific person** who recently joined.

**The workflow:**

1. Start a new Clay table with "Find People" as the source
2. Set **maximum months in current role to 3**
3. Set limit per company to 1
4. Add your usual filters (location, company size, etc.)

You now have a list of companies with recent hires. But here's the better move:

**Use "Find Contacts at Company"** on those companies. Filter for the department you're selling to (e.g., marketing). Set minimum months in role to 0 and maximum to 3. Now you have the actual new hires in that department.

Your outreach becomes: "Hey, it looks like you're growing -- saw Kunal just recently joined the team." That's infinitely better than "I saw you've grown by 1.28%."

**For small companies (2-50 employees):** You might not even need a job title keyword. Just look for anyone new at the company and name-drop them. At that size, the hiring manager probably knows everyone who just started.

**For large companies like Google:** Add state or even city filters so the person you name-drop is likely in the same location as your prospect.

## 6. Target Companies Hiring in New Locations

If a company is posting jobs in cities where they don't currently have an office, that's a strong signal of geographic expansion.

**The approach:**

1. Start from your jobs table (which includes job location)
2. Compare the job location against the company's known headquarters/locations in Clay
3. Use AI to determine if the job location is within a **25-mile radius** of any existing location

This needs AI because simple keyword matching fails. If headquarters is "Paramus, New Jersey" and the job is in "Ridgewood, New Jersey," a keyword search won't know those are 15 minutes apart. AI handles this easily with **GPT-4o mini**.

**Key prompting tip:** When I first ran this, the AI prompt expected exact address matches. It was returning "location not found" because it wanted street-level precision. The fix was simple -- reprompt to say: **"It's okay if the address doesn't match perfectly. I just want to know if the cities are close to each other. Output true or false."**

Also: **ask AI to explain its reasoning.** Two benefits: (1) you can quickly verify the result, and (2) if the AI is about to hallucinate, forcing it to explain creates cognitive dissonance that makes the answer more accurate. Ask for the result as true/false, then an explanation of why.

## Bonus: Funding Rounds and Website Traffic

For **funding rounds**, use Claygent. Give it the company domain and ask it to check for recent funding announcements. This is quick and straightforward.

For **website traffic growth**, pull data from **SimilarWeb** or **Semrush** and use it as another growth indicator.

## Putting It All Together

The power here is in combining signals. A company that is:

- Hiring for 8% of their headcount
- Growing their marketing department by 30% in the last quarter
- Posting jobs in new cities
- Just raised a Series B

...is a very different prospect than a company with zero growth signals. Layer these on top of your ICP filters in Clay and you're reaching out to companies that are active, investing, and expanding.

## Key Takeaways

- **Job source in Clay is free** with your plan -- use it to find any company hiring at all
- **Job count as percentage of headcount** separates real growth from routine backfills
- **Department-level growth** is more useful than company-wide numbers when selling to specific teams
- **Name-drop recent hires** instead of citing growth percentages -- "Saw Kunal just joined" beats "grew 1.28%"
- **New location hiring** is a strong expansion signal -- use AI (GPT-4o mini) to compare job locations against known offices
- **Always ask AI to explain its reasoning** -- it improves accuracy and makes results verifiable
- Use growth signals to **refine your list**, even if you never mention them in your outreach
