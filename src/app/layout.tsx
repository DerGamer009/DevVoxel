import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts via next/font
const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#3b82f6' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://devvoxel.net'),
  title: {
    default: "DevVoxel - Minecraft Plugin Development",
    template: "%s | DevVoxel",
  },
  description: "Professional Minecraft plugins for Spigot, Paper, BungeeCord and Velocity. Open source, community-driven, and always improving. Your hub for developers & gamers.",
  keywords: [
    "Minecraft",
    "Plugins",
    "Spigot",
    "Paper",
    "BungeeCord",
    "Velocity",
    "Plugin Development",
    "Minecraft Server",
    "Open Source",
    "PlayerDataSync",
    "ItemDB",
    "BungeeSystem",
  ],
  authors: [{ name: "DevVoxel Team" }],
  creator: "DevVoxel",
  publisher: "DevVoxel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US", "fr_FR", "ru_RU", "uk_UA"],
    url: "/",
    siteName: "DevVoxel",
    title: "DevVoxel - Minecraft Plugin Development",
    description: "Professional Minecraft plugins for Spigot, Paper, BungeeCord and Velocity. Open source, community-driven, and always improving.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevVoxel - Minecraft Plugin Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevVoxel - Minecraft Plugin Development",
    description: "Professional Minecraft plugins for Spigot, Paper, BungeeCord and Velocity. Open source, community-driven, and always improving.",
    images: ["/og-image.png"],
    creator: "@devvoxel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "de": "/de",
      "en": "/en",
      "fr": "/fr",
      "ru": "/ru",
      "uk": "/uk",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevVoxel",
    "url": "https://devvoxel.net",
    "logo": "https://devvoxel.net/logo.png",
    "description": "Professional Minecraft plugin development organization",
    "sameAs": [
      "https://discord.gg/fKgyae8R4e",
      "https://github.com/devvoxel",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@devvoxel.net",
      "contactType": "Customer Support",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DevVoxel",
    "url": "https://devvoxel.net",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://devvoxel.net/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="de" className="transition-colors" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://discordapp.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
