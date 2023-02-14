const variants = {
  heroFadeIn: {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
    hidden: { opacity: 0, y: 25 }
  },
  scrollFadeIn: {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
    hidden: { opacity: 0, y: 40 }
  },
  footerFadeIn: {
    visible: { opacity: 1, transition: { duration: 1, delay: 0.4 } },
    hidden: { opacity: 0 }
  },
  colorFadeIn: {
    visible: { opacity: 1, transition: { duration: 1, delay: 0.8 } },
    hidden: { opacity: 0 }
  }
}

export default variants;