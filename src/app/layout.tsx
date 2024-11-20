import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const fontSans = FontSans({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Développeur full-stack`,
    template: `%s | ${DATA.name}`,
  },
  description: `${DATA.description} spécialisé en développement Microsoft Dynamics 365, React, TypeScript, et Next.js.`,
  keywords: [
    "Développeur full-stack",
    "Développement Web",
    "Développement Web Freelance",
    "Développeur Web Freelance",
    "Freelance",
    "Web Development",
    "Software Engineering",
    "Ingénieur logiciel",
    ...DATA.skills,
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  category: "Technologie",
  creator: DATA.name,
  publisher: DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: `${DATA.url}/api/og`,
    siteName: DATA.name,
    images: [
      {
        url: `${DATA.url}/api/og`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.description,
    creator: "@Zetsumei_FR",
    images: [`${DATA.url}/api/og`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: DATA.name,
              url: DATA.url,
              jobTitle: "Développeur Full-Stack",
              sameAs: [
                DATA.contact.social.GitHub.url,
                DATA.contact.social.LinkedIn.url,
              ],
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
