export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyQuote {
  text: string;
  author: string;
  title: string;
}

export interface CaseStudySection {
  heading: string;
  paragraphs: string[];
}

export interface CaseStudyContent {
  slug: string;
  name: string;
  domain: string;
  partnership?: string;
  headline: string;
  metrics: CaseStudyMetric[];
  quote?: CaseStudyQuote;
  sections: CaseStudySection[];
}

export const caseStudyContent: Record<string, CaseStudyContent> = {
  instantly: {
    slug: 'instantly',
    name: 'Instantly.ai',
    domain: 'instantly.ai',
    partnership: '3+ Years',
    headline: '10 to 20 positive responses per day, partnered for over three years.',
    metrics: [
      { value: '10-20', label: 'Daily Positive Responses' },
      { value: '3+', label: 'Years Partnered' },
      { value: 'Extensive', label: 'Multi-Variable Split Testing' },
    ],
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Instantly.ai needed a partner who could not only generate consistent pipeline but also conduct the rigorous testing required to find their ideal outbound playbook. With a broad product that appeals to many buyer types, the challenge was narrowing down who responds best and what makes them respond.',
        ],
      },
      {
        heading: 'The Testing Framework',
        paragraphs: [
          'We ran an extensive experimentation program before scaling anything. This included split testing across multiple dimensions: job title variations, targeting founder-led sales companies versus established sales orgs, companies with 5+ salespeople, technographic signals around competitor and integration usage, and signal-based triggers. On the messaging side, we tested distinct approaches for enterprise versus SMB buyers, venture-backed companies versus bootstrapped companies, and various value propositions. Every test was designed to isolate a single variable so we could build a data-backed playbook with confidence.',
        ],
      },
      {
        heading: 'The Result',
        paragraphs: [
          'Once we identified the winning combination of targeting, segmentation, and messaging, we locked in the playbook and scaled it. For over three years, we have consistently delivered 10 to 20 positive responses per day. Instantly.ai trusts us to scale winning campaigns without sacrificing reply quality, and the playbook continues to perform.',
        ],
      },
    ],
  },

  numeral: {
    slug: 'numeral',
    name: 'Numeral',
    domain: 'numeral.com',
    partnership: '3+ Years',
    headline: 'Outbound is consistently one of the top channels for Numeral\'s closed-won revenue.',
    metrics: [
      { value: '3+', label: 'Years Partnered' },
      { value: 'Y Combinator', label: 'Backed By' },
      { value: 'Top Channel', label: 'For Closed-Won Revenue' },
    ],
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Numeral targets e-commerce companies - a notoriously difficult audience for cold email. E-commerce operators are inundated with outbound, making it extremely challenging to break through. Success in this vertical demands a phenomenal offer and a partner who can execute at a high level.',
        ],
      },
      {
        heading: 'What Made It Work',
        paragraphs: [
          'The foundation of this partnership is Numeral\'s exceptional product and offer. Their value proposition resonates deeply with e-commerce operators, which gave us strong raw material to work with. From there, we executed relentlessly on targeting and messaging to ensure we were reaching the right people with the right framing.',
        ],
      },
      {
        heading: 'Beyond Cold Email',
        paragraphs: [
          'Our relationship with Numeral extends well beyond campaign execution. We have built custom Clay tables for their team, enriched their CRM, and consulted on keeping their internal data costs extremely low. By leveraging our deep expertise in the data vendor landscape and our Clay table-building capabilities, we helped Numeral eliminate unnecessary data subscriptions and consolidate their enrichment stack - saving significant budget and operational overhead.',
        ],
      },
    ],
  },

  clay: {
    slug: 'clay',
    name: 'Clay',
    domain: 'clay.com',
    headline: '4:1 return on ad spend within 2 months.',
    metrics: [
      { value: '4:1', label: 'Return on Ad Spend' },
      { value: '2 mo', label: 'Time to ROI' },
      { value: 'Extensive', label: 'Testing Scope' },
    ],
    quote: {
      text: 'Eric is one of the most creative minds in outbound today. He is one of the most, if not the most respected, agency owner there is.',
      author: 'Varun Anand',
      title: 'Co-Founder @ Clay.com',
    },
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Clay\'s product can do an enormous number of things, which creates a unique cold email challenge: what do you actually lead with? On their website, the winning headline is that Clay integrates with 150+ data vendors. But cold email is a different channel with different rules, and we needed to figure out which specific feature would convert cold traffic into pipeline.',
        ],
      },
      {
        heading: 'The Testing Framework',
        paragraphs: [
          'We ran extensive split testing across every dimension: employee size, industry, and every signal you can imagine - fundraising events, company news, sales hiring activity, new executive hires (VP of Sales, CMO), and technology integrations. On the messaging side, we tested numerous angles to determine which Clay capability resonated most with cold prospects.',
          'The winner: the ability to look at your CRM, automatically detect lookalike companies to your most successful closed-won accounts, and then find contacts, emails, and mobile phone numbers from there. That was the feature that converted cold traffic better than anything else.',
        ],
      },
      {
        heading: 'The Winning Campaign',
        paragraphs: [
          'We built a Clay workflow (naturally) that used Claygen to find case studies on each prospect\'s website. Then we identified lookalike companies and wove it all into the messaging. The email would reference the prospect\'s real case study, then ask: "Do you have software that can look at your CRM, automatically find lookalikes to that success story, and surface the target contacts, emails, and phone numbers?" We\'d include custom lookalike company names as dynamic variables and offer to build a ready-to-use list on a demo call. The personalization was deep, the value was immediate, and it drove a 4:1 return on ad spend within two months.',
        ],
      },
    ],
  },

  'baton-market': {
    slug: 'baton-market',
    name: 'Baton Market',
    domain: 'batonmarket.com',
    partnership: '3+ Years',
    headline: '30 to 100 positive responses per day.',
    metrics: [
      { value: '30-100', label: 'Daily Positive Responses' },
      { value: '3+', label: 'Years Partnered' },
      { value: 'Google Maps', label: 'Top Data Source' },
    ],
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Baton Market helps business owners sell their businesses. The core targeting challenge was figuring out whether we could identify signals that someone is likely to sell. We ran extensive experiments testing every creative signal and data point we could find to predict seller intent.',
        ],
      },
      {
        heading: 'What We Learned',
        paragraphs: [
          'Counterintuitively, every "smart" signal we tested to predict willingness to sell actually decreased reply rates. Fancy intent signals and dot-connecting exercises consistently underperformed. What actually moved the needle was industry targeting - some industries have owners who are eager to exit, while others are saturated with private equity outreach and highly competitive. We also found that Google Maps scraping was the most successful lead source, and the best-performing personalization variables were the prospect\'s Google reviews and phone number. Simple, direct, and effective.',
        ],
      },
      {
        heading: 'The Result',
        paragraphs: [
          'We now generate between 30 and 100 positive responses per day for Baton Market, with volume modulated based on market conditions and how much their sales team can handle at any given time. The partnership has been running strong for over three years.',
        ],
      },
    ],
  },

  'usa-payments': {
    slug: 'usa-payments',
    name: 'USA Payments',
    domain: 'usapayments.com',
    partnership: '2+ Years',
    headline: 'Turning a commoditized offer into a successful campaign through niche data scraping and hyper-segmentation.',
    metrics: [
      { value: '2+', label: 'Years Partnered' },
      { value: 'Full Scope', label: 'List Building & Segmentation' },
      { value: 'Spanish + Maps', label: 'Special Targeting' },
    ],
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Payment processing is one of the most commoditized offers in outbound. Every merchant gets pitched by payment companies constantly. USA Payments needed a partner who could cut through that noise by finding the right prospects - not just any prospects.',
        ],
      },
      {
        heading: 'Our Approach',
        paragraphs: [
          'We handle all list building for USA Payments, with a focus on highly segmented, hard-to-find audiences. This includes targeting Spanish-speaking companies, scraping Google Maps for businesses that have no LinkedIn presence, and applying rigorous segmentation to identify high-risk payment processing companies - their ideal customer profile. The combination of niche data scraping, AI-powered enrichment, and deep segmentation turned what could have been a generic outbound play into a high-performing campaign.',
        ],
      },
    ],
  },

  'or-in-class': {
    slug: 'or-in-class',
    name: 'Oren Klaff',
    domain: 'intersectioncapital.com',
    headline: 'We served as the outreach partner for Or In Class, working directly with his clients and event attendees.',
    metrics: [
      { value: 'Events', label: 'Outreach Partnership' },
      { value: 'Investors', label: 'Fundraising Campaigns' },
    ],
    sections: [
      {
        heading: 'The Engagement',
        paragraphs: [
          'We served as the outreach partner for Or In Class, working directly with his clients and event attendees to help them reach out to investors for fundraising. We spoke on his stages and helped numerous attendees execute investor outreach campaigns to support their capital raises.',
        ],
      },
    ],
  },

  notion: {
    slug: 'notion',
    name: 'Notion',
    domain: 'notion.so',
    headline: 'From GTM workflows to high-converting lead magnet campaigns.',
    metrics: [
      { value: 'Enterprise', label: 'Campaign Execution' },
      { value: 'GTM', label: 'Workflow Engineering' },
      { value: 'Lead Magnets', label: 'Highest-Converting Angle' },
    ],
    quote: {
      text: 'Working with Eric and the Growth Engine X team was fast-paced, structured, and creative. Eric\'s process-driven style made it easy to test ideas quickly and learn from the results. Even when things didn\'t go perfectly, he was relentless about digging into every angle, from targeting signals to creative messaging, which helped us move faster and make smarter calls.',
      author: 'Kyle Jurilla',
      title: 'Growth @ Notion',
    },
    sections: [
      {
        heading: 'The Engagement',
        paragraphs: [
          'Our work with Notion started with go-to-market engineering: building workflows that connected their Harmonic accounts to their internal tools, enabling them to pull signals on a daily and weekly basis depending on the signal type. From there, we moved into cold email execution.',
        ],
      },
      {
        heading: 'Testing & Results',
        paragraphs: [
          'We ran extensive split testing on messaging to determine what would drive the most sign-ups. As expected, lead magnet campaigns performed best - giving away genuine value in the email itself. We tested multiple angles and offers to find the highest-converting combinations, and Notion was very happy with the results.',
        ],
      },
    ],
  },

  snitcher: {
    slug: 'snitcher',
    name: 'Snitcher',
    domain: 'snitcher.com',
    partnership: '1+ Year',
    headline: 'Better return on spend than branded Google Ads.',
    metrics: [
      { value: '1+', label: 'Year Partnered' },
      { value: 'Better ROI', label: 'Than Branded Google Ads' },
    ],
    sections: [
      {
        heading: 'The Backstory',
        paragraphs: [
          'Snitcher came to us after working with another agency that we genuinely respect as strong operators. We were initially curious why they wanted to make a change. The answer was simple: their previous agency didn\'t want to entertain the scale of cold email that Snitcher needed. We were brought in as the team that could handle high-volume execution without sacrificing quality.',
        ],
      },
      {
        heading: 'The Result',
        paragraphs: [
          'We improved reply rates over what the previous agency had been delivering, then scaled campaigns up to meet Snitcher\'s growth targets. Cold email has become a massive part of their pipeline, and the return on every dollar they spend with us outperforms even their branded Google Ad keyword conversions. Snitcher is a great partner, and outbound is now one of their highest-ROI channels.',
        ],
      },
    ],
  },

  thatch: {
    slug: 'thatch',
    name: 'Thatch',
    domain: 'thatch.ai',
    partnership: '1+ Year',
    headline: 'Go-to-market engineering that wouldn\'t be feasible manually.',
    metrics: [
      { value: '1+', label: 'Year Partnered' },
      { value: 'AI Scoring', label: 'Broker Identification' },
      { value: 'SMB to Enterprise', label: 'Segmentation Scope' },
    ],
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Thatch needed every broker on LinkedIn scored for the likelihood that they are a health insurance broker - a task that would not be feasible to do manually. On top of that, they had very specific requirements for how many contacts to target at each employee headcount tier in each state.',
        ],
      },
      {
        heading: 'Our Approach',
        paragraphs: [
          'We used Claygen and heavy AI processing to build a scoring model that could reliably identify health insurance brokers from the broader LinkedIn broker population. Once we nailed the scoring, we used Claude Code to handle all of the state-by-state, headcount-tier segmentation so we could assemble clean, precise experiments that met Thatch\'s exact specifications.',
          'Beyond brokers, we also led their employer health targeting, which required even more experimentation and segmentation across SMB, mid-market, and enterprise deal sizes. The work combined go-to-market engineering, AI-powered enrichment, and rigorous experimentation at a scale that would have been impossible without our tooling.',
        ],
      },
    ],
  },

  donut: {
    slug: 'donut',
    name: 'Donut',
    domain: 'donut.com',
    partnership: '1+ Year',
    headline: 'One AI-generated custom line increased reply rates by 3X.',
    metrics: [
      { value: '10-20', label: 'Daily Positive Responses' },
      { value: '1+', label: 'Year Partnered' },
      { value: '3X', label: 'Reply Rate Increase' },
    ],
    sections: [
      {
        heading: 'The Backstory',
        paragraphs: [
          'Donut came to us with significant cold email experience already in-house. They had copywriting they believed was fully optimized and didn\'t think further experimentation was needed. We agreed their copy was strong - it was genuinely well-crafted.',
        ],
      },
      {
        heading: 'The Experiment',
        paragraphs: [
          'We ran their proven copy alongside a single variation: adding one AI-generated line that was custom-built for Donut\'s offering and personalized to each prospect. That one variation increased reply rates by 3X. It was a clear, measurable win that surprised everyone and proved that even great copy can benefit from the right kind of AI-driven personalization.',
        ],
      },
      {
        heading: 'The Result',
        paragraphs: [
          'We scaled the winning campaign and now generate 10 to 20 positive responses per day. Donut has been a partner for over a year.',
        ],
      },
    ],
  },

  arketa: {
    slug: 'arketa',
    name: 'Arketa',
    domain: 'arketa.com',
    partnership: '2+ Years',
    headline: 'Augmenting an internal SDR team with specialized outbound, enrichment, and infrastructure.',
    metrics: [
      { value: '2+', label: 'Years Partnered' },
      { value: 'UK & AU', label: 'Markets Owned' },
      { value: 'Full Stack', label: 'Scraping + Enrichment + Infra' },
    ],
    sections: [
      {
        heading: 'The Engagement',
        paragraphs: [
          'Arketa targets yoga studio and gym owners - contacts that are notoriously hard to find through traditional data sources. We handle the Google Maps scraping to source these contacts and run the full contact enrichment pipeline. On the campaign side, we own 100% of Arketa\'s UK and Australia outbound, taking those markets entirely off their team\'s plate so their internal SDRs can focus on US tier-one accounts. We handle everything else.',
        ],
      },
      {
        heading: 'Infrastructure Support',
        paragraphs: [
          'Beyond campaigns, we also manage the email infrastructure that Arketa\'s internal team uses to run their own campaigns. This is a strong example of how we work alongside existing SDR teams - not replacing them, but multiplying their capacity by taking on the markets, data sourcing, and infrastructure that would otherwise drain their bandwidth.',
        ],
      },
    ],
  },

  trovial: {
    slug: 'trovial',
    name: 'Troveo',
    domain: 'troveo.ai',
    headline: '10+ positive responses per day, powered by a custom AI agent.',
    metrics: [
      { value: '10+', label: 'Daily Positive Responses' },
      { value: 'Custom AI', label: 'Video Content Estimator' },
    ],
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Trovial has a highly specific ICP: companies and individuals with large volumes of stored video content. The challenge was identifying those prospects at scale, since "how much video content someone has" isn\'t a data point you can buy from any vendor.',
        ],
      },
      {
        heading: 'Our Approach',
        paragraphs: [
          'We built a custom AI agent in Clay that estimates approximately how many hours of video content a prospect might have stored. We use that signal to target directors, media companies, and other organizations likely to have significant video libraries. Some prospects sign up directly for the platform from the email, while others are qualified for sales calls. We consistently generate 10+ positive responses per day.',
        ],
      },
    ],
  },

  'media-max': {
    slug: 'media-max',
    name: 'Media Max',
    domain: 'mediamax.com',
    partnership: '2+ Years',
    headline: '5 to 10 positive responses per day across multiple segments.',
    metrics: [
      { value: '5-10', label: 'Daily Positive Responses' },
      { value: '2+', label: 'Years Partnered' },
      { value: '2 Weeks', label: 'Custom Zip-Code Tool Built' },
    ],
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Media Max serves multiple segments, each requiring its own targeting and messaging strategy. The added complexity: they had a different rate for every prospect depending on the zip code of the company being targeted. They assumed this kind of dynamic pricing personalization could only be done with a custom-built internal tool.',
        ],
      },
      {
        heading: 'Our Solution',
        paragraphs: [
          'We used Claude Code to build the zip-code lookup functions and dynamic email customization that Media Max thought would require their own engineering team to build. We had it operational within two weeks. From there, we run campaigns across their multiple segments, always split testing to optimize performance. We consistently deliver 5 to 10 positive responses per day.',
        ],
      },
    ],
  },

  bissell: {
    slug: 'bissell',
    name: 'Bissell Vacuums',
    domain: 'bissell.com',
    headline: '5 positive responses per day - in a market where timing is everything.',
    metrics: [
      { value: '5', label: 'Daily Positive Responses' },
      { value: 'GMs > Facilities', label: 'Key Targeting Insight' },
      { value: 'AI Agent', label: 'Google Maps Scraping' },
    ],
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'How often do people buy commercial vacuums? Timing is a real obstacle in this market. We worked with the Bissell team to craft an offer that would be easy to say yes to regardless of where a prospect was in their buying cycle.',
        ],
      },
      {
        heading: 'The Key Finding',
        paragraphs: [
          'Bissell initially believed that facilities directors and facilities managers were their best targets. Through our experimentation, we discovered that general managers of hotels actually outperformed - they would respond and then refer the conversation to their facilities team. Targeting the decision influencer rather than the decision maker was the unlock. We also used custom Google Maps scraping via an AI agent to source the right contacts at scale.',
        ],
      },
    ],
  },

  'young-innovations': {
    slug: 'young-innovations',
    name: 'Young Innovations',
    domain: 'younginnovations.com',
    headline: 'Cost per positive response: $70 - one-third of their Facebook ad spend.',
    metrics: [
      { value: '$70', label: 'Cost per Positive Response' },
      { value: '3X', label: 'More Efficient Than Facebook Ads' },
      { value: 'Google Maps', label: 'Custom Scraping' },
    ],
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Young Innovations needed to get in front of dentists and front office staff - people who receive a high volume of email and are difficult to engage through outbound. Traditional data sources weren\'t cutting it.',
        ],
      },
      {
        heading: 'The Result',
        paragraphs: [
          'We used custom Google Maps scraping to source the right contacts and ran targeted campaigns that brought their cost per positive response down to $70 - one-third of what they were spending on Facebook ads for the same audience. A significant efficiency gain and a strong partnership.',
        ],
      },
    ],
  },

  'gutter-kings': {
    slug: 'gutter-kings',
    name: 'Gutter Kings',
    domain: 'gutterkings.com',
    headline: 'Responsible for 42% of closed-won revenue during peak seasons.',
    metrics: [
      { value: '42%', label: 'Of Closed-Won Revenue' },
      { value: 'Seasonal', label: 'Spring & Fall Campaigns' },
    ],
    sections: [
      {
        heading: 'The Engagement',
        paragraphs: [
          'Gutter Kings brings us in during their peak seasons - spring and fall - when demand for gutter cleaning is highest. During those active periods, our outreach accounts for approximately 42% of their total closed-won revenue. We handle the outbound so their team can focus on fulfillment, and the results speak for themselves: nearly half of their seasonal revenue comes through our campaigns.',
        ],
      },
    ],
  },

  'heritage-wealth-capital': {
    slug: 'heritage-wealth-capital',
    name: 'Heritage Wealth Capital',
    domain: 'heritagewealthcapital.com',
    headline: '552 positive responses in 4 months. Eric is a regular speaker at their mastermind events.',
    metrics: [
      { value: '552', label: 'Positive Responses in 4 Months' },
      { value: 'Speaker', label: 'Regular Mastermind Events' },
    ],
    sections: [],
  },

  'online-seller-consulting': {
    slug: 'online-seller-consulting',
    name: 'Online Seller Consulting',
    domain: 'onlinesellerconsulting.com',
    headline: '3-7 positive responses per day. Video case study available.',
    metrics: [
      { value: '3-7', label: 'Daily Positive Responses' },
    ],
    sections: [],
  },

  'sharf-enterprises': {
    slug: 'sharf-enterprises',
    name: 'Sharf Enterprises',
    domain: 'sharfenterprises.com',
    headline: '95 positive responses in 30 days. Video case study available.',
    metrics: [
      { value: '95', label: 'Positive Responses in 30 Days' },
    ],
    sections: [],
  },

  pathos: {
    slug: 'pathos',
    name: 'Pay On Results PR',
    domain: 'payonresultspr.com',
    headline: '80 positive responses per day. Helped boost valuation through pipeline generation during acquisition process.',
    metrics: [
      { value: '80', label: 'Positive Responses Per Day' },
      { value: 'Acquisition', label: 'Valuation Boost via Pipeline' },
    ],
    sections: [],
  },
};

export function getCaseStudyByDomain(domain: string): CaseStudyContent | undefined {
  return Object.values(caseStudyContent).find(cs => cs.domain === domain);
}
