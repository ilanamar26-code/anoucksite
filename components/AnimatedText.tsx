"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function AnimatedText({ 
  children, 
  className = "", 
  delay = 0,
  stagger = 0.1 
}: AnimatedTextProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  if (typeof children === "string") {
    const words = children.split(" ");
    return (
      <motion.span
        className={className}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={item} className="inline-block mr-1.5">
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
