import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import "./Footer.css";

function Footer() {
  return (
    <footer className="footer ">
      <div className="footer-container">
        
        {/* About */}
        <div className="footer-col">
          <h3>About Me</h3>
          <p>
            Fakhri Shiddiq, frontend developer passionate in building clean, modern, and professional web interfaces.
          </p>
        </div>

        {/* Education */}
        <div className="footer-col">
          <h3>Education</h3>
          <ul>
            <li>Universitas Binaniaga Indonesia - Sistem Informasi (2025-2029)</li>
            <li>SMK Wikrama Bogor - Pengembangan Perangkat lunak dan gim (2022-2025)</li>
            <li>Online Certifications: Dicoding, Vue Mastery, Cyberlabs, Wanteknologi, C.O.D.E, My Skill</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Hero</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#certificate">Certificates</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: fakhrishiddiq43@gmail.com</p>
          <p>Phone: +62 857 7391 8581</p>
          <p>Location: Bogor, Indonesia</p>

        <div className="social-icons d-flex gap-3">
          <a href="https://wa.me/6285773918581" className="icon whatshaap"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/fchrxxn_/" className="icon instagram"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/fakhri-shiddiq-rizkillah-14242a2a3/" className="icon linkedin"><FaLinkedinIn /></a>
          <a href="https://github.com/fakhri0307" className="icon github"><FaGithub /></a>
        </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Fakhri Shiddiq Rizkillah. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;