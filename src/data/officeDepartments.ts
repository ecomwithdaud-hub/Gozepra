export interface PortfolioItem {
  title: string;
  clientType: string;
  metrics: string;
  tags: string[];
  summary: string;
}

export interface Associate {
  id: string;
  name: string;
  role: string;
  departmentId: "dev" | "seo" | "ecom";
  departmentName: string;
  deskPosition: [number, number, number];
  standPosition: [number, number, number];
  specialty: string;
  avatarColor: string;
  accentColor: string;
  portfolioItems: PortfolioItem[];
}

export interface Department {
  id: "dev" | "seo" | "ecom";
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  badge: string;
  color: string;
  accentColor: string;
  cameraTarget: [number, number, number];
  cameraPosition: [number, number, number];
  walkWaypoint: [number, number, number];
  associates: Associate[];
}

export interface FounderInfo {
  id: string;
  name: string;
  role: string;
  email: string;
  specialty: string;
  summary: string;
  cabinPosition: [number, number, number];
  deskPosition: [number, number, number];
  standPosition: [number, number, number];
  cameraTarget: [number, number, number];
  cameraPosition: [number, number, number];
  portfolioItems: PortfolioItem[];
}

export const OFFICE_WAYPOINTS = {
  reception: [0, 0, 12] as [number, number, number],
  receptionCamera: [0, 11, 20] as [number, number, number],
  receptionTarget: [0, 1, 9] as [number, number, number],
  foundersCabin: [-10, 0, 10] as [number, number, number],
  foundersCabinCamera: [-10, 8, 16] as [number, number, number],
  foundersCabinTarget: [-10, 1.2, 8] as [number, number, number],
  overviewCamera: [0, 24, 26] as [number, number, number],
  overviewTarget: [0, 0, 0] as [number, number, number],
};

export const FOUNDER_DATA: FounderInfo = {
  id: "founder-daud",
  name: "Daud Lashari",
  role: "Founder & Managing Director",
  email: "info@gozepra.tech",
  specialty: "Enterprise Digital Architecture & Strategic Agency Leadership",
  summary:
    "Directs Zepra Tech's technology architecture, digital product development, and global agency client partnerships. With 100+ enterprise solutions delivered, Daud leads our engineering, performance, and creative teams in shipping high-impact web applications, autonomous AI automations, and growth systems.",
  cabinPosition: [-10, 0, 10],
  deskPosition: [-10, 0, 8],
  standPosition: [-10, 0, 9.5],
  cameraTarget: [-10, 1.2, 8],
  cameraPosition: [-10, 8, 15],
  portfolioItems: [
    {
      title: "Global Enterprise Multi-Tenant Platform Engineering",
      clientType: "Global Corporate Consortium (US / UK / GCC)",
      metrics: "$14M+ Handled Throughput • 100+ Systems Delivered • 99.99% Reliability",
      tags: ["Strategic Consulting", "System Architecture", "AI Automation", "Next.js", "Cloud Infrastructure"],
      summary:
        "Directed end-to-end strategic discovery, architecture blueprinting, and multi-team orchestration to ship mission-critical digital platforms supporting multi-region operations.",
    },
    {
      title: "Zepra Tech High-Velocity Delivery Ecosystem",
      clientType: "Zepra Tech Flagship Agency Infrastructure",
      metrics: "12 Core Services • 3 Flagship Bays • PK + International Reach",
      tags: ["Agency Leadership", "Full-Stack Web", "AI Systems", "Global Operations"],
      summary:
        "Founded and scaled Zepra Tech into a premier multi-service digital agency bridging enterprise engineering, custom AI agents, aggressive local SEO, and custom Shopify experiences.",
    },
    {
      title: "Cross-Border FinTech & High-Frequency Transaction Rails",
      clientType: "Regulated Financial Services Provider",
      metrics: "<60ms Execution • Multi-Currency Ledger • SOC2 Compliance",
      tags: ["FinTech", "Distributed Systems", "PostgreSQL", "Next.js App Router"],
      summary:
        "Spearheaded the technical roadmap for real-time ledger accounting, automated banking reconciliation feeds, and enterprise-grade cryptographic audit trails.",
    },
  ],
};

