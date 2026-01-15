"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "light";
  priority?: boolean;
}

const sizeMap = {
  sm: "h-12 w-auto",
  md: "h-16 w-auto",
  lg: "h-24 w-auto",
  xl: "h-32 md:h-40 w-auto",
};

export function Logo({ className, size = "md", variant = "dark", priority = false }: LogoProps) {
  const logoSrc = variant === "dark" 
    ? "/branding/logo-white-solid.jpeg" 
    : "/branding/logo-beige-solid.jpeg";

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <div className="relative">
        <Image
          src={logoSrc}
          alt="Anouck Amar"
          width={200}
          height={200}
          priority={priority}
          className={cn(
            sizeMap[size],
            "object-contain",
          )}
        />
      </div>
    </div>
  );
}
