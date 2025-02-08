import React, { useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import anime from 'animejs/lib/anime.es.js';

const Contacts = () => {
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 576px)").matches; // Bootstrap xs
        const isTablet = window.matchMedia("(min-width: 577px) and (max-width: 768px)").matches; // Bootstrap sm
        const isDesktop = window.matchMedia("(min-width: 769px) and (max-width: 992px)").matches; // Bootstrap md
        const isLargeDesktop = window.matchMedia("(min-width: 993px) and (max-width: 1200px)").matches; // Bootstrap lg
        const isXLargeDesktop = window.matchMedia("(min-width: 1201px)").matches; // Bootstrap xl

        anime({
            targets: '#jd-svg',
            keyframes: isMobile ? [
                { translateX: 0, translateY: 0, rotate: '0deg', duration: 100 }, // Start at Instagram
                { translateX: 330, translateY: -20, rotate: '360deg', duration: 900 }, // Move to GitHub
                { translateX: 15, translateY: 70, rotate: '720deg', duration: 1500 },  // Move to LinkedIn
                { translateX: 350, translateY: 80, rotate: '1080deg', duration: 1200 },  // Move to Email
                { translateX: 0, translateY: -20, rotate: '1440deg', duration: 1000 }  // Return to Instagram
            ] : isTablet ? [
                { translateX: 0, translateY: 0, rotate: '0deg', duration: 100 }, // Start at Instagram
                { translateX: 400, translateY: -45, rotate: '360deg', duration: 900 }, // Move to GitHub
                { translateX: 30, translateY: 80, rotate: '720deg', duration: 1500 },  // Move to LinkedIn
                { translateX: 400, translateY: 25, rotate: '1080deg', duration: 1200 },  // Move to Email
                { translateX: 0, translateY: -40, rotate: '1440deg', duration: 1000 }  // Return to Instagram
            ] : isDesktop ? [
                { translateX: 0, translateY: -20, rotate: '0deg', duration: 100 }, // Start at Instagram
                { translateX: 600, translateY: -60, rotate: '360deg', duration: 900 }, // Move to GitHub
                { translateX: 150, translateY: 120, rotate: '720deg', duration: 1500 },  // Move to LinkedIn
                { translateX: 600, translateY: 90, rotate: '1080deg', duration: 1200 },  // Move to Email
                { translateX: 0, translateY: -80, rotate: '1440deg', duration: 1000 }  // Return to Instagram
            ] : isLargeDesktop ? [
                { translateX: 0, translateY: -40, rotate: '0deg', duration: 100 }, // Start at Instagram
                { translateX: 900, translateY: -75, rotate: '360deg', duration: 900 }, // Move to GitHub
                { translateX: 200, translateY: 150, rotate: '720deg', duration: 1500 },  // Move to LinkedIn
                { translateX: 750, translateY: 80, rotate: '1080deg', duration: 1200 },  // Move to Email
                { translateX: 0, translateY: -80, rotate: '1440deg', duration: 1000 }  // Return to Instagram
            ] : isXLargeDesktop ? [
                { translateX: 0, translateY: 0, rotate: '0deg', duration: 100 }, // Start at Instagram
                { translateX: 1200, translateY: -90, rotate: '360deg', duration: 900 }, // Move to GitHub
                { translateX: 480, translateY: 130, rotate: '720deg', duration: 1500 },  // Move to LinkedIn
                { translateX: 1100, translateY: 130, rotate: '1080deg', duration: 1200 },  // Move to Email
                { translateX: 0, translateY: 0, rotate: '1440deg', duration: 1000 }  // Return to Instagram
            ] : [],
            easing: 'easeInOutSine', // Easing function to mimic a tennis volley
            loop: true,
            direction: 'alternate'
        });
    }, []);

    return (
        <div className="contact-section" id="contact">
            <h1><strong>contact me.</strong></h1>
            <div className="contact-icons">
                <a href="https://www.instagram.com/jdoseph" title="Instagram" target="_blank" rel="noopener noreferrer" id="contact-instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/jdoseph" title="LinkedIn" target="_blank" rel="noopener noreferrer" id="contact-linkedin">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/jdoseph" title="GitHub" target="_blank" rel="noopener noreferrer" id="contact-github">
                    <FaGithub />
                </a>
                <a href="mailto:jdoseph02@gmail.com" title="Email" id="contact-email">
                    <FaEnvelope />
                </a>
                <img src="images/JD-copy.svg" alt="JD" id="jd-svg" className="jd-svg" />
            </div>
        </div>
    );
}

export default Contacts;