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

export const clients = [
  "Midea",
  "Visa",
  "MTN",
  "Coca-Cola",
  "Guinness",
  "Reckitt",
  "Diageo",
  "Spotify",
  "Terra",
];

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
  /** Color of the offset block behind the photo placeholder. */
  backdrop: "gold" | "brown";
};

export const team: TeamMember[] = [
  {
    name: "Pelumi Adese",
    role: "Business Lead / COO",
    bio: "An experiential marketing and brand experience professional with over a decade of experience translating business strategy into immersive, high-impact brand engagements across Nigeria, the UK, and the wider African market. Her work bridges strategy and creativity to deliver experiences that resonate deeply — spanning FMCG, fintech, banking, and lifestyle, with brands including Midea, Visa, Reckitt Benckiser and Total.",
    backdrop: "gold",
  },
  {
    name: "Fetuga S.O",
    role: "Project Manager",
    bio: "A results-driven Project Manager with a proven track record across brand strategy, experiential marketing, and end-to-end delivery. He brings a rare combination of strategic clarity and operational precision, leading cross-functional teams under pressure. His portfolio spans iconic brands including British American Tobacco, MTN, Procter & Gamble, Guinness, Coca-Cola, Diageo and Spotify.",
    backdrop: "brown",
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