export const OFFICE_DEPARTMENTS: Department[] = [
  {
    id: "dev",
    name: "Web, SaaS & AI Engineering",
    shortName: "Dev & AI Team",
    tagline: "Next-gen web applications, scalable SaaS architectures, and autonomous AI systems.",
    description:
      "Our engineering bay builds modern Next.js/React web platforms, custom CRMs, transactional ledgers, and intelligent LLM-driven automation pipelines tailored to business workflows.",
    badge: "Engineering Bay 01",
    color: "#14B8A6",
    accentColor: "#2DD4BF",
    walkWaypoint: [-9, 0, -2],
    cameraTarget: [-9, 1.2, -4],
    cameraPosition: [-9, 10, 4],
    associates: [
      {
        id: "dev-1",
        name: "Hamza Tariq",
        role: "Lead Full-Stack Architect",
        departmentId: "dev",
        departmentName: "Web, SaaS & AI Engineering",
        deskPosition: [-12, 0, -6],
        standPosition: [-12, 0, -4.5],
        specialty: "Next.js/React Web Apps & Cloud Microservices",
        avatarColor: "#0D9488",
        accentColor: "#2DD4BF",
        portfolioItems: [
          {
            title: "CloudScale NextGen ERP & Inventory Engine",
            clientType: "B2B Industrial Equipment Distributor (US/GCC)",
            metrics: "3.2x Order Processing Speed • 99.98% System Uptime • $4.2M Handled",
            tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
            summary:
              "Architected a responsive, enterprise-grade cloud inventory and ERP dashboard with real-time stock sync, role-based access control, and low-latency data grid tables.",
          },
          {
            title: "ApexPay FinTech Multi-Tenant Ledger",
            clientType: "Global Cross-Border Remittance SaaS",
            metrics: "<85ms Ledger Latency • SOC2 Compliant Schema • 45k Daily TXNs",
            tags: ["Next.js App Router", "Server Actions", "PostgreSQL", "Tailwind CSS", "Zod"],
            summary:
              "Engineered double-entry bookkeeping ledgers with cryptographic verification, automated PDF statements, and webhook reconciliations.",
          },
          {
            title: "OmniFlow B2B Customer Portal",
            clientType: "Logistics Fleet Management Provider",
            metrics: "84% Reduction in Support Tickets • 6-Week Turnaround",
            tags: ["Next.js", "React", "Radix UI", "TanStack Table", "Tailwind CSS"],
            summary:
              "Delivered a customer-facing self-service management portal with live parcel tracking, invoice downloads, and integrated team permission hierarchies.",
          },
        ],
      },
      {
        id: "dev-2",
        name: "Ayesha Malik",
        role: "Senior SaaS Systems Engineer",
        departmentId: "dev",
        departmentName: "Web, SaaS & AI Engineering",
        deskPosition: [-6, 0, -6],
        standPosition: [-6, 0, -4.5],
        specialty: "Custom CRMs, Dashboards & Interactive Interfaces",
        avatarColor: "#0F766E",
        accentColor: "#5EEAD4",
        portfolioItems: [
          {
            title: "PulseCRM Custom Sales Pipeline & Automations",
            clientType: "Commercial Real Estate Brokerage",
            metrics: "310% Lead Conversion Boost • 12 Team Workspaces • 0 Downtime",
            tags: ["Next.js", "TypeScript", "Custom CRM", "Tailwind CSS", "REST APIs"],
            summary:
              "Engineered a custom CRM with Kanban deal pipelines, automated email sequences, calendar appointment sync, and client activity logs.",
          },
          {
            title: "MedSync Healthcare Telehealth SaaS",
            clientType: "Private Clinic Network (UK)",
            metrics: "12,000+ Appointments Booked • HIPAA Compliant Architecture",
            tags: ["React", "Next.js", "WebRTC", "PostgreSQL", "Tailwind CSS"],
            summary:
              "Designed and developed a HIPAA-compliant virtual consultation SaaS with integrated patient records, prescription generator, and Stripe billing.",
          },
          {
            title: "TalentPulse HR & Global Payroll Suite",
            clientType: "Remote-First Tech Staffing Firm",
            metrics: "Saved 40+ Admin Hours/Mo • Multi-Currency Ledger",
            tags: ["Next.js", "Node.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
            summary:
              "Built custom contractor onboarding, automated contract generation, milestone approvals, and multi-currency payroll disbursements.",
          },
        ],
      },
      {
        id: "dev-3",
        name: "Zayn Siddiqui",
        role: "AI Systems & Automation Architect",
        departmentId: "dev",
        departmentName: "Web, SaaS & AI Engineering",
        deskPosition: [-12, 0, -1],
        standPosition: [-12, 0, -2.5],
        specialty: "AI Workflow Automation & Autonomous Agents",
        avatarColor: "#115E59",
        accentColor: "#2DD4BF",
        portfolioItems: [
          {
            title: "NeuroAgent Autonomous Customer Support Bot",
            clientType: "High-Volume E-Commerce Brand",
            metrics: "73% First-Touch Resolution • 1.4s Response Time • 24/7 Availability",
            tags: ["Python", "LangChain", "OpenAI GPT-4o", "Pinecone", "Next.js"],
            summary:
              "Constructed an autonomous AI support agent that queries internal Shopify knowledge bases, checks live order statuses, and resolves tier-1 tickets.",
          },
          {
            title: "CognitiveDoc RFP & Contract Analysis Pipeline",
            clientType: "Legal & Financial Advisory Firm",
            metrics: "92% Time Saved on Document Auditing • 99.4% Parsing Accuracy",
            tags: ["LlamaIndex", "OpenAI Embeddings", "FastAPI", "React", "Tailwind"],
            summary:
              "Built an intelligent document processing engine that digests 100+ page contracts, extracts risk clauses, and outputs actionable executive summaries.",
          },
          {
            title: "AutoLead Intelligent Lead Enrichment & Scoring Agent",
            clientType: "B2B Enterprise Software Vendor",
            metrics: "4.8x Pipeline Velocity • 18,000 Accounts Enriched Weekly",
            tags: ["AI Automation", "Python", "Apollo API", "n8n", "Webhook Broker"],
            summary:
              "Deployed automated AI pipelines that scan inbound form fills, enrich executive profiles via public data, score purchase intent, and route warm leads.",
          },
        ],
      },
      {
        id: "dev-4",
        name: "Bilal Ahmed",
        role: "Backend & Cloud Infrastructure Lead",
        departmentId: "dev",
        departmentName: "Web, SaaS & AI Engineering",
        deskPosition: [-6, 0, -1],
        standPosition: [-6, 0, -2.5],
        specialty: "High-Throughput Ledgers, APIs & Cloud Microservices",
        avatarColor: "#134E4A",
        accentColor: "#14B8A6",
        portfolioItems: [
          {
            title: "VaultLedger High-Throughput Financial Ledger",
            clientType: "Digital Asset Payment Gateway",
            metrics: "15,000 TPS Benchmark • 99.999% Fault Tolerance • Zero Discrepancy",
            tags: ["Go / Node.js", "PostgreSQL", "Redis", "Docker", "AWS ECS"],
            summary:
              "Designed an ACID-compliant transaction ledger with distributed idempotency keys, write-ahead logging, and automated reconciliation daemons.",
          },
          {
            title: "EventRelay Scalable Webhook Delivery Platform",
            clientType: "Developer Tooling Startup",
            metrics: "250M Monthly Dispatches • Sub-50ms Queue Time",
            tags: ["Node.js", "Apache Kafka", "Redis Cluster", "AWS", "TypeScript"],
            summary:
              "Built resilient webhook retry systems with exponential backoff, cryptographic signature headers, and live delivery observability dashboards.",
          },
          {
            title: "MicroScale Multi-Region Container Cluster",
            clientType: "Enterprise Logistics & Tracking Provider",
            metrics: "65% AWS Cloud Cost Reduction • Automatic Horizontal Autoscaling",
            tags: ["Docker", "Kubernetes", "Terraform", "PostgreSQL RDS", "Cloudflare"],
            summary:
              "Modernized legacy monolithic infrastructure into containerized microservices behind Cloudflare edge routing and automated CI/CD deployments.",
          },
        ],
      },
    ],
  },
  {
    id: "seo",
    name: "SEO, Performance Marketing & GMB",
    shortName: "SEO & Growth Team",
    tagline: "Dominating Google Business search results, local map packs, and aggressive B2B demand gen.",
    description:
      "Our performance marketing bay specializes in ranking multi-location businesses on Google Maps, technical & programmatic SEO, outbound B2B lead generation systems, and high-ROAS paid media.",
    badge: "Growth Bay 02",
    color: "#06B6D4",
    accentColor: "#22D3EE",
    walkWaypoint: [0, 0, -4],
    cameraTarget: [0, 1.2, -7],
    cameraPosition: [0, 10, 2],
    associates: [
      {
        id: "seo-1",
        name: "Usman Riaz",
        role: "Head of Local SEO & GMB Domination",
        departmentId: "seo",
        departmentName: "SEO, Performance Marketing & GMB",
        deskPosition: [-3, 0, -9],
        standPosition: [-3, 0, -7.5],
        specialty: "Google Business Profile (GMB) Ranking & Local Maps",
        avatarColor: "#0891B2",
        accentColor: "#67E8F9",
        portfolioItems: [
          {
            title: "Tri-State Dental Care 3-Pack GMB Domination",
            clientType: "6-Location Dental Clinic Chain",
            metrics: "#1 Map Pack Across 18 Keywords • 410% Phone Call Surge in 90 Days",
            tags: ["GMB Optimization", "Local Citations", "Geo-Tagged Media", "Review Funnels"],
            summary:
              "Engineered comprehensive local SEO strategy optimizing primary/secondary categories, local map citations, and automated 5-star review collection.",
          },
          {
            title: "Apex HVAC & Roofing Multi-City Ranking",
            clientType: "Residential Home Services Provider",
            metrics: "280% Qualified Emergency Inbound Calls • $185k New Monthly Revenue",
            tags: ["Google Maps SEO", "Local Schema", "Service Area Pages", "Reputation Management"],
            summary:
              "Optimized service area boundaries, nested geo-targeted landing pages with localized JSON-LD schemas, and eliminated duplicate map pin suspensions.",
          },
          {
            title: "Prime Hospitality Boutique Hotels Local Surge",
            clientType: "Luxury Boutique Hotel Group",
            metrics: "340% Direct Booking Inquiries • 1.2M Local Map Impressions",
            tags: ["Google Travel & Maps", "Local SEO", "High-Res Panoramas", "GMB Posts"],
            summary:
              "Transformed underperforming Google Business profiles into high-converting booking engines with 360-virtual tours, attribute tagging, and weekly promo updates.",
          },
        ],
      },
      {
        id: "seo-2",
        name: "Fatima Noor",
        role: "Technical & Programmatic SEO Lead",
        departmentId: "seo",
        departmentName: "SEO, Performance Marketing & GMB",
        deskPosition: [3, 0, -9],
        standPosition: [3, 0, -7.5],
        specialty: "Technical SEO, Core Web Vitals & Scaled Architectures",
        avatarColor: "#0E7490",
        accentColor: "#22D3EE",
        portfolioItems: [
          {
            title: "Global Stays 60,000-Page Programmatic SEO Engine",
            clientType: "International Short-Term Rental Directory",
            metrics: "0 to 450,000 Organic Visits/Mo • 82% Non-Branded Keyword Traffic",
            tags: ["Programmatic SEO", "Next.js SSR", "Dynamic XML Sitemaps", "Schema.org"],
            summary:
              "Built a high-performance programmatic SEO architecture generating 60k hyper-targeted city/neighborhood landing pages with 98+ Core Web Vitals score.",
          },
          {
            title: "B2B SaaS Technical Architecture Overhaul",
            clientType: "Compliance Automation Software",
            metrics: "Crawl Efficiency +320% • Indexed Pages Doubled • 0 Index Bloat",
            tags: ["Technical SEO", "Canonical Audits", "Hreflang", "Core Web Vitals"],
            summary:
              "Resolved deep faceted navigation indexing traps, restructured internal link equity flows, and achieved 100% Mobile Usability compliance on Search Console.",
          },
          {
            title: "E-Commerce Enterprise Site Speed & Rank Recovery",
            clientType: "Multi-Category Online Retailer",
            metrics: "Core Web Vitals Pass Rate 31% → 99% • Organic Revenue +125%",
            tags: ["Next.js Performance", "Image Optimization", "LCP / CLS Fixing", "Structured Data"],
            summary:
              "Diagnosed and resolved critical client-side rendering bottlenecks, optimizing Largest Contentful Paint to 0.6s and unlocking top 3 rankings for high-intent keywords.",
          },
        ],
      },
      {
        id: "seo-3",
        name: "Omer Farooq",
        role: "B2B Lead Generation & Outbound Strategist",
        departmentId: "seo",
        departmentName: "SEO, Performance Marketing & GMB",
        deskPosition: [-3, 0, -5],
        standPosition: [-3, 0, -6.2],
        specialty: "B2B Lead Generation, Cold Email & Sales Automation",
        avatarColor: "#155E75",
        accentColor: "#38BDF8",
        portfolioItems: [
          {
            title: "Enterprise Cloud Security $1.8M Qualified Pipeline",
            clientType: "SOC2 Cybersecurity Vendor",
            metrics: "46 C-Level Sales Qualified Meetings Booked • 38.4% Cold Reply Rate",
            tags: ["B2B Cold Outreaching", "LinkedIn Sales Nav", "Smartlead", "Domain Warming"],
            summary:
              "Constructed targeted outbound infrastructure with 15 secondary sending domains, hyper-personalized value proposition matrices, and custom video audits.",
          },
          {
            title: "US Freight Logistics 52 Contract Demos/Month",
            clientType: "Nationwide 3PL Logistics Brokerage",
            metrics: "52 Verified Shipper Demos Booked Per Month • 14x Outbound ROI",
            tags: ["Cold Email Infrastructure", "ICP Segmentation", "Clay.com", "Sales CRM Sync"],
            summary:
              "Designed multi-tier outbound sequences targeting VP of Supply Chain executives, utilizing dynamic company trigger events and automated CRM booking sync.",
          },
          {
            title: "FinTech SaaS Founder Outbound Growth Engine",
            clientType: "Early-Stage B2B Billing API",
            metrics: "Closed First 14 Enterprise Pilot Contracts • $240k Initial ARR",
            tags: ["Lead Generation", "Executive Ghostwriting", "Targeted ABM", "Outreach Funnels"],
            summary:
              "Built an outbound engine pairing cold email with founder LinkedIn social proof, engaging CTOs and Heads of Product across Tier-1 tech hubs.",
          },
        ],
      },
      {
        id: "seo-4",
        name: "Sana Sheikh",
        role: "Paid Media & Performance Marketing Director",
        departmentId: "seo",
        departmentName: "SEO, Performance Marketing & GMB",
        deskPosition: [3, 0, -5],
        standPosition: [3, 0, -6.2],
        specialty: "Paid Ads (Google Ads, Meta & High-Conversion Retargeting)",
        avatarColor: "#164E63",
        accentColor: "#06B6D4",
        portfolioItems: [
          {
            title: "ScaleWear E-Commerce 7.4x Blended ROAS Campaign",
            clientType: "High-Growth Direct-to-Consumer Streetwear",
            metrics: "$680k Q4 Revenue Generated • 7.4x ROAS on Meta & Google PMax",
            tags: ["Google Performance Max", "Meta Ads", "Creative Testing", "Attribution Modeling"],
            summary:
              "Orchestrated full-funnel paid media strategy deploying high-velocity dynamic video ads, algorithmic audience lookalikes, and precision retargeting funnels.",
          },
          {
            title: "B2B Enterprise SaaS Google Search CAC Halved",
            clientType: "Cloud Resource Optimization Software",
            metrics: "Cost-Per-Acquisition Reduced by 54% • 185% Inbound Demo Volume",
            tags: ["Google Search Ads", "Negative Keyword Sculpting", "Conversion Rate Tracking", "Landing Pages"],
            summary:
              "Restructured Google Ads account with exact-match intent clusters, aggressive negative keyword lists, and custom high-converting Unbounce landing pages.",
          },
          {
            title: "OmniChannel Omnipresence Retargeting Architecture",
            clientType: "Luxury Furniture & Interior Studio",
            metrics: "18.2x Return on Ad Spend on Abandoned Cart Retargeting",
            tags: ["Meta Pixel", "Google Display Remarketing", "YouTube Ads", "Server-Side CAPI"],
            summary:
              "Implemented Meta Conversions API (CAPI) and Google Tag Manager server-side tracking to capture 100% of purchase signals and re-engage high-intent shoppers.",
          },
        ],
      },
    ],
  },
  {
    id: "ecom",
    name: "E-Commerce & Creative Studio",
    shortName: "E-Com & Creative Team",
    tagline: "High-converting Shopify Liquid stores, CRO science, and world-class brand packaging.",
    description:
      "Our creative studio bay fuses cutting-edge Shopify Plus development, conversion rate optimization (CRO), brand identity systems, and photorealistic 3D product visualization.",
    badge: "Studio Bay 03",
    color: "#3B82F6",
    accentColor: "#60A5FA",
    walkWaypoint: [9, 0, -2],
    cameraTarget: [9, 1.2, -4],
    cameraPosition: [9, 10, 4],
    associates: [
      {
        id: "ecom-1",
        name: "Daniyal Khan",
        role: "Shopify Plus Architect & Liquid Developer",
        departmentId: "ecom",
        departmentName: "E-Commerce & Creative Studio",
        deskPosition: [6, 0, -6],
        standPosition: [6, 0, -4.5],
        specialty: "Shopify Custom Liquid Stores & Headless Hydrogen",
        avatarColor: "#2563EB",
        accentColor: "#93C5FD",
        portfolioItems: [
          {
            title: "Nordic Heritage Apparel Bespoke Shopify Plus Store",
            clientType: "Luxury Outerwear & Wool Brand",
            metrics: "$3.8M Annual GMV • 1.1s Mobile Page Load • 34% Higher AOV",
            tags: ["Shopify Plus", "Liquid", "Tailwind CSS", "Custom Cart Drawer", "Checkout Extensibility"],
            summary:
              "Crafted a bespoke, lightning-fast Shopify theme featuring custom bundle builders, sticky variant selectors, tiered volume discounts, and 1-click upsells.",
          },
          {
            title: "GlowBotanicals Headless Storefront on Hydrogen",
            clientType: "Organic Skincare Direct-to-Consumer",
            metrics: "Sub-Second Page Navigations • 62% Increase in Mobile Add-To-Cart",
            tags: ["Shopify Hydrogen", "Oxygen", "GraphQL Storefront API", "Tailwind CSS"],
            summary:
              "Engineered a headless storefront with custom subscription management, shade-finder quiz logic, and frictionless headless checkout integration.",
          },
          {
            title: "Velox Pro Cycle Custom B2B & B2C Unified Store",
            clientType: "High-End Bicycle & Component Manufacturer",
            metrics: "Unified 2 Distinct Storefronts into 1 • $1.5M B2B Wholesale Volume",
            tags: ["Shopify Plus B2B", "Custom Liquid", "Wholesale Price Lists", "ERP Webhook Sync"],
            summary:
              "Implemented Shopify Plus B2B wholesale portal with custom net-30 terms, tiered quantity breaks, dealer login gated pricing, and ERP stock sync.",
          },
        ],
      },
      {
        id: "ecom-2",
        name: "Mariam Zahra",
        role: "Conversion Rate Optimization (CRO) Specialist",
        departmentId: "ecom",
        departmentName: "E-Commerce & Creative Studio",
        deskPosition: [12, 0, -6],
        standPosition: [12, 0, -4.5],
        specialty: "Conversion Rate Optimization & Data-Driven UX",
        avatarColor: "#1D4ED8",
        accentColor: "#60A5FA",
        portfolioItems: [
          {
            title: "LuxeHome Direct +48% Checkout Conversion Rate Lift",
            clientType: "Premium Home Decor Brand",
            metrics: "+48% Checkout Completion Rate • +$820k Incremental Annual Revenue",
            tags: ["CRO Auditing", "A/B Testing", "Hotjar Heatmaps", "Checkout Optimization"],
            summary:
              "Conducted multivariate testing across 120,000 visitors, removing checkout friction points, adding dynamic trust badges, and optimizing mobile payment flows.",
          },
          {
            title: "Vitality Nutrition Mobile PDP Redesign",
            clientType: "Health Supplements Brand",
            metrics: "36% Increase in Add-to-Cart • Bounce Rate Decreased by 28%",
            tags: ["UX Research", "Mobile-First Design", "Statistical Significance", "Micro-Interactions"],
            summary:
              "Redesigned product pages with sticky ATC bars, visual ingredient breakdown accordions, real-time social proof notifications, and verified customer review highlights.",
          },
          {
            title: "SaaS Pricing Page & Onboarding Friction Reduction",
            clientType: "Workflow Automation SaaS",
            metrics: "64% Increase in Free-to-Paid Trial Conversions",
            tags: ["Figma", "User Journey Mapping", "Usability Testing", "Pricing UX"],
            summary:
              "Revamped tiered pricing tables with interactive annual billing savings toggles, clear feature comparison matrices, and inline FAQ accordions.",
          },
        ],
      },
      {
        id: "ecom-3",
        name: "Hassan Ali",
        role: "Brand Identity & Packaging Director",
        departmentId: "ecom",
        departmentName: "E-Commerce & Creative Studio",
        deskPosition: [6, 0, -1],
        standPosition: [6, 0, -2.5],
        specialty: "Brand Identity, Packaging Systems & Luxury Unboxing",
        avatarColor: "#1E40AF",
        accentColor: "#38BDF8",
        portfolioItems: [
          {
            title: "Oud Royale Luxury Fragrance Complete Brand & Box System",
            clientType: "Niche High-End Perfumery (Dubai/London)",
            metrics: "Featured in Vogue Arabia • 10,000 Units Sold Out on Launch Month",
            tags: ["Brand Identity", "Luxury Packaging", "Custom Typography", "Foil Stamping Specs"],
            summary:
              "Designed full visual identity system, custom embossed bottle packaging, gold foil box specifications, and an opulent unboxing experience.",
          },
          {
            title: "Kavita Organic Botanical Tea Sustainable Packaging",
            clientType: "Artisanal Organic Beverage Company",
            metrics: "Dieline Certified 100% Biodegradable • Shelf Visibility Rating 94/100",
            tags: ["Sustainable Packaging", "Dieline Engineering", "Vector Illustration", "Color Theory"],
            summary:
              "Developed earth-toned modern packaging system for 12 tea SKUs with custom botanical illustrations, dieline print specifications, and nutritional compliance layouts.",
          },
          {
            title: "Zepra Tech Ecosystem Brand Guidelines & Design System",
            clientType: "Zepra Tech Internal & Venture Studio",
            metrics: "100+ Component Design System • Unified Brand Consistency Across 5 Channels",
            tags: ["Design Systems", "Figma Tokens", "Brand Strategy", "Digital Identity"],
            summary:
              "Crafted the signature dark obsidian, teal glow, and typographic architecture representing Zepra Tech's high-tech engineering aesthetic.",
          },
        ],
      },
      {
        id: "ecom-4",
        name: "Rabia Kamran",
        role: "3D Visualizer & Product Mockup Artist",
        departmentId: "ecom",
        departmentName: "E-Commerce & Creative Studio",
        deskPosition: [12, 0, -1],
        standPosition: [12, 0, -2.5],
        specialty: "3D Product CGI, Photorealistic Renders & Blender Models",
        avatarColor: "#172554",
        accentColor: "#60A5FA",
        portfolioItems: [
          {
            title: "Aether Pro Audio Photorealistic 3D Launch Renders",
            clientType: "Wireless Studio Headphone Manufacturer",
            metrics: "Eliminated $45,000 Physical Studio Photoshoot Costs • 4k Ultra-Res Renders",
            tags: ["Blender", "Cinema 4D", "Octane Render", "Photorealistic Texturing"],
            summary:
              "Created photorealistic 3D product renders in brushed titanium, obsidian leather, and copper finishes with studio lighting setups for web hero banners.",
          },
          {
            title: "Interactive 360-Degree WebGL Product Configurator",
            clientType: "Custom Mechanical Keyboard Brand",
            metrics: "3.4 Minutes Average Session Duration • 55% Engagement Surge",
            tags: ["Three.js", "GLTF Optimization", "PBR Materials", "Low-Poly Modeling"],
            summary:
              "Modeled and optimized 3D keyboard components with real-time keycap color switching, metallic finishes, and smooth 360-degree orbit inspection.",
          },
          {
            title: "Beverage Can & Matte Glass Bottle CGI Mockup Suite",
            clientType: "Functional Energy Drink Startup",
            metrics: "24 SKU Renders Produced in 10 Days • Used in National Retail Pitch Deck",
            tags: ["3D CGI", "Condensation Shaders", "Lighting Studio", "Product Visualization"],
            summary:
              "Constructed hyper-realistic 3D can mockups with procedural condensation water droplets, frosted glass textures, and dramatic rim lighting.",
          },
        ],
      },
    ],
  },
];
