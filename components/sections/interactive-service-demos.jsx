"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Database,
  ExternalLink,
  Flame,
  Globe,
  Layers,
  MessageCircle,
  MessageSquare,
  Play,
  RotateCcw,
  Search,
  Send,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Terminal,
  TrendingUp,
  User,
  Wrench,
  Zap,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { siteMeta } from "@/lib/site";

// ============================================================================
// 1. NICHE AI BOTS DEFINITIONS
// ============================================================================
const NICHE_BOTS = [
  {
    id: "ecommerce",
    name: "E-Commerce WhatsApp & Order Bot",
    niche: "Retail, Fashion & D2C Stores",
    icon: ShoppingBag,
    color: "from-pink-500/20 to-rose-500/20",
    badge: "E-Commerce / D2C",
    accent: "text-pink-400",
    border: "border-pink-500/30",
    botAvatar: "🛍️",
    botName: "ModaLux AI Sales Assistant",
    welcomeMessage:
      "Hello! Welcome to ModaLux. I can help you track an existing order, check product sizing and stock availability, or place an order via Cash on Delivery right here. How can I assist you today?",
    prompts: [
      {
        q: "Check tracking for order #8841",
        a: "📦 Order #8841 is currently OUT FOR DELIVERY via Leopard Courier! Estimated arrival: Today before 5:00 PM. Rider: Imran (0301-4458921). Would you like me to send a live GPS tracking link?",
      },
      {
        q: "Do you have the Silk Kurta in size Medium?",
        a: "✨ Yes! We have 8 units of the Luxury Silk Kurta in Navy Blue (Medium) in stock at Rs. 4,850. Would you like me to reserve one for you with Cash on Delivery or credit card?",
      },
      {
        q: "What is your return & exchange policy?",
        a: "🔄 We offer a hassle-free 7-day doorstep exchange! If size or fit isn't perfect, our courier will deliver the replacement size and pick up the old one simultaneously with zero extra fees.",
      },
    ],
    stats: {
      responseTime: "1.2s",
      orderLift: "+38%",
      ticketDeflection: "-72%",
      availability: "24/7/365",
    },
  },
  {
    id: "clinic",
    name: "Clinic & Dental Intake Bot",
    niche: "Dentists, MedSpas & Doctors",
    icon: Stethoscope,
    color: "from-cyan-500/20 to-blue-500/20",
    badge: "Healthcare & Aesthetics",
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
    botAvatar: "🩺",
    botName: "Apex Medical Triage Bot",
    welcomeMessage:
      "Hello! Welcome to Apex Dental & Aesthetics Clinic. I can help you check consultation availability, answer pre-procedure questions, or schedule an emergency appointment with Dr. Daud's team. What brings you in today?",
    prompts: [
      {
        q: "I have sharp tooth pain, can I get seen today?",
        a: "🚨 Priority Emergency Flagged! Dr. Bilal has two urgent slots open today at 3:30 PM and 5:15 PM at our main clinic. Would you like me to hold the 3:30 PM slot under your name?",
      },
      {
        q: "How much is teeth whitening and does it hurt?",
        a: "🦷 Our In-Clinic Laser Whitening is $299 (currently 20% off). It is 100% painless with our enamel-safe protective barrier, takes 45 minutes, and lightens by 4-6 shades in one visit.",
      },
      {
        q: "Can I book a MedSpa Botox consultation for Friday?",
        a: "🗓️ Friday has openings at 11:00 AM and 2:30 PM with our senior aesthetic practitioner. I'll need your full name and phone number to send your instant calendar booking confirmation.",
      },
    ],
    stats: {
      responseTime: "1.5s",
      bookingRate: "+54%",
      noShowReduction: "-45%",
      availability: "24/7/365",
    },
  },
  {
    id: "contractor",
    name: "Roofing & Contractor Quote Bot",
    niche: "Roofing, Plumbing, HVAC & Auto",
    icon: Wrench,
    color: "from-amber-500/20 to-orange-500/20",
    badge: "Contractors & Trades",
    accent: "text-amber-400",
    border: "border-amber-500/30",
    botAvatar: "🔧",
    botName: "Summit Roofing Dispatch AI",
    welcomeMessage:
      "Hi! Welcome to Summit Commercial Roofing & Emergency Dispatch. Need a quick repair quote, emergency leak inspection, or roof replacement estimate? Let me know your situation and ZIP code!",
    prompts: [
      {
        q: "My roof is leaking in Dallas, how fast can you come?",
        a: "⚡ Emergency Leak Dispatch Alert! We have an on-call crew in the Dallas metro area. A certified technician can be at your location within 60-90 minutes. Please enter your address or phone number for instant dispatch.",
      },
      {
        q: "How much to replace a 2,500 sq ft asphalt shingle roof?",
        a: "📐 Based on typical Dallas architectural shingles, 2,500 sq ft ranges from $7,200 to $9,800 including tear-off, underlayment, and 30-year warranty. We can do a free drone roof scan tomorrow to give you an exact price.",
      },
      {
        q: "Do you handle insurance claim paperwork?",
        a: "📋 Yes, 100%! We provide full storm/hail damage photographic inspection reports and work directly with State Farm, Allstate, and all major insurance adjusters so you pay only your deductible.",
      },
    ],
    stats: {
      responseTime: "1.1s",
      leadCapture: "+65%",
      dispatchSpeed: "< 15 mins",
      availability: "24/7/365",
    },
  },
  {
    id: "textile",
    name: "Textile Mill & B2B Exporter Bot",
    niche: "Garments, Fabric Mills & Export",
    icon: Building2,
    color: "from-emerald-500/20 to-teal-500/20",
    badge: "B2B Export & Mills",
    accent: "text-emerald-400",
    border: "border-emerald-500/30",
    botAvatar: "🧵",
    botName: "Silk & Cotton Export Desk AI",
    welcomeMessage:
      "Welcome to Silk & Cotton Mills Export Desk. We export woven cotton, fleece, denim twill, and OEM apparel to Europe, USA, and GCC. How can we assist your sourcing team today?",
    prompts: [
      {
        q: "What is your MOQ for 100% Combed Cotton 240 GSM?",
        a: "🏭 Our export MOQ for 100% Combed Cotton Single Jersey / Twill (240 GSM) is 1,200 kg per colorway. Lab dips are dispatched in 4 business days. All yarns are OEKO-TEX Standard 100 certified.",
      },
      {
        q: "Can I request physical fabric swatches sent to the UK?",
        a: "✈️ Absolutely! We courier physical sample swatch books via DHL Express to the UK/EU within 3 business days. Please share your company name, VAT/EORI number, and courier account if available.",
      },
      {
        q: "Do you have GOTS and BSCI ethical factory audits?",
        a: "📜 Yes. Our manufacturing facilities are fully audited and compliant with GOTS (Global Organic Textile Standard), OEKO-TEX Standard 100, and BSCI social compliance certifications.",
      },
    ],
    stats: {
      responseTime: "1.8s",
      rfqConversion: "+42%",
      intlReach: "28 Countries",
      availability: "24/7/365",
    },
  },
];

