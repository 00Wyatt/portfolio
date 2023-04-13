import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";
import projects from "../data/portfolio.json";
import variants from "../components/FramerVariants";
import Shapes from "../components/Shapes";
import gradShow from '../assets/images/grad-show.png';
import georgesGardenCenter from '../assets/images/georges-garden-center.png';
import brickByBrick from '../assets/images/brick-by-brick.png';

const shapesList = ['block1', 'block2', 'block3', 'block4', 'block5', 'block6', 'triangle1', 'triangle2', 'triangle3', 'semicircle1', 'semicircle2', 'semicircle3', 'semicircle4'];
const images = [gradShow, georgesGardenCenter, brickByBrick];

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  function handleClick(data) {
    setModalData(data)
    setModalOpen(!modalOpen)
  }

  return (
    <section id="portfolio" className="portfolio">
      <Shapes shapesList={shapesList} />
      {projects && projects.map(project => (
        <div className="project" key={project.id}>
          <div className="container">
            <motion.div className={`content ${project.id % 2 === 0 ? "reverse" : ""}`}
              variants={variants.contentFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-cta">
                <div className="text">
                  <h2>{project.title}</h2>
                  <p>{project.blurb}</p>
                </div>
                <button className="btn" onClick={() => handleClick(project)}>
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div className="content"
              variants={variants.contentFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="image-wrapper" onClick={() => (handleClick(project))}>
                <img src={images[project.imageId]} alt={project.imageAlt} />
                <div className="image-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} modalData={modalData} />}
      </AnimatePresence>
    </section>
  )
}
