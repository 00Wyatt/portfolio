import { motion } from "framer-motion";
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div className="shape block1"
        variants={variants.shapesFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SVG type="Block" />
      </motion.div>
      <motion.div className="shape semicircle1"
        variants={variants.shapesFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SVG type="Semicircle" />
      </motion.div>
      <motion.div className="container"
        variants={variants.footerFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="content">
          <a className="logo" href="/" aria-label="Logo">
            <SVG type={'Logo'} />
          </a>
          <a className="scroll" href="#header">
            <div>Back to top</div>
            <SVG type="UpArrow" width="24" />
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