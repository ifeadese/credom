/** Home — How We Work (4D1M) process rows. The Measure row is gold-highlighted. */
export type ProcessStep = {
  number: string;
  label: string;
  description: string;
  highlight?: boolean;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    label: "Discover",
    description:
      "We dive deep into your brand, audience, objectives, competitive landscape, and media environment. Before any concept is sketched, we understand what success looks and feels like at every level.",
  },
  {
    number: "02",
    label: "Design",
    description:
      "We develop bold, insight-led concepts and immersive integrated experience strategies that connect your brand story across all marketing channels.",
  },
  {
    number: "03",
    label: "Develop",
    description:
      "We plan every detail from logistics, production, and execution frameworks to media scheduling and site selection, ensuring every channel is aligned and deployed with precision.",
  },
  {
    number: "04",
    label: "Deliver",
    description:
      "We seamlessly execute every element end-to-end, bringing the campaign to life with the same standard of precision, control, and excellence across every touchpoint.",
  },
  {
    number: "05",
    label: "Measure",
    description:
      "We evaluate performance across every channel, quantifying reach, engagement, and commercial impact to optimise for future growth.",
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

/** Home — Businesses We've Served case-study cards. */
export type CaseStudyTheme = "ink" | "gold";

export type CaseStudy = {
  client: string;
  category: string;
  /** Body copy, one entry per paragraph. */
  description: string[];
  takeaway: string;
  theme: CaseStudyTheme;
  /** Card image (public path). Swap the placeholder for a real event photo. */
  image: { src: string; alt: string };
  /** "Read more" destination. */
  href: string;
};

export const caseStudyThemeClasses: Record<
  CaseStudyTheme,
  {
    category: string;
    body: string;
    takeaway: string;
    button: "gold" | "outline";
  }
> = {
  /* Copy sits on the light section background (no card), so both themes use ink-on-paper text. */
  ink: {
    category: "text-gold-deep",
    body: "text-body-ink",
    takeaway: "text-gold-deep",
    button: "gold",
  },
  gold: {
    category: "text-brown",
    body: "text-body-ink",
    takeaway: "text-brown",
    button: "outline",
  },
};

export const caseStudies: CaseStudy[] = [
  {
    client: "FUTURE IN MOTION",
    category: "AltDrive EV Experience 2.0 - Lagos",
    description: [
      "Future in Motion was an invitation to step into what comes next. We turned the idea of electric mobility into a physical world where technology, movement and lifestyle came together.",
      "From exploring vehicles to discovery, interaction and movement designed to spark curiosity. Every space, touchpoint and experience invited guests to see the future differently, before getting behind the wheel and putting the future into motion.",
    ],
    takeaway:
      "It was more than an EV showcase. It was a glimpse of tomorrow, brought to life today.",
    theme: "ink",
    image: {
      src: "/images/case-studies/altdrive-ev-experience.svg",
      alt: "AltDrive EV Experience 2.0 in Lagos",
    },
    href: "#",
  },
];

/** About — hero intro paragraphs (from the company's September 2026 draft). */
export const aboutIntro = [
  "We are an integrated brand experience agency built to shape how people encounter, understand, and connect with brands across every touchpoint.",
  "We unify strategy, creativity, and execution to design the full arc of a brand's presence; from immersive live experiences and cultural activations to out-of-home and media channels that extend reach and sustain relevance.",
  "Every campaign is engineered with an insight-led strategy to resonate, inspire action, and leave a lasting imprint. From high-energy brand activations and corporate events to broadcast media and out-of-home executions, we approach every project with intentionality and a deep understanding of audience behaviour.",
  "We pair strategic rigour with creative excellence to ensure every brand interaction lands with precision and purpose.",
];

/** About — Why Choose Us narrative. */
export const whyChooseUs = {
  paragraphs: [
    "We hand you a system. Choosing CREDOM means partnering with a team that operates across every dimension of your brand's presence, with the strategic range and executional depth to make each one count.",
    "We are integrators by design. We bring together the broad reach of traditional media and OOH with the depth and intimacy of experiential marketing, all governed by one strategic vision.",
    "With deep roots across FMCG, fintech, telecoms, banking, and lifestyle sectors, we arrive at every brief with relevant context and a proven playbook, not guesswork.",
    "Our creative production capabilities mean we do not just plan your campaigns. We craft every visual and spatial element, and every audience interaction, to draw people deeper into your brand world.",
  ],
  quote:
    "Our end-to-end project management ensures nothing falls through the gaps, from the first brief to the final impression.",
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
      "We design for humans first, brands second. Every experience we create starts with one question: how do we want people to feel?",
    theme: "magenta",
  },
  {
    number: "02",
    title: "Reliability & Attention to Detail",
    description:
      "We do what we say, deliver on our promise, and sweat the small things so the big moments land exactly as they should.",
    theme: "brown",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "Every brief is an invitation to push further. We challenge the expected approach and explore what has not been done.",
    theme: "gold",
  },
  {
    number: "04",
    title: "Excellence",
    description:
      "Excellence at CREDOM means that every touchpoint, visible and invisible, reflects the full measure of our craft.",
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

/** About — team members. */
export type TeamMember = {
  name: string;
  role: string;
  /** Bio copy, one entry per paragraph. */
  bio: string[];
  /** Color of the offset block behind the photo. */
  backdrop: "gold" | "brown";
  /** Headshot under public/. */
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "Pelumi Adese",
    role: "Business Lead / COO",
    photo: "/images/team-pelumi-adese.jpg",
    bio: [
      "Pelumi Adese is an experiential marketing and brand experience professional with over a decade of experience translating business strategy into immersive, high-impact brand engagements.",
      "Having worked across both agency and client-side environments in Nigeria, the United Kingdom, and the wider African market, she brings a rare dual perspective, aligning commercial objectives with culturally intentional execution.",
      "Her portfolio spans FMCG, fintech, technology, banking, and lifestyle sectors, with work including Midea, Visa Nigeria, Reckitt Benckiser, Total Nigeria, Renmoney, Eyowo, Kwiksell, Useforms, Usepass, Nutzy, Voices for Change, Carnaby London, and Switchee in the UK.",
    ],
    backdrop: "gold",
  },
];

/** Contact — "Reach us directly" sidebar details. */
export const contactDetails = {
  email: "hello@credomlimited.com",
  location: ["Victoria Island,", "Lagos, Nigeria."],
};

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
  "Your message has been sent. We'll be in touch shortly.";

/** Schedule — /schedule page copy (the destination of every "Schedule a Chat" button). */
export const scheduleIntro =
  "A 30-minute conversation about the moment you want to create: your brand, the audience, the timeline, and what success looks like. Pick a slot that suits you and we'll take it from there.";