// ============================================================================
// 2. SEO & AEO (ANSWER ENGINE) SIMULATOR DATA
// ============================================================================
const AEO_SIMULATOR_SCENARIOS = [
  {
    id: "contractor-aeo",
    industry: "Emergency Roofing & Plumbing",
    query: "Who is the most reliable emergency roofer in Denver with same-day repairs?",
    traditionalGoogle: {
      result: "10 blue links with 4 sponsored ads pushing down organic listings.",
      status: "Competitors pay $45 per click on Google Ads. High cost, declining click-through.",
    },
    aiAnswerEngine: {
      engine: "ChatGPT 4o & Perplexity AI Search",
      citedBrand: "Summit Commercial Roofing (Engineered by Zepra Tech)",
      confidence: "98% Entity Authority",
      citationText:
        "Based on verified licensed contractor data, 24/7 rapid dispatch records, and structured schema reviews, Summit Commercial Roofing is the highest-rated emergency repair service in Denver with guaranteed same-day response.",
      whyItWon:
        "Structured JSON-LD schema, local map pack entity clustering, and sub-0.8s mobile page verification.",
    },
  },
  {
    id: "clinic-aeo",
    industry: "MedSpa & Cosmetic Dental",
    query: "Best clinic for porcelain veneers and laser whitening near me with verified reviews?",
    traditionalGoogle: {
      result: "Directories like Yelp and Zocdoc occupying position 1-3, charging monthly fees.",
      status: "Local clinics buried under national directory aggregator pages.",
    },
    aiAnswerEngine: {
      engine: "Google AI Overview & Gemini Search",
      citedBrand: "Apex Family Dental & Glow Aesthetics",
      confidence: "96% Entity Authority",
      citationText:
        "Apex Dental is prominently cited for cosmetic dentistry in the area, offering verified in-clinic laser whitening and custom veneers with transparent pricing and direct online booking.",
      whyItWon:
        "Direct medical schema integration, published before/after clinical metadata, and high Core Web Vitals.",
    },
  },
  {
    id: "textile-aeo",
    industry: "Textile Mills & B2B Manufacturing",
    query: "Reliable OEM organic cotton fabric manufacturer and exporter in Pakistan",
    traditionalGoogle: {
      result: "Outdated 2012 B2B directory listings (Alibaba/TradeKey) with broken links.",
      status: "Difficult for European buyers to verify genuine factory capacity.",
    },
    aiAnswerEngine: {
      engine: "Perplexity AI & Claude 3.5 Sonnet",
      citedBrand: "Silk & Cotton Mills Portal",
      confidence: "94% Entity Authority",
      citationText:
        "Silk & Cotton Mills is cited as a certified organic textile exporter operating out of Faisalabad, featuring OEKO-TEX Standard 100 compliance, 240 GSM combed cotton production, and direct international RFQ intake.",
      whyItWon:
        "B2B specification schema, ISO certificate knowledge graph entities, and verified export logistics data.",
    },
  },
];

