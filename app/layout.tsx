import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import "./fonts.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sk-events-l9wk.vercel.app"),

  title: {
    default: "SK Events | Luxury Event Management in Kerala",
    template: "%s | SK Events",
  },

  description:
    "SK Events specializes in luxury weddings, birthday celebrations, corporate events, stage decorations, and premium event planning services across Kerala.",

  keywords: [
    "SK Events",
    "Event Management Kerala",
    "Wedding Planner Kerala",
    "Wedding Decoration",
    "Birthday Decoration",
    "Corporate Event Management",
    "Stage Decoration",
    "Luxury Events",
    "Kerala Event Planner",
    "Event Organizer Kerala",
  ],

  applicationName: "SK Events",
  creator: "SK Events",
  publisher: "SK Events",
  category: "Event Management",

  authors: [
    {
      name: "SK Events",
    },
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "", // Add your Google Search Console verification code later
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sk-events-l9wk.vercel.app",
    siteName: "SK Events",

    title: "SK Events | Luxury Event Management in Kerala",

    description:
      "Creating unforgettable weddings, birthday celebrations, corporate events, and stage decorations with elegance and excellence.",

    images: [
      {
        url: "/images/hero2.webp",
        width: 1200,
        height: 630,
        alt: "SK Events Luxury Event Management",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SK Events | Luxury Event Management",

    description:
      "Luxury weddings, birthdays, corporate events, and stage decorations across Kerala.",

    images: ["/images/hero2.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-black text-white antialiased">
        {children}

        <Toaster
          position="top-right"
          richColors
          closeButton
          theme="dark"
        />
      </body>
    </html>
  );
}