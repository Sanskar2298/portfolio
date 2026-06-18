import SectionWrapper, { SectionLabel, SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";

const timeline = [
  {
    period: "2021 – Present",
    role: "B.Tech, Electronics & Communication Engineering",
    org: "NIT Hamirpur",
    detail: "CGPA: 8.42 · Signals & Systems, Digital Communication, Analog Electronics, EMFT, Microprocessors.",
    accent: "#6C63FF",
  },
  {
    period: "2023 – 2024",
    role: "Executive Member",
    org: "ISTE, NIT Hamirpur",
    detail: "Organised technical workshops, coding events, and coordinated PRODYOGIKI — the institute's flagship technical fest.",
    accent: "#A78BFA",
  },
  {
    period: "2024",
    role: "Campus Ambassador",
    org: "Hult Prize",
    detail: "Promoted the global student entrepreneurship competition, coordinated registrations, and mentored participating teams.",
    accent: "#A78BFA",
  },
  {
    period: "2024",
    role: "1st Place — Robotics Competition",
    org: "NIT Hamirpur",
    detail: "Secured 1st among 100+ competing teams with an autonomous obstacle-avoidance robot built on Arduino.",
    accent: "#F59E0B",
  },
  {
    period: "2024",
    role: "3rd Place — GDG AlgoWars",
    org: "Google Developer Groups",
    detail: "Competitive programming contest focusing on algorithmic problem-solving under time constraints.",
    accent: "#10B981",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-surface/30">
      <SectionLabel>Background</SectionLabel>
      <SectionTitle>
        Experience & <span className="text-gradient">Milestones</span>
      </SectionTitle>
      <p className="text-text-muted mb-14 max-w-xl">
        The path from classroom to competitions to actual products.
      </p>

      <div className="relative max-w-2xl">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px"
          style={{ background: "linear-gradient(180deg, transparent, rgba(108,99,255,0.3) 10%, rgba(108,99,255,0.3) 90%, transparent)" }}
        />

        <div className="space-y-8 pl-8">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Dot on line */}
              <div
                className="absolute -left-8 top-1.5 w-2 h-2 rounded-full -translate-x-[3px]"
                style={{
                  backgroundColor: t.accent,
                  boxShadow: `0 0 8px ${t.accent}88`,
                }}
              />

              {/* Card */}
              <div
                className="bg-surface border border-border rounded-xl p-5 transition-all duration-300 hover:border-opacity-60"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = t.accent + "33";
                  e.currentTarget.style.boxShadow = `0 8px 30px ${t.accent}10`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-display font-semibold text-text-primary text-base">
                      {t.role}
                    </h3>
                    <p className="text-sm mt-0.5" style={{ color: t.accent }}>
                      {t.org}
                    </p>
                  </div>
                  <span className="text-xs text-text-dim font-display whitespace-nowrap pt-0.5">
                    {t.period}
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