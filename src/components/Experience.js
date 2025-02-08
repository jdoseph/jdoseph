import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import anime from 'animejs';

const Experience = () => {
  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      const experienceSectionTop = experienceSection.getBoundingClientRect().top + window.scrollY;
      const experienceSectionHeight = experienceSection.offsetHeight;
      const windowHeight = window.innerHeight;

      if (window.scrollY >= experienceSectionTop - windowHeight + 500 && window.scrollY < experienceSectionTop + experienceSectionHeight) {
        // Animate the logo for the Software Engineer section
        anime({
          targets: '.software-engineer-logo',
          translateX: ['-100%', '100%'],
          opacity: [0, 1],
          rotate: '1turn',
          easing: 'easeInOutQuad',
          duration: 3000,
          loop: false,
          direction: 'normal',
          complete: function() {
            // Animate the border after the logo animation completes
            anime({
              targets: '.software-engineer-border',
              width: ['0%', '100%'],
              easing: 'easeInOutQuad',
              duration: 1000,
              complete: function() {
                // Fade in the content after the border animation completes
                anime({
                  targets: '.software-engineer-content',
                  opacity: [0, 1],
                  duration: 2000,
                  easing: 'easeInOutQuad'
                });
              }
            });
          }
        });

        // Animate the logo for the Student Technician section
        anime({
          targets: '.student-technician-logo',
          translateX: ['100%', '-100%'],
          rotate: '1turn',
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          duration: 3000,
          loop: false,
          direction: 'normal',
          complete: function() {
            // Animate the border after the logo animation completes
            anime({
              targets: '.student-technician-border',
              width: ['0%', '100%'],
              easing: 'easeInOutQuad',
              duration: 1000,
              complete: function() {
                // Fade in the content after the border animation completes
                anime({
                  targets: '.student-technician-content',
                  opacity: [0, 1],
                  duration: 2000,
                  easing: 'easeInOutQuad'
                });
              }
            });
          }
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
    <div className="experience-section" id="experience">
      <h2><strong>experience</strong></h2>
      <div className="experience-item">
        <div className="experience-logo-container">
          <img src="/images/JD.svg" alt="Logo" className="software-engineer-logo" />
          <div className="software-engineer-border"></div>
        </div>
        <div className="experience-content software-engineer-content">
          <h3>software engineer</h3>
          <h4>402d Software Engineering Group (SWEG), Robins AFB</h4>
          <p>July 2024 – Present | Warner Robins, GA</p>
          <ul>
            <li><FaCheckCircle /> Architected and managed cloud-based data infrastructure for efficient dataset management.</li>
            <li><FaCheckCircle /> Collaborated in the design and implementation of software architecture using Agile methodologies.</li>
            <li><FaCheckCircle /> Designed and implemented USAF applications using Blazor, C# .NET frameworks and MongoDB, improving application efficiency by 15%.</li>
            <li><FaCheckCircle /> Developed comprehensive software documentation ensuring compliance with DoD standards and enhancing software lifecycle management.</li>
          </ul>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-logo-container">
          <img src="/images/JD.svg" alt="Logo" className="student-technician-logo" />
          <div className="student-technician-border"></div>
        </div>
        <div className="experience-content student-technician-content">
          <h3>student technician (IT Support Automation)</h3>
          <h4>Georgia Southern University</h4>
          <p>August 2020 – December 2021 | Savannah, GA</p>
          <ul>
            <li><FaCheckCircle /> Automated lab computer software checks using PowerShell, enhancing IT compliance and reducing manual workload by 30%.</li>
            <li><FaCheckCircle /> Delivered IT maintenance and technical support, improving user satisfaction by resolving 90% of issues on first contact.</li>
            <li><FaCheckCircle /> Diagnosed and implemented solutions for hardware and software issues, maintaining 99% uptime across institutional systems.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;