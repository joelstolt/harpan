"use client";

import { useEffect } from "react";

/**
 * Global klickspårning för tel:- och mailto:-länkar → Umami-events
 * ("lead-ring" / "lead-mejl"). En lyssnare på document i stället för
 * onClick per länk: fångar alla nuvarande och framtida länkar oavsett
 * var i trädet de renderas. Capture-fas så inget stopPropagation
 * hinner svälja klicket.
 */
export default function TelTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"], a[href^="mailto:"]');
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const umami = (window as unknown as {
        umami?: { track: (event: string) => void };
      }).umami;
      umami?.track(href.startsWith("tel:") ? "lead-ring" : "lead-mejl");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
