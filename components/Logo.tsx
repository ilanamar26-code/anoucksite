"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "auto" | "light" | "dark";
  priority?: boolean;
  bgColor?: "white" | "muted" | "primary" | "beige";
}

const sizeMap = {
  sm: "h-12 w-auto",
  md: "h-16 w-auto",
  lg: "h-24 w-auto",
  xl: "h-32 md:h-40 w-auto",
};

export function Logo({ 
  className, 
  size = "md", 
  variant = "auto", 
  priority = false,
  bgColor = "white"
}: LogoProps) {
  // Détermine quel logo utiliser selon la couleur de fond
  const getLogoSrc = () => {
    // Utilise le nouveau logo Unknown-2.jpeg
    return "/branding/Unknown-2.jpeg";
  };

  const logoSrc = getLogoSrc();

  return (
    <div className={cn("relative flex items-center justify-center w-full h-full", className)}>
      <div className="relative w-full h-full">
        <Image
          src={logoSrc}
          alt="Anouck Amar"
          width={200}
          height={200}
          priority={priority}
          className={cn(
            className?.includes("h-full") ? "w-full h-full" : sizeMap[size],
            "object-contain",
          )}
        />
      </div>
    </div>
  );
}