// ============================================================================
// 3. AI AUTOMATION PIPELINE STEPS
// ============================================================================
const PIPELINE_NODES = [
  {
    id: 1,
    title: "1. Multi-Channel Lead Ingest",
    sub: "WhatsApp, Website, TikTok Ads",
    icon: MessageSquare,
    time: "0.2s",
    desc: "Customer submits form or sends WhatsApp message at midnight.",
  },
  {
    id: 2,
    title: "2. AI Intent & Triage Analysis",
    sub: "Filters Spam & Scores High-Ticket",
    icon: Cpu,
    time: "0.8s",
    desc: "AI extracts service type, budget readiness, and urgency level.",
  },
  {
    id: 3,
    title: "3. Automated Booking & CRM Sync",
    sub: "Google Calendar & HubSpot",
    icon: Clock,
    time: "0.4s",
    desc: "Checks real-time calendar availability and reserves consultation slot.",
  },
  {
    id: 4,
    title: "4. Quotation & WhatsApp Confirmation",
    sub: "Instant PDF & Payment Link",
    icon: Send,
    time: "0.6s",
    desc: "Dispatches personalized greeting, PDF quote, and deposit checkout.",
  },
  {
    id: 5,
    title: "5. Real-Time Owner Notification",
    sub: "Instant Telegram / SMS Alert",
    icon: Zap,
    time: "0.1s",
    desc: "Sends full qualified lead dossier directly to business owner's phone.",
  },
];

