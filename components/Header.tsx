"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useState } from "react";
import { primaryCTAUrl } from "@/lib/constants";
import { CTAButton } from "./CTAButton";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/cas-d-usage", label: "Cas d'usage" },
    { href: "/#a-propos", label: "À propos" },
    { href: "/#temoignages", label: "Témoignages" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo size="sm" variant="dark" priority={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <CTAButton
              href={primaryCTAUrl}
              eventName="cta_click_header"
              variant="primary"
              size="default"
              className="ml-4"
            >
              Prendre RDV
            </CTAButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/60">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <CTAButton
                  href={primaryCTAUrl}
                  eventName="cta_click_header_mobile"
                  variant="primary"
                  size="default"
                  className="w-full"
                >
                  Prendre RDV
                </CTAButton>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
