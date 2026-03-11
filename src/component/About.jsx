import profile from "../img/payy.jpeg";

function About() {
  return (
    <section id="about" className="about-section py-5">

      <div className="container">

        <div className="row align-items-center">

          {/* FOTO */}
          <div className="col-lg-5 text-center mb-5 mb-lg-0">

            <div className="about-img-wrapper">
              <img
                src={profile}
                alt="Fakhri Shiddiq Rizkillah"
                className="about-img img-fluid"
              />
            </div>

          </div>

          {/* CONTENT */}
          <div className="col-lg-7">

            <h2 className="section-title mb-4">
              About <span className="text-accent">Me</span>
            </h2>

            <p className="about-text">
              Halo, saya <strong>Fakhri Shiddiq Rizkillah</strong>, lahir 03 Februari 2007
              dan tinggal di Amaliah - Ciawi - Bogor. Saya merupakan alumni
              <strong> SMK Wikrama Bogor </strong>
              dan saat ini sedang menempuh pendidikan di
              <strong> Universitas Binaniaga Indonesia </strong>
              jurusan Sistem Informasi (2025 - 2029).
            </p>

            <p className="about-text">
              Saya adalah seorang
              <span className="highlight"> Frontend Developer </span>
              yang memiliki minat besar dalam membangun website modern,
              responsif, dan user-friendly. Saat ini saya juga sedang
              mengembangkan kemampuan untuk menjadi
              <span className="highlight"> Fullstack Developer</span>.
            </p>

            <p className="about-text">
              Dalam berbagai proyek, saya sering menggunakan teknologi seperti
              <strong> Laravel</strong>, <strong>JavaScript</strong>,
              <strong> React</strong>, dan <strong>Vue.js</strong> untuk
              membangun aplikasi web yang modern dan efisien.
            </p>

            {/* INFO CARD */}
            <div className="row mt-4 about-info">

              <div className="col-md-4">
                <div className="info-card">
                  <h5>Umur</h5>
                  <p>19 Tahun</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-card">
                  <h5>Lokasi</h5>
                  <p>Bogor, Indonesia</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-card">
                  <h5>Status</h5>
                  <p>Mahasiswa</p>
                </div>
              </div>

            </div>

            <a href="#contact" className="btn btn-warning mt-4 px-4 py-2">
              Contact Me
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;