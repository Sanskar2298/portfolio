import SectionWrapper, { SectionLabel, SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "MedCompare",
    tagline: "AI-powered medicine comparison platform",
    description:
      "A web platform that lets users compare medicines by composition, side effects, and pricing using structured ML pipelines. Built to reduce information asymmetry in pharmaceutical choices.",
    stack: ["React", "Node.js", "MongoDB", "Python", "Scikit-Learn"],
    links: { github: "#", live: "#" },
    gradient: "linear-gradient(135deg, rgba(108,99,255,0.3) 0%, rgba(167,139,250,0.1) 100%)",
    accent: "#6C63FF",
    mark: "MC",
  },
  {
    number: "02",
    title: "ResumeRadar",
    tagline: "Intelligent resume analysis & scoring",
    description:
      "An NLP-driven tool that parses resumes, matches them against job descriptions, and surfaces gaps with improvement suggestions. Helps students prepare for placement season.",
    stack: ["React", "FastAPI", "HuggingFace", "PostgreSQL", "Prisma"],
    links: { github: "#", live: "#" },
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.05) 100%)",
    accent: "#10B981",
    mark: "RR",
  },
  {
    number: "03",
    title: "Workloom",
    tagline: "Full-stack employee management system",
    description:
      "A production-ready MERN application for managing employee records, departments, and performance. Features role-based auth, real-time dashboards, and a clean admin UI.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redis", "JWT"],
    links: { github: "#", live: "#" },
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.25) 0%, rgba(245,158,11,0.05) 100%)",
    accent: "#F59E0B",
    mark: "WL",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionLabel>Work</SectionLabel>
      <SectionTitle>
        Selected <span className="text-gradient">Projects</span>
      </SectionTitle>
      <p className="text-text-muted mb-14 max-w-xl">
        A handful of things I've built — combining machine learning, clean
        architecture, and a focus on real-world utility.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative bg-surface border border-border rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = p.accent + "44";
              e.currentTarget.style.boxShadow = `0 20px 60px ${p.accent}15`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {/* Colored header band */}
            <div
              className="relative h-28 flex items-center justify-center overflow-hidden"
              style={{ background: p.gradient }}
            >
              {/* Ghost number */}
              <span
                className="absolute -right-3 -bottom-4 font-display font-bold text-[6rem] leading-none select-none pointer-events-none opacity-[0.12]"
                style={{ color: p.accent }}
              >
                {p.number}
              </span>

              {/* Letter mark instead of emoji */}
              <div
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `${p.accent}18`,
                  border: `1px solid ${p.accent}33`,
                }}
              >
                <span
                  className="font-display font-bold text-lg tracking-wider"
                  style={{ color: p.accent }}
                >
                  {p.mark}
                </span>
              </div>

              {/* Top edge line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${p.accent}88, transparent)` }}
              />
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
              <div className="mb-3">
                <span className="text-xs text-text-dim font-display tracking-widest uppercase">
                  {p.tagline}
                </span>
                <h3 className="font-display font-bold text-xl text-text-primary mt-1">
                  {p.title}
                </h3>
              </div>

              <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-0.5 rounded-md bg-surface-2 border border-border text-text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary border border-border hover:border-accent/30 rounded-lg px-3 py-1.5 transition-all duration-200"
                >
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium rounded-lg px-3 py-1.5 transition-all duration-200"
                  style={{ color: p.accent, border: `1px solid ${p.accent}44` }}
                  onMouseEnter={e => e.currentTarget.style.background = p.accent + "15"}
                  onMouseLeave={e => e.currentTarget.style.background = ""}
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}