import React from "react";
import { motion } from "framer-motion";
import { LOADING_SPINNER_SIZES, DEFAULT_LOADING_TEXT, DEFAULT_COLOR_CLASSES } from "@/config/constants";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = DEFAULT_COLOR_CLASSES.loadingSpinner,
  text = DEFAULT_LOADING_TEXT
}) => {
  const sizeClasses = LOADING_SPINNER_SIZES;

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={`rounded-full border-4 border-t-transparent ${color} ${sizeClasses[size]}`}
        animate={{ rotate: 360 }}
        transition={{ 
          repeat: Infinity, 
          duration: 1, 
          ease: "linear" 
        }}
      />
      {text && (
        <p className={`mt-2 text-gray-400 ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;