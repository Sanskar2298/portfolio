import SectionWrapper, { SectionLabel, SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SectionWrapper id="contact" className="bg-surface/30">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <SectionLabel>Contact</SectionLabel>
        <SectionTitle>
          Let's build something<br />
          <span className="text-gradient">together</span>
        </SectionTitle>
        <p className="text-text-muted leading-relaxed mt-4">
          Whether it's a project, an internship, or just a conversation about
          ML or full-stack work — I'm open to it.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Info */}
        <div className="space-y-6">
          {[
            {
              label: "Email",
              value: "sanskar@example.com",
              href: "mailto:sanskar@example.com",
              icon: (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/sanskar-srivastava",
              href: "https://linkedin.com",
              icon: (
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              label: "GitHub",
              value: "github.com/Sanskar009",
              href: "https://github.com/Sanskar009",
              icon: (
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              ),
            },
            {
              label: "LeetCode",
              value: "leetcode.com/Sanskar009",
              href: "https://leetcode.com/Sanskar009",
              icon: (
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              ),
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-accent/30 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-text-muted group-hover:text-accent transition-colors flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-xs text-text-dim font-display uppercase tracking-wider mb-0.5">{item.label}</div>
                <div className="text-sm text-text-muted group-hover:text-text-primary transition-colors">{item.value}</div>
              </div>
              <svg className="ml-auto text-text-dim group-hover:text-accent transition-colors" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="bg-surface border border-border rounded-2xl p-8">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-8 text-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#6C63FF" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-text-primary">Message sent!</h3>
              <p className="text-sm text-text-muted">I'll get back to you soon.</p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                className="text-xs text-accent hover:text-accent-soft transition-colors mt-2"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-display text-text-dim uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-dim focus:outline-none focus:border-accent/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-display text-text-dim uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-dim focus:outline-none focus:border-accent/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-display text-text-dim uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What would you like to discuss?"
                  className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-dim focus:outline-none focus:border-accent/40 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-accent hover:bg-accent/90 text-white font-display font-medium rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(108,99,255,0.35)] text-sm"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
