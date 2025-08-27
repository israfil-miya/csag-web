import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import StructuredData from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ""),
  title: {
    default: "Child Survival Aid Ghana (CSAG)",
    template: "%s | CSAG",
  },
  description:
    "Child Survival Aid Ghana (CSAG) is a non-profit NGO improving access to quality education and resources for children in rural Ghana.",
  keywords: [
    "CSAG",
    "Child Survival Aid Ghana",
    "Ghana NGO",
    "education in Ghana",
    "rural education",
    "non-profit",
    "charity",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Child Survival Aid Ghana (CSAG)",
    title: "Child Survival Aid Ghana (CSAG)",
    description:
      "CSAG expands learning opportunities for children in rural Ghana through books, trained educators, safe spaces and community support.",
    images: [
      {
        url: "/images/csag-logo-no-bg.webp",
        width: 800,
        height: 800,
        alt: "CSAG Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Child Survival Aid Ghana (CSAG)",
    description:
      "CSAG expands learning opportunities for children in rural Ghana through books, trained educators, safe spaces and community support.",
    images: ["/images/csag-logo-no-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global JSON-LD structured data */}
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