// ============================================================================
// 4. GROWEX-INSPIRED STICKY STACKED SERVICE CARDS
// ============================================================================
const STICKY_STACKED_CARDS = [
  {
    number: "01",
    tag: "WEB & PERFORMANCE ENGINEERING",
    title: "Sub-Second Next.js 15 Web Platforms",
    subtitle: "Turn Casual Visitors Into Paying Inquiries",
    description:
      "Unlike slow WordPress themes used by legacy agencies, we engineer bespoke Next.js 15 web applications with sub-0.8s edge loading, verified 95+ Core Web Vitals, and conversion architecture tested across 28 live industry demos.",
    deliverables: [
      "Sub-0.8s Global Edge Caching via Vercel",
      "Tap-to-call mobile lead capture engines",
      "100% Source code ownership (Zero hostage fees)",
      "28 Working live demo blueprints to inspect",
    ],
    metricValue: "99+",
    metricLabel: "Google Mobile Score",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/40",
    accent: "text-cyan-400",
    linkText: "Explore 28 Live Demos",
    linkHref: "/portfolio#web-demos",
  },
  {
    number: "02",
    tag: "AUTONOMOUS AI SYSTEMS",
    title: "24/7 AI Agents & WhatsApp Assistants",
    subtitle: "Never Miss Another High-Ticket Customer",
    description:
      "We build custom AI chat and voice agents trained specifically on your business pricing, service catalog, and scheduling. When customers message at 11 PM or during busy service hours, the AI answers in 2 seconds, qualifies the lead, and books the job.",
    deliverables: [
      "Official WhatsApp Cloud API & Meta verified bots",
      "Automated appointment booking & CRM logging",
      "Multi-niche trained (Clinics, Contractors, E-Com, Mills)",
      "Reduces manual phone calls and office workload by 70%",
    ],
    metricValue: "1.2s",
    metricLabel: "Average AI Response",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/40",
    accent: "text-emerald-400",
    linkText: "Test AI Bots Live",
    linkHref: "#ai-bots-lab",
  },
  {
    number: "03",
    tag: "GENERATIVE SEARCH & PAID ADS",
    title: "AEO, GEO & Search Supremacy",
    subtitle: "Rank #1 on Google and Inside ChatGPT Answers",
    description:
      "Traditional SEO is obsolete. We optimize your business for the Search Trifecta: Google traditional SERP, Google AI Overviews, and Answer Engines like ChatGPT and Perplexity, combined with high-ROAS Meta and TikTok paid advertising campaigns.",
    deliverables: [
      "Rich JSON-LD entity schema for AI citations",
      "Local Google Map Pack 3-Pack radius ranking",
      "Meta, TikTok & Google Performance Max ad funnels",
      "Verified ROAS tracking dashboards and lead attribution",
    ],
    metricValue: "4.8x",
    metricLabel: "Average Client ROAS",
    color: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/40",
    accent: "text-purple-400",
    linkText: "View Growth Case Studies",
    linkHref: "/portfolio#growth-creative",
  },
  {
    number: "04",
    tag: "MANAGED CONCIERGE CARE",
    title: "Turnkey Peace of Mind Under Mr. Daud Lashari",
    subtitle: "You Run Your Business — We Handle All Technology",
    description:
      "No technical headaches, no confusing code, no disappearing freelancers. Every deployment is personally reviewed by Founder & CEO Mr. Daud Lashari, with 100% managed hosting, 24/7 uptime monitoring, regular updates, and direct phone & escalation support.",
    deliverables: [
      "Direct phone and executive access to Mr. Daud Lashari & senior leads",
      "100% turnkey copywriting, graphic design & programming",
      "Bank-grade SSL security & automated daily backups",
      "Free updates whenever your business services expand",
    ],
    metricValue: "100%",
    metricLabel: "Code Ownership & SLA",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/40",
    accent: "text-amber-400",
    linkText: "Schedule Call With Mr. Daud Lashari",
    linkHref: "/contact",
  },
];

