import { motion } from "framer-motion";
import projects from "../data/other-projects.json"
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";

export default function OtherProjects() {
  const shapes = ['block1', 'triangle1', 'triangle2', 'semicircle1', 'semicircle2']

  return (
    <motion.section className="other-projects"
      variants={variants.contentFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
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
      <div className="header">
        <div className="container">
          <h2>Other Projects</h2>
        </div>
      </div>
      <div className="content">
        {projects && projects.map(project => (
          <div className="wrapper" key={project.id}>
            <div className="project">
              <div className="image"></div>
              <div className="text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
