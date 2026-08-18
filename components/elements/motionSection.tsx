"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { sectionReveal } from "@/common/lib/motion";

interface MotionSectionProps {
  className?: string;
  children: ReactNode;
}

/** Fade-up section wrapper shared by every page section — reveals once when scrolled into view. */
export default function MotionSection({
  className,
  children,
}: MotionSectionProps) {
  return (
    <motion.section {...sectionReveal} className={className}>
      {children}
    </motion.section>
  );
}
