import { useState } from "react";
import { motion } from "framer-motion";
import variants from "../components/FramerVariants";
import Shapes from "../components/Shapes";

const shapesList = ['block1', 'block2', 'block3', 'triangle1', 'triangle2', 'semicircle1', 'semicircle2'];

export default function Contact() {
  const [inputs, setInputs] = useState({});

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", inputs })
    })
      .then((data) => {
        console.log(data)
        alert("Message received. Thank you!")
      })
      .catch((error) => {
        console.log(error)
        alert("Something went wrong while sending your message. Please try again later or contact me on LinkedIn or by email.");
      });

    setInputs({})
  }

  return (
    <section id="contact" className="contact">
      <Shapes shapesList={shapesList} />
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
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={inputs.name || ""}
                onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={inputs.email || ""}
                onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={inputs.message || ""}
                onChange={handleChange} required />
            </div>
            <button className="btn" type="submit">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}