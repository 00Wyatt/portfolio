import { useState } from "react";
import { motion } from "framer-motion";
import about from "../data/about.json";
import skills from "../data/skills.json";
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";
import Shapes from "../components/Shapes";

const shapesList = ['block1', 'block2', 'triangle1', 'triangle2', 'semicircle1', 'semicircle2'];

export default function About() {
  const [snapOrigin, setSnapOrigin] = useState(false);

  return (
    <section id="about" className="about">
      <Shapes shapesList={shapesList} />
      <div className="container">
        <motion.div className="bio"
          variants={variants.contentFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
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
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="header">
            <h2 onClick={() => setSnapOrigin(!snapOrigin)}>Things I can do.</h2>
          </div>
          <div className="skill-grid">
            {skills && skills.map(skill => (
              <div className="skill" key={skill.name}>
                <motion.div className="image"
                  drag
                  whileDrag={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                  dragSnapToOrigin={snapOrigin}
                >
                  <SVG type={skill.logo || skill.name} width={'40'} />
                </motion.div>
                <p className="name">{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
