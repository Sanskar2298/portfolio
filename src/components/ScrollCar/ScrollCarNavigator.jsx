import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero",       label: "Hero" },
  { id: "about",      label: "About" },
  { id: "skills",     label: "Skills" },
  { id: "projects",   label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact" },
];

export default function ScrollCarNavigator() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredSection, setHoveredSection] = useState(null);
  const prevSection = useRef("hero");

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, damping: 25, restDelta: 0.001,
  });

  useEffect(() => {
    const detect = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let current = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
      }
      if (current !== prevSection.current) {
        prevSection.current = current;
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", detect, { passive: true });
    detect();
    return () => window.removeEventListener("scroll", detect);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const activeIndex = SECTIONS.findIndex(s => s.id === activeSection);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center">
      {/* Top cap */}
      <div className="w-px h-8 bg-gradient-to-b from-transparent to-border" />

      {/* Track */}
      <div className="relative flex flex-col items-center">
        {/* Background line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
          style={{ background: "rgba(108,99,255,0.12)" }}
        />

        {/* Filled progress line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-px origin-top"
          style={{
            background: "linear-gradient(180deg, #6C63FF, #A78BFA)",
            scaleY: smoothProgress,
            height: "100%",
            boxShadow: "0 0 6px rgba(108,99,255,0.6)",
          }}
        />

        {/* Dots */}
        {SECTIONS.map((s, i) => {
          const isActive = activeSection === s.id;
          const isPast = i <= activeIndex;
          const isHovered = hoveredSection === s.id;

          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              onMouseEnter={() => setHoveredSection(s.id)}
              onMouseLeave={() => setHoveredSection(null)}
              className="relative flex items-center justify-center z-10"
              style={{ padding: "10px 0", width: 24 }}
              aria-label={`Go to ${s.label}`}
            >
              <motion.div
                animate={{
                  width:  isActive ? 10 : 6,
                  height: isActive ? 10 : 6,
                  backgroundColor: isActive
                    ? "#6C63FF"
                    : isPast
                    ? "#A78BFA"
                    : "rgba(108,99,255,0.2)",
                  boxShadow: isActive
                    ? "0 0 0 3px rgba(108,99,255,0.2), 0 0 12px rgba(108,99,255,0.7)"
                    : isPast
                    ? "0 0 6px rgba(167,139,250,0.4)"
                    : "none",
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-full"
              />

              {/* Hover label */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-7 pointer-events-none"
                  >
                    <span
                      className="text-[11px] font-display tracking-widest uppercase whitespace-nowrap px-2.5 py-1 rounded-lg"
                      style={{
                        color: isActive ? "#A78BFA" : "#6a6a8a",
                        background: "rgba(14,14,26,0.95)",
                        border: "1px solid rgba(108,99,255,0.2)",
                        textShadow: isActive ? "0 0 10px rgba(167,139,250,0.5)" : "none",
                      }}
                    >
                      {s.label}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* Bottom cap */}
      <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />

      {/* Section counter */}
      <span
        className="mt-2 text-[9px] font-display tabular-nums"
        style={{ color: "rgba(108,99,255,0.5)" }}
      >
        {activeIndex + 1}/{SECTIONS.length}
      </span>
    </div>
  );
}