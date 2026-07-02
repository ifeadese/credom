export type ServiceTheme =
  | "gold"
  | "ink"
  | "magenta"
  | "brown"
  | "teal"
  | "ink2";

export type Service = {
  number: string;
  /** Full title used on the Services page. */
  title: string;
  /** Shorter title used in the Home preview grid (may differ from `title`). */
  previewTitle: string;
  /** One-line description shown in the Home preview card. */
  shortDescription: string;
  /** Longer description shown in the Services page block. */
  description: string;
  bullets: string[];
  theme: ServiceTheme;
};

/**
 * Tailwind class recipes per card color theme. Keeps hex out of components
 * and guarantees the Home preview and Services blocks stay in sync.
 */
export const serviceThemeClasses: Record<
  ServiceTheme,
  {
    card: string;
    number: string;
    bullet: string;
    /** Body text color for the Home preview card. */
    previewBody: string;
    /** Body text color for the Services page block. */
    body: string;
    /** Text color for bullet list items. */
    listText: string;
  }
> = {
  gold: {
    card: "bg-gold text-ink",
    number: "opacity-[0.55]",
    bullet: "bg-ink",
    previewBody: "opacity-[0.85]",
    body: "opacity-[0.85]",
    listText: "",
  },
  ink: {
    card: "bg-ink text-paper",
    number: "text-gold",
    bullet: "bg-gold",
    previewBody: "text-on-dark",
    body: "text-on-dark",
    listText: "text-on-dark-2",
  },
  magenta: {
    card: "bg-magenta text-paper",
    number: "opacity-[0.6]",
    bullet: "bg-paper",
    previewBody: "opacity-[0.9]",
    body: "opacity-[0.92]",
    listText: "",
  },
  brown: {
    card: "bg-brown text-paper",
    number: "text-gold",
    bullet: "bg-gold",
    previewBody: "text-on-brown-soft",
    body: "text-on-brown",
    listText: "text-on-brown",
  },
  teal: {
    card: "bg-teal text-paper",
    number: "opacity-[0.6]",
    bullet: "bg-paper",
    previewBody: "opacity-[0.9]",
    body: "opacity-[0.92]",
    listText: "",
  },
  ink2: {
    card: "bg-ink-2 text-paper",
    number: "text-gold",
    bullet: "bg-gold",
    previewBody: "text-on-dark",
    body: "text-on-dark",
    listText: "text-on-dark-2",
  },
};

export const services: Service[] = [
  {
    number: "01",
    title: "Brand Experience Strategy",
    previewTitle: "Brand Experience Strategy",
    shortDescription:
      "We set the strategic foundation before a single activation is planned.",
    description:
      "We set the strategic foundation before a single activation is planned or a single media space is booked.",
    bullets: [
      "Brand and campaign strategy",
      "Brand exhibitions and pop-ups",
      "Experience design and storytelling",
      "Go-to-market activation planning",
    ],
    theme: "gold",
  },
  {
    number: "02",
    title: "Experiential Marketing & Activation",
    previewTitle: "Experiential Marketing & Activation",
    shortDescription:
      "Live, real-world experiences that drive genuine trial and advocacy.",
    description:
      "We put your brand directly in front of your audience through live, real-world experiences that drive genuine trial, loyalty, and advocacy.",
    bullets: [
      "Market and retail activations",
      "Product sampling and consumer engagement",
      "Roadshows and multi-location deployment",
      "PR stunts and high-impact campaigns",
    ],
    theme: "ink",
  },
  {
    number: "03",
    title: "Corporate Events & Experiences",
    previewTitle: "Corporate Events & Experiences",
    shortDescription:
      "Polished, professionally managed events and brand-owned platforms.",
    description:
      "We produce polished, professionally managed events and brand-owned platforms that reflect your brand's ambition, credibility, and long-term equity.",
    bullets: [
      "Proprietary event creation",
      "Brand sponsorship strategy & execution",
      "Product launches, conferences & summits",
      "Award ceremonies, galas & cultural festivals",
    ],
    theme: "magenta",
  },
  {
    number: "04",
    title: "Traditional Media",
    previewTitle: "Traditional Media",
    shortDescription:
      "TV, radio and print campaigns that extend reach at every stage.",
    description:
      "We plan, place, and manage traditional media campaigns that extend your brand messaging and maximise reach at every stage of the consumer journey.",
    bullets: [
      "Television and radio campaign planning & buying",
      "Print media strategy and placement",
      "Media schedule development & audience targeting",
      "Integrated campaign management",
    ],
    theme: "brown",
  },
  {
    number: "05",
    title: "Out-of-Home (OOH) Marketing",
    previewTitle: "Out-of-Home (OOH)",
    shortDescription: "Physical brand presence that makes you unmissable.",
    description:
      "We design and deploy OOH campaigns that make your brand unmissable in the environments where your audience lives, works, and moves.",
    bullets: [
      "Billboard and large-format outdoor",
      "Transit and commuter media placements",
      "Street furniture, mall & point-of-sale OOH",
      "Digital OOH, site selection & media buying",
    ],
    theme: "teal",
  },
  {
    number: "06",
    title: "Digital Marketing",
    previewTitle: "Digital Marketing",
    shortDescription:
      "Turning online attention into engagement, leads and sales.",
    description:
      "We build and manage digital campaigns that keep your brand visible and competitive, turning online attention into engagement, leads, and long-term relationships.",
    bullets: [
      "Social media & content marketing",
      "Paid digital & display advertising",
      "Influencer & creator marketing",
      "Email, CRM & performance reporting",
    ],
    theme: "ink2",
  },
];
