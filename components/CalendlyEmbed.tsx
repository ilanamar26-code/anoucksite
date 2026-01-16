"use client";

import { useEffect, useRef } from "react";
import { bookingProvider, calcomUrl, calendlyUrl, calcomUsername } from "@/lib/constants";
import { track } from "@/lib/analytics";

declare global {
  interface Window {
    Cal?: any;
  }
}

export function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (containerRef.current && !hasTracked.current) {
      track("calendar_view");
      hasTracked.current = true;
    }
  }, []);

  useEffect(() => {
    if (bookingProvider === "calcom" && containerRef.current && !scriptLoadedRef.current) {
      // Get Cal.com username from config
      const username = calcomUsername && calcomUsername !== "XXXXX" 
        ? calcomUsername 
        : calcomUrl.replace("https://cal.com/", "").replace("/", "").replace("XXXXX", "");

      if (!username || username === "") {
        console.error("Cal.com username not configured. Please set calcomUsername in lib/constants.ts");
        return;
      }

      // Check if script is already loaded
      if (window.Cal) {
        // Script already loaded, just initialize
        window.Cal("init", { origin: "https://cal.com" });
        window.Cal("inline", {
          elementOrSelector: containerRef.current,
          calLink: username,
          layout: "month_view",
        });
        window.Cal("ui", {
          styles: {
            body: { background: "transparent" },
            eventTypeListItem: { background: "transparent" },
          },
        });
        scriptLoadedRef.current = true;
        return;
      }

      // Load Cal.com embed script
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.Cal && containerRef.current) {
          window.Cal("init", { origin: "https://cal.com" });
          window.Cal("inline", {
            elementOrSelector: containerRef.current,
            calLink: username,
            layout: "month_view",
          });
          // Optional: Make background transparent
          window.Cal("ui", {
            styles: {
              body: { background: "transparent" },
              eventTypeListItem: { background: "transparent" },
            },
          });
        }
      };
      document.body.appendChild(script);
      scriptLoadedRef.current = true;
    }
  }, []);

  // For Calendly (iframe approach)
  if (bookingProvider === "calendly") {
    return (
      <div ref={containerRef} className="w-full h-[800px] md:h-[900px] rounded-lg overflow-hidden border border-border shadow-soft">
        <iframe
          src={calendlyUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Calendrier de réservation"
          className="w-full h-full"
        />
      </div>
    );
  }

  // For Cal.com (script-based embed)
  return (
    <div
      ref={containerRef}
      id="cal-embed"
      className="w-full min-h-[800px] md:min-h-[900px] rounded-lg overflow-hidden border border-border shadow-soft bg-background"
    />
  );
}
