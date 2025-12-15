"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  animateOnHover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  animateOnHover = false,
  onClick,
  id,
  style,
  tabIndex,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  "aria-describedby": ariaDescribedby,
  ...props
}) => {
  const cardClasses = cn(
    "bg-glass-white backdrop-blur-lg border border-glass-border rounded-xl shadow-xl",
    className
  );

  if (animateOnHover) {
    // Type the motion props separately to avoid conflicts
    const motionProps: MotionProps = {
      whileHover: {
        y: -5
      },
      transition: {
        duration: 0.3,
        type: "tween"
      }
    };

    return (
      <motion.div
        className={cn(cardClasses, "p-4 sm:p-5 md:p-6")}
        onClick={onClick}
        id={id}
        style={style}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        {...motionProps}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(cardClasses, "p-4 sm:p-5 md:p-6")}
      onClick={onClick}
      id={id}
      style={style}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      {...props}
    >
      {children}
    </div>
  );
};