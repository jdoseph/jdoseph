import React from 'react';
import { FaPlay, FaShuffle, FaDownload } from 'react-icons/fa6';
import { FaCode, FaCogs, FaEnvelope, FaHeart } from 'react-icons/fa';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contacts from './Contacts';

const MainContent = ({ activeSection, setActiveSection }) => {

  const getSelector = () => {
    switch(activeSection) {
      case 'about':
        return '.episode-item';
      case 'experience':
        return '.experience-track';
      case 'projects':
        return '.spotify-card';
      case 'skills':
        return '.skill-track';
      case 'contact':
        return '.contact-track';
      default:
        return '.episode-item';
    }
  };

  const handlePlay = () => {
    const selector = getSelector();
    const elements = document.querySelectorAll(selector);
    
    if (elements.length > 0) {
      const firstElement = elements[0];
      
      firstElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
      
      firstElement.style.transition = 'background-color 0.3s ease';
      firstElement.style.backgroundColor = 'rgba(30, 215, 96, 0.2)';
      
      setTimeout(() => {
        firstElement.style.backgroundColor = '';
      }, 1000);
    }
  };

  const handleShuffle = () => {
    const selector = getSelector();
    const elements = document.querySelectorAll(selector);
    
    if (elements.length > 0) {
      const randomIndex = Math.floor(Math.random() * elements.length);
      const randomElement = elements[randomIndex];
      
      randomElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
      
      randomElement.style.transition = 'background-color 0.3s ease';
      randomElement.style.backgroundColor = 'rgba(30, 215, 96, 0.2)';
      
      setTimeout(() => {
        randomElement.style.backgroundColor = '';
      }, 1000);
    }
  };

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
          <button className="play-button" onClick={handlePlay}>
            <FaPlay />
          </button>
          <button className="secondary-button" onClick={handleShuffle}>
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