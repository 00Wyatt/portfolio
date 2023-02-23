import { motion } from "framer-motion";
import projects from "../data/portfolio.json";
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";

export default function Portfolio() {
  const shapes = ['block1', 'block2', 'block3', 'block4', 'block5', 'block6', 'triangle1', 'triangle2', 'triangle3', 'semicircle1', 'semicircle2', 'semicircle3', 'semicircle4']

  return (
    <section id="portfolio" className="portfolio">
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
      {projects && projects.map(project => (
        <div className="project" key={project.id}>
          <div className="container">
            <motion.div className={project.id % 2 === 0 ? "content reverse" : "content"}
              variants={variants.contentFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-cta">
                <div className="text">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <button className="btn">Learn More</button>
              </div>
            </motion.div>
            <motion.div className="content"
              variants={variants.contentFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="image"></div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  )
}
