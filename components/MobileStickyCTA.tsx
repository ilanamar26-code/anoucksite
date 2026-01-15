"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { primaryCTAUrl } from "@/lib/constants";

export function MobileStickyCTA() {
  const pathname = usePathname();
  
  // Hide on booking page
  if (pathname === "/rdv") {
    return null;
  }

  const handleClick = () => {
    track("cta_click_sticky_mobile");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg pb-safe">
      <div className="px-4 py-3 flex items-center justify-between max-w-screen-sm mx-auto">
        <div className="flex-1 min-w-0 mr-3">
          <div className="text-sm font-semibold text-gray-900">Séance de clarté</div>
          <div className="text-xs text-gray-600">Réserver en 1 minute</div>
        </div>
        <Link
          href={primaryCTAUrl}
          onClick={handleClick}
          className="flex-shrink-0 bg-rose-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-rose-700 transition-colors min-h-[44px] flex items-center justify-center text-sm whitespace-nowrap"
        >
          Prendre RDV
        </Link>
      </div>
    </div>
  );
}
