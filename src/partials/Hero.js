import { motion } from "framer-motion";
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";

export default function Hero() {
  const shapes = ['block1', 'block2', 'triangle1', 'triangle2', 'semicircle1', 'semicircle2']
  // const { scrollYProgress } = useScroll();

  return (
    <section id="hero" className="hero" >
      {shapes && shapes.map(shape => {
        let type = '';
        if (shape[0] === 'b') {
          type = 'Block'
        } else if (shape[0] === 't') {
          type = 'Triangle'
        } else {
          type = 'Semicircle'
        }
        return (
          <motion.div className={"shape " + shape} key={shape}
            variants={variants.shapesFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SVG type={type} />
          </motion.div>
        )
      })}
      <motion.ul className="socials"
        initial={{ opacity: 0, x: "35px", y: "-50%" }}
        animate={{ opacity: 1, x: 0, y: "-50%" }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
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
      </motion.ul>
      <motion.a className="scroll" href="#portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <div>Scroll</div>
        <SVG type={'DownArrow'} width="24" />
      </motion.a>
      {/* <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg> */}
      <div className="container" >
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
