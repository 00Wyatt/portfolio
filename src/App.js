import { useState } from "react";

import About from "./partials/About";
import Contact from "./partials/Contact";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Hero from "./partials/Hero";
import OtherProjects from "./partials/OtherProjects";
import Portfolio from "./partials/Portfolio";
import DesignLayer from "./components/DesignLayer";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  return (
    <div className="App">
      {splashScreen ? (
        <SplashScreen setSplashScreen={setSplashScreen} />
      ) : (
        <>
          <DesignLayer />
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
};
