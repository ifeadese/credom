/** Home — How We Work (4D1M) process rows. The Measure row is gold-highlighted. */
export type ProcessStep = {
  label: string;
  description: string;
  highlight?: boolean;
};

export const processSteps: ProcessStep[] = [
  {
    label: "Discover",
    description:
      "We dive deep into your brand, audience, objectives, and media environment. Before any concept is sketched, we understand what success looks and feels like.",
  },
  {
    label: "Design",
    description:
      "We develop bold, insight-led concepts and immersive integrated experience strategies that connect your brand story across all channels.",
  },
  {
    label: "Develop",
    description:
      "We plan every detail from logistics and production to media scheduling and site selection, ensuring every channel is deployed with precision.",
  },
  {
    label: "Deliver",
    description:
      "We execute every element end-to-end, bringing the campaign to life with the same standard of precision and excellence across every touchpoint.",
  },
  {
    label: "Measure",
    description:
      "We evaluate performance across every channel, quantifying reach, engagement and commercial impact to optimise for future growth.",
    highlight: true,
  },
];

/**
 * Client logos for the roster. `scale` optically balances the marks against each
 * other — a plain height match makes AltBank's three-line lockup read too small.
 * Rendered as `calc(var(--logo-h) * scale)`.
 */
export const clients = [
  { name: "AltDrive", logo: "/images/clients/altdrive.png", width: 800, height: 191, scale: 1 },
  { name: "AltBank", logo: "/images/clients/altbank.svg", width: 716, height: 240, scale: 1.25 },
  { name: "Midea", logo: "/images/clients/midea.png", width: 800, height: 308, scale: 1.08 },
];

/** Home — Companies We Served case-study cards. */
export type CaseStudyTheme = "ink" | "gold";

export type CaseStudy = {
  client: string;
  category: string;
  description: string;
  takeaway: string;
  theme: CaseStudyTheme;
};

export const caseStudyThemeClasses: Record<
  CaseStudyTheme,
  { card: string; category: string; body: string; takeaway: string }
> = {
  ink: {
    card: "bg-ink text-paper",
    category: "text-gold",
    body: "text-on-dark",
    takeaway: "text-gold",
  },
  gold: {
    card: "bg-gold text-ink",
    category: "text-brown",
    body: "opacity-[0.88]",
    takeaway: "text-brown",
  },
};

export const caseStudies: CaseStudy[] = [
  {
    client: "The Midea Pro Shop",
    category: "Grand Launch & Partners' Conference — Abuja",
    description:
      "A dual-format activation that turned a product launch into a full brand moment. From the high-energy grand opening of The Midea Pro Shop to a polished partners' conference held the same evening, we built two distinct experiences under one strategic vision — driving footfall, deepening trade relationships, and solidifying Midea's market authority in Abuja.",
    takeaway:
      "Experiential excellence and commercial impact aren't a trade-off — they're the brief.",
    theme: "ink",
  },
  {
    client: "Terra",
    category: "August Meeting Activation — Eastern States",
    description:
      "The August Meeting is a significant cultural tradition among Igbo women, who travel back to their hometowns for gatherings organised by women's associations, town unions, and church groups. We activated the Terra brand across 6 locations in Anambra, Enugu, and Imo State — brand talks, dry sampling, and grassroots ambassador engagement that drove on-ground sales across local communities.",
    takeaway: "High-reach, high-touch — right in the heart of the conversation.",
    theme: "gold",
  },
];

/** About — Why Choose Us narrative. */
export const whyChooseUs = {
  paragraphs: [
    "We hand you a system. Choosing CREDOM means partnering with a team that operates across every dimension of your brand's presence, with the strategic range and executional depth to make each one count. We are integrators by design — bringing together the broad reach of traditional media and OOH with the depth and intimacy of experiential marketing, all governed by one strategic vision.",
    "With deep roots across FMCG, fintech, telecoms, banking, and lifestyle sectors, we arrive at every brief with relevant context and a proven playbook, not guesswork. We don't just plan your campaigns — we craft every visual and spatial element, and every audience interaction, to draw people deeper into your brand world.",
  ],
  quote:
    "Our end-to-end project management ensures nothing falls through the gaps — memorable for your audience, effortless for you.",
};

