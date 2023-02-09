import About from "./partials/About";
import Contact from "./partials/Contact";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Hero from "./partials/Hero";
import OtherProjects from "./partials/OtherProjects";
import Portfolio from "./partials/Portfolio";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <OtherProjects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
