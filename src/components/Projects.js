import React, { useEffect } from 'react';
import anime from 'animejs';

const Projects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      const projectsSectionTop = projectsSection.getBoundingClientRect().top + window.scrollY;
      const projectsSectionHeight = projectsSection.offsetHeight;
      const windowHeight = window.innerHeight;

      if (window.scrollY >= projectsSectionTop - windowHeight + 500 && window.scrollY < projectsSectionTop + projectsSectionHeight) {
        anime({
          targets: '.card',
          opacity: [0, 1],
          duration: 2000,
          easing: 'easeInOutQuad',
          delay: anime.stagger(500) // stagger the animation for each card
        });

        // Remove the scroll event listener after the animation is triggered
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="projects-section" id="projects">
      <h2><strong>projects</strong></h2>
      <div className="row">

        {/* Project 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="/images/unix-shell-clone.png"
              className="card-img-top"
              alt="Unix Shell"
            />
            <div className="card-body">
              <h5 className="card-title">Unix Bash Shell</h5>
              <p className="card-text">
                • Developed a custom Unix shell with support for built-in commands (cd, exit), I/O redirection, and process control using fork(), execvp(), and wait(). <br/>
                • Implemented argument parsing and command execution by designing a tokenizer to handle user input, separating commands and arguments for efficient processing.<br/>
                • Enhanced user experience with dynamic directory prompts by customizing the shell prompt to display the working directory and replacing the user home directory with ~ for improved readability.<br/>
              </p>
              <a
                href="https://github.com/jdoseph/Project3Shell"
                className="btn btn-primary card-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="/images/macro-buddy.png"
              className="card-img-top"
              alt="Macro-Buddy"
            />
            <div className="card-body">
              <h5 className="card-title">Macro-Buddy</h5>
              <p className="card-text">
                • Developed a full-stack nutrition tracking web app using the MERN stack (MongoDB, Express.js, React, Node.js), enabling users to log daily meals and track macronutrient intake.<br/>
                • Implemented user authentication and secure data storage with JWT-based authentication and MongoDB for personalized meal diaries and nutrition tracking.<br/>
                • Designed an intuitive and responsive UI with React, ensuring seamless meal logging, real-time macronutrient calculations, and an enhanced user experience.<br/>
              </p>
              <a
                href="https://github.com/AstroMike101/macro-buddy"
                className="btn btn-primary card-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="/images/nba-stats.png"
              className="card-img-top"
              alt="NBA Statistics Model"
            />
            <div className="card-body">
              <h5 className="card-title">NBA Statistics Model</h5>
              <p className="card-text">
                • Developed a machine learning model to predict NBA player performance using Python and scikit-learn.<br/>
                • Collected and preprocessed historical player statistics data from various sources, ensuring data quality and consistency.<br/>
                • Implemented feature engineering techniques to enhance model accuracy, including normalization, feature selection, and handling missing values.<br/>
              </p>
              <a
                href="https://github.com/jdoseph/nba-stats-model"
                className="btn btn-primary card-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;