export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-semibold text-text-primary">
          SS<span className="text-accent">.</span>
        </span>
        <p className="text-xs text-text-dim text-center">
          Built with React, Vite, Tailwind CSS & Framer Motion
        </p>
        <p className="text-xs text-text-dim">
          © {new Date().getFullYear()} Sanskar Srivastava
        </p>
      </div>
    </footer>
  );
}
