import { motion } from "motion/react";

export default function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 40,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
