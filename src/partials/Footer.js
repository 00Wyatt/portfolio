import SVG from "../components/SVGs";
import { motion } from "framer-motion";
import variants from "../components/FramerVariants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="color-blur blur-8"></div>
      <motion.div className="container"
        variants={variants.footerFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="content">
          <a className="logo" href="/">
            <SVG type={'Logo'} />
          </a>
          <a className="scroll" href="#header">
            Back to top
            <SVG type={'UpArrow'} />
          </a>
        </div>
        <div className="content divider">
          <p className="copyright">Designed and developed by Wyatt Channings © 2023</p>
          <ul className="socials">
            <li>
              <a className="icon" href="https://www.linkedin.com/in/wyatt-channings/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <SVG type={'LinkedIn'} />
              </a>
            </li>
            <li>
              <a className="icon" href="https://github.com/00Wyatt" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <SVG type={'GitHub'} />
              </a>
            </li>
            <li>
              <a className="icon" href="https://www.instagram.com/wyatt.channings/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <SVG type={'Instagram'} />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </footer>
  )
}