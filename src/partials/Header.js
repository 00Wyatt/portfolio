export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="content">
          <a className="logo" href="/">
            <svg width="104" height="56" viewBox="0 0 104 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M91.2087 41.8488C89.3419 43.5847 87.1313 44.9669 84.7031 45.9166C82.2749 46.8662 79.6767 47.3646 77.0568 47.3834C74.4369 47.4021 71.8467 46.9409 69.4339 46.0259C67.0212 45.1109 64.8332 43.7602 62.9949 42.0508L77.2104 28.8318L91.2087 41.8488Z" fill="url(#paint0_linear_142_1464)" />
              <path d="M62.9949 42.0509C59.2823 38.5986 57.1966 33.9162 57.1966 29.0339C57.1966 24.1516 59.2823 19.4693 62.9949 16.017C66.7075 12.5647 71.7428 10.6252 76.9932 10.6252C82.2436 10.6252 87.2789 12.5647 90.9915 16.017L76.9932 29.0339L62.9949 42.0509Z" fill="url(#paint1_linear_142_1464)" />
              <path d="M23.5 47L3.1484 11.75L43.8516 11.75L23.5 47Z" fill="url(#paint2_linear_142_1464)" />
              <path d="M39 47L19.0814 11.75L58.9186 11.75L39 47Z" fill="url(#paint3_linear_142_1464)" />
              <defs>
                <linearGradient id="paint0_linear_142_1464" x1="80" y1="14.5" x2="96.789" y2="40.5852" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0416667" stop-color="#0676F9" />
                  <stop offset="1" stop-color="#6BFACB" />
                </linearGradient>
                <linearGradient id="paint1_linear_142_1464" x1="90.9915" y1="16.017" x2="65.0262" y2="43.9398" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#8838FA" />
                  <stop offset="1" stop-color="#6BFACB" />
                </linearGradient>
                <linearGradient id="paint2_linear_142_1464" x1="47" y1="23.5" x2="0" y2="23.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#8838FA" />
                  <stop offset="1" stop-color="#6BFACB" />
                </linearGradient>
                <linearGradient id="paint3_linear_142_1464" x1="56.4896" y1="47" x2="11.174" y2="35.3909" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0416667" stop-color="#0676F9" />
                  <stop offset="1" stop-color="#6BFACB" />
                </linearGradient>
              </defs>
            </svg>
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
