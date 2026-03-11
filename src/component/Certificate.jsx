import { useRef, useState } from "react";
import cert1 from "../img/certificate/c_built_vue.jpg";
import cert2 from "../img/certificate/c_cyberlabs.png";
import certDicod from "../img/certificate/c_dicoding.png";
import cert5 from "../img/certificate/c_satu_code.jpg";
import cert7 from "../img/certificate/c_event_vue.png";
import cert8 from "../img/certificate/c_import_vue.jpg";
import cert9 from "../img/certificate/c_intro_figma.png";
import cert10 from "../img/certificate/c_intro_vue.jpg";
import cert11 from "../img/certificate/c_pt_hexa.jpg";
import cert12 from "../img/certificate/c_wantek.jpg";

function Certificate() {
  const certificates = [
    { id: 1, title: "Vue Basics", issuer: "Built Vue", year: 2020, image: cert1 },
    { id: 2, title: "Cybersecurity Labs", issuer: "Cyberlabs", year: 2021, image: cert2 },
    { id: 8, title: "Import Vue Pro", issuer: "Import Vue", year: 2024, image: cert8 },
    { id: 3, title: "Dicoding Expert", issuer: "Dicoding", year: 2021, image: certDicod },
    { id: 7, title: "Vue Event Workshop", issuer: "Event Vue", year: 2023, image: cert7 },
    { id: 5, title: "Satu Code Mastery", issuer: "Satu Code", year: 2022, image: cert5 },
    { id: 10, title: "Intro Vue", issuer: "Vue", year: 2021, image: cert10 },
    { id: 11, title: "PT Hexa Training", issuer: "PT Hexa", year: 2022, image: cert11 },
    { id: 9, title: "Intro Figma", issuer: "Figma", year: 2020, image: cert9 },
    { id: 12, title: "Wantek Workshop", issuer: "Wantek", year: 2023, image: cert12 },
  ];

  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag slider
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.getBoundingClientRect().left);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleMouseUp = () => setIsDown(false);
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.getBoundingClientRect().left;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Bagi card jadi 2 per slide (atas-bawah)
  const slides = certificates.reduce((acc, cert, index) => {
    if (index % 2 === 0) acc.push([cert]);
    else acc[acc.length - 1].push(cert);
    return acc;
  }, []);

  return (
    <section id="certificate" className="certificate-section py-5">
      <div className="container ">
        <h2 className="text-center mb-5 section-title">Certificate</h2>

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "1rem",
            cursor: isDown ? "grabbing" : "grab",
            scrollSnapType: "x mandatory",
            paddingBottom: "15px",
          }}
          className="certificate-slider"
        >
          {slides.map((pair, idx) => (
            <div
              key={idx}
              style={{
                flex: "0 0 25%", // lebar slide seperti awal
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {pair.map((cert) => (
                <div
                  key={cert.id}
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                    background: "#fff",
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: "350px",
                      height: "250px", // tinggi diperbesar
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "0.5rem 1rem" }}>
                    <h6 style={{ margin: "0.3rem 0", fontSize: "1rem", color: "#000" }}>{cert.title}</h6>
                    <p style={{ margin: "0.3rem 0", fontSize: "0.9rem", color: "#555" }}>
                      {cert.issuer}
                    </p>
                    <span style={{ fontSize: "0.85rem", color: "#888" }}>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Responsif tetap */}
      <style>{`
        @media (max-width: 992px) { /* tablet */
          .certificate-slider > div {
            flex: 0 0 50%;
          }
        }
        @media (max-width: 600px) { /* HP */
          .certificate-slider > div {
            flex: 0 0 90%;
          }
        }
      `}</style>
    </section>
  );
}

export default Certificate;