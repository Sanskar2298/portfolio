import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20, restDelta: 0.001 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20, restDelta: 0.001 });

  const trailX = useSpring(mouseX, { stiffness: 80, damping: 18, restDelta: 0.001 });
  const trailY = useSpring(mouseY, { stiffness: 80, damping: 18, restDelta: 0.001 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const onLeave  = () => setVisible(false);
    const onEnter  = () => setVisible(true);
    const onDown   = () => setClicking(true);
    const onUp     = () => setClicking(false);

    const onHoverStart = () => setHovering(true);
    const onHoverEnd   = () => setHovering(false);

    // detect hovering over interactive elements
    const addListeners = () => {
      document.querySelectorAll("a, button, [role='button']").forEach(el => {
        el.addEventListener("mouseenter", onHoverStart);
        el.addEventListener("mouseleave", onHoverEnd);
      });
    };

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    addListeners();

    // re-add on DOM changes
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null; // hide on touch devices
  }

  return (
    <>
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width:  hovering ? 40 : clicking ? 20 : 32,
          height: hovering ? 40 : clicking ? 20 : 32,
          borderColor: hovering
            ? "rgba(167,139,250,0.6)"
            : "rgba(108,99,255,0.4)",
          backgroundColor: hovering
            ? "rgba(108,99,255,0.06)"
            : "transparent",
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid rgba(108,99,255,0.4)",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width:  clicking ? 6 : 6,
          height: clicking ? 6 : 6,
          backgroundColor: hovering ? "#A78BFA" : "#6C63FF",
          boxShadow: hovering
            ? "0 0 10px rgba(167,139,250,0.8)"
            : "0 0 6px rgba(108,99,255,0.6)",
          scale: clicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}