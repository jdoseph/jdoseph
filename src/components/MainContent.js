import React, { useState, useEffect } from 'react';
import { FaPlay, FaShuffle, FaDownload } from 'react-icons/fa6';
import { FaCode, FaCogs, FaEnvelope, FaHeart } from 'react-icons/fa';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contacts from './Contacts';

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleNavClick = (e) => {
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
          const section = event.currentTarget.dataset.section;
          if (section) {
            setActiveSection(section);
          }
        });
      });
    };

    handleNavClick();
  }, []);

  const getHeaderInfo = () => {
    switch(activeSection) {
      case 'about':
        return {
          image: '/images/JD.svg',
          profile: '/images/pizza.png',
          metadata: 'hello, i am joseph do!',
          type: 'Playlist',
          title: 'jdoseph',
          meta: 'jdoseph • About Section',
          gradientClass: 'with-gradient'
        };
      case 'experience':
        return {
          image: 'heart-icon',
          profile: '/images/pizza.png',
          metadata: 'work experience i have',
          type: 'Playlist',
          title: 'Work Experience',
          meta: 'jdoseph • 2 positions • 2 years',
          gradientClass: 'experience-gradient'
        };
      case 'projects':
        return {
          image: 'code-icon',
          profile: '/images/pizza.png',
          metadata: 'my babies :D',
          type: 'Playlist',
          title: 'Featured Projects',
          meta: 'jdoseph • 3 projects',
          gradientClass: 'projects-gradient'
        };
      case 'skills':
        return {
          image: 'cog-icon',
          profile: '/images/pizza.png',
          metadata: 'technical skills i have learned lol',
          type: 'Playlist',
          title: 'Skills & Technologies',
          meta: 'jdoseph • 18 Technical Skills',
          gradientClass: 'skills-gradient'
        };
      case 'contact':
        return {
          image: 'envelope-icon',
          profile: '/images/pizza.png',
          metadata: 'lets connect and chat :)',
          type: 'Playlist',
          title: 'Contact Information',
          meta: 'jdoseph • 4 Contacts',
          gradientClass: 'contact-gradient'
        };
      default:
        return {
          image: '/images/JD.svg',
          profile: '/images/pizza.png',
          metadata: 'hello, i am joseph do!',
          type: 'Playlist',
          title: 'Joseph Do',
          meta: 'Joseph Do • About Section',
          gradientClass: 'with-gradient'
        };
    }
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contacts />;
      default:
        return <About />;
    }
  };

  const headerInfo = getHeaderInfo();

  return (
    <div className="spotify-main-content">
      <div className={`playlist-header ${headerInfo.gradientClass}`}>
        <div className="playlist-image">
          {headerInfo.image === 'heart-icon' ? (
            <div className="heart-container">
              <FaHeart size={80} color="white" />
            </div>
          ) : headerInfo.image === 'code-icon' ? (
            <div className="heart-container projects-gradient">
              <FaCode size={80} color="white" />
            </div>
          ) : headerInfo.image === 'cog-icon' ? (
            <div className="heart-container skills-gradient">
              <FaCogs size={80} color="white" />
            </div>
          ) : headerInfo.image === 'envelope-icon' ? (
            <div className="heart-container contact-gradient">
              <FaEnvelope size={80} color="white" />
            </div>
          ) : (
            <img src={headerInfo.image} alt={headerInfo.title} />
          )}
        </div>
        <div className="playlist-details">
          <span className="playlist-type">{headerInfo.type}</span>
          <h1 className="playlist-title">{headerInfo.title}</h1>
          <h2 className="playlist-subtitle">{headerInfo.metadata}</h2>
          <div className="playlist-meta">
            <img src={headerInfo.profile} alt="Profile" className="playlist-profile-image" />
            <span>{headerInfo.meta}</span>
          </div>
        </div>
      </div>
      
      <div className="playlist-controls">
        <div className="control-buttons">
          <button className="play-button">
            <FaPlay />
          </button>
          <button className="secondary-button">
            <FaShuffle />
          </button>
            <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" className="action-btn secondary">
              <FaDownload />
            </a>
        </div>
      </div>
      
      <div className="content-body">
        {renderSection()}
      </div>
    </div>
  );
};

export default MainContent;