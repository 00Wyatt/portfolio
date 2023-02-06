import About from "./partials/About";
import Contact from "./partials/Contact";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Hero from "./partials/Hero";
import Portfolio from "./partials/portfolio/Portfolio";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
