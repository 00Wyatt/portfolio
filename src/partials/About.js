import { motion } from "framer-motion";
import about from "../data/about.json"
import skills from "../data/skills.json"
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";

export default function About() {
  const shapes = ['block1', 'block2', 'triangle1', 'triangle2', 'semicircle1', 'semicircle2']

  return (
    <section id="about" className="about">
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
      <div className="container">
        <motion.div className="bio"
          variants={variants.contentFadeIn}
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
          variants={variants.contentFadeIn}
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
