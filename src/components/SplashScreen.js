import { useEffect } from "react";
import { motion } from "framer-motion";
import SVG from "./SVGs";

export default function SplashScreen({ setSplashScreen }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setSplashScreen]);

  return (
    <div className="splash-screen">
      <motion.div className="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SVG type={'Logo'} />
      </motion.div>
    </div>
  );
};