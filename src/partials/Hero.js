import SVG from "../components/SVGs";
import { motion } from "framer-motion";
import variants from "../components/FramerVariants";

export default function Hero() {
  return (
    <section className="hero">
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
      <a className="scroll" href="#portfolio">
        Scroll
        <SVG type={'DownArrow'} />
      </a>
      <div className="container">
        <motion.div className="content"
          variants={variants.heroFadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="heading">
            <p>Hi, my name is</p>
            <h1>Wyatt Channings</h1>
          </div>
          <div className="text-cta">
            <p>I’m a <span>Front End Developer</span> passionate about creating quality experiences on the web.</p>
            <a className="btn" href="#portfolio">View Portfolio</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
