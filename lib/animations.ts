/**
 * Think Portfolio — Animation Presets
 * Framer Motion variants for Motion-Driven Minimalism style
 */

import type { Variants, Transition } from "framer-motion";

// ─── Easing Functions ───

export const easing = {
  out: [0.16, 1, 0.3, 1] as const,
  in: [0.55, 0.085, 0.68, 0.53] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
  smooth: [0.25, 0.1, 0.25, 1] as const,
};

// ─── Duration Presets ───

export const duration = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  slower: 0.6,
  slowest: 1.0,
} as const;

// ─── Transition Presets ───

export const transition = {
  default: {
    duration: duration.slower,
    ease: easing.out,
  } satisfies Transition,
  fast: {
    duration: duration.normal,
    ease: easing.out,
  } satisfies Transition,
  spring: {
    type: "spring",
    stiffness: 200,
    damping: 20,
  } satisfies Transition,
  smooth: {
    duration: duration.slow,
    ease: easing.smooth,
  } satisfies Transition,
};

// ─── Entrance Variants ───

/** Fade + slide up — default entrance animation */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.default,
  },
};

/** Fade + slide down */
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.default,
  },
};

/** Simple fade */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow },
  },
};

/** Scale in — for cards, bento items */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.slower, ease: easing.out },
  },
};

/** Slide from left */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.default,
  },
};

/** Slide from right */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.default,
  },
};

// ─── Container Variants ───

/** Stagger children — apply to parent container */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/** Fast stagger — for grids with many items */
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

/** Slow stagger — for hero elements */
export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// ─── Text Animation Variants ───

/** Text reveal — character by character */
export const textRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

/** Single character variant for text reveal */
export const textRevealChar: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.out,
    },
  },
};

/** Word by word reveal */
export const textRevealWord: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slower,
      ease: easing.out,
    },
  },
};

// ─── Navbar Variants ───

export const navbarHide: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.out },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: { duration: duration.normal, ease: easing.in },
  },
};

// ─── Page Transition Variants ───

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.out,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: duration.normal,
      ease: easing.in,
    },
  },
};

// ─── Hover Presets (for whileHover prop) ───

export const hoverLift = {
  y: -2,
  boxShadow:
    "0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)",
  transition: transition.fast,
};

export const hoverScale = {
  scale: 1.02,
  transition: transition.fast,
};

export const hoverGlow = {
  boxShadow: "0 0 24px rgba(37,99,235,0.15)",
  transition: transition.fast,
};

// ─── Tap Presets (for whileTap prop) ───

export const tapScale = {
  scale: 0.98,
};

// ─── Scroll-Triggered Animation Config ───

/** Default viewport config for scroll animations */
export const scrollViewport = {
  once: true,
  margin: "-80px",
  amount: 0.2,
} as const;

/** Config for elements that should animate every time they enter view */
export const scrollViewportRepeat = {
  once: false,
  margin: "-80px",
  amount: 0.3,
} as const;
