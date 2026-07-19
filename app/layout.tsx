import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import { Toaster } from "sonner";

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
  metadataBase: new URL("https://yourdomain.com"), // Replace with your real domain after deployment

  title: {
    default: "SK Events | Luxury Event Management",
    template: "%s | SK Events",
  },

  description:
    "SK Events offers premium wedding events, birthday setups, corporate events, stage decorations, and luxury event management services across Kerala.",

  keywords: [
    "SK Events",
    "Event Management Kerala",
    "Wedding Planner Kerala",
    "Luxury Wedding",
    "Birthday Decoration",
    "Corporate Events",
    "Stage Decoration",
    "Event Organizer",
    "Wedding Decoration",
    "Kerala Events",
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

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yourdomain.com",
    siteName: "SK Events",
    title: "SK Events | Luxury Event Management",
    description:
      "Creating unforgettable weddings, birthdays, corporate events, and stage decorations with elegance and excellence.",

    images: [
      {
        url: "/images/hero2.webp",
        width: 1200,
        height: 630,
        alt: "SK Events",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SK Events | Luxury Event Management",
    description:
      "Luxury weddings, birthday celebrations, corporate events, and stage decorations across Kerala.",

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