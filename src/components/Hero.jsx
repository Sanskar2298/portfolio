import { motion } from "framer-motion";
import HeroBg from "./HeroBg";
import sanskarImg from "../assets/sanskar.jpeg";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Sanskar009",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/Sanskar009",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-20 pb-10 overflow-hidden"
    >
      <HeroBg />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — text, 3/5 */}
          <motion.div
            className="lg:col-span-3"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-display tracking-widest uppercase text-text-muted">
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-bold leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
            >
              <span className="block text-text-primary">Hi, I'm</span>
              <span className="block text-gradient">Sanskar</span>
              <span className="block text-text-primary">Srivastava</span>
            </motion.h1>

            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <span className="font-display text-base md:text-lg text-text-muted font-light tracking-wide">
                AI/ML Engineer
              </span>
              <span className="w-1 h-1 rounded-full bg-text-dim" />
              <span className="font-display text-base md:text-lg text-text-muted font-light tracking-wide">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="text-base text-text-muted/75 leading-relaxed mb-10 max-w-lg"
            >
              Building intelligent systems and scalable web products — from
              transformer architectures to production MERN apps.
              ECE @ NIT Hamirpur.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent/90 text-white font-display font-medium rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(108,99,255,0.45)] text-sm"
              >
                View Projects
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border hover:border-accent/40 text-text-muted hover:text-text-primary font-display font-medium rounded-xl transition-all duration-200 text-sm"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-border hover:border-accent/40 flex items-center justify-center text-text-dim hover:text-accent-soft transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image, 2/5 */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Spinning conic ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[3px] z-0"
                style={{
                  borderRadius: "1.5rem",
                  background: "conic-gradient(from 0deg, #6C63FF, #A78BFA, transparent, #6C63FF)",
                }}
              />

              {/* Glow behind */}
              <div
                className="absolute -inset-8 z-0"
                style={{
                  background: "radial-gradient(ellipse, rgba(108,99,255,0.22) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Image container */}
              <div
                className="relative z-10 rounded-3xl overflow-hidden"
                style={{
                  width: "clamp(260px, 28vw, 360px)",
                  height: "clamp(320px, 35vw, 440px)",
                  background: "linear-gradient(145deg, #13132a 0%, #0e0e1f 60%, #1a1040 100%)",
                  border: "1px solid rgba(108,99,255,0.2)",
                }}
              >
                {/*
                  Replace the div below with your photo:
                  <img src="/profile.jpg" alt="Sanskar Srivastava"
                    className="w-full h-full object-cover object-top" />
                */}
                <img
                  src={sanskarImg}
                  alt="Sanskar Srivastava"
                  className="w-full h-full object-cover object-top"
                />

                {/* Bottom gradient on photo */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 z-10"
                  style={{ background: "linear-gradient(0deg, rgba(14,14,26,0.85) 0%, transparent 100%)" }}
                />

                {/* Name tag */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="font-display font-semibold text-text-primary text-sm">Sanskar Srivastava</p>
                  <p className="text-xs text-accent-soft">ECE · NIT Hamirpur</p>
                </div>
              </div>

              {/* Badge — CGPA */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-6 z-20 bg-surface border border-border rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div>
                  <p className="text-xs font-display font-semibold text-text-primary leading-none mb-0.5">8.42 CGPA</p>
                  <p className="text-[10px] text-text-dim leading-none">Academic</p>
                </div>
              </motion.div>

              {/* Badge — Robotics */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-6 z-20 bg-surface border border-border rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <span className="text-base">🏆</span>
                <div>
                  <p className="text-xs font-display font-semibold text-text-primary leading-none mb-0.5">1st Place</p>
                  <p className="text-[10px] text-text-dim leading-none">Robotics</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-text-dim">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}