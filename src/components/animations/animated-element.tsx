import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ANIMATION_DEFAULTS } from "@/config/constants";

interface AnimatedElementProps extends Omit<HTMLMotionProps<"div">, "type"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  type?: "fade" | "slide" | "scale" | "bounce";
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  customHover?: boolean;
  hoverEffect?: {
    scale?: number;
    y?: number;
    x?: number;
    rotate?: number;
  };
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
  duration = ANIMATION_DEFAULTS.duration,
  type = "fade",
  direction = "up",
  className = "",
  customHover = false,
  hoverEffect = {},
  ...props
}) => {
  // Define animation variants based on type and direction
  const getVariants = () => {
    switch (type) {
      case "slide":
        const slideAmount = ANIMATION_DEFAULTS.slideAmount;
        let slideY = 0;
        let slideX = 0;

        switch (direction) {
          case "up": slideY = slideAmount; break;
          case "down": slideY = -slideAmount; break;
          case "left": slideX = slideAmount; break;
          case "right": slideX = -slideAmount; break;
        }

        return {
          initial: { opacity: 0, y: slideY, x: slideX },
          animate: { opacity: 1, y: 0, x: 0 },
          exit: { opacity: 0, y: slideY, x: slideX }
        };

      case "scale":
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 }
        };

      case "bounce":
        return {
          initial: { opacity: 0, y: 50, scale: 0.9 },
          animate: {
            opacity: 1,
            y: 0,
            scale: 1
          },
          exit: { opacity: 0, y: 50, scale: 0.9 }
        };

      case "fade":
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  const variants = getVariants();

  // Define hover effect separately based on customHover prop
  const hoverEffectValue = customHover
    ? hoverEffect
    : { scale: 1.03 };

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
      whileHover={hoverEffectValue}
      transition={{
        duration,
        delay: delay,
        type: "tween"
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;