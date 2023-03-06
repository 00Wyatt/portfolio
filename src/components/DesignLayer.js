import { motion } from "framer-motion";
import variants from "../components/FramerVariants";

export default function DesignLayer() {
  return (
    <div className="design-layer">
      <motion.div className="color-blur blur-1"
        variants={variants.colorFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>
      <motion.div className="color-blur blur-2"
        variants={variants.colorFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-300px 0px -300px 0px" }}
      ></motion.div>
      <motion.div className="color-blur blur-3"
        variants={variants.colorFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-300px 0px -300px 0px" }}
      ></motion.div>
      <motion.div className="color-blur blur-4"
        variants={variants.colorFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-300px 0px -300px 0px" }}
      ></motion.div>
      <motion.div className="color-blur blur-5"
        variants={variants.colorFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-300px 0px -300px 0px" }}
      ></motion.div>
      <motion.div className="color-blur blur-6"
        variants={variants.colorFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-300px 0px -300px 0px" }}
      ></motion.div>
      <motion.div className="color-blur blur-7"
        variants={variants.colorFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-300px 0px -300px 0px" }}
      ></motion.div>
      <motion.div className="color-blur blur-8"
        variants={variants.colorFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-300px 0px -300px 0px" }}
      ></motion.div>
    </div>
  )
}