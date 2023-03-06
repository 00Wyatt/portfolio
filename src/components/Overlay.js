import { motion } from "framer-motion";

export default function Overlay({ children, onClick }) {
  return (
    <motion.div className="screen-overlay" onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}