export function InteractiveServiceDemos() {
  const [activeTab, setActiveTab] = useState("ai-bots"); // 'ai-bots' | 'aeo-search' | 'automation-pipeline' | 'sticky-cards'
  
  // Tab 1 state: AI Bots Lab
  const [selectedBot, setSelectedBot] = useState(NICHE_BOTS[0]);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: NICHE_BOTS[0].welcomeMessage, time: "Just now" },
  ]);
  const [customInput, setCustomInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Tab 2 state: AEO Search Simulator
  const [selectedAeoScenario, setSelectedAeoScenario] = useState(AEO_SIMULATOR_SCENARIOS[0]);

  // Tab 3 state: Automation Pipeline Simulator
  const [simulatingStep, setSimulatingStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  // Update bot messages when changing bot
  useEffect(() => {
    setChatMessages([
      { sender: "bot", text: selectedBot.welcomeMessage, time: "Just now" },
    ]);
  }, [selectedBot]);

  const handleSendPrompt = (promptText, answerText) => {
    const userMsg = { sender: "user", text: promptText, time: "Just now" };
    setChatMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            answerText ||
            `Thank you for asking! Under ${selectedBot.botName}, our AI agent resolves this query in real-time, logs the inquiry to your CRM, and alerts Mr. Daud Lashari's team if a callback is required.`,
          time: "Just now",
        },
      ]);
    }, 900);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const input = customInput;
    setCustomInput("");
    handleSendPrompt(input);
  };

  const triggerPipelineSimulation = () => {
    setIsSimulating(true);
    setSimulatingStep(1);

    const stepInterval = setInterval(() => {
      setSimulatingStep((prev) => {
        if (prev >= 5) {
          clearInterval(stepInterval);
          setIsSimulating(false);
          return 5;
        }
        return prev + 1;
      });
    }, 1100);
  };

  return (
    <section id="interactive-service-demos" className="relative overflow-hidden bg-[#020617] py-20 text-white sm:py-28">
      {/* Background glow effects */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-10 h-[500px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-10 bottom-10 h-[450px] w-[550px] rounded-full bg-purple-500/10 blur-[130px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Title */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            Interactive Technology Labs
          </div>

          <h2 className="mt-5 font-display text-3xl font-black tracking-tight text-white sm:text-5xl sm:leading-tight">
            Don&apos;t Just Read About AI &amp; SEO.{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Test Our Live Demos In Real-Time.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-lg">
            Legacy 9-year agencies only show you slides and static text. At Zepra Tech, we let you test our actual live AI bots, examine generative search answer simulations, and run automated CRM pipelines before signing a contract.
          </p>

          {/* Growex-Inspired Interactive Tab Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/15 bg-slate-900/90 p-2 shadow-2xl backdrop-blur-xl sm:gap-3 sm:rounded-full sm:p-2.5">
            <button
              onClick={() => setActiveTab("ai-bots")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:rounded-full sm:px-5 sm:text-sm ${
                activeTab === "ai-bots"
                  ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-lg"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Bot className="h-4 w-4" />
              <span>1. AI Agents &amp; Bots Lab</span>
            </button>

            <button
              onClick={() => setActiveTab("aeo-search")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:rounded-full sm:px-5 sm:text-sm ${
                activeTab === "aeo-search"
                  ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-lg"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Search className="h-4 w-4" />
              <span>2. SEO &amp; AI Search Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab("automation-pipeline")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:rounded-full sm:px-5 sm:text-sm ${
                activeTab === "automation-pipeline"
                  ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-lg"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Zap className="h-4 w-4" />
              <span>3. Autonomous CRM Pipeline</span>
            </button>

            <button
              onClick={() => setActiveTab("sticky-cards")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:rounded-full sm:px-5 sm:text-sm ${
                activeTab === "sticky-cards"
                  ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-lg"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>4. Stacked Architecture Deck</span>
            </button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* LAB 1: INTERACTIVE NICHE AI BOTS SIMULATOR */}
        {/* ==================================================================== */}
        {activeTab === "ai-bots" && (
          <div id="ai-bots-lab" className="mt-12 rounded-3xl border border-white/12 bg-gradient-to-b from-[#060c1d] to-[#030611] p-6 shadow-2xl backdrop-blur-xl sm:p-10">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Live AI Bot Sandbox
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                  Select a Business Niche &amp; Chat Live With The Bot
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-bold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Bot Server Online
              </span>
            </div>

            {/* Niche Selector Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {NICHE_BOTS.map((bot) => {
                const Icon = bot.icon;
                const isSelected = selectedBot.id === bot.id;
                return (
                  <button
                    key={bot.id}
                    onClick={() => setSelectedBot(bot)}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all ${
                      isSelected
                        ? "border-cyan-400 bg-cyan-400/15 shadow-[0_0_20px_rgba(56,198,255,0.25)] ring-1 ring-cyan-400/40"
                        : "border-white/10 bg-slate-950/70 hover:border-white/25 hover:bg-white/5"
                    }`}
                  >
                    <span className="text-2xl">{bot.botAvatar}</span>
                    <span className="mt-2 text-xs font-bold text-white sm:text-sm">
                      {bot.name}
                    </span>
                    <span className="mt-1 text-[11px] text-slate-400">
                      {bot.niche}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bot Interactive Chat Window & Live Performance Stats */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Chat Interface Column */}
              <div className="lg:col-span-8">
                <div className="flex h-[520px] flex-col rounded-2xl border border-white/15 bg-slate-950/90 shadow-2xl">
                  {/* Chat Header */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl border border-cyan-400/30">
                        {selectedBot.botAvatar}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">
                            {selectedBot.botName}
                          </h4>
                          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                            ONLINE 24/7
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">
                          Engineered by Zepra Tech for {selectedBot.niche}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setChatMessages([
                          { sender: "bot", text: selectedBot.welcomeMessage, time: "Just now" },
                        ])
                      }
                      title="Reset Conversation"
                      className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Chat Messages Stream */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                    {chatMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${
                          msg.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                            msg.sender === "user"
                              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium"
                              : "border border-white/10 bg-slate-900 text-slate-200"
                          }`}
                        >
                          <p>{msg.text}</p>
                          <span className="mt-1 block text-right text-[10px] text-slate-400">
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-2.5 text-xs text-cyan-300 animate-pulse">
                          <span>Bot is typing live response...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Suggested Quick Prompts */}
                  <div className="border-t border-white/10 bg-white/[0.02] p-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      💡 Tap a real customer question to test instant reply:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedBot.prompts.map((p, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendPrompt(p.q, p.a)}
                          className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition-all hover:bg-cyan-400 hover:text-slate-950 text-left"
                        >
                          {p.q}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Input Bar */}
                  <form
                    onSubmit={handleCustomSubmit}
                    className="flex items-center gap-2 border-t border-white/10 p-3"
                  >
                    <input
                      type="text"
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="Type your custom customer question..."
                      className="flex-1 rounded-xl border border-white/15 bg-slate-900 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-cyan-400 px-4 py-2.5 text-slate-950 transition-all hover:bg-cyan-300"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Bot Business Metrics & Capabilities Column */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur-md">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                    Verified Bot Performance
                  </h4>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/8 bg-slate-950/60 p-3 text-center">
                      <p className="font-mono text-xl font-black text-cyan-400">
                        {selectedBot.stats.responseTime}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">Response Speed</p>
                    </div>
                    <div className="rounded-xl border border-white/8 bg-slate-950/60 p-3 text-center">
                      <p className="font-mono text-xl font-black text-emerald-400">
                        {selectedBot.stats.orderLift || selectedBot.stats.bookingRate || selectedBot.stats.leadCapture || selectedBot.stats.rfqConversion}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">Conversion Lift</p>
                    </div>
                    <div className="rounded-xl border border-white/8 bg-slate-950/60 p-3 text-center">
                      <p className="font-mono text-xl font-black text-purple-400">
                        {selectedBot.stats.ticketDeflection || selectedBot.stats.noShowReduction || selectedBot.stats.dispatchSpeed || selectedBot.stats.intlReach}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">Workload Saved</p>
                    </div>
                    <div className="rounded-xl border border-white/8 bg-slate-950/60 p-3 text-center">
                      <p className="font-mono text-xl font-black text-amber-400">
                        {selectedBot.stats.availability}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">Uptime Reliability</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur-md">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    Deployment Channels Included:
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Official WhatsApp Business Cloud API</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Website Live Chat Widget (Sub-second loading)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Instagram Direct &amp; Facebook Messenger Sync</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Trained on your private documents &amp; catalog</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg hover:scale-[1.02] transition-all"
                >
                  <span>Build This AI Bot For My Business</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* LAB 2: LIVE SEO & AEO (ANSWER ENGINE) SIMULATOR */}
        {/* ==================================================================== */}
        {activeTab === "aeo-search" && (
          <div className="mt-12 rounded-3xl border border-white/12 bg-gradient-to-b from-[#060c1d] to-[#030611] p-6 shadow-2xl backdrop-blur-xl sm:p-10">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Search Engine Generative Simulator
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                  Traditional Google 2018 vs. Modern AI Search 2026
                </h3>
              </div>
              <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3.5 py-1 text-xs font-bold text-purple-300">
                AEO &amp; GEO Engine Active
              </span>
            </div>

            {/* Scenario Buttons */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {AEO_SIMULATOR_SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedAeoScenario(sc)}
                  className={`rounded-xl border px-4 py-2 text-xs font-bold transition-all ${
                    selectedAeoScenario.id === sc.id
                      ? "border-cyan-400 bg-cyan-400/15 text-white"
                      : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {sc.industry}
                </button>
              ))}
            </div>

            {/* Comparison Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Old Google SERP Box */}
              <div className="rounded-2xl border border-rose-500/30 bg-slate-950/80 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    ❌ Old 9-Year Agency Approach (Declining)
                  </span>
                  <span className="text-xs text-slate-400">Traditional SERP</span>
                </div>
                <h4 className="mt-3 font-display text-lg font-bold text-white">
                  Query: &ldquo;{selectedAeoScenario.query}&rdquo;
                </h4>

                <div className="mt-4 rounded-xl border border-white/8 bg-white/[0.02] p-4 text-xs text-slate-300 space-y-2">
                  <p className="font-semibold text-rose-300">
                    {selectedAeoScenario.traditionalGoogle.result}
                  </p>
                  <p className="text-slate-400">
                    {selectedAeoScenario.traditionalGoogle.status}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4 text-xs text-slate-400">
                  <p>⚠️ Flaw: Over 62% of Google searches now end in &ldquo;Zero-Clicks&rdquo; or AI summaries. Traditional keyword agencies lose clients because their websites never get cited in ChatGPT or Google AI Overviews.</p>
                </div>
              </div>

              {/* Modern Zepra Tech AEO Box */}
              <div className="rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-[#0c1a36] to-slate-950 p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    ✅ Zepra Tech AEO/GEO Architecture (Winning)
                  </span>
                  <span className="rounded-full bg-cyan-400/20 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">
                    {selectedAeoScenario.aiAnswerEngine.engine}
                  </span>
                </div>

                <h4 className="mt-3 font-display text-lg font-bold text-white">
                  Direct AI Citation: {selectedAeoScenario.aiAnswerEngine.citedBrand}
                </h4>

                <div className="mt-4 rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-4 text-xs sm:text-sm text-slate-100 leading-relaxed font-sans border-l-4 border-l-cyan-400">
                  <p>&ldquo;{selectedAeoScenario.aiAnswerEngine.citationText}&rdquo;</p>
                </div>

                <div className="mt-4 rounded-xl border border-white/8 bg-white/[0.03] p-3 text-xs text-emerald-300">
                  <p className="font-bold">Why the AI picks Zepra Tech builds:</p>
                  <p className="mt-0.5 text-slate-300">{selectedAeoScenario.aiAnswerEngine.whyItWon}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* LAB 3: AUTONOMOUS CRM PIPELINE SIMULATOR */}
        {/* ==================================================================== */}
        {activeTab === "automation-pipeline" && (
          <div className="mt-12 rounded-3xl border border-white/12 bg-gradient-to-b from-[#060c1d] to-[#030611] p-6 shadow-2xl backdrop-blur-xl sm:p-10">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Autonomous Execution Flow
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                  Simulate How Our AI Pipeline Replaces 18 Hours of Weekly Desk Work
                </h3>
              </div>

              <button
                onClick={triggerPipelineSimulation}
                disabled={isSimulating}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg hover:scale-105 transition-all disabled:opacity-50"
              >
                <Play className="h-4 w-4" />
                <span>{isSimulating ? "Simulating Pipeline..." : "▶ Run Live Pipeline Simulation"}</span>
              </button>
            </div>

            {/* 5-Step Pipeline Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {PIPELINE_NODES.map((node) => {
                const Icon = node.icon;
                const isActivated = simulatingStep >= node.id;
                const isCurrentlyActive = simulatingStep === node.id;

                return (
                  <div
                    key={node.id}
                    className={`relative rounded-2xl border p-5 transition-all duration-500 ${
                      isCurrentlyActive
                        ? "border-cyan-400 bg-cyan-400/20 shadow-[0_0_30px_rgba(56,198,255,0.4)] scale-105"
                        : isActivated
                        ? "border-emerald-400/50 bg-emerald-950/20"
                        : "border-white/10 bg-slate-950/60 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isActivated ? "bg-emerald-400 text-slate-950" : "bg-white/5 text-slate-400"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs font-bold text-cyan-400">
                        {node.time}
                      </span>
                    </div>

                    <h4 className="mt-4 font-display text-sm font-bold text-white">
                      {node.title}
                    </h4>
                    <p className="mt-1 text-[11px] font-semibold text-cyan-300">
                      {node.sub}
                    </p>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <p className="text-xs text-slate-300 sm:text-sm">
                Total Execution Time: <strong className="text-cyan-300">2.1 Seconds</strong> • Human Effort Required: <strong className="text-emerald-300">Zero</strong> • Output: 100% Qualified, Scheduled &amp; Alerted Lead.
              </p>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* LAB 4: GROWEX-INSPIRED STICKY STACKED SERVICE ARCHITECTURE */}
        {/* ==================================================================== */}
        {activeTab === "sticky-cards" && (
          <div className="mt-12 space-y-6">
            <div className="mx-auto max-w-3xl text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Commercial Architecture Deck
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                4 Core Engineering Pillars Built for Business Scale
              </h3>
            </div>

            {/* Stacked Cards */}
            <div className="space-y-6">
              {STICKY_STACKED_CARDS.map((card, idx) => (
                <div
                  key={card.number}
                  className="sticky top-28 rounded-3xl border border-white/15 bg-gradient-to-br from-[#070e22] via-[#050a18] to-slate-950 p-7 sm:p-10 shadow-2xl backdrop-blur-2xl transition-all"
                  style={{ top: `${110 + idx * 20}px` }}
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-black uppercase tracking-widest text-cyan-400">
                          {card.number} // {card.tag}
                        </span>
                      </div>

                      <h4 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                        {card.title}
                      </h4>
                      <p className="text-sm font-semibold text-cyan-300 mt-1">
                        {card.subtitle}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-slate-300">
                        {card.description}
                      </p>

                      <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {card.deliverables.map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs font-medium text-slate-200"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
                      <p className="font-mono text-5xl font-black text-transparent bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text">
                        {card.metricValue}
                      </p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        {card.metricLabel}
                      </p>
                      <Link
                        href={card.linkHref}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-cyan-400 hover:text-slate-950"
                      >
                        <span>{card.linkText}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
