import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import programming from "../img/project/prog_l.png";
import portfolio from "../img/project/portfolio.png";
import aritmatika from "../img/project/bbm.png";

function Projects() {
  const projects = [
    {
      title: "Website Programming language",
      tech: "HTML, CSS, Bootstrap, JavaScript",
      link: "https://web-programming-fakhri.netlify.app/",
      image: programming
    },
    {
      title: "Website Portfolio SMK",
      tech: "Laravel + MySQL + Admin Panel",
      link: "https://fakhrishiddiqrizkillah-webportofolio.netlify.app/",
      image: portfolio
    },
    {
      title: "Web Operator Artimatika BBM",
      tech: "Html, css, JavaScript, bootstrap",
      link: "https://web-perhitungan-bbm-11525017.netlify.app/",
      image: aritmatika
    }
  ];

  return (
    <section id="projects" className="section-dark py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>

        <Carousel variant="dark">
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <div className="card mx-auto" style={{ maxWidth: "500px" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link "
                  >
                    <h5 className="project-title">{project.title}</h5>
                  </a>
                  <p className="text-secondary">{project.tech}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <style jsx>{`
          .project-link {
            text-decoration: none;
            color: var(--text-primary);
            transition: color 0.3s;
          }
          .project-link:hover {
            color: #007bff;
            cursor: pointer;
          }
          .project-title {
            margin-bottom: 0.5rem;
          }
        `}</style>
      </div>
    </section>
  );
}

export default Projects;