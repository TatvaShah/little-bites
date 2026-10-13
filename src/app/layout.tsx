import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, Parisienne } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const script = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
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
    images: [{ url: "/og.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Little Bites. Big celebrations. Party catering across the GTA." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Bites | Party and event catering in the GTA",
    description,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${display.variable} ${script.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
