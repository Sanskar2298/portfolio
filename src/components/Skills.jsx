import SectionWrapper, { SectionLabel, SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";

const logos = {
  Python: <svg viewBox="0 0 32 32" className="w-7 h-7"><path d="M15.885 2C12.026 2 12.3 3.656 12.3 3.656l.004 1.71h3.647v.513H9.995S8 5.668 8 9.555c0 3.888 2.151 3.75 2.151 3.75h1.284v-1.804S11.37 9.35 13.35 9.35h3.623s1.892.03 1.892-1.83V4.007S19.125 2 15.885 2zm-1.987 1.153c.338 0 .613.275.613.614a.615.615 0 01-.613.614.615.615 0 01-.613-.614c0-.339.275-.614.613-.614z" fill="#3776AB"/><path d="M16.115 30c3.859 0 3.585-1.656 3.585-1.656l-.004-1.71H15.65v-.513h5.956S24 26.332 24 22.445c0-3.888-2.151-3.75-2.151-3.75h-1.284v1.804s.065 2.151-1.915 2.151H15.027s-1.892-.03-1.892 1.83v3.513S12.875 30 16.115 30zm1.987-1.153a.615.615 0 01-.613-.614c0-.339.275-.614.613-.614.338 0 .613.275.613.614a.615.615 0 01-.613.614z" fill="#FFD43B"/></svg>,
  "C++": <svg viewBox="0 0 32 32" className="w-7 h-7"><path d="M16 2L4 8.5v15L16 30l12-6.5v-15L16 2z" fill="#00599C"/><text x="16" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">C++</text></svg>,
  JavaScript: <svg viewBox="0 0 32 32" className="w-7 h-7"><rect width="32" height="32" rx="3" fill="#F7DF1E"/><text x="16" y="22" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold" fontFamily="sans-serif">JS</text></svg>,
  TypeScript: <svg viewBox="0 0 32 32" className="w-7 h-7"><rect width="32" height="32" rx="3" fill="#3178C6"/><text x="16" y="22" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">TS</text></svg>,
  React: <svg viewBox="0 0 32 32" className="w-7 h-7"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/></svg>,
  "Next.js": <svg viewBox="0 0 32 32" className="w-7 h-7"><circle cx="16" cy="16" r="13" fill="#000"/><text x="16" y="21" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">N</text></svg>,
  "Node.js": <svg viewBox="0 0 32 32" className="w-7 h-7"><path d="M16 2L4 8.8v14.4L16 30l12-6.8V8.8L16 2z" fill="#339933"/><text x="16" y="20" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="sans-serif">NODE</text></svg>,
  Express: <svg viewBox="0 0 32 32" className="w-7 h-7"><text x="3" y="20" fill="#888" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">expr</text></svg>,
  MongoDB: <svg viewBox="0 0 32 32" className="w-7 h-7"><path d="M16 3c0 0-7 8.5-7 15a7 7 0 0014 0C23 11.5 16 3 16 3z" fill="#47A248"/><rect x="15" y="18" width="2" height="10" rx="1" fill="#B8C4B8"/></svg>,
  PostgreSQL: <svg viewBox="0 0 32 32" className="w-7 h-7"><ellipse cx="16" cy="10" rx="10" ry="5" fill="#336791"/><path d="M6 10v12c0 2.76 4.48 5 10 5s10-2.24 10-5V10" stroke="#336791" strokeWidth="2" fill="none"/><text x="16" y="22" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="sans-serif">PG</text></svg>,
  Redis: <svg viewBox="0 0 32 32" className="w-7 h-7"><ellipse cx="16" cy="22" rx="12" ry="5" fill="#D82C20"/><ellipse cx="16" cy="18" rx="12" ry="5" fill="#FF4438"/><ellipse cx="16" cy="14" rx="12" ry="5" fill="#D82C20"/><ellipse cx="16" cy="10" rx="12" ry="5" fill="#FF4438"/></svg>,
  Prisma: <svg viewBox="0 0 32 32" className="w-7 h-7"><path d="M5 26L16 4l11 22H5z" fill="none" stroke="#5A67D8" strokeWidth="2"/><path d="M16 4L5 26h11V4z" fill="#5A67D8" opacity="0.4"/></svg>,
  PyTorch: <svg viewBox="0 0 32 32" className="w-7 h-7"><circle cx="16" cy="18" r="10" fill="#EE4C2C"/><path d="M16 5l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><circle cx="20" cy="14" r="1.5" fill="white"/></svg>,
  TensorFlow: <svg viewBox="0 0 32 32" className="w-7 h-7"><path d="M16 3L5 9v14l11 6 11-6V9L16 3z" fill="#FF6F00"/><text x="16" y="20" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="sans-serif">TF</text></svg>,
  OpenCV: <svg viewBox="0 0 32 32" className="w-7 h-7"><circle cx="10" cy="10" r="6" fill="#5C3EE8"/><circle cx="22" cy="10" r="6" fill="#E83E3E"/><circle cx="16" cy="21" r="6" fill="#3EE83E"/></svg>,
  HuggingFace: <svg viewBox="0 0 32 32" className="w-7 h-7"><circle cx="16" cy="16" r="13" fill="#FFD21E"/><circle cx="12" cy="13" r="2" fill="#111"/><circle cx="20" cy="13" r="2" fill="#111"/><path d="M11 20s1 3 5 3 5-3 5-3" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Docker: <svg viewBox="0 0 32 32" className="w-7 h-7"><rect x="4" y="8" width="4" height="4" rx="0.5" fill="#2496ED"/><rect x="9" y="8" width="4" height="4" rx="0.5" fill="#2496ED"/><rect x="14" y="8" width="4" height="4" rx="0.5" fill="#2496ED"/><rect x="9" y="13" width="4" height="4" rx="0.5" fill="#2496ED"/><rect x="14" y="13" width="4" height="4" rx="0.5" fill="#2496ED"/><rect x="19" y="13" width="4" height="4" rx="0.5" fill="#2496ED"/><rect x="14" y="18" width="4" height="4" rx="0.5" fill="#2496ED"/></svg>,
  Git: <svg viewBox="0 0 32 32" className="w-7 h-7"><path d="M29.5 14.6L17.4 2.5a1.7 1.7 0 00-2.4 0l-2.4 2.4 3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 11-1.2 1.2l-2.7-2.7v7.1a2 2 0 11-1.6 0V11.8a2 2 0 01-1.1-2.6L11.6 6.3 2.5 15.4a1.7 1.7 0 000 2.4l12.1 12.1a1.7 1.7 0 002.4 0l12.5-12.5a1.7 1.7 0 000-2.8z" fill="#F05032"/></svg>,
  Arduino: <svg viewBox="0 0 32 32" className="w-7 h-7"><rect x="2" y="8" width="12" height="16" rx="3" fill="none" stroke="#00979D" strokeWidth="2"/><rect x="18" y="8" width="12" height="16" rx="3" fill="none" stroke="#00979D" strokeWidth="2"/><line x1="10" y1="16" x2="14" y2="16" stroke="#00979D" strokeWidth="2"/><line x1="18" y1="16" x2="22" y2="16" stroke="#00979D" strokeWidth="2"/><line x1="20" y1="13" x2="20" y2="19" stroke="#00979D" strokeWidth="2"/></svg>,
  Tailwind: <svg viewBox="0 0 32 32" className="w-7 h-7"><path d="M9 12.5c1-4 3.5-6 7-5.5-1 2.5.5 5 4 5.5 3 .5 5.5-1 7-3-1 4-3.5 6-7 5.5 1-2.5-.5-5-4-5.5-3-.5-5.5 1-7 3z" fill="#38BDF8"/><path d="M2 20.5c1-4 3.5-6 7-5.5-1 2.5.5 5 4 5.5 3 .5 5.5-1 7-3-1 4-3.5 6-7 5.5 1-2.5-.5-5-4-5.5-3-.5-5.5 1-7 3z" fill="#38BDF8"/></svg>,
};

const categories = [
  {
    title: "Languages",
    accent: "#6C63FF",
    skills: [
      { name: "Python",     level: 90 },
      { name: "C++",        level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 78 },
    ],
  },
  {
    title: "Frontend",
    accent: "#61DAFB",
    skills: [
      { name: "React",    level: 88 },
      { name: "Next.js",  level: 80 },
      { name: "Tailwind", level: 92 },
    ],
  },
  {
    title: "Backend & DB",
    accent: "#47A248",
    skills: [
      { name: "Node.js",    level: 85 },
      { name: "Express",    level: 82 },
      { name: "MongoDB",    level: 80 },
      { name: "PostgreSQL", level: 72 },
      { name: "Redis",      level: 65 },
      { name: "Prisma",     level: 70 },
    ],
  },
  {
    title: "AI / ML",
    accent: "#EE4C2C",
    skills: [
      { name: "PyTorch",     level: 80 },
      { name: "TensorFlow",  level: 72 },
      { name: "OpenCV",      level: 75 },
      { name: "HuggingFace", level: 70 },
    ],
  },
  {
    title: "Tools",
    accent: "#F05032",
    skills: [
      { name: "Git",     level: 90 },
      { name: "Docker",  level: 68 },
      { name: "Arduino", level: 78 },
    ],
  },
];

const allTechs = [
  "Python","React","Node.js","PyTorch","TypeScript","MongoDB",
  "TensorFlow","Docker","C++","Next.js","PostgreSQL","Git",
  "OpenCV","Redis","HuggingFace","Prisma","Tailwind","Arduino",
];

function TechMarquee() {
  const doubled = [...allTechs, ...allTechs];
  return (
    <div className="relative overflow-hidden mb-16 -mx-6">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(90deg, #0A0A0F, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(270deg, #0A0A0F, transparent)" }} />
      <motion.div
        className="flex gap-3 w-max py-1"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/60 whitespace-nowrap flex-shrink-0"
          >
            <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
              {logos[tech] ?? <span className="text-xs text-text-dim">{tech.slice(0,2)}</span>}
            </span>
            <span className="text-xs font-display text-text-muted">{tech}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function SkillCard({ name, level, accent, index }) {
  const logo = logos[name];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="group relative bg-surface border border-border rounded-2xl p-4 overflow-hidden cursor-default transition-colors duration-300"
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accent + "44";
        e.currentTarget.style.boxShadow = `0 8px 30px ${accent}15`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Top edge glow on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}88, transparent)` }}
      />

      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${accent}14` }}
        >
          {logo ?? (
            <span className="text-xs font-display font-bold" style={{ color: accent }}>
              {name.slice(0, 2)}
            </span>
          )}
        </div>
        <span className="text-sm font-display font-medium text-text-primary leading-tight">
          {name}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 rounded-full bg-surface-2 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accent}99, ${accent})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-[10px] text-text-dim font-display">{level}%</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-surface/20">
      <SectionLabel>Expertise</SectionLabel>
      <SectionTitle>
        Skills & <span className="text-gradient">Technologies</span>
      </SectionTitle>
      <p className="text-text-muted mb-12 max-w-xl">
        Built through coursework, competitive programming, and shipping real products.
      </p>

      <TechMarquee />

      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }}
              />
              <h3
                className="font-display font-semibold text-sm tracking-widest uppercase"
                style={{ color: cat.accent }}
              >
                {cat.title}
              </h3>
              <div
                className="flex-1 h-px"
                style={{ background: `linear-gradient(90deg, ${cat.accent}33, transparent)` }}
              />
              <span className="text-xs text-text-dim font-display">
                {cat.skills.length} skills
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {cat.skills.map((skill, si) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  accent={cat.accent}
                  index={si}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}