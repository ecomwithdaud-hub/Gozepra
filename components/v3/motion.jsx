"use client";

import { motion } from "framer-motion";

export function FadeUp({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Renders the final value immediately. The old count-up animation flashed
// mid-count numbers (16, $986) in screenshots on load, so the count is gone;
// the fade-up on the parent still gives the section its entrance motion.
export function CountUp({ to, prefix = "", suffix = "", className }) {
  return (
    <span className={className}>
      {prefix}
      {Number(to).toLocaleString()}
      {suffix}
    </span>
  );
}
