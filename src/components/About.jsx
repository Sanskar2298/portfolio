import SectionWrapper, { SectionLabel, SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";

const bentoItems = [
  {
    id: "bio",
    colSpan: "md:col-span-2",
    rowSpan: "",
    content: (
      <div className="flex flex-col h-full justify-between gap-4">
        <div>
          <p className="text-sm text-text-muted leading-relaxed mb-3">
            I'm a final-year ECE student at NIT Hamirpur, building at the
            intersection of machine learning and production software. I enjoy
            turning research ideas into systems that actually ship.
          </p>
          <p className="text-sm text-text-muted leading-relaxed">
            My work spans deep learning, transformer architectures, and
            full-stack MERN development — grounded by strong DSA foundations
            through competitive programming.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-display text-text-muted tracking-wide">
            Open to internships & full-time roles
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "cgpa",
    colSpan: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center gap-1">
        <span className="font-display font-bold text-5xl text-gradient">8.42</span>
        <span className="text-xs text-text-muted font-display tracking-widest uppercase">CGPA</span>
        <span className="text-[10px] text-text-dim mt-1">NIT Hamirpur</span>
      </div>
    ),
  },
  {
    id: "robotics",
    colSpan: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center gap-1">
        <span className="text-4xl mb-1">🏆</span>
        <span className="font-display font-bold text-2xl" style={{ color: "#F59E0B" }}>1st Place</span>
        <span className="text-xs text-text-muted">Robotics · 100+ teams</span>
      </div>
    ),
  },
  {
    id: "focus",
    colSpan: "md:col-span-2",
    content: (
      <div className="flex flex-col h-full gap-3">
        <span className="text-xs font-display tracking-widest uppercase text-accent">Tech Focus</span>
        <div className="flex flex-wrap gap-2">
          {["Machine Learning","Deep Learning","Transformers","MERN Stack","Competitive Programming","Embedded Systems"].map(t => (
            <span
              key={t}
              className="text-xs px-3 py-1.5 rounded-full border border-accent/20 text-text-muted bg-accent/5 font-display"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "algo",
    colSpan: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center gap-1">
        <span className="text-4xl mb-1">⚡</span>
        <span className="font-display font-bold text-2xl" style={{ color: "#10B981" }}>3rd</span>
        <span className="text-xs text-text-muted">GDG AlgoWars</span>
      </div>
    ),
  },
  {
    id: "leet",
    colSpan: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center gap-1">
        <span className="font-display font-bold text-5xl text-gradient">200+</span>
        <span className="text-xs text-text-muted font-display tracking-widest uppercase">LeetCode</span>
        <span className="text-[10px] text-text-dim mt-1">Problems solved</span>
      </div>
    ),
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionLabel>About</SectionLabel>
      <SectionTitle>
        Engineer by training,{" "}
        <span className="text-gradient">builder by instinct</span>
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {bentoItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`
              relative bg-surface border border-border rounded-2xl p-6 overflow-hidden
              ${item.colSpan ?? ""}
              ${item.rowSpan ?? ""}
              min-h-[140px] transition-all duration-300
            `}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(108,99,255,0.3)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(108,99,255,0.08)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {/* Subtle corner glow */}
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(108,99,255,0.08), transparent)" }}
            />
            <div className="relative z-10 h-full">{item.content}</div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}