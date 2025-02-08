import React, { useEffect } from 'react';
import anime from 'animejs';

const About = () => {
  useEffect(() => {
    anime({
      complete: () => {
        anime({
          targets: '.about-image',
          translateY: [0, -20],
          direction: 'alternate',
          loop: true,
          easing: 'easeInOutSine',
          duration: 800
        });
        // Start the text carousel animation after the image animation completes
        const texts = document.querySelectorAll('.about-text span');
        let currentText = 0;

        const animateText = () => {
          anime({
            targets: texts[currentText],
            opacity: [1, 0],
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: () => {
              texts[currentText].style.display = 'none';
              currentText = (currentText + 1) % texts.length;
              texts[currentText].style.display = 'inline';
              anime({
                targets: texts[currentText],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeInOutQuad'
              });
            }
          });
        };

        texts[currentText].style.display = 'inline';
        anime({
          targets: texts[currentText],
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeInOutQuad'
        });

        const interval = setInterval(animateText, 3000);

        return () => clearInterval(interval);
      }
    });
  }, []);

  return (
    <div className="about-section" id="about">
      <h1><img className="about-image" src="/images/JD.svg" alt="About" /></h1>
      <p className="about-text">
        <span>Joseph Do</span>
        <span>Software Engineer</span>
        <span>Secret Security Clearance Holder</span>
        <span>UGA CS Alum</span>
        <span>Pickleball Enthusiast</span>
      </p>
    </div>
  );
};

export default About;