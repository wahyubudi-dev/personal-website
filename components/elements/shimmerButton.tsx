"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";
import { snappySpring, springOptions } from "@/common/lib/motion";

interface ShimmerButtonProp {
  title: string;
  onClick?: () => void;
}

const MAGNETIC_RANGE = 10;

export default function ShimmerButton({ title, onClick }: ShimmerButtonProp) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const magnetX = useSpring(x, springOptions);
  const magnetY = useSpring(y, springOptions);

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * MAGNETIC_RANGE);
    y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * MAGNETIC_RANGE);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: magnetX, y: magnetY }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={snappySpring}
      className="inline-flex animate-shimmer items-center justify-center rounded-full border border-primary/20 bg-[linear-gradient(110deg,hsl(var(--primary)),45%,#a5b4fc,55%,hsl(var(--primary)))] bg-[length:200%_100%] px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-shadow hover:shadow-soft-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {title}
    </motion.button>
  );
}
