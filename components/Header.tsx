"use client";

import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-center justify-center">
          <Link href="/" className="flex items-center">
            <Logo size="lg" variant="dark" priority={true} />
          </Link>
        </div>
      </div>
    </header>
  );
}
