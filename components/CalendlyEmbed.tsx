"use client";

import { useEffect, useRef } from "react";
import { bookingProvider, calcomUrl, calendlyUrl } from "@/lib/constants";
import { track } from "@/lib/analytics";

export function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (containerRef.current && !hasTracked.current) {
      track("calendar_view");
      hasTracked.current = true;
    }
  }, []);

  const embedUrl =
    bookingProvider === "calcom" ? calcomUrl : calendlyUrl;

  return (
    <div ref={containerRef} className="w-full h-[800px] md:h-[900px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Calendrier de réservation"
        className="w-full h-full"
      />
    </div>
  );
}
