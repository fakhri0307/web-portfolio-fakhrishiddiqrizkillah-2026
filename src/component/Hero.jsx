import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import fotoFormal from "../img/foto_formal.png";

import bg1 from "../img/hero/bg-unbin.jpg";
import bg2 from "../img/hero/bg-wk.jpg";
import bg3 from "../img/hero/bg-kode.jpg";

function Hero() {

  const fullName = "Fakhri Shiddiq Rizkillah";
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const backgrounds = [bg1, bg2, bg3];
  const [bgIndex, setBgIndex] = useState(0);

  // typing nama
  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayedName(fullName.slice(0, index + 1));
      index++;

      if (index === fullName.length) {
        clearInterval(typing);
        setShowCursor(false);
      }
    }, 80);

    return () => clearInterval(typing);
  }, []);

  // background slider
  useEffect(() => {
    const slider = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section
      id="hero"
      className="hero hero-bg"
      style={{
        backgroundImage: `url(${backgrounds[bgIndex]})`
      }}
    >

      <div className="container">
        <div className="row align-items-center gy-5">

          {/* TEXT */}
          <div className="col-lg-6 text-center text-lg-start">

            <h1 className="hero-title fw-bold text-white">

              Hi, I'm{" "}
              <span className="text-accent">
                {displayedName}
                {showCursor && <span className="cursor">|</span>}
              </span>

            </h1>

            <h3 className="hero-subtitle text-light mt-3">

              <Typewriter
                words={[
                  "Frontend Developer",
                  "Back-End Developer",
                  "Fullstack Developer",
                  "UI Designer"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={2000}
              />

            </h3>

            <p className="hero-desc mt-4 text-light">
              Saya membuat website modern, responsive,
              dan user-friendly menggunakan teknologi terbaru.
            </p>

            <div className="hero-buttons mt-4">

              <button className="btn btn-warning px-4 py-2">
                View My Work
              </button>

              <button className="btn btn-outline-light px-4 py-2">
                Contact Me
              </button>

            </div>

          </div>

          {/* FOTO */}
          <div className="col-lg-6 text-center">

            <img
              src={fotoFormal}
              alt="Fakhri"
              className="hero-img img-fluid shadow-img"
            />

          </div>

        </div>
      </div>

      {/* scroll down */}
      <div className="scroll-down">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;