import about from "../data/about.json"
import skills from "../data/skills.json"
import SVG from "../components/SVGs";
import { motion } from "framer-motion";

export default function About() {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
    hidden: { opacity: 0, y: 50 }
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div className="bio"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}>
          <div className="header">
            <h2>A bit about me.</h2>
          </div>
          <div className="text-block">
            {about && about.map(paragraph => (
              <p key={paragraph.id}>
                {paragraph.content}
              </p>
            ))}
          </div>
        </motion.div>
        <motion.div className="skills"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="header">
            <h2>Things I can do.</h2>
          </div>
          <div className="skill-grid">
            {skills && skills.map(skill => (
              <div className="skill" key={skill.name}>
                <div className="image">
                  <SVG type={skill.logo || skill.name} width={'40'} />
                </div>
                <p className="name">{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
