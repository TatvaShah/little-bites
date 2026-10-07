import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Little bites. Big celebrations. Platters, slider trays, grazing tables, and kids munch cups for parties across the GTA.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Little Bites | Party and event catering in the GTA",
    template: "%s | Little Bites",
  },
  description,
  applicationName: "Little Bites",
  authors: [{ name: "Little Bites" }],
  keywords: [
    "Little Bites",
    "GTA catering",
    "party catering",
    "grazing table",
    "slider trays",
    "kids party food",
    "Toronto catering",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Little Bites | Party and event catering in the GTA",
    description,
    locale: "en_CA",
    type: "website",
    siteName: "Little Bites",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Bites | Party and event catering in the GTA",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
