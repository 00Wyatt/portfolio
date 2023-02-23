import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <header id="header" className="header">
      <div className="container">
        <nav className="content">
          <motion.a className="logo" href="/" aria-label="Logo"
            variants={variants.headerFadeIn}
            initial="hidden"
            animate="visible"
          >
            <SVG type={'Logo'} />
          </motion.a>
          <motion.ul className="links desktop"
            variants={variants.headerFadeIn}
            initial="hidden"
            animate="visible"
          >
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </motion.ul>
          <motion.div className={`hamburger ${isActive ? ' active' : ''}`} onClick={handleClick}
            variants={variants.headerFadeIn}
            initial="hidden"
            animate="visible"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </motion.div>
          <AnimatePresence>
            {isActive && (
              <motion.ul className="links mobile"
                key="links"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{ duration: 0.3 }}
              >
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </motion.ul>
            )}</AnimatePresence>
        </nav>
      </div>
    </header>
  )
}