const variants = {
  headerFadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }
  },
  heroFadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.75 } }
  },
  contentFadeIn: {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.5 } }
  },
  footerFadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.75 } }
  },
  colorFadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 1 } }
  },
  shapesFadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 0.7, transition: { duration: 1, delay: 1.25 } }
  },
  modalDropIn: {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { type: "spring", damping: 20, stiffness: 275, } },
    exit: { y: "100vh", opacity: 0, transition: { duration: 0.25 } }
  }
}

export default variants;