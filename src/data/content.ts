import { ServiceDetail, Project, IndustryItem, InsightArticle } from '../types';

export const BRANDS_WORKED_WITH: string[] = [
  'HCL',
  'Amazon',
  'Whirlpool',
  'Greytip',
  'Blackstone',
  'GetParagon',
  'LiquidBubble',
  'Cashee',
  'Flex Network Systems',
  'Alchemy Hospitality',
  'Keller Williams Slovenia',
  'StorageHunt',
  'Taygo AI',
  'DigiTLC',
  'DigiSyncro',
  'Dynamic Autobody',
  'Presnell Bodyworks',
  'Euro Car Service',
  'Laser Skin Therapy UK',
  'Xantias',
  'RV Unlimited',
  'L&M Smash Repairs',
  'CallCatch360'
];

export const SERVICE_CATEGORIES: ServiceDetail[] = [
  {
    id: 'brand-digital',
    number: '01',
    pillar: 'build',
    title: 'Brand & Digital',
    subtitle: 'Create a brand and digital presence people remember.',
    description: 'We design and engineer bespoke web platforms, landing pages, visual identities, and motion content crafted to establish authority and trust from the very first impression.',
    deliverables: [
      'Website design and custom development',
      'High-converting landing pages & campaign pages',
      'Funnel architecture & UX flow design',
      'Branding, typography systems & visual identity',
      'Marketing creatives, brochures & pitch presentations',
      '2D & 3D video assets and motion graphics'
    ],
    businessBenefits: [
      'Sets you apart from templated competitors with a distinct visual language',
      'Reduces bounce rates through thoughtful typography and intuitive layouts',
      'Ensures seamless responsiveness across mobile, tablet, and widescreen devices'
    ],
    exampleUseCases: [
      'Full rebrand and modern web rebuild for high-ticket service companies',
      'Dedicated launch landing pages for new service or product rollouts',
      'Motion graphic explainer videos for complex offerings'
    ]
  },
  {
    id: 'marketing-advertising',
    number: '02',
    pillar: 'attract',
    title: 'Marketing & Advertising',
    subtitle: 'Put your business in front of the right people.',
    description: 'Targeted customer acquisition campaigns engineered to bring qualified prospects into your ecosystem across search, social, and direct channels.',
    deliverables: [
      'Meta (Facebook & Instagram) advertising campaigns',
      'Google Search, Display & Performance Max ads',
      'Organic social media strategy and content calendars',
      'High-impact social media creatives and copy',
      'Targeted lead generation campaigns with verified intent',
      'Creative testing and message-market fit iteration'
    ],
    businessBenefits: [
      'Consistent influx of qualified inbound inquiries rather than cold outreach',
      'Optimized ad spend through creative testing and audience segmentation',
      'Unified brand voice across paid media and organic touchpoints'
    ],
    exampleUseCases: [
      'Local service area campaigns driving direct bookings and quote requests',
      'Multi-channel acquisition for regional clinics and professional firms',
      'Retargeting funnels keeping your brand top-of-mind during long buying cycles'
    ]
  },
  {
    id: 'crm-management',
    number: '03',
    pillar: 'convert',
    title: 'CRM & Customer Management',
    subtitle: 'Turn interest into organised opportunities.',
    description: 'Eliminate lost leads and chaotic inboxes. We build structured pipelines, centralize customer data, and configure seamless booking systems.',
    deliverables: [
      'Custom CRM setup, architecture and pipeline staging',
      'Automated multi-channel lead capture from web, ads and forms',
      'Instant lead routing, notification alerts and team assignments',
      'Frictionless appointment booking systems and calendar sync',
      'Direct WhatsApp, SMS and email two-way communication hubs',
      'Customer record centralization and contact segmentation'
    ],
    businessBenefits: [
      'Zero lead leakage — every inquiry is logged and organized instantly',
      'Faster response times that dramatically increase booking conversion',
      'Full visibility into deal stages, pending quotes, and team activity'
    ],
    exampleUseCases: [
      'Automotive shops tracking estimates from initial drop-in to completed repair',
      'Medical aesthetics clinics managing consultations and pre-treatment forms',
      'Service businesses automating customer notifications and quote approvals'
    ]
  },
  {
    id: 'ai-automation',
    number: '04',
    pillar: 'grow',
    title: 'AI & Automation',
    subtitle: 'Keep customers moving with smarter systems.',
    description: 'Connect your front-end interest to reliable back-end workflows. From conversational AI assistants to intelligent follow-up nurture sequences, we build systems that work 24/7.',
    deliverables: [
      'Context-aware AI chat assistants trained on your business data',
      'Intelligent AI voice receptionists for missed calls and after-hours triage',
      'Multi-step lead nurturing sequences across SMS, email and WhatsApp',
      'Automated appointment confirmations, reminders and reschedule links',
      'Smart review collection and customer retention workflows',
      'Internal business process automation and data synchronization'
    ],
    businessBenefits: [
      '24/7 capture of after-hours opportunities without hiring extra night staff',
      'Drastically reduced no-show rates via timed multi-channel reminders',
      'Scalable operations that handle volume surges without operational friction'
    ],
    exampleUseCases: [
      'Call triage system capturing missed callers and sending instant WhatsApp quotes',
      'Post-treatment follow-up journeys requesting feedback and repeat bookings',
      'Automated onboarding workflows gathering files and questionnaires'
    ]
  }
];

