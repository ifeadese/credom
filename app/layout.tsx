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

const siteUrl = "https://credomlimited.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CREDOM — Integrated Brand Experience Agency",
    template: "%s — CREDOM",
  },
  description:
    "CREDOM is an integrated brand experience agency in Lagos, Nigeria. We create moments people don't just attend; they remember.",
  keywords: [
    "brand experience",
    "experiential marketing",
    "brand activation",
    "corporate events",
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
    title: "CREDOM — Integrated Brand Experience Agency",
    description:
      "We create moments people don't just attend; they remember. Integrated brand experiences across strategy, activation, events, media and digital.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "CREDOM — Integrated Brand Experience Agency",
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
    "@type": "Organization",
    name: "CREDOM Limited",
    url: siteUrl,
    email: "hello@credomlimited.com",
    slogan: "We create moments people don't just attend; they remember.",
    description:
      "Integrated brand experience agency in Lagos, Nigeria — strategy, activation, corporate events, traditional media, out-of-home, and digital.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Jakande Crescent, Victoria Island",
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
