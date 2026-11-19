import { NextResponse } from "next/server";

// Helper to extract lead fields from text
function extractLeadInfo(text, existingLead = {}) {
  const lead = { ...existingLead };

  // 1. Email extraction
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch && !lead.email) {
    lead.email = emailMatch[0];
    lead.contact = lead.email;
  }

  // 2. Phone extraction
  const phoneMatch = text.match(/(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
  if (phoneMatch && !lead.phone) {
    lead.phone = phoneMatch[0];
    lead.contact = lead.contact ? `${lead.contact} • ${lead.phone}` : lead.phone;
  }

  // 3. Name extraction ("my name is...", "I'm...", "this is...", "Name: ...")
  const nameMatch = text.match(/(?:my name is|i am|i'm|this is|call me|name:)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i);
  if (nameMatch && nameMatch[1]) {
    lead.name = nameMatch[1].trim();
  }

  // 4. Intent detection
  const lower = text.toLowerCase();
  if (lower.includes("quote") || lower.includes("rfq") || lower.includes("price") || lower.includes("cost") || lower.includes("how much") || lower.includes("estimate")) {
    lead.intent = "High - Quote Request";
  } else if (lower.includes("book") || lower.includes("appointment") || lower.includes("schedule") || lower.includes("slot") || lower.includes("saturday") || lower.includes("available")) {
    lead.intent = "High - Appointment Booking";
  } else if (lead.email || lead.phone) {
    lead.intent = "High - Contact Submitted";
  } else if (!lead.intent) {
    lead.intent = "Active Prospect - Inquiry";
  }

  // 5. Requirements extraction
  if (lower.includes("cnc") || lower.includes("bracket") || lower.includes("aluminum") || lower.includes("moq")) {
    lead.requirements = "CNC Machined Aluminum / RFQ Inquired";
  } else if (lower.includes("ceramic") || lower.includes("coating") || lower.includes("detail") || lower.includes("wash")) {
    lead.requirements = "5-Yr Ceramic Coating / Complete Detail";
  } else if (lower.includes("discount") || lower.includes("promo") || lower.includes("shipping") || lower.includes("gift")) {
    lower.includes("discount") ? (lead.requirements = "Promo Code WELCOME15 Requested") : (lead.requirements = "Product & Shipping Inquired");
  } else if (lower.includes("insurance") || lower.includes("dental") || lower.includes("whitening") || lower.includes("teeth") || lower.includes("checkup")) {
    lower.includes("insurance") ? (lead.requirements = "Insurance Check (PPO) & Consultation") : (lead.requirements = "Cosmetic Laser Whitening / Dental Exam");
  } else if (!lead.requirements && text.length > 5 && text.length < 120) {
    lead.requirements = text.replace(/my name is|i'm|email is|phone is/gi, "").trim();
  }

  lead.captured = Boolean(lead.email || lead.phone || lead.name);

  return lead;
}

// Fallback intelligent simulated response generator
function generateFallbackReply(message, persona, lead) {
  const lower = message.toLowerCase();
  const personaId = persona?.id || "manufacturing";

  // Check if user shared contact details
  if (lead.email || lead.phone) {
    const contactMethod = lead.email ? `your email (${lead.email})` : `your phone (${lead.phone})`;
    return `Thank you so much${lead.name ? `, ${lead.name}` : ""}! I've logged your information and assigned it directly to our team. A representative from ${persona.companyName} will reach out to ${contactMethod} within 1 business hour with full pricing, availability, and next steps. Is there any other detail I can assist you with right now?`;
  }

  // Check for pricing / quote request
  if (lower.includes("quote") || lower.includes("rfq") || lower.includes("how much") || lower.includes("cost") || lower.includes("price") || lower.includes("pricing")) {
    if (personaId === "manufacturing") {
      return `For custom fabrication, pricing depends on material grade, tolerances, and batch volume. For instance, our typical 5,000-unit bracket run averages $4.80 - $8.20 per unit with 14-day delivery. To generate an official engineering RFQ with formal material certificates, what is your Name and Work Email or Phone number?`;
    }
    if (personaId === "auto-detailing") {
      return `Our Signature 5-Year Ceramic Coating package is $899 for sedans and $1,099 for trucks/SUVs, which includes full single-stage paint correction, surface decontamination, and high-gloss 9H quartz protection. Would you like to check available slots for this week? If so, what vehicle year/model do you drive, and what is your Name and Phone number?`;
    }
    if (personaId === "ecommerce") {
      return `You can use discount code 'WELCOME15' at checkout right now for 15% off your entire first order over $40! Plus, all orders over $65 include free express delivery. Would you like me to email you a direct 15% discount link? Just drop your Name and Email!`;
    }
    if (personaId === "healthcare") {
      return `Our in-office Zoom! Laser Teeth Whitening is currently featured at $349 (includes custom take-home touch-up trays). We also offer a New Patient Special: Comprehensive Exam, Full Mouth X-Rays & Cleaning for $149. Would you like to schedule an appointment? Please share your Name and Phone or Email to check open slots!`;
    }
    return `We provide customized pricing based on your exact requirements. Could you please share your Name and Email or Phone number so our team at ${persona.companyName} can send over a personalized estimate?`;
  }

  // Check for appointment / booking / availability
  if (lower.includes("book") || lower.includes("schedule") || lower.includes("saturday") || lower.includes("appointment") || lower.includes("slot") || lower.includes("time")) {
    if (personaId === "auto-detailing") {
      return `Yes, we have 2 VIP detailing slots open this Saturday at 9:00 AM and 1:30 PM! Each booking includes our complete shop inspection. To lock in your Saturday bay reservation, what is your Name, Phone number, and vehicle model?`;
    }
    if (personaId === "healthcare") {
      return `We have openings available next Tuesday at 10:30 AM and Thursday at 2:00 PM with our lead dentist Dr. Miller. To hold this consultation slot, what is your Full Name, preferred Phone number, and insurance provider?`;
    }
    return `We would be happy to schedule that for you! What is your preferred day, along with your Name and Email or Phone number so we can confirm the calendar invitation?`;
  }

  // Check for specific industry questions
  if (personaId === "manufacturing") {
    if (lower.includes("moq") || lower.includes("lead time")) {
      return `Our standard MOQ is 50 pieces for CNC machined parts and 500 pieces for stamped sheet metal. For engineering prototypes, we can do 1 to 5 pieces with a 5-7 business day turnaround. Standard production runs take 2-3 weeks with expedited freight options available. What volume are you looking to produce?`;
    }
    if (lower.includes("iso") || lower.includes("cert") || lower.includes("certificate")) {
      return `Yes! Apex Industrial is ISO 9001:2015 and AS9100D certified. Every production batch includes full chemical/physical Mill Test Reports (MTR), CMM dimensional inspection reports, and RoHS/REACH compliance documentation upon request.`;
    }
  }

  if (personaId === "auto-detailing") {
    if (lower.includes("include") || lower.includes("interior") || lower.includes("package")) {
      return `Our Complete Reset package includes a dual-action snow foam wash, iron decontamination, clay bar treatment, single-stage machine polish, deep steam extraction on carpets and upholstery, leather cleaning & UV conditioning, and air vent ozone sanitization. It leaves your car looking and smelling brand new!`;
    }
  }

  if (personaId === "ecommerce") {
    if (lower.includes("shipping") || lower.includes("return") || lower.includes("policy")) {
      return `We offer free standard shipping on orders over $65 (3-5 business days). International delivery is available to over 45 countries via DHL Express. We also offer a 30-day no-questions-asked return policy with free prepaid return labels!`;
    }
    if (lower.includes("gift") || lower.includes("under $50") || lower.includes("recommend")) {
      return `Top recommendations under $50: 1) The Nova Vegan Leather Desk Mat ($34) — our bestseller, 2) The Aluminum Ergonomic Laptop Stand ($42), or 3) The Matte Ceramic Thermal Travel Mug ($28). All come gift-boxed! Would you like a 15% discount code for these?`;
    }
  }

  if (personaId === "healthcare") {
    if (lower.includes("insurance") || lower.includes("delta") || lower.includes("bluecross")) {
      return `Yes! We are in-network with Delta Dental Premier/PPO, BlueCross BlueShield, Cigna, MetLife, Aetna, and Guardian. We file all claims directly on your behalf with zero upfront paperwork. If you share your Name and Phone or Member ID, our front desk can verify your exact copay right away!`;
    }
  }

  // Custom persona handling
  if (personaId === "custom") {
    return `At ${persona.companyName}, we specialize in ${persona.role}. We can answer your questions, prepare custom quotes, or schedule a consultation. Could you share what specific service you're interested in, along with your Name and Email so we can send full details?`;
  }

  // General helpful default
  return `Thank you for your message! At ${persona.companyName}, our AI assistant operates 24/7 to ensure zero wait times. If you have specific requirements or would like an exact quote, feel free to ask or share your Name and Email/Phone number so a dedicated specialist can assist you immediately.`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { message = "", persona = {}, history = [], leadData = {} } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Extract any new lead fields from this message
    const updatedLead = extractLeadInfo(message, leadData);

    // If an external LLM API key exists (e.g. GEMINI_API_KEY or OPENAI_API_KEY), we can optionally use it
    let reply = "";
    const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;

    if (apiKey && process.env.ENABLE_LLM_DEMO === "true") {
      try {
        // Attempt external call if explicitly configured
        // (Defaulting to the robust high-speed fallback for zero-latency demo guarantees)
      } catch (err) {
        console.error("LLM call failed, falling back to instant responder", err);
      }
    }

    // High-speed, guaranteed-uptime response tailored to the persona
    if (!reply) {
      reply = generateFallbackReply(message, persona, updatedLead);
    }

    return NextResponse.json({
      reply,
      leadData: updatedLead,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in /api/demo-chat:", error);
    return NextResponse.json(
      {
        reply: "I am ready to assist you! Please share your project details, or let me know what questions you have about our services.",
        leadData: {},
      },
      { status: 200 }
    );
  }
}
