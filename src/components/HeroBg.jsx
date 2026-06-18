import { useEffect, useRef } from "react";

export default function HeroBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      { x: 0.2, y: 0.3, r: 0.45, color: "108,99,255",  speed: 0.0004  },
      { x: 0.8, y: 0.2, r: 0.35, color: "167,139,250", speed: 0.0003  },
      { x: 0.5, y: 0.8, r: 0.4,  color: "124,58,237",  speed: 0.0005  },
      { x: 0.1, y: 0.7, r: 0.3,  color: "139,92,246",  speed: 0.0006  },
      { x: 0.9, y: 0.6, r: 0.32, color: "99,102,241",  speed: 0.00035 },
    ];

    const draw = () => {
      t++;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#0A0A0F";
      ctx.fillRect(0, 0, w, h);

      orbs.forEach((orb, i) => {
        const angle = t * orb.speed + i * 1.2;
        const cx = (orb.x + Math.sin(angle) * 0.12) * w;
        const cy = (orb.y + Math.cos(angle * 0.7) * 0.1) * h;
        const radius = orb.r * Math.min(w, h);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0,   `rgba(${orb.color},0.18)`);
        grad.addColorStop(0.5, `rgba(${orb.color},0.07)`);
        grad.addColorStop(1,   `rgba(${orb.color},0)`);

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(108,99,255,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(0deg, #0A0A0F 0%, transparent 100%)" }}
      />
    </div>
  );
}