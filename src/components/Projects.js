import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Rate Your Court ",
      description: "Rate Your Court is a full-stack platform that helps players discover, review, and manage courts.",
      image: "/images/rateyourcourt.png",
      github: "https://rateyourcourt.com",
      tech: ["React", "Node.js", "Redis", "PostgreSQL"]
    },
    {
      title: "Macro-Buddy",
      description: "Full-stack nutrition tracking web app using MERN stack. Features JWT authentication, real-time calculations, and responsive UI.",
      image: "/images/macro-buddy.png",
      github: "https://github.com/AstroMike101/macro-buddy",
      tech: ["React", "Node.js", "MongoDB", "JWT"]
    },
    {
      title: "Unix Bash Shell",
      description: "Custom Unix shell with I/O redirection, process control, and dynamic directory prompts. Built with C using fork(), execvp(), and wait().",
      image: "/images/unix-shell-clone.png",
      github: "https://github.com/jdoseph/Project3Shell",
      tech: ["C", "Unix", "System Programming"]
    }
  ];

  return (
    <div className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="spotify-card">
            <div className="card-image-container">
              <img src={project.image} alt={project.title} className="card-image" />
              <a
                href={project.github}
                className="spotify-play-button"
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
              >
                <FaPlay />
              </a>
            </div>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;