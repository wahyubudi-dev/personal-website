"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode } from "react";
import { cn } from "@/common/lib/utils";
import { springOptions } from "@/common/lib/motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TILT_RANGE = 8;

/** Wraps children with a subtle 3D tilt that follows the cursor — used to make flat cards feel interactive. */
export default function TiltCard({ children, className }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [TILT_RANGE, -TILT_RANGE]),
    springOptions
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-TILT_RANGE, TILT_RANGE]),
    springOptions
  );

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left) / bounds.width - 0.5);
    y.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={cn("h-full", className)}
    >
      {children}
    </motion.div>
  );
}
