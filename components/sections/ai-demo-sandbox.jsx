"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  CheckCircle2,
  Code2,
  Copy,
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
  Send,
  ShieldCheck,
  Sparkles,
  User,
  Wand2,
  Zap,
} from "lucide-react";

import { TiltCard } from "@/components/ui/TiltCard";
import { INDUSTRY_PERSONAS, CUSTOM_PERSONA_TEMPLATE } from "@/lib/demoPersonas";

export function AIDemoSandbox() {
  const [selectedPersonaId, setSelectedPersonaId] = useState("manufacturing");
  const [customData, setCustomData] = useState({
    businessName: "",
    industry: "",
    keyServices: "",
  });
  const [customActivePersona, setCustomActivePersona] = useState(null);
  const [isCustomEditing, setIsCustomEditing] = useState(false);

  // Active persona resolution
  const activePersona =
    selectedPersonaId === "custom" && customActivePersona
      ? customActivePersona
      : INDUSTRY_PERSONAS.find((p) => p.id === selectedPersonaId) ||
        INDUSTRY_PERSONAS[0];

  // Chat conversation state
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content: activePersona.welcomeMessage,
      timestamp: "Just now",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Live extracted lead state for the side visualizer
  const [leadData, setLeadData] = useState({
    name: "",
    contact: "",
    intent: "Awaiting inquiry...",
    requirements: "Browsing catalog & services",
    captured: false,
    lastUpdated: null,
  });

  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [flashField, setFlashField] = useState(null);
  const chatBottomRef = useRef(null);

  // When switching personas, reset the chat and lead capture with the new persona
  const handleSelectPersona = (personaId) => {
    setSelectedPersonaId(personaId);
    if (personaId === "custom") {
      setIsCustomEditing(true);
    } else {
      setIsCustomEditing(false);
      const target = INDUSTRY_PERSONAS.find((p) => p.id === personaId) || INDUSTRY_PERSONAS[0];
      setMessages([
        {
          id: `welcome-${personaId}`,
          role: "assistant",
          content: target.welcomeMessage,
          timestamp: "Just now",
        },
      ]);
      setLeadData({
        name: "",
        contact: "",
        intent: "Awaiting inquiry...",
        requirements: `Testing ${target.companyName} sandbox`,
        captured: false,
        lastUpdated: null,
      });
    }
  };

  // Launch custom business preview
  const handleLaunchCustomPreview = (e) => {
    e.preventDefault();
    if (!customData.businessName.trim()) return;

    const bName = customData.businessName.trim();
    const ind = customData.industry.trim() || "Commercial Services";
    const srv = customData.keyServices.trim() || "Consultations, pricing and fast quotes";

    const newCustomPersona = {
      ...CUSTOM_PERSONA_TEMPLATE,
      botName: `${bName} AI Concierge`,
      companyName: bName,
      role: `${ind} Specialist`,
      welcomeMessage: `Hello! Welcome to ${bName}. I'm your automated assistant specializing in ${ind}. I can answer questions about ${srv}, provide estimates, or schedule an appointment. What can I do for you today?`,
      suggestedQuestions: [
        `What services does ${bName} offer and what are typical rates?`,
        `Can you schedule a consultation or quote appointment?`,
        `How does your team handle customer onboarding?`,
      ],
      systemPrompt: `You are the official AI representative for ${bName}, a premier business in ${ind}. Key services and focus areas: ${srv}. Be professional, helpful, and gather the prospect's Name and Phone/Email to book a consultation.`,
    };

    setCustomActivePersona(newCustomPersona);
    setIsCustomEditing(false);
    setMessages([
      {
        id: `custom-welcome-${Date.now()}`,
        role: "assistant",
        content: newCustomPersona.welcomeMessage,
        timestamp: "Just now",
      },
    ]);
    setLeadData({
      name: "",
      contact: "",
      intent: "Custom Business Preview Launched",
      requirements: `Inquiring about ${bName} (${ind})`,
      captured: false,
      lastUpdated: new Date().toLocaleTimeString(),
    });
  };

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Send message to the live AI sandbox
  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    setInputMessage("");
    const userMessageId = `user-${Date.now()}`;
    const newMessages = [
      ...messages,
      {
        id: userMessageId,
        role: "user",
        content: text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/demo-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          persona: activePersona,
          history: newMessages.slice(-6),
          leadData: leadData,
        }),
      });

      const data = await response.json();
      if (data?.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: data.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      }

      if (data?.leadData) {
        // Trigger subtle visual pulse on updated fields
        if (data.leadData.name && !leadData.name) setFlashField("name");
        else if (data.leadData.contact && !leadData.contact) setFlashField("contact");
        else if (data.leadData.intent !== leadData.intent) setFlashField("intent");

        setTimeout(() => setFlashField(null), 1200);

        setLeadData((prev) => ({
          ...prev,
          ...data.leadData,
          lastUpdated: new Date().toLocaleTimeString(),
        }));
      }
    } catch (err) {
      console.error("Demo chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-err-${Date.now()}`,
          role: "assistant",
          content: `Thank you for asking! At ${activePersona.companyName}, we can configure this exact response flow for your business. Share your Name and Email or Phone to receive a custom demo quote!`,
          timestamp: "Just now",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-reset-${Date.now()}`,
        role: "assistant",
        content: activePersona.welcomeMessage,
        timestamp: "Just now",
      },
    ]);
    setLeadData({
      name: "",
      contact: "",
      intent: "Reset - Awaiting inquiry",
      requirements: "Testing sandbox",
      captured: false,
      lastUpdated: null,
    });
  };

  const copyEmbedCode = () => {
    const code = `<!-- Zepra Tech Autonomous AI Agent Embed -->\n<script src="https://cdn.gozepra.tech/agent.js" async></script>\n<div id="zepra-ai-agent" data-agent-id="agt_demo_live" data-theme="dark"></div>`;
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 text-slate-900 sm:py-24">
      {/* Ambient Radial Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[130px]"
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 shadow-sm">
            <Bot className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
            <span>Interactive Live AI Sandbox</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl">
            Test Drive Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Autonomous AI Agents
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Switch between real business industries below or test with your own company. Experience how our AI answers complex questions, handles objections, and captures high-intent client leads in real time.
          </p>
        </div>

        {/* 1. Industry Switcher Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {INDUSTRY_PERSONAS.map((persona) => {
            const isSelected = selectedPersonaId === persona.id;
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => handleSelectPersona(persona.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-200 sm:text-sm ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50/50"
                }`}
              >
                <span>{persona.avatar}</span>
                <span>{persona.name}</span>
              </button>
            );
          })}

          {/* Custom Business Mode Button */}
          <button
            type="button"
            onClick={() => handleSelectPersona("custom")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-200 sm:text-sm ${
              selectedPersonaId === "custom"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25 scale-105"
                : "border border-purple-200 bg-purple-50 text-purple-700 hover:border-purple-400 hover:bg-purple-100/60"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>✨ Try Your Business</span>
          </button>
        </div>

        {/* Custom Business Config Bar (Expandable) */}
        {isCustomEditing && (
          <form
            onSubmit={handleLaunchCustomPreview}
            className="mx-auto mt-5 max-w-3xl rounded-3xl border border-purple-200 bg-purple-50/80 p-5 shadow-sm transition-all sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700">
                <Wand2 className="h-4 w-4" />
                <span>Configure Your Business Preview</span>
              </div>
              <span className="text-[11px] text-slate-500">Instant in-browser preview</span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Business Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Law Firm"
                  value={customData.businessName}
                  onChange={(e) =>
                    setCustomData((prev) => ({ ...prev, businessName: e.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Industry / Niche
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Corporate Law"
                  value={customData.industry}
                  onChange={(e) =>
                    setCustomData((prev) => ({ ...prev, industry: e.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Key Services / FAQs
                </label>
                <input
                  type="text"
                  placeholder="e.g. Contracts, IP filing, retainers"
                  value={customData.keyServices}
                  onChange={(e) =>
                    setCustomData((prev) => ({ ...prev, keyServices: e.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-purple-700"
              >
                <span>Launch My Preview</span>
                <Play className="h-3 w-3 fill-current" />
              </button>
            </div>
          </form>
        )}

        {/* 2. Interactive Sandbox Stage: Left Chat Widget + Right Live CRM Visualizer */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* LEFT / MAIN PANEL: Live Chat Widget */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden">
            {/* Widget Top Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-900 via-[#0a1638] to-slate-900 px-5 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg shadow-inner">
                  {activePersona.avatar}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-sm font-bold text-white">
                      {activePersona.botName}
                    </h3>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300 ring-1 ring-emerald-500/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online 24/7
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">{activePersona.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300 transition hover:bg-slate-700 hover:text-white"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>
            </div>

            {/* Suggested Customer Questions Chips */}
            <div className="border-b border-slate-100 bg-slate-50/70 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                ⚡ Click to ask this agent:
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {activePersona.suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-left text-xs text-slate-700 shadow-2xs transition-all hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-700"
                  >
                    &ldquo;{q}&rdquo;
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages Feed */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-5 max-h-[380px] min-h-[320px] bg-slate-50/30">
              {messages.map((msg) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {!isUser && (
                      <span className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-xl bg-blue-100 text-sm shadow-xs">
                        {activePersona.avatar}
                      </span>
                    )}
                    {isUser && (
                      <span className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-xl bg-slate-800 text-white shadow-xs">
                        <User className="h-4 w-4" />
                      </span>
                    )}

                    <div
                      className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                        isUser
                          ? "bg-blue-600 text-white rounded-tr-xs"
                          : "border border-slate-200 bg-white text-slate-800 rounded-tl-xs"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                      <span
                        className={`mt-1.5 block text-[9px] ${
                          isUser ? "text-blue-200 text-right" : "text-slate-400"
                        }`}
                      >
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-50 text-xs">
                    {activePersona.avatar}
                  </span>
                  <div className="flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-xs">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600 [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600 [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 border-t border-slate-200 bg-white p-3 sm:p-4"
            >
              <input
                type="text"
                placeholder={`Ask ${activePersona.botName} or try: "My name is David, email is david@example.com"...`}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isLoading}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600 sm:text-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* RIGHT / SIDE PANEL: Live Behind-the-Scenes CRM & Lead Capture */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#070f24] p-5 text-white shadow-xl sm:p-7">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/30 text-cyan-400">
                    <Database className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                      Behind The Scenes
                    </h4>
                    <p className="text-[10px] text-cyan-400">Live CRM &amp; Lead Ingestion</p>
                  </div>
                </div>

                <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-2.5 py-0.5 text-[9px] font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Webhook Active
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                As prospective clients chat with your AI agent, key qualification data is parsed and structured automatically before being dispatched to your team.
              </p>

              {/* Real-Time Live Lead Record Card */}
              <div className="mt-5 space-y-3 rounded-2xl border border-slate-800 bg-[#0a1638] p-4 text-xs">
                {/* 1. Lead Name */}
                <div
                  className={`flex items-center justify-between rounded-xl p-2 transition-all ${
                    flashField === "name" ? "bg-blue-600/30 ring-1 ring-blue-400" : "bg-slate-900/60"
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Contact Name:
                  </span>
                  <span className="font-semibold text-white">
                    {leadData.name ? (
                      <span className="text-cyan-300 font-bold">{leadData.name}</span>
                    ) : (
                      <span className="italic text-slate-500">Awaiting user input...</span>
                    )}
                  </span>
                </div>

                {/* 2. Contact Phone / Email */}
                <div
                  className={`flex items-center justify-between rounded-xl p-2 transition-all ${
                    flashField === "contact" ? "bg-emerald-600/30 ring-1 ring-emerald-400" : "bg-slate-900/60"
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Email / Phone:
                  </span>
                  <span className="font-semibold text-white truncate max-w-[180px]">
                    {leadData.contact ? (
                      <span className="text-emerald-300 font-bold">{leadData.contact}</span>
                    ) : (
                      <span className="italic text-slate-500">Awaiting contact info...</span>
                    )}
                  </span>
                </div>

                {/* 3. Industry / Business Target */}
                <div className="flex items-center justify-between rounded-xl bg-slate-900/60 p-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Business Context:
                  </span>
                  <span className="font-semibold text-slate-200">{activePersona.companyName}</span>
                </div>

                {/* 4. Detected Intent Level */}
                <div
                  className={`flex items-center justify-between rounded-xl p-2 transition-all ${
                    flashField === "intent" ? "bg-indigo-600/30 ring-1 ring-indigo-400" : "bg-slate-900/60"
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Detected Intent:
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      leadData.intent.includes("High")
                        ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/40"
                        : "bg-blue-500/20 text-cyan-300"
                    }`}
                  >
                    {leadData.intent}
                  </span>
                </div>

                {/* 5. Requirements / Notes */}
                <div className="rounded-xl bg-slate-900/60 p-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Parsed Project Requirements:
                  </span>
                  <p className="mt-1 text-slate-300 font-mono text-[11px] leading-relaxed">
                    {leadData.requirements}
                  </p>
                </div>

                {/* 6. Live Sync Status */}
                <div className="flex items-center justify-between border-t border-slate-800/80 pt-2 text-[11px]">
                  <span className="text-slate-400">Destination:</span>
                  <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    Salesforce, HubSpot &amp; Owner SMS
                  </span>
                </div>
              </div>

              {/* 3 ROI Metric Pills */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl border border-slate-800 bg-[#0a1638] p-2">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Speed
                  </p>
                  <p className="font-mono text-xs font-bold text-cyan-300">&lt; 1.2s</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-[#0a1638] p-2">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Conv. Rate
                  </p>
                  <p className="font-mono text-xs font-bold text-emerald-400">+48%</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-[#0a1638] p-2">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    After-Hours
                  </p>
                  <p className="font-mono text-xs font-bold text-blue-400">100% Active</p>
                </div>
              </div>
            </div>

            {/* Quick Demo CTA inside visualizer */}
            <div className="mt-5 border-t border-slate-800 pt-4">
              <Link
                href="/contact#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-blue-700"
              >
                <span>Deploy This For Your Website</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Deployment & Integration Options Showcase */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Zero Headache Deployment
            </p>
            <h3 className="mt-2 font-display text-2xl font-black text-slate-900 sm:text-3xl">
              Two Flexible Delivery Options For Your Business
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Whether you want a fully managed turn-key installation or a clean code snippet for your in-house engineering team, we have you covered.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Option 1: Full Done-For-You Integration */}
            <TiltCard className="rounded-3xl">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-400 sm:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                      <Layers className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-blue-100/70 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-blue-700">
                      Option 01: Turn-Key
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-xl font-bold text-slate-900">
                    Full Done-For-You Integration
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    We handle everything end-to-end: training the AI on your website, PDFs, documentation, and pricing sheets, then deploying it directly into your live CMS.
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                    {[
                      "Trained on your private knowledge base & PDFs",
                      "Styled to match your exact brand fonts & color palette",
                      "Direct setup on WordPress, Shopify, Webflow, Wix, or custom sites",
                      "Automated CRM routing (HubSpot, Salesforce, Zoho, Google Sheets)",
                      "Human agent escalation with live email & SMS alerts",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/contact#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-600"
                  >
                    <span>Request Full Integration</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </TiltCard>

            {/* Option 2: Lightweight Code Handoff */}
            <TiltCard className="rounded-3xl">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-400 sm:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                      <Code2 className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-indigo-100/70 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-indigo-700">
                      Option 02: 3-Line Embed
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-xl font-bold text-slate-900">
                    Lightweight Code Snippet Handoff
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    We configure and host the AI agent in the cloud, giving your in-house developer a lightweight 3-line embed script to paste into your website header.
                  </p>

                  {/* Interactive Code Preview Box */}
                  <div className="mt-5 rounded-2xl border border-slate-800 bg-[#070f24] p-3 text-white">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-mono text-[10px] text-slate-400">index.html snippet</span>
                      <button
                        type="button"
                        onClick={copyEmbedCode}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-800 px-2 py-1 text-[10px] font-semibold text-slate-300 hover:text-white"
                      >
                        {copiedSnippet ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="mt-2 overflow-x-auto font-mono text-[11px] leading-relaxed text-cyan-300">
                      <code>{`<!-- Zepra Tech Autonomous AI Agent -->
<script src="https://cdn.gozepra.tech/agent.js" async></script>
<div id="zepra-ai-agent" data-agent-id="agt_demo" data-theme="dark"></div>`}</code>
                    </pre>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {[
                      "Zero server maintenance: hosted on high-speed edge servers",
                      "Sub-30ms response latency with global CDN",
                      "Full REST API and Webhook access included",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/contact#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <span>Get Script &amp; API Keys</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Bottom Primary Action Banner */}
          <div className="mt-10 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 p-6 text-white text-center shadow-lg sm:p-8">
            <h4 className="font-display text-xl font-black sm:text-2xl">
              Want This Built &amp; Trained For Your Business?
            </h4>
            <p className="mx-auto mt-2 max-w-xl text-xs text-blue-100 sm:text-sm">
              We can train an intelligent 24/7 AI agent with your pricing, catalog, and procedures in less than 5 business days.
            </p>
            <div className="mt-5">
              <Link
                href="/contact#contact"
                data-cursor="BOOK CALL"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-md transition hover:bg-blue-50 hover:scale-105"
              >
                <span>Book a 10-Min Setup Call</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
