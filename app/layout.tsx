import type { Metadata } from "next";
import { Rokkitt, Mulish } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const rokkitt = Rokkitt({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-rokkitt",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mulish",
  display: "swap",
});

const siteUrl = "https://www.credomlimited.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "CREDOM — Brand Experience & Experiential Marketing Agency in Lagos, Nigeria",
    template: "%s — CREDOM",
  },
  description:
    "CREDOM Limited is a brand experience and experiential marketing agency in Lagos, Nigeria — brand activations, corporate events, traditional media, OOH, and digital. We create moments people don't just attend; they remember.",
  keywords: [
    "CREDOM",
    "CREDOM Limited",
    "brand experience agency",
    "experiential marketing agency",
    "brand experience",
    "experiential marketing",
    "brand activation",
    "brand activation agency Lagos",
    "corporate events",
    "event marketing Nigeria",
    "out-of-home",
    "OOH",
    "Lagos",
    "Nigeria",
    "integrated marketing agency",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CREDOM",
    title:
      "CREDOM — Brand Experience & Experiential Marketing Agency in Lagos, Nigeria",
    description:
      "We create moments people don't just attend; they remember. Integrated brand experiences across strategy, activation, events, media and digital.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "CREDOM — Brand Experience & Experiential Marketing Agency",
    description:
      "We create moments people don't just attend; they remember.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "CREDOM Limited",
    alternateName: "CREDOM",
    url: siteUrl,
    email: "hello@credomlimited.com",
    slogan: "We create moments people don't just attend; they remember.",
    description:
      "Brand experience and experiential marketing agency in Lagos, Nigeria — strategy, activation, corporate events, traditional media, out-of-home, and digital.",
    knowsAbout: [
      "Brand experience",
      "Experiential marketing",
      "Brand activation",
      "Corporate events",
      "Out-of-home advertising",
      "Digital marketing",
    ],
    areaServed: { "@type": "Country", name: "Nigeria" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Victoria Island",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  };

  return (
    <html lang="en" className={`${rokkitt.variable} ${mulish.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-paper">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