export const JOURNEY_STEPS = [
  {
    step: '01',
    phase: 'Ad / Social',
    description: 'Targeted creative on Meta, Google, or organic channels captures high-intent attention.',
    detail: 'Prospect discovers your offering with tailored messaging.'
  },
  {
    step: '02',
    phase: 'Website / Landing Page',
    description: 'Fast, editorial digital experience communicates authority and clear value proposition.',
    detail: 'Zero friction, crystal-clear positioning.'
  },
  {
    step: '03',
    phase: 'Lead Capture',
    description: 'Intelligent forms, interactive calculators, or instant click-to-chat widgets.',
    detail: 'Captures verified contact details seamlessly.'
  },
  {
    step: '04',
    phase: 'CRM Pipeline',
    description: 'Opportunity is automatically created, tagged, and routed to the right team member.',
    detail: 'Centralized record with full attribution.'
  },
  {
    step: '05',
    phase: 'Automated Follow-Up',
    description: 'Instant SMS, WhatsApp, or email acknowledgment within 60 seconds of inquiry.',
    detail: 'Engages the prospect while intent is peak.'
  },
  {
    step: '06',
    phase: 'Appointment / Consultation',
    description: 'Frictionless calendar booking with automated confirmations and reminders.',
    detail: 'Reduces no-shows and eliminates back-and-forth.'
  },
  {
    step: '07',
    phase: 'Paying Customer',
    description: 'Smooth onboarding, transparent communication, and service fulfillment.',
    detail: 'Converts interested prospect into active client.'
  },
  {
    step: '08',
    phase: 'Review & Retention',
    description: 'Automated post-service review requests and periodic re-engagement check-ins.',
    detail: 'Turns happy customers into recurring advocates.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'laser-skin-therapy',
    name: 'Laser Skin Therapy UK',
    client: 'Laser Skin Therapy UK',
    industry: 'Healthcare & Wellness',
    location: 'United Kingdom',
    categories: ['Website', 'Branding', 'CRM', 'Advertising'],
    services: [
      'Brand Identity Refinement',
      'Clinical Website Design & Build',
      'Meta Ad Campaigns',
      'Automated Consultation Booking Pipeline',
      'SMS & WhatsApp Appointment Reminders'
    ],
    tagline: 'Elevating aesthetic clinic presence with frictionless consultation booking.',
    description: 'Laser Skin Therapy UK needed a digital experience matching the precision of their clinical treatments. We designed an elegant web presence, launched targeted local campaigns, and built automated consultation booking with pre-treatment reminder sequences.',
    challenge: 'Prospective clients were hesitating between multiple providers in London and Manchester, while front-desk staff were bogged down answering routine questions and managing manual cancellations.',
    solution: 'Engineered an editorial clinic website featuring treatment guides, transparent practitioner bios, and an integrated booking pipeline with automated SMS confirmations and deposit handling.',
    deliverables: [
      'Editorial clinical web platform',
      'Mobile-first treatment guides',
      'Integrated CRM consultation pipeline',
      'Two-way WhatsApp inquiry desk'
    ],
    visualAccent: '#3B2347'
  },
  {
    id: 'storagehunt',
    name: 'StorageHunt',
    client: 'StorageHunt',
    industry: 'Logistics & Tech',
    location: 'United States',
    categories: ['Website', 'Branding', 'AI', 'Marketing'],
    services: [
      'Brand Visual Language',
      'Digital Platform Design',
      'Go-To-Market Creative',
      'AI Search & Inquiry Assistance',
      'Automated Follow-Up Journeys'
    ],
    tagline: 'Modernizing storage discovery with streamlined digital interactions.',
    description: 'StorageHunt connects users with available storage facilities. We created a modern visual identity, streamlined user-facing discovery interfaces, and implemented intelligent inquiry routing to handle user questions instantly.',
    challenge: 'Users searching for storage units faced clunky, outdated directory listings with unclear availability and sluggish email responses.',
    solution: 'Crafted a crisp brand identity, intuitive search interface, and an AI chat assistant capable of answering unit dimensions, access hours, and reservation procedures.',
    deliverables: [
      'Brand identity & typography suite',
      'Web application UI/UX',
      'Interactive unit locator',
      'Automated reservation notification system'
    ],
    visualAccent: '#C83B7A'
  },
  {
    id: 'dynamic-autobody',
    name: 'Dynamic Autobody',
    client: 'Dynamic Autobody',
    industry: 'Automotive',
    location: 'Australia',
    categories: ['Website', 'Advertising', 'CRM', 'Automation'],
    services: [
      'Website Redesign',
      'Google Local Search & Ads',
      'Photo Estimate Upload System',
      'CRM Pipeline Setup',
      'SMS Status Notifications'
    ],
    tagline: 'Transforming smash repairs into a transparent, stress-free digital journey.',
    description: 'Dynamic Autobody sought to streamline customer intake for vehicle repairs and insurance claims. We developed an online estimate request workflow and configured CRM pipelines that keep vehicle owners updated via SMS at each stage of their repair.',
    challenge: 'Drivers involved in accidents felt overwhelmed by paperwork and phone calls, resulting in delays getting repair authorizations.',
    solution: 'Designed an emergency upload tool for vehicle damage photos, connected directly to an automated estimator queue with instant WhatsApp updates.',
    deliverables: [
      'High-speed mobile website',
      'Photo-based estimate portal',
      'Automated SMS status updates',
      'Google Local Services optimization'
    ],
    visualAccent: '#F7B7A3'
  },
  {
    id: 'taygo-ai',
    name: 'Taygo AI',
    client: 'Taygo AI',
    industry: 'Technology & AI',
    location: 'United States',
    categories: ['Website', 'Branding', 'AI', 'Marketing'],
    services: [
      'Brand Strategy & Visual Guidelines',
      'Interactive Product Showcase Site',
      'Motion Graphics & Product Demos',
      'Lead Generation Funnel',
      'Automated Demo Scheduling'
    ],
    tagline: 'Framing sophisticated AI technology through human, approachable product design.',
    description: 'Taygo AI offers conversational intelligence tools. StartupBae crafted a distinctive brand identity, product animations, and a demo booking funnel that strips away technical jargon to emphasize business utility.',
    challenge: 'Enterprise prospects were fatigued by generic AI buzzwords and could not clearly discern what practical problem the product solved.',
    solution: 'Created an editorial visual aesthetic with animated interactive walk-throughs demonstrating tangible customer interactions in real time.',
    deliverables: [
      'Complete brand guideline handbook',
      'Motion-driven website experience',
      'Automated calendar scheduling flow',
      'Executive pitch deck & collateral'
    ],
    visualAccent: '#3B2347'
  },
  {
    id: 'presnell-bodyworks',
    name: 'Presnell Bodyworks',
    client: 'Presnell Bodyworks',
    industry: 'Automotive',
    location: 'United States',
    categories: ['Website', 'Branding', 'Advertising', 'CRM'],
    services: [
      'Modern Brand Refresh',
      'Responsive Website',
      'Targeted Local Google Ads',
      'Insurance Claim Intake Funnel',
      'Customer Review Automation'
    ],
    tagline: 'A heritage automotive brand reimagined for the modern consumer.',
    description: 'Presnell Bodyworks required a digital overhaul to transition from traditional word-of-mouth to a predictable digital growth engine. We unified their branding, developed a modern website, and implemented automated review collection.',
    challenge: 'A stellar multi-decade reputation had not translated into modern online presence, leaving the door open for newer regional competitors.',
    solution: 'Built an authentic, story-driven web presence highlighting craft and safety standards, coupled with targeted search ads and automated Google review prompts after vehicle pickup.',
    deliverables: [
      'Brand refresh and style system',
      'Bespoke responsive web platform',
      'Google Review automation sequence',
      'Direct insurance intake portal'
    ],
    visualAccent: '#C83B7A'
  },
  {
    id: 'digitlc',
    name: 'DigiTLC',
    client: 'DigiTLC',
    industry: 'Professional Services',
    location: 'United Kingdom',
    categories: ['Website', 'Branding', 'Marketing', 'CRM'],
    services: [
      'Brand Identity & Collateral',
      'Web Design & Development',
      'Content Marketing Strategy',
      'Lead Capture Funnels',
      'Client Onboarding Workflows'
    ],
    tagline: 'Professional service clarity through thoughtful design and structured intake.',
    description: 'DigiTLC provides specialized advisory services. We structured their service catalog into digestible digital tiers, engineered lead capture funnels, and streamlined the client intake process from proposal to onboarding.',
    challenge: 'Complex consulting offerings were causing decision fatigue for visitors reading long PDF proposals and unclear service tiers.',
    solution: 'Constructed an intuitive interactive service selector, clear capability matrices, and automated onboarding forms.',
    deliverables: [
      'Modular corporate web design',
      'Digital proposal templates',
      'Client intake automation pipeline',
      'Branded digital collateral'
    ],
    visualAccent: '#3B2347'
  },
  {
    id: 'digisyncro',
    name: 'DigiSyncro',
    client: 'DigiSyncro',
    industry: 'Technology',
    location: 'United States',
    categories: ['Website', 'AI', 'Automation', 'CRM'],
    services: [
      'Platform Web Presence',
      'Interactive Product Architecture',
      'CRM Integration & Webhook Sync',
      'Workflow Automation Blueprints',
      'User Journey Mapping'
    ],
    tagline: 'Harmonizing dispersed business data into unified operational pipelines.',
    description: 'DigiSyncro unifies enterprise communication tools. StartupBae created the digital marketing site, interactive capability maps, and automated registration systems.',
    challenge: 'Audiences struggled to visualize how multiple third-party tools connected within DigiSyncro without a guided visual tour.',
    solution: 'Developed an interactive workflow visualizer that demonstrates data flow in real time across common business applications.',
    deliverables: [
      'Interactive workflow web architecture',
      'Technical product overview pages',
      'Lead routing and attribution setup',
      'Developer & partner inquiry portals'
    ],
    visualAccent: '#C83B7A'
  },
  {
    id: 'callcatch360',
    name: 'CallCatch360',
    client: 'CallCatch360',
    industry: 'Telecommunications & AI',
    location: 'Australia',
    categories: ['Branding', 'Website', 'AI', 'Automation'],
    services: [
      'Brand Identity Creation',
      'Product Landing Pages',
      'AI Voice Assistant Demos',
      'Missed-Call-to-Text Setup',
      'Instant WhatsApp Chat Integration'
    ],
    tagline: 'Never letting an inbound lead go unanswered, day or night.',
    description: 'CallCatch360 provides AI voice and text response for small businesses. We built the complete brand identity, public web presence, and live interactive audio demos where visitors can test the receptionist in real time.',
    challenge: 'Prospective buyers needed to hear the conversational realism of the AI assistant before committing to an onboarding call.',
    solution: 'Designed an interactive audio sandbox allowing visitors to trigger test calls and experience the immediate SMS follow-up first-hand.',
    deliverables: [
      'Complete brand identity & wordmark',
      'Interactive audio demo player',
      'Missed-call-to-text demonstration workflow',
      'Onboarding and tier-pricing architecture'
    ],
    visualAccent: '#F7B7A3'
  },
  {
    id: 'xantias',
    name: 'Xantias',
    client: 'Xantias',
    industry: 'Professional Services',
    location: 'United Kingdom',
    categories: ['Branding', 'Website', 'CRM'],
    services: [
      'Executive Branding Suite',
      'High-End Web Architecture',
      'Private Client Intake Portal',
      'Confidential Appointment System'
    ],
    tagline: 'Quiet elegance and discretion for private advisory clientele.',
    description: 'Xantias needed a discreet, premium web presence that reflected their high-net-worth advisory standards. We designed a clean, typography-focused editorial site with seamless private consultation booking.',
    challenge: 'Balancing rigorous privacy and confidentiality standards with modern, frictionless appointment scheduling.',
    solution: 'Implemented encrypted intake questionnaires, gated calendar access, and bespoke editorial layouts.',
    deliverables: [
      'Luxury editorial website',
      'Custom typography treatment',
      'Secure client appointment portal',
      'Executive print & digital collateral'
    ],
    visualAccent: '#3B2347'
  },
  {
    id: 'rv-unlimited',
    name: 'RV Unlimited',
    client: 'RV Unlimited',
    industry: 'Home Services & Travel',
    location: 'United States',
    categories: ['Website', 'Advertising', 'CRM', 'Marketing'],
    services: [
      'Inventory Showcase Website',
      'Meta Ad Lead Generation',
      'Google Search Ad Campaigns',
      'Automated Vehicle Inquiry Pipeline',
      'Customer SMS Inspection Alerts'
    ],
    tagline: 'Connecting adventurous travelers with premium recreational vehicles.',
    description: 'RV Unlimited wanted to accelerate inventory turnover and simplify customer inquiries. We rebuilt their inventory catalog, set up lead capture funnels for specific models, and automated vehicle inspection updates.',
    challenge: 'High-ticket buyers had long research cycles and frequently abandoned general contact forms without specifying vehicle preferences.',
    solution: 'Integrated multi-step model preference selectors, immediate WhatsApp photo sharing, and automated showroom appointment reminders.',
    deliverables: [
      'Dynamic inventory website',
      'Lead qualification questionnaires',
      'Multi-channel ad funnels',
      'Showroom appointment tracking CRM'
    ],
    visualAccent: '#C83B7A'
  },
  {
    id: 'lm-smash-repairs',
    name: 'L&M Smash Repairs',
    client: 'L&M Smash Repairs',
    industry: 'Automotive',
    location: 'Australia',
    categories: ['Website', 'Branding', 'Automation', 'CRM'],
    services: [
      'Brand Identity Modernization',
      'Fast-Loading Mobile Site',
      'Online Booking & Estimate Portal',
      'Automated Insurance Claims Workflow',
      'SMS Vehicle Pickup Alerts'
    ],
    tagline: 'Fast, reliable panel beating with customer-first digital updates.',
    description: 'L&M Smash Repairs sought to modernize customer communications and expand local repair bookings. We launched an intuitive mobile site with an interactive damage quote builder and real-time repair status notifications.',
    challenge: 'Customers were repeatedly calling the workshop floor to ask whether parts had arrived or if vehicles were ready for pickup.',
    solution: 'Created an automated SMS notification bridge triggered whenever technicians update job status in the repair tracking system.',
    deliverables: [
      'Mobile-optimized booking website',
      'Online damage estimate workflow',
      'SMS customer update pipeline',
      'Local citation & map presence'
    ],
    visualAccent: '#3B2347'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare-wellness',
    name: 'Healthcare & Wellness',
    tagline: 'Private clinics, medical spas, allied health & wellness practices',
    summary: 'Build clinical credibility, streamline patient intake, and reduce appointment no-shows through automated reminders and compassionate communication.',
    commonChallenges: [
      'High rate of consultation cancellations and empty appointment slots',
      'Patients feeling overwhelmed by clinical jargon on old websites',
      'Front-desk staff consumed by repetitive scheduling inquiries'
    ],
    solutions: [
      'Editorial medical web presence highlighting practitioner credentials and treatment overviews',
      'Frictionless online consultation booking with calendar synchronization',
      'Automated pre-appointment preparation guides sent via SMS and email'
    ],
    keyWorkflows: [
      'Inquiry -> Pre-qualification -> Booking -> SMS Reminder -> Follow-up Check-in'
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive & Collision Care',
    tagline: 'Smash repairers, auto detailing, mechanical workshops & specialty dealers',
    summary: 'Turn stressful vehicle mishaps into seamless digital customer experiences with photo estimates, live repair status alerts, and local search dominance.',
    commonChallenges: [
      'Customers needing urgent estimates after accidents while away from their desktops',
      'Constant phone interruptions asking for vehicle completion updates',
      'Fierce local competition on Google Maps and search ads'
    ],
    solutions: [
      'Mobile-first photo estimate upload portals integrated directly into your workflow',
      'Automated SMS status updates at every stage (Parts Arrived, In Paint, Ready for Pickup)',
      'Review automation immediately following vehicle handover'
    ],
    keyWorkflows: [
      'Emergency Landing Page -> Photo Upload -> Instant Estimate Queue -> SMS Updates -> 5-Star Review'
    ]
  },
  {
    id: 'home-services',
    name: 'Home Services & Contracting',
    tagline: 'HVAC, electrical, plumbing, roofing, remodeling & custom builders',
    summary: 'Capture homeowner demand the moment emergencies happen or renovation dreams start. Keep your schedule full without spending evenings answering emails.',
    commonChallenges: [
      'Slow response times to new leads resulting in homeowners hiring a competitor',
      'Chasing unverified leads and spending hours on dry quote estimates',
      'Inconsistent seasonal peaks and valleys in booking volume'
    ],
    solutions: [
      'High-speed quote request funnels with zip-code routing',
      'Instant 60-second SMS and WhatsApp auto-responder when inquiries arrive',
      'Targeted local Google Search and Meta Ads during peak seasons'
    ],
    keyWorkflows: [
      'Local Ad -> Zip Code Funnel -> Instant Auto-Text -> Scheduled Walkthrough -> Quote Follow-up'
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property',
    tagline: 'Agencies, property developers, buyers advocates & property managers',
    summary: 'Showcase premier properties with editorial elegance, qualify serious buyers, and automate nurture journeys throughout long transaction cycles.',
    commonChallenges: [
      'Generic listing platforms diluting agency prestige and brand identity',
      'Difficulty maintaining consistent personal follow-up with past inquiries',
      'Slow distribution of brochures, floor plans, and investment memorandums'
    ],
    solutions: [
      'Editorial listing portals with dynamic inspection scheduling',
      'Instant brochure and documentation delivery via WhatsApp and email',
      'Long-term automated nurture sequences tailored to buyer price brackets'
    ],
    keyWorkflows: [
      'Property Ad -> Editorial Showcase -> Instant Brochure Download -> Agent Notification -> Viewing Calendar'
    ]
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    tagline: 'Legal practices, accounting firms, wealth advisors & management consultancies',
    summary: 'Communicate intellectual authority and discretion. Convert high-value inquiries with structured intake questionnaires and executive calendar booking.',
    commonChallenges: [
      'Unqualified discovery calls that consume valuable billable partner hours',
      'Websites that feel outdated, corporate, and indistinguishable from peers',
      'Manual back-and-forth email scheduling across time zones'
    ],
    solutions: [
      'Thoughtful editorial web design that elevates thought leadership and case studies',
      'Gated intake forms that verify client fit before calendar booking is permitted',
      'Centralized CRM tracking proposals, engagements, and confidentiality agreements'
    ],
    keyWorkflows: [
      'Thought Leadership -> Qualification Questionnaire -> Executive Calendar -> Automated Briefing Dossier'
    ]
  },
  {
    id: 'agencies',
    name: 'Agencies & Studios',
    tagline: 'Creative boutiques, media shops, PR agencies & dev houses',
    summary: 'White-label partnerships and systems optimization. We help agencies scale delivery, implement client CRM portals, and handle technical automation.',
    commonChallenges: [
      'Client requests for CRM and automated follow-ups that internal teams lack bandwidth to deliver',
      'Bottlenecks in client onboarding and multi-stakeholder approval workflows',
      'Need for a trusted partner who respects creative standards without corporate overhead'
    ],
    solutions: [
      'Seamless white-label delivery across CRM setup, AI assistants, and automation',
      'Standardized client onboarding templates and automated asset collection',
      'Collaborative sprint execution alongside internal agency strategists'
    ],
    keyWorkflows: [
      'Client Win -> Automated Intake Form -> Workspace Provisioning -> Pipeline Configuration'
    ]
  },
  {
    id: 'startups',
    name: 'Startups & Growing Businesses',
    tagline: 'Early-stage ventures, bootstrapped founders & high-growth brands',
    summary: 'Move from fragmented tools to an integrated growth stack. Launch brand, website, paid channels, and customer pipelines in unified alignment.',
    commonChallenges: [
      'Cobbling together five disconnected tools that break when user volume spikes',
      'Lack of cohesive branding between ads, landing pages, and product messaging',
      'Limited internal engineering time to build marketing infrastructure'
    ],
    solutions: [
      'Rapid deployment of unified brand systems, landing pages, and lead pipelines',
      'Centralized customer data layer ready for scaling without rebuilds',
      'Agile marketing test loops across search and social channels'
    ],
    keyWorkflows: [
      'Targeted Launch -> High-Converting Landing Page -> Central CRM -> Retention & Referral Automation'
    ]
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'why-websites-fail-without-systems',
    title: 'Why a Beautiful Website Is Only 25% of the Equation',
    category: 'Websites & Systems',
    readTime: '5 min read',
    date: 'October 2026',
    excerpt: 'Most businesses spend months polishing their homepage copy, only to let high-intent inquiries sit untouched in an email inbox for 48 hours. Here is why the system behind the site dictates the outcome.',
    content: [
      'Every week, businesses invest thousands in modern web design, meticulous photography, and bespoke typography. Yet three months later, the business owner wonders why top-line revenue has barely budged.',
      'The reason is simple: a website is a storefront window, not a complete transaction engine. If a prospective customer walks up to the window at 8:30 PM, expresses interest, and receives silence until Tuesday afternoon, they have already moved on to your competitor.',
      'To build a digital presence that actually drives business, four components must work in unison:',
      '1. The Brand & Web Experience: Earning trust, establishing clarity, and creating immediate visual authority.',
      '2. The Inbound Flow: Targeted traffic from search and paid social that matches the landing page promise.',
      '3. The Instant Response: Automated SMS or WhatsApp engagement within 60 seconds of inquiry capture.',
      '4. The Structured Pipeline: Centralized tracking so your team knows exactly who needs a quote, who has a pending invoice, and who needs a check-in.',
      'When you connect the front end to the operational systems behind it, your website transforms from a digital brochure into an automated customer acquisition engine.'
    ]
  },
  {
    id: 'the-speed-to-lead-reality',
    title: 'The 60-Second Rule: What Really Happens When Inquiries Wait',
    category: 'Lead Generation & CRM',
    readTime: '4 min read',
    date: 'September 2026',
    excerpt: 'Data across modern service industries is unambiguous: responding to an inquiry within five minutes increases conversion by over 300%. Here is how automated triage fixes lead leakage.',
    content: [
      'When a customer fills out an estimate request or inquiry form, their purchase intent is at its absolute peak. They are currently focused on solving their problem, credit card or calendar in hand.',
      'If you respond within 60 seconds with a personalized text message or WhatsApp greeting acknowledging their request and providing an immediate booking link, the conversation begins while they are still on your website.',
      'Wait two hours, and they are in a meeting. Wait 24 hours, and they have already scheduled with someone else.',
      'The good news is that your team does not need to be glued to their phones 24 hours a day. By integrating intelligent auto-responders and routing pipelines into your CRM, the initial triage and calendar booking happen automatically.'
    ]
  },
  {
    id: 'ai-voice-and-chat-in-practice',
    title: 'AI Assistants in the Real World: Practical Utility vs Gimmicks',
    category: 'AI Automation',
    readTime: '6 min read',
    date: 'September 2026',
    excerpt: 'Forget generic science-fiction hype. In 2026, the real value of AI in business lies in mundane, high-impact triage: missed-call handling, after-hours booking, and instant FAQ resolution.',
    content: [
      'The digital landscape is flooded with overhyped "AI automation" promises that collapse the moment a customer asks a slightly unconventional question.',
      'At StartupBae, we approach AI through a pragmatic lens: where does human latency create customer frustration?',
      'Consider the missed call. In service businesses, nearly 35% of inbound phone calls occur outside standard business hours or while technicians are with clients. Historically, these callers went to voicemail, where 80% hang up without leaving a message.',
      'With an intelligent voice receptionist or instant missed-call-to-text sequence, that caller immediately receives a polite text: "Hey! We missed your call while helping another client. How can we help you right now?"',
      'The prospect texts back, the conversation continues, and the appointment is secured before the business even opens the next morning.'
    ]
  },
  {
    id: 'paid-traffic-with-retention-loops',
    title: 'The Multiplier Effect: Combining Meta Ads with WhatsApp Nurturing',
    category: 'Paid Advertising',
    readTime: '5 min read',
    date: 'August 2026',
    excerpt: 'Rising customer acquisition costs make single-touch advertising obsolete. Discover how pairing direct-response ads with conversational messaging cuts cost per qualified appointment.',
    content: [
      'Relying solely on ad platform algorithms to convert cold traffic on a single visit has become increasingly expensive.',
      'The modern playbook pairs compelling visual creative on Meta and Google with conversational channels like WhatsApp and SMS. Instead of forcing visitors through an intimidating 12-field form, invite them into a friendly, structured chat.',
      'Once a direct messaging channel is opened with the prospect\'s consent, your follow-up costs drop to zero. You can send reminder notifications, share previous client transformations, and nurture the relationship naturally over weeks without paying for additional ad impressions.',
      'This multi-channel bridge is what separates high-performing growth systems from one-off ad campaigns.'
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Understand your business, customers and goals.',
    description: 'We audit your current digital footprint, analyze your competitive landscape in the US, UK, or Australia, and identify operational bottlenecks in your current lead flow.',
    action: 'Comprehensive Discovery Session & Strategy Roadmap'
  },
  {
    step: '02',
    title: 'BUILD',
    subtitle: 'Create your brand, website and digital foundation.',
    description: 'Our design and engineering team crafts your visual identity, typography system, high-converting web architecture, and multimedia assets with pixel-level care.',
    action: 'Custom Design, Copywriting & Production Engineering'
  },
  {
    step: '03',
    title: 'LAUNCH',
    subtitle: 'Launch your marketing and customer acquisition channels.',
    description: 'We deploy targeted campaigns across Meta Ads, Google Search, and organic channels to start driving qualified prospects directly to your new web presence.',
    action: 'Campaign Deployment & Audience Targeting'
  },
  {
    step: '04',
    title: 'CONNECT',
    subtitle: 'Connect CRM, communication and customer journeys.',
    description: 'We wire up your lead capture funnels to your CRM, configure WhatsApp/SMS two-way messaging, set up appointment calendars, and activate follow-up sequences.',
    action: 'Pipeline Architecture & Workflow Automation'
  },
  {
    step: '05',
    title: 'GROW',
    subtitle: 'Optimise, automate and improve.',
    description: 'With data flowing through the entire pipeline, we analyze drop-offs, refine ad creatives, introduce AI receptionists, and optimize lifetime customer value.',
    action: 'Continuous Optimization & System Scaling'
  }
];

export const WHY_STARTUPBAE_PILLARS = [
  {
    id: 'creative',
    title: 'Creative',
    subtitle: 'Visual authority that cuts through noise',
    description: 'Bespoke branding, editorial web design, high-converting landing pages, and motion graphics that make your business memorable and respected.'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    subtitle: 'Predictable, targeted customer acquisition',
    description: 'Precision Meta & Google advertising, content strategy, and intent-focused campaigns that bring genuine prospects directly into your world.'
  },
  {
    id: 'technology',
    title: 'Technology',
    subtitle: 'Robust digital foundations built to last',
    description: 'Fast, secure web engineering, responsive architectures, seamless integrations, and modern tool stacks tailored for high conversion.'
  },
  {
    id: 'customer-systems',
    title: 'Customer Systems',
    subtitle: 'Zero lost leads, automated follow-ups',
    description: 'Structured CRM pipelines, WhatsApp & SMS communication hubs, instant appointment booking, and AI triage that work 24 hours a day.'
  }
];
