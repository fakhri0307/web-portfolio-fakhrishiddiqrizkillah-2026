import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiVuedotjs,
  SiMysql,
} from "react-icons/si";

function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", level: 90 },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", level: 85 },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3", level: 80 },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC", level: 75 },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 80 },
    { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D", level: 75 },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB", level: 70 },
    { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20", level: 80 },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1", level: 75 },
    { name: "PHP", icon: <FaPhp />, color: "#777BB4", level: 80 },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = window.innerWidth < 768 ? 2 : 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? skills.length - 1 : prev - 1
    );
  };

  // auto slider
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section id="skills" className="skills-section py-5">

      <div className="container text-center">

        <h2 className="section-title mb-5">
          My <span className="text-accent">Skills</span>
        </h2>

        <div className="skills-wrapper position-relative">

          {/* LEFT ARROW */}
          <button className="arrow left-arrow" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          {/* SKILLS */}
          <div className="row g-4 justify-content-center">

            {[...Array(visibleCards)].map((_, i) => {
              const skill = skills[(startIndex + i) % skills.length];

              return (
                <div key={i} className="col-6 col-md-3">

                  <div className="skill-card">

                    {/* ICON TERPISAH */}
                    <div className="skill-icon-wrapper">
                      <div
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="skill-content">

                      <h6>{skill.name}</h6>

                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: skill.level + "%",
                            background: skill.color
                          }}
                        ></div>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

          {/* RIGHT ARROW */}
          <button className="arrow right-arrow" onClick={nextSlide}>
            <FaChevronRight />
          </button>

        </div>

      </div>

    </section>
  );
}

export default Skills;