import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Caveat,
  Space_Grotesk,
  Work_Sans,
} from "next/font/google";
import "./globals.css";
import Providers from "@/src/lib/providers/Providers";
import ToastProvider from "../components/Common/ToastProvider/ToastProvider";

// ✅ Font Optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten accent font for headline highlight words (e.g. "Journeys")
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Minvip (mining services) marketing-page type — headline + body
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// ✅ SEO Metadata
// NOTE: metadataBase/canonical use a placeholder domain — swap in the
// real domain once one is registered/deployed.
export const metadata: Metadata = {
  metadataBase: new URL("https://minvip.com"),

  title: {
    default: "Minvip | Innovating Smart Industrial Growth Worldwide",
    template: "%s | Minvip",
  },

  description:
    "Minvip delivers global mining and industrial engineering services — crushing & screening, tailings management, conveyor systems and site engineering — built on safety, compliance and results.",

  keywords: [
    "Minvip",
    "mining services",
    "industrial engineering",
    "crushing and screening",
    "tailings management",
    "conveyor systems",
    "mine site engineering",
  ],

  authors: [{ name: "Minvip" }],
  creator: "Minvip",
  publisher: "Minvip",

  category: "industrial services",

  // ✅ Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Minvip | Innovating Smart Industrial Growth Worldwide",
    description:
      "Global mining and industrial engineering services, built on safety, compliance and results.",
    url: "https://minvip.com",
    siteName: "Minvip",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1600,
        height: 1000,
        alt: "Minvip — mining and industrial engineering services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "Minvip | Innovating Smart Industrial Growth Worldwide",
    description:
      "Global mining and industrial engineering services, built on safety, compliance and results.",
    images: ["/images/hero-bg.jpg"],
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Canonical
  alternates: {
    canonical: "https://minvip.com",
  },

  // ✅ Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },

  // ✅ App Info
  applicationName: "Minvip",
  referrer: "origin-when-cross-origin",

  // ✅ Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${spaceGrotesk.variable} ${workSans.variable} bg-ink-950 font-sans text-white antialiased`}
      >
        <Providers>
          {children}
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}
