const variants = {
  headerFadeIn: {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
    hidden: { opacity: 0, y: 20 }
  },
  heroFadeIn: {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.75 } },
    hidden: { opacity: 0, y: 20 }
  },
  contentFadeIn: {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.75 } },
    hidden: { opacity: 0, y: 35 }
  },
  footerFadeIn: {
    visible: { opacity: 1, transition: { duration: 1, delay: 0.75 } },
    hidden: { opacity: 0 }
  },
  colorFadeIn: {
    visible: { opacity: 1, transition: { duration: 1, delay: 1 } },
    hidden: { opacity: 0 }
  },
  shapesFadeIn: {
    visible: { opacity: 0.7, transition: { duration: 1, delay: 1.25 } },
    hidden: { opacity: 0 }
  }
}

export default variants;