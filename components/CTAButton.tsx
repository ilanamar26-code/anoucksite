"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  eventName: string;
  className?: string;
  size?: "default" | "lg";
  delay?: number;
}

export function CTAButton({ 
  href, 
  children, 
  variant = "primary", 
  eventName, 
  className,
  size = "lg",
  delay = 0
}: CTAButtonProps) {
  const handleClick = () => {
    track(eventName);
  };

  const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group";
  
  const sizeStyles = {
    default: "min-h-[48px] px-6 py-3 text-base",
    lg: "min-h-[56px] px-8 py-4 text-lg md:text-xl",
  };
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground shadow-soft2 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-secondary text-secondary-foreground shadow-soft hover:shadow-soft2 hover:scale-[1.02] active:scale-[0.98]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        href={href}
        onClick={handleClick}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {/* Shimmer effect on hover */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Link>
    </motion.div>
  );
}
