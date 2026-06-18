import SectionWrapper, { SectionLabel, SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";

const stats = [
  { value: "8.46", label: "CGPA" },
  { value: "1st", label: "Robotics — 100+ teams" },
  { value: "3rd", label: "GDG AlgoWars" },
  { value: "~300", label: "LeetCode problems" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <SectionLabel>About</SectionLabel>
          <SectionTitle>
            Engineer by training,<br />
            <span className="text-gradient">builder by instinct</span>
          </SectionTitle>
          <div className="space-y-4 text-text-muted leading-relaxed text-base">
            <p>
              I'm a Pre-Final-year Electronics and Communication Engineering student
              at NIT Hamirpur, deeply invested in the intersection of machine
              learning and production software. I enjoy turning research ideas
              into systems that actually ship.
            </p>
            <p>
              My technical focus spans deep learning, transformer architectures,
              and full-stack MERN development — along with strong foundations in
              algorithms and data structures through competitive programming.
            </p>
            <p>
              Outside engineering, I've led initiatives as an ISTE executive,
              organised technical fests like PRODYOGIKI, and mentored peers
              through events like the Hult Prize.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-surface border border-border rounded-2xl p-6 overflow-hidden card-hover noise-overlay"
            >
              <div className="relative z-10">
                <div className="font-display font-bold text-3xl text-gradient mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-text-muted">{s.label}</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-accent/5 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
