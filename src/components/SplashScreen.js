import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SVG from "./SVGs";

export default function SplashScreen({ setSplashScreen }) {
  const [exitSplashScreen, setExitSplashScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExitSplashScreen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setExitSplashScreen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreen(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [setSplashScreen]);

  return (
    <div className={`splash-screen ${exitSplashScreen ? "exit" : ""}`}>
      <motion.div className="center-logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeIn" }}
      >
        <motion.div className="logo"
          initial={{ y: -45 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <SVG type="LogoW" />
        </motion.div>
        <motion.div className="logo"
          initial={{ y: 45 }}
          animate={{ y: 2 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <SVG type="LogoC" />
        </motion.div>
      </motion.div>
    </div>
  )
}