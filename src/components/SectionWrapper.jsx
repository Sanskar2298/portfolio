import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionWrapper({ id, children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative px-6 py-24 md:py-32 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px bg-accent" />
      <span className="text-xs font-display tracking-widest uppercase text-accent">
        {children}
      </span>
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight mb-4">
      {children}
    </h2>
  );
}
