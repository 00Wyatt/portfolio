import { motion } from "framer-motion";

export default function Contact() {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
    hidden: { opacity: 0, y: 50 }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div className="content"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
