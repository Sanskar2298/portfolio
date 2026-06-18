import SectionWrapper, { SectionLabel, SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";

const timeline = [
  {
    period: "2021 – Present",
    role: "B.Tech, Electronics & Communication Engineering",
    org: "NIT Hamirpur",
    type: "Education",
    detail: "CGPA: 8.42 · Relevant coursework: Signals & Systems, Digital Communication, Analog Electronics, EMFT, Microprocessors.",
  },
  {
    period: "2023 – 2024",
    role: "Executive Member",
    org: "ISTE, NIT Hamirpur",
    type: "Leadership",
    detail: "Organised technical workshops, coding events, and coordinated PRODYOGIKI — the institute's flagship technical fest.",
  },
  {
    period: "2024",
    role: "Campus Ambassador",
    org: "Hult Prize",
    type: "Leadership",
    detail: "Promoted the global student entrepreneurship competition, coordinated registrations, and mentored participating teams.",
  },
  {
    period: "2024",
    role: "1st Place — Robotics Competition",
    org: "NIT Hamirpur",
    type: "Achievement",
    detail: "Secured 1st among 100+ competing teams with an autonomous obstacle-avoidance robot built on Arduino.",
  },
  {
    period: "2024",
    role: "3rd Place — GDG AlgoWars",
    org: "Google Developer Groups",
    type: "Achievement",
    detail: "Competitive programming contest focusing on algorithmic problem-solving under time constraints.",
  },
];

const typeColors = {
  Education: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Leadership: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Achievement: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-surface/30">
      <SectionLabel>Background</SectionLabel>
      <SectionTitle>Experience & Milestones</SectionTitle>
      <p className="text-text-muted mb-14 max-w-xl">
        The path from classroom to competitions to actual products.
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-[7.5rem] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row gap-4 md:gap-10 pl-6 md:pl-0"
            >
              {/* Period */}
              <div className="md:w-28 flex-shrink-0 flex md:justify-end">
                <span className="text-xs text-text-dim font-display pt-0.5">
                  {t.period}
                </span>
              </div>

              {/* Dot */}
              <div className="absolute left-[-4px] md:left-[7.5rem] mt-1 w-2 h-2 rounded-full bg-accent ring-4 ring-base" style={{ marginLeft: "-1px" }} />

              {/* Content */}
              <div className="flex-1 bg-surface border border-border rounded-xl p-5 ml-2 md:ml-6">
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                  <div>
                    <h3 className="font-display font-semibold text-text-primary text-base">
                      {t.role}
                    </h3>
                    <p className="text-sm text-accent-soft">{t.org}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border font-display ${typeColors[t.type]}`}
                  >
                    {t.type}
                  </span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
