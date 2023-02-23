import { motion } from "framer-motion";
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";

export default function Contact() {
  const shapes = ['block1', 'block2', 'block3', 'triangle1', 'triangle2', 'semicircle1', 'semicircle2']

  return (
    <section id="contact" className="contact">
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
        <motion.div className="content"
          variants={variants.contentFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="header">
            <h2>Get in touch.</h2>
            <p>Have a question or want to work together?</p>
          </div>
          <form id="form" action="#">
            <div className="field">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="field">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="field">
              <label for="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button className="btn" type="submit">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
