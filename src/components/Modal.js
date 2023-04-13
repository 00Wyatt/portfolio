import { motion } from "framer-motion";
import Overlay from "./Overlay";
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";

export default function Modal({ modalOpen, setModalOpen, modalData }) {
  return (
    <Overlay onClick={() => (setModalOpen(!modalOpen))}>
      <motion.div className="modal" onClick={(e) => e.stopPropagation()}
        variants={variants.modalDropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="close-x" onClick={() => (setModalOpen(!modalOpen))}>
          <SVG type="XLg" width="32" />
        </div>
        <div className="heading-wrapper">
          <h3>{modalData.title}</h3>
        </div>
        <div className="project-links">
          <a className="site-link" href={modalData.repoLink} target="_blank" rel="noopener noreferrer">
            View Code <SVG type="GitHub" />
          </a>
          <a className="site-link" href={modalData.siteLink} target="_blank" rel="noopener noreferrer">
            Visit Site <SVG type="BoxArrow" />
          </a>
        </div>
        <h4>Overview</h4>
        {modalData.description.map(paragraph => (
          <p>{paragraph}</p>
        ))}
        {modalData.bulletPoints && (
          <ul>
            {modalData.bulletPoints.map(bullet => (
              <li>{bullet}</li>
            ))}
          </ul>
        )}
        <button className="btn" onClick={() => (setModalOpen(!modalOpen))}>Close</button>
      </motion.div>
    </Overlay>
  )
}