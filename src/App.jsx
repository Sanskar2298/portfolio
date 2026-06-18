import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollCarNavigator from "./components/ScrollCar/ScrollCarNavigator";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";

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
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-screen bg-base">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <motion.div
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <Cursor />
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
            <Contact />
          </main>
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}