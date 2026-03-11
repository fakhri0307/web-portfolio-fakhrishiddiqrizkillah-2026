function PortfolioInfo() {
  return (
    <section id="portofolioInfo" className="portfolio-info py-5">
      <div className="container">

        <h2 className="text-center mb-4 section-title">
          Website Portfolio Explanation
        </h2>

        <div className="accordion" id="portfolioAccordion">

          {/* Navbar */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#info-navbar"
              >
                Navbar
              </button>
            </h2>

            <div
              id="info-navbar"
              className="accordion-collapse collapse show"
              data-bs-parent="#portfolioAccordion"
            >
              <div className="accordion-body">
                Navbar digunakan sebagai navigasi utama website yang berisi
                menu menuju setiap section seperti About, Skills, Projects,
                dan Contact.
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#info-hero"
              >
                Hero Section
              </button>
            </h2>

            <div
              id="info-hero"
              className="accordion-collapse collapse"
              data-bs-parent="#portfolioAccordion"
            >
              <div className="accordion-body">
                Hero adalah bagian pertama yang dilihat pengunjung.
                Berisi nama, foto, dan profesi developer.
              </div>
            </div>
          </div>

          {/* About */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#info-about"
              >
                About
              </button>
            </h2>

            <div
              id="info-about"
              className="accordion-collapse collapse"
              data-bs-parent="#portfolioAccordion"
            >
              <div className="accordion-body">
                Section ini berisi informasi singkat tentang profil,
                pendidikan, dan tujuan karir developer.
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#info-skills"
              >
                Skills
              </button>
            </h2>

            <div
              id="info-skills"
              className="accordion-collapse collapse"
              data-bs-parent="#portfolioAccordion"
            >
              <div className="accordion-body">
                Menampilkan kemampuan teknis seperti HTML, CSS, JavaScript,
                React, dan Laravel.
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#info-certificate"
              >
                Certificate
              </button>
            </h2>

            <div
              id="info-certificate"
              className="accordion-collapse collapse"
              data-bs-parent="#portfolioAccordion"
            >
              <div className="accordion-body">
                Berisi sertifikat pelatihan atau kursus yang pernah
                diperoleh.
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#info-projects"
              >
                Projects
              </button>
            </h2>

            <div
              id="info-projects"
              className="accordion-collapse collapse"
              data-bs-parent="#portfolioAccordion"
            >
              <div className="accordion-body">
                Menampilkan beberapa project yang pernah dibuat lengkap
                dengan teknologi yang digunakan.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PortfolioInfo;