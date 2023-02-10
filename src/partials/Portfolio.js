import projects from "../data/portfolio.json";
import { motion } from "framer-motion";
import variants from "../components/FramerVariants";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      {projects && projects.map(project => (
        <div className="project" key={project.id}>
          <div className="container">
            <motion.div className={project.id % 2 === 0 ? "content reverse" : "content"}
              variants={variants.scrollFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
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
              variants={variants.scrollFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="image"></div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  )
}
