import about from "../data/about.json"
import skills from "../data/skills.json"
import SVG from "../components/SVGs";
import { motion } from "framer-motion";
import variants from "../components/FramerVariants";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="color-blur blur-5"></div>
      <div className="container">
        <motion.div className="bio"
          variants={variants.scrollFadeIn}
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
          variants={variants.scrollFadeIn}
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
