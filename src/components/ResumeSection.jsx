import SectionWrapper, { SectionLabel, SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <SectionWrapper id="resume">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-surface border border-border rounded-3xl p-10 md:p-16 overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/8 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent-soft/6 blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex-1">
          <SectionLabel>Download</SectionLabel>
          <SectionTitle>
            My Resume
          </SectionTitle>
          <p className="text-text-muted max-w-md leading-relaxed">
            One document with the full picture — projects, academic record,
            skills, and leadership. Formatted cleanly for technical recruiters.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative z-10 flex-shrink-0"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-display font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_40px_rgba(108,99,255,0.5)] text-sm"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
