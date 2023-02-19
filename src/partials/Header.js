import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import SVG from "../components/SVGs";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <header id="header" className="header">
      <div className="container">
        <nav className="content">
          <a className="logo" href="/">
            <SVG type={'Logo'} />
          </a>
          <ul className="links desktop">
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className={`hamburger ${isActive ? ' active' : ''}`} onClick={handleClick}>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
          <AnimatePresence>
            {isActive && (
              <motion.ul className={'links mobile'}
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