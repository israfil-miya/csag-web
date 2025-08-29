"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ADS_ID = process.env.NEXT_PUBLIC_GA_ADS_ID || "";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function sendPageview(url: string) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("config", GA_ADS_ID, { page_path: url } as Record<
      string,
      unknown
    >);
  } else if (Array.isArray(window.dataLayer)) {
    // Fallback: queue directly to dataLayer if gtag isn't yet defined
    window.dataLayer.push(["config", GA_ADS_ID, { page_path: url }]);
  }
}

export default function GtagRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const url = pathname || "/";
    sendPageview(url);
  }, [pathname]);

  return null;
}
