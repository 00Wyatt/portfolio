import SVG from "../components/SVGs";
import { motion } from "framer-motion";

export default function Hero() {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
    hidden: { opacity: 0, y: 25 }
  }

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
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
