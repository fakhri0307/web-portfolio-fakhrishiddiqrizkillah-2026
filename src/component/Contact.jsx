import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-subtitle">
            tertarik bekerja sama atau ingin berdiskusi tentang project? hubungi saya melalui platform berikut.
          </p>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-6">

            <div className="contact-card text-center">

              <div className="contact-email">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:fakhrishiddiq43@gmail.com" class="btn btn-primary">fakhrishiddiq43@gmail.com</a>
              </div>

              <div className="contact-social">

               <a 
                  href="https://www.instagram.com/fchrxxn_/" 
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>

                <a 
                  href="https://wa.me/6285773918581" 
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/fakhri-shiddiq-rizkillah-14242a2a3/" 
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="https://github.com/fakhri0307" 
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;