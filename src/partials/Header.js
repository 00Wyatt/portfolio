import SVG from "../components/SVGs";

export default function Header() {
  return (
    <header id="header" className="header">
      <div className="container">
        <nav className="content">
          <a className="logo" href="/">
            <SVG type={'Logo'} />
          </a>
          <ul className="links">
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
