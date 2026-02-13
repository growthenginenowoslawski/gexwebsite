---
title: "11 Tips for AI Prompting in Clay"
description: "Practical rules for AI prompting in Clay and cold email workflows: snippets over full emails, one job per prompt, examples, and more."
youtube_url: "https://youtube.com/watch?v=4fm5ka7C_Vw"
published: "2025-08-22"
reading_time: "8 min read"
tags: ["clay", "ai", "cold-email", "outreach", "tools"]
thumbnail: "https://i.ytimg.com/vi/4fm5ka7C_Vw/hqdefault.jpg"
---

> Watch the full video: [11 Tips for AI Prompting in Clay](https://youtube.com/watch?v=4fm5ka7C_Vw)

## 1. Start With "What Would You Research for 10 Minutes?"

This is the cornerstone of every outbound automation we build. Any personalization, relevance, or AI-generated messaging should be based on this question: **if you had 10 minutes to manually research a prospect, what would you look for, and how would that change your messaging?**

Everyone's answer is different. Some companies pull **Google reviews** and reference them. Others look at **Instagram engagement rates** -- comparing likes to followers. Some pull **international employee counts** or **pricing page data**. The point is: don't copy what other people are doing. That's not how you get alpha in your campaigns.

Alpha is the difference between what the market is doing and what you're doing. If you're copying everyone else's Clay workflow, you're not beating the market.

## 2. Generate Snippets, Not Entire Emails

Too many people prompt AI to "output an email." Every word you add to the output increases the chance something goes wrong.

Here's the rule: **AI generates just the parts that need to be AI-generated.** Use spintax or static text for everything else. You should be in control of your message structure. AI fills in the personalized snippet -- a sentence or two -- and the rest is your proven copy.

## 3. Never Tell AI It's Writing a Cold Email

The moment you say "write a cold email," the model dives into its training data about what cold emails look like. The output gets formulaic and robotic.

Instead, prompt it as: **"You're a persuasive writer"** or **"You're an expert on [specific topic]."** Frame the task around writing, not around cold email specifically.

## 4. One Job Per Prompt

Every AI integration in **Clay** should have exactly one job. When people try to make one AI column do two things, accuracy drops.

Bad example: "Look at the company description, determine if this is a SaaS company, and if it is, output a sentence that looks like this."

That's two jobs. Split it into two columns: one to classify, one to write.

### 4B. Ask AI to Show Its Work

When you need high accuracy on classification tasks, have the AI **explain its reasoning before giving the output**. AI predicts the next word in a sequence, so forcing it to reason through "why I think this is a SaaS company" before outputting "Yes/No" significantly increases accuracy.

Prompt structure:

> "Before you determine if this is a SaaS company, give me your reasoning on why you think it is or isn't. Then output your final answer."

This works especially well for industry classifications and account qualification.

## 5. Feed Actual Data Into the Prompt

Don't just say "This is Salesforce.com. Write an email to them." The model will hallucinate or default to generic output.

Instead, feed it **real data you've already enriched** in Clay. Include a 4-6 sentence company summary, the person's role, relevant metrics -- whatever you've pulled from Clay's 150+ data sources. Give the prompt **way more context than you think it needs**.

## 6. Examples Are the Most Important Input

You can have a mediocre user prompt and a mediocre system prompt. But if you give the AI **good manually-written examples** of what you want the output to look like, it fixes almost everything.

In **Clay's** prompt interface, use the examples section to say: "When you see this input, this is what I want the output to be." Provide 3-5 examples that cover different scenarios.

This radically increases accuracy. It does increase cost (more tokens), which is why system prompts are becoming more attractive. But examples remain the single biggest lever for output quality.

## 7. Use Conditional Formulas and Run Conditions to Protect Spend

This is the biggest way people waste money in **Clay**. If you couldn't find an email address for someone -- 3 out of 10 contacts, say -- why would you spend money running AI enrichment on them?

**Always use Clay's run conditions.** They come with an AI formula that's super easy to set up. Overuse them. Put run conditions on everything. If a prior step failed or a required field is empty, skip the expensive downstream columns.

## 8. Dictate Your Prompts

When typing prompts, most people think faster than they can type. They get frustrated, cut the prompt short, and don't give enough context.

The fix: **dictate your prompts.** ChatGPT has a built-in dictate button. For Clay or any other interface, use a tool like **WhisperFlow** (whisperflow.ai). It lets you hit a hotkey (Option key on Mac), talk through your prompt, and it transcribes and auto-corrects your speech.

When you dictate, you naturally provide more context, more nuance, and better instructions than when you type.

## 9. Ask AI to Critique Your Prompt

This tip comes from **Yash on the Clay team** (he leads their education). After you build a prompt -- ideally by talking through it conversationally in ChatGPT -- ask:

> "This is the prompt I want to use in Clay. Can you structure it better for me? And what questions would you have for me to make this prompt even better?"

It'll ask 3-5 questions you didn't think of. Answer those (dictate the answers back), and the prompt always improves. This is especially useful if you're newer to prompting.

## 10. Model Cost and Hygiene

We use **GPT-4o Mini for everything.** People are always surprised by that, but it works.

The problem is when team members accidentally run jobs on expensive models like GPT-5 or o3. Here's how to prevent that: in the **OpenAI API settings**, you can restrict an API key to a specific model. Create one key locked to GPT-4o Mini and make that the only key your team is allowed to use.

## 11. Use a System Prompt That Bans Corporate Jargon

We have a standard system prompt that goes on every AI column that generates outbound email copy. It starts with something like:

> "You are a persuasive writer whose job is to create copy that feels natural, human, and conversational. Never use these corporate jargon words..."

Then it includes a banned word list: **leverage, synergy, innovate, optimize, disrupt** -- all the garbage words AI loves to use.

You don't need to meticulously craft this system prompt yourself. Just tell ChatGPT: "Come up with a list of corporate jargon words like synergy, leverage, optimize, and disrupt. Add more words like that. Then build me a system prompt for a persuasive writer that bans all of them."

### Bonus: Use ChatGPT to Figure Things Out

Everything in this list -- API connections, Clay builds, Supabase setups -- you can figure out with ChatGPT. Take a screenshot of what you're trying to do, paste it into ChatGPT, and it usually knows the answer. Start with one thing at a time. Don't try to automate everything at once.

## Key Takeaways

- Build personalization around what you'd manually research in 10 minutes
- AI generates **snippets**, not full emails -- keep control of your message
- Never say "cold email" in your prompt
- One job per prompt, always
- Feed real enriched data, not just a company name
- Manually-written **examples** are the single best way to improve output
- Use **run conditions** on every Clay column to protect spend
- **Dictate** your prompts for better context and faster iteration
- Lock your team's API key to **GPT-4o Mini** to control costs
- Use a system prompt with a **banned jargon word list** on all outbound copy
