import About from "./partials/About";
import Contact from "./partials/Contact";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Hero from "./partials/Hero";
import SplashScreen from "./components/SplashScreen";
import OtherProjects from "./partials/OtherProjects";
import Portfolio from "./partials/Portfolio";

import { useState } from "react";
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  return (
    <div className="App">
      {splashScreen ? (
        <AnimatePresence>
          <SplashScreen setSplashScreen={setSplashScreen} />
        </AnimatePresence>
      ) : (
        <>
          <Header />
          <Hero />
          <Portfolio />
          <OtherProjects />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
