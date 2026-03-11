import logo from "../img/logo_fsr.png";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top custom-navbar"
    >
      <div className="container">

        {/* BRAND */}
        <a
          className="navbar-brand d-flex align-items-center fw-bold brand-text"
          href="#hero"
        >
          <img
            src={logo}
            alt="FSR Logo"
            className="navbar-logo"
          />

          {/* Desktop Name */}
          <span className="brand-full ms-2 text-white">
            FAKHRI SHIDDIQ RIZKILLAH
          </span>
        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

            <li className="nav-item">
              <a className="nav-link custom-link" href="#hero">Hero</a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#certificate">Certificate</a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link custom-link" href="#portofolioInfo">PortInfo</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link custom-link" href="#contact">Contact</a>
            </li>


            {/* DARK MODE BUTTON */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;