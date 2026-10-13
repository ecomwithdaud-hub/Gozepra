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
    <section id="interactive-service-demos" className="relative overflow-hidden bg-white py-12 text-slate-900 border-t border-slate-200 sm:py-20 lg:py-28">
      {/* Background glow effects */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-10 h-[500px] w-[600px] rounded-full bg-blue-500/5 blur-[140px]" />
        <div className="absolute right-10 bottom-10 h-[450px] w-[550px] rounded-full bg-indigo-500/5 blur-[130px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Title */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.25em]">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Interactive Technology Labs
          </div>

          <h2 className="mt-4 font-display text-2xl font-black tracking-tight text-slate-900 sm:mt-5 sm:text-5xl sm:leading-tight">
            Don&apos;t Just Read About AI &amp; SEO.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Test Our Live Demos In Real-Time.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-slate-600 line-clamp-3 sm:mt-4 sm:text-lg sm:line-clamp-none">
            Legacy 9-year agencies only show you slides and static text. At Zepra Tech, we let you test our actual live AI bots, examine generative search answer simulations, and run automated CRM pipelines before signing a contract.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-slate-100 p-2 shadow-sm backdrop-blur-xl sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 sm:rounded-full sm:p-2.5">
            <button
              onClick={() => setActiveTab("ai-bots")}
              className={`flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-center text-[11px] font-bold transition-all sm:gap-2 sm:rounded-full sm:px-5 sm:text-sm ${
                activeTab === "ai-bots"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Bot className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span>1. AI Agents Lab</span>
            </button>

            <button
              onClick={() => setActiveTab("aeo-search")}
              className={`flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-center text-[11px] font-bold transition-all sm:gap-2 sm:rounded-full sm:px-5 sm:text-sm ${
                activeTab === "aeo-search"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Search className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span>2. AI Search Sim</span>
            </button>

            <button
              onClick={() => setActiveTab("automation-pipeline")}
              className={`flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-center text-[11px] font-bold transition-all sm:gap-2 sm:rounded-full sm:px-5 sm:text-sm ${
                activeTab === "automation-pipeline"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Zap className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span>3. CRM Pipeline</span>
            </button>

            <button
              onClick={() => setActiveTab("sticky-cards")}
              className={`flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-center text-[11px] font-bold transition-all sm:gap-2 sm:rounded-full sm:px-5 sm:text-sm ${
                activeTab === "sticky-cards"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span>4. Architecture</span>
            </button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* LAB 1: INTERACTIVE NICHE AI BOTS SIMULATOR */}
        {/* ==================================================================== */}
        {activeTab === "ai-bots" && (
          <div id="ai-bots-lab" className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm backdrop-blur-xl sm:mt-12 sm:rounded-3xl sm:p-10">
            <div className="flex flex-col items-start justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:gap-4 sm:pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                  Live AI Bot Sandbox
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-slate-900 sm:text-3xl">
                  Select a Business Niche &amp; Chat Live With The Bot
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700 sm:px-3.5 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Bot Server Online
              </span>
            </div>

            {/* Niche Selector Buttons */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:grid-cols-4 sm:gap-3">
              {NICHE_BOTS.map((bot) => {
                const Icon = bot.icon;
                const isSelected = selectedBot.id === bot.id;
                return (
                  <button
                    key={bot.id}
                    onClick={() => setSelectedBot(bot)}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all sm:p-4 ${
                      isSelected
                        ? "border-blue-600 bg-blue-50/90 shadow-sm ring-1 ring-blue-500/30"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-xl sm:text-2xl">{bot.botAvatar}</span>
                    <span className="mt-1.5 text-xs font-bold leading-snug text-slate-900 sm:mt-2 sm:text-sm">
                      {bot.name}
                    </span>
                    <span className="mt-1 hidden text-[11px] text-slate-500 sm:block">
                      {bot.niche}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bot Interactive Chat Window & Live Performance Stats */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-12">
              {/* Chat Interface Column */}
              <div className="lg:col-span-8">
                <div className="flex h-[460px] flex-col rounded-2xl border border-slate-800 bg-[#070f24] shadow-2xl sm:h-[520px] text-white">
                  {/* Chat Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 bg-[#050b1d] p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-950/60 text-xl border border-cyan-500/30">
                        {selectedBot.botAvatar}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">
                            {selectedBot.botName}
                          </h4>
                          <span className="rounded-full bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
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
                      className="rounded-lg border border-slate-700 p-2 text-slate-400 hover:text-white hover:bg-slate-800"
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
                              ? "bg-blue-600 text-white font-medium"
                              : "border border-slate-800 bg-[#0a1638] text-slate-100"
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
                        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/60 px-4 py-2.5 text-xs text-cyan-300 animate-pulse">
                          <span>Bot is typing live response...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Suggested Quick Prompts */}
                  <div className="border-t border-slate-800 bg-[#050b1d] p-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      💡 Tap a real customer question to test instant reply:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedBot.prompts.map((p, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendPrompt(p.q, p.a)}
                          className="rounded-lg border border-slate-700 bg-[#0a1638] px-3 py-1.5 text-xs font-semibold text-slate-200 transition-all hover:border-cyan-400 hover:text-white text-left"
                        >
                          {p.q}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Input Bar */}
                  <form
                    onSubmit={handleCustomSubmit}
                    className="flex items-center gap-2 border-t border-slate-800 bg-[#050b1d] p-3"
                  >
                    <input
                      type="text"
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="Type your custom customer question..."
                      className="flex-1 rounded-xl border border-slate-700 bg-[#0a1638] px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-blue-600 px-4 py-2.5 text-white transition-all hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Bot Business Metrics & Capabilities Column */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-[#070f24] p-6 shadow-xl text-white">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                    Verified Bot Performance
                  </h4>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-800 bg-[#050b1d] p-3 text-center">
                      <p className="font-mono text-xl font-black text-cyan-400">
                        {selectedBot.stats.responseTime}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">Response Speed</p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-[#050b1d] p-3 text-center">
                      <p className="font-mono text-xl font-black text-emerald-400">
                        {selectedBot.stats.orderLift || selectedBot.stats.bookingRate || selectedBot.stats.leadCapture || selectedBot.stats.rfqConversion}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">Conversion Lift</p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-[#050b1d] p-3 text-center">
                      <p className="font-mono text-xl font-black text-indigo-300">
                        {selectedBot.stats.ticketDeflection || selectedBot.stats.noShowReduction || selectedBot.stats.dispatchSpeed || selectedBot.stats.intlReach}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">Workload Saved</p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-[#050b1d] p-3 text-center">
                      <p className="font-mono text-xl font-black text-amber-400">
                        {selectedBot.stats.availability}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">Uptime Reliability</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#070f24] p-6 shadow-xl text-white">
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
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-soft hover:bg-blue-700 transition-all"
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
          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm sm:p-10">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                  Search Engine Generative Simulator
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                  Traditional Google 2018 vs. Modern AI Search 2026
                </h3>
              </div>
              <span className="rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-bold text-purple-700">
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
                      ? "border-blue-600 bg-blue-50 text-blue-900 shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {sc.industry}
                </button>
              ))}
            </div>

            {/* Comparison Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Old Google SERP Box */}
              <div className="rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                    ❌ Old 9-Year Agency Approach (Declining)
                  </span>
                  <span className="text-xs text-slate-500">Traditional SERP</span>
                </div>
                <h4 className="mt-3 font-display text-lg font-bold text-slate-900">
                  Query: &ldquo;{selectedAeoScenario.query}&rdquo;
                </h4>

                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700 space-y-2">
                  <p className="font-semibold text-rose-700">
                    {selectedAeoScenario.traditionalGoogle.result}
                  </p>
                  <p className="text-slate-500">
                    {selectedAeoScenario.traditionalGoogle.status}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
                  <p>⚠️ Flaw: Over 62% of Google searches now end in &ldquo;Zero-Clicks&rdquo; or AI summaries. Traditional keyword agencies lose clients because their websites never get cited in ChatGPT or Google AI Overviews.</p>
                </div>
              </div>

              {/* Modern Zepra Tech AEO Box */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    ✅ Zepra Tech AEO/GEO Architecture (Winning)
                  </span>
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-800">
                    {selectedAeoScenario.aiAnswerEngine.engine}
                  </span>
                </div>

                <h4 className="mt-3 font-display text-lg font-bold text-slate-900">
                  Direct AI Citation: {selectedAeoScenario.aiAnswerEngine.citedBrand}
                </h4>

                <div className="mt-4 rounded-xl border border-blue-200 bg-white p-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans border-l-4 border-l-blue-600 shadow-sm">
                  <p>&ldquo;{selectedAeoScenario.aiAnswerEngine.citationText}&rdquo;</p>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3 text-xs text-emerald-700">
                  <p className="font-bold">Why the AI picks Zepra Tech builds:</p>
                  <p className="mt-0.5 text-slate-600">{selectedAeoScenario.aiAnswerEngine.whyItWon}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* LAB 3: AUTONOMOUS CRM PIPELINE SIMULATOR */}
        {/* ==================================================================== */}
        {activeTab === "automation-pipeline" && (
          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm sm:p-10">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                  Autonomous Execution Flow
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                  Simulate How Our AI Pipeline Replaces 18 Hours of Weekly Desk Work
                </h3>
              </div>

              <button
                onClick={triggerPipelineSimulation}
                disabled={isSimulating}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-soft hover:bg-blue-700 transition-all disabled:opacity-50"
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
                        ? "border-blue-600 bg-blue-50/90 shadow-md scale-105"
                        : isActivated
                        ? "border-emerald-300 bg-emerald-50/70"
                        : "border-slate-200 bg-white opacity-80"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isActivated ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs font-bold text-blue-600">
                        {node.time}
                      </span>
                    </div>

                    <h4 className="mt-4 font-display text-sm font-bold text-slate-900">
                      {node.title}
                    </h4>
                    <p className="mt-1 text-[11px] font-semibold text-blue-700">
                      {node.sub}
                    </p>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <p className="text-xs text-slate-600 sm:text-sm">
                Total Execution Time: <strong className="text-blue-700">2.1 Seconds</strong> • Human Effort Required: <strong className="text-emerald-700">Zero</strong> • Output: 100% Qualified, Scheduled &amp; Alerted Lead.
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
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Commercial Architecture Deck
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                4 Core Engineering Pillars Built for Business Scale
              </h3>
            </div>

            {/* Stacked Cards */}
            <div className="space-y-5 sm:space-y-6">
              {STICKY_STACKED_CARDS.map((card, idx) => (
                <div
                  key={card.number}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition-all sm:p-10 lg:sticky lg:top-28"
                >
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-black uppercase tracking-widest text-blue-600">
                          {card.number} // {card.tag}
                        </span>
                      </div>

                      <h4 className="mt-2.5 font-display text-xl font-bold text-slate-900 sm:mt-3 sm:text-3xl">
                        {card.title}
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-blue-700 sm:text-sm">
                        {card.subtitle}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:mt-4 sm:text-sm">
                        {card.description}
                      </p>

                      <div className="mt-5 grid grid-cols-1 gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-2.5">
                        {card.deliverables.map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs font-medium text-slate-700"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8 lg:col-span-4">
                      <p className="font-mono text-4xl font-black text-blue-600 sm:text-5xl">
                        {card.metricValue}
                      </p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                        {card.metricLabel}
                      </p>
                      <Link
                        href={card.linkHref}
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all hover:bg-blue-700 sm:mt-6"
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
