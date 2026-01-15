"use client";

import { testimonials } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function Testimonials() {
  const getInitials = (name: string) => {
    const parts = name.split(" ");
    if (parts.length > 1) {
      return `${parts[0][0]}${parts[1][0]}`;
    }
    return parts[0][0];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <Card
            className={cn(
              "h-full border border-primary/20 bg-gradient-to-br from-white/95 via-primary/5 to-white/90 backdrop-blur-sm shadow-soft hover:shadow-glow hover:scale-[1.02] transition-all duration-300 cursor-default"
            )}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-primary/30 bg-primary/10">
                    <AvatarFallback className="bg-primary/20 text-primary font-semibold text-base">
                      {getInitials(testimonial.name)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-foreground text-lg">{testimonial.name}</span>
                </div>
                <span className="text-xs rounded-full bg-primary/10 text-primary px-3 py-1.5 border border-primary/20 font-medium">
                  {testimonial.location}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-primary/40 text-3xl mb-2 leading-none">"</div>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="text-primary/40 text-3xl mt-2 text-right leading-none">"</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
