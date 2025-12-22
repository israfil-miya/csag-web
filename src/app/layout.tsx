import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import GtagRouteTracker from "./components/GtagRouteTracker";
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

const GA_ADS_ID = process.env.NEXT_PUBLIC_GA_ADS_ID;
const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;
const GTAG_SCRIPT_ID = GTAG_ID || GA_ADS_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://csaghana.org";

// Init script: only config once per ID
const gtagInit = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  ${GTAG_ID ? `gtag('config', '${GTAG_ID}', { send_page_view: false });` : ""}
  ${
    GA_ADS_ID
      ? `gtag('config', '${GA_ADS_ID}', { send_page_view: false });`
      : ""
  }
`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Child Survival Aid Ghana (CSAG)",
    template: "%s | CSAG",
  },
  description:
    "Child Survival Aid Ghana (CSAG) is a non-profit NGO improving access to quality education and resources for children in rural Ghana.",
  keywords: [
    "Child Survival Aid Ghana",
    "CSAG Ghana",
    "NGO in Ghana",
    "nonprofit organization Ghana",
    "education for children in Ghana",
    "rural education programs Ghana",
    "charity for children Ghana",
    "support education in rural Ghana",
    "Ghana education NGO",
    "community development Ghana",
    "non-profit for children in Africa",
    "child support programs Ghana",
    "access to education Ghana",
    "help children in Ghana",
    "education charity West Africa",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
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
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        {GTAG_SCRIPT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_SCRIPT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {gtagInit}
            </Script>
          </>
        )}
        {/* Google Tag Manager */}
        {GTM_ID ? (
          <Script id="gtm" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        ) : null}
        <StructuredData />
        <GtagRouteTracker />
        {children}
      </body>
    </html>
  );
}