/** About — What We Stand For principle cards. */
export type PrincipleTheme = "magenta" | "brown" | "gold" | "teal" | "white";

export type Principle = {
  number: string;
  title: string;
  description: string;
  theme: PrincipleTheme;
};

export const principleThemeClasses: Record<
  PrincipleTheme,
  { card: string; number: string; body: string }
> = {
  magenta: {
    card: "bg-magenta text-paper",
    number: "opacity-[0.6]",
    body: "opacity-[0.92]",
  },
  brown: {
    card: "bg-brown text-paper",
    number: "text-gold",
    body: "text-on-brown",
  },
  gold: {
    card: "bg-gold text-ink",
    number: "opacity-[0.55]",
    body: "opacity-[0.88]",
  },
  teal: {
    card: "bg-teal text-paper",
    number: "opacity-[0.6]",
    body: "opacity-[0.92]",
  },
  white: {
    card: "bg-white text-ink border border-line",
    number: "text-gold",
    body: "text-body-muted",
  },
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "People-Centricity",
    description:
      "We design for humans first, brands second. Every experience starts with one question: how do we want people to feel?",
    theme: "magenta",
  },
  {
    number: "02",
    title: "Reliability & Detail",
    description:
      "We do what we say, deliver on our promise, and sweat the small things so the big moments land exactly as they should.",
    theme: "brown",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "Every brief is an invitation to push further. We challenge the expected and only settle when the idea is genuinely better.",
    theme: "gold",
  },
  {
    number: "04",
    title: "Excellence",
    description:
      "We hold ourselves to a standard beyond delivery — every touchpoint, visible and invisible, reflects the full measure of our craft.",
    theme: "teal",
  },
  {
    number: "05",
    title: "Teamwork",
    description:
      "Behind every seamless campaign is a team working in precise coordination, internally and with our clients.",
    theme: "white",
  },
];

/** About — Meet the Force team members. */
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Color of the offset block behind the photo. */
  backdrop: "gold" | "brown";
  /** Headshot under public/, extracted from the company profile. */
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "Pelumi Adese",
    role: "Business Lead / COO",
    photo: "/images/team-pelumi-adese.jpg",
    bio: "An experiential marketing and brand experience professional with over a decade of experience translating business strategy into immersive, high-impact brand engagements across Nigeria, the UK, and the wider African market. Her work bridges strategy and creativity to deliver experiences that resonate deeply — spanning FMCG, fintech, banking, and lifestyle, with brands including Midea, Visa, Reckitt Benckiser and Total.",
    backdrop: "gold",
  },
];

/** Contact — select field options (the 6 services + two catch-alls). */
export const contactInterests = [
  "Brand Experience Strategy",
  "Experiential Marketing & Activation",
  "Corporate Events & Experiences",
  "Traditional Media",
  "Out-of-Home (OOH) Marketing",
  "Digital Marketing",
  "An integrated campaign",
  "Not sure yet",
];

/** Contact form shape. */
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export const contactInitialData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  service: contactInterests[0],
  message: "",
};

/**
 * Maps internal form keys to the field names delivered to the FormBold
 * dashboard / notification email — adjust here without touching the JSX.
 * (Same pattern as onehub's `formBoldFieldNames`.)
 */
export const formBoldFieldNames = {
  name: "name",
  email: "email",
  company: "company",
  service: "interest",
  message: "message",
} as const satisfies Record<keyof ContactFormData, string>;

export const contactSuccessMessage =
  "Your message has been sent. We'll be in touch shortly to schedule your chat.";
