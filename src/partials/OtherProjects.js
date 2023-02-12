import projects from "../data/other-projects.json"
import { motion } from "framer-motion";
import variants from "../components/FramerVariants";

export default function OtherProjects() {
  return (
    <motion.section className="other-projects"
      variants={variants.scrollFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="color-blur blur-5"></div>
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
