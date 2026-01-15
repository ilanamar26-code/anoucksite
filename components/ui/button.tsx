import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
  size?: "default" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
      secondary: "bg-muted text-muted-foreground hover:bg-muted/80",
    };
    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-8 py-3 text-base",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "default" | "secondary";
  size?: "default" | "lg";
}

export function ButtonLink({ className, variant = "default", size = "default", href, children, ...props }: ButtonLinkProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
    secondary: "bg-muted text-muted-foreground hover:bg-muted/80",
  };
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-8 py-3 text-base",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export { Button };
