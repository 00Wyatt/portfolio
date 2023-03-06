import { motion } from "framer-motion";
import SVG from "../components/SVGs";
import variants from "../components/FramerVariants";

export default function Shapes({ shapesList }) {
  return (
    <>
      {shapesList && shapesList.map(shape => {
        let type = "";
        if (shape[0] === "b") {
          type = "Block";
        } else if (shape[0] === "t") {
          type = "Triangle";
        } else {
          type = "Semicircle";
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
    </>
  )
}
