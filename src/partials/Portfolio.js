import projects from "../data/portfolio.json";
import { motion } from "framer-motion";

export default function Portfolio() {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
    hidden: { opacity: 0, y: 50 }
  }

  return (
    <section id="portfolio" className="portfolio">
      {projects && projects.map(project => (
        <div className="project" key={project.id}>
          <div className="container">
            <motion.div className={project.id % 2 === 0 ? "content reverse" : "content"}
              variants={variants}
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
              variants={variants}
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
