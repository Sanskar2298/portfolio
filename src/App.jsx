import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollCarNavigator from "./components/ScrollCar/ScrollCarNavigator";

function SpotlightCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const move = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-0">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500,
          x: springX, y: springY,
          translateX: "-50%", translateY: "-50%",
          background: "radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-base">
      <SpotlightCursor />
      <div className="relative z-10">
        <Navbar />
        <ScrollCarNavigator />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <ResumeSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
