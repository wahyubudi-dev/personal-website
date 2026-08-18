import { SpringOptions, Transition, Variants } from "framer-motion";

/** Shared spring used for hover/tap micro-interactions across the site. */
export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 22,
};

/** Snappier spring for small controls (buttons, nav icons). */
export const snappySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 20,
};

/** Plain spring physics (no `type` field) for useSpring()-driven motion values,
 *  e.g. mouse-follow tilt/magnetic effects. */
export const springOptions: SpringOptions = { stiffness: 300, damping: 25 };

/** Fade + rise entrance for a single element. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/** Wrap children in this and give each child `variants={fadeInUp}` to stagger them in. */
export function staggerContainer(
  staggerChildren = 0.1,
  delayChildren = 0
): Variants {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren, delayChildren },
    },
  };
}

/** Lift-on-hover used for cards and stat tiles. */
export const hoverLift = {
  whileHover: { y: -4 },
  transition: springTransition,
};

/** Subtle lift for compact chips/badges. */
export const hoverLiftSmall = {
  whileHover: { y: -2 },
  transition: { duration: 0.15 },
};

/** Scale-based press feedback for buttons and icon tiles. */
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: snappySpring,
};

/** Simple fade-up entrance for a whole section, revealed once when scrolled into view. */
export const sectionReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.3 },
};
