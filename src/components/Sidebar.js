import React, { useState } from 'react';
import { FaHome, FaHeart, FaCode, FaCogs, FaEnvelope, FaPlus, FaChevronRight, FaChevronLeft, FaSearch, FaBars, FaMapPin } from 'react-icons/fa';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scrollChipsRight = () => {
    setScrollPosition(prev => {
      const maxScroll = 300; // Approximate max scroll for the number of chips
      const newPosition = prev + 100;
      return newPosition > maxScroll ? maxScroll : newPosition;
    });
  };

  const scrollChipsLeft = () => {
    setScrollPosition(prev => {
      const newPosition = prev - 100;
      return newPosition < 0 ? 0 : newPosition;
    });
  };

  const menuItems = [
    { id: 'about', label: 'About Me', icon: <FaHome />, cover: 'jd-icon', hasGradient: true },
    { id: 'experience', label: 'Experience', icon: <FaHeart />, cover: 'heart-icon', hasGradient: false },
    { id: 'projects', label: 'Projects', icon: <FaCode />, cover: 'code-icon', hasGradient: false },
    { id: 'skills', label: 'Skills', icon: <FaCogs />, cover: 'cog-icon', hasGradient: false },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, cover: 'envelope-icon', hasGradient: false }
  ];

  return (
    <div className="spotify-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title-row">
          <h2 className="sidebar-title">Joseph Do</h2>
          <div className="sidebar-controls">
          <button className="sidebar-plus-btn" disabled>
              <img src="/images/JD.svg" alt="Joseph Do" className="sidebar-logo" />
            </button>
            <button className="sidebar-plus-btn" disabled>
              <FaPlus size={12} />
            </button>
          </div>
        </div>
        <div className="sidebar-chips-container">
          {scrollPosition > 0 && (
            <button className="sidebar-arrow-btn left" onClick={scrollChipsLeft}>
              <FaChevronLeft size={12} />
            </button>
          )}
          <div className="sidebar-chips" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            <span className="sidebar-chip">SWE</span>
            <span className="sidebar-chip">UGA Alum</span>
            <span className="sidebar-chip">3.5 DUPR</span>
            <span className="sidebar-chip">Matcha Lover</span>
          </div>
          {scrollPosition < 300 && (
            <button className="sidebar-arrow-btn right" onClick={scrollChipsRight}>
              <FaChevronRight size={12} />
            </button>
          )}
        </div>
        
        <div className="sidebar-search-recents">
          <div className="search-recent-item">
            <FaSearch size={16} color="var(--spotify-white)" />
          </div>
          <div className="search-recent-item">
            <span>Recents</span>
            <FaBars size={16} color="var(--spotify-light-grey)" />
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-menu">
          {menuItems.map(item => (
            <li key={item.id} className="nav-item">
              <button 
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
                data-section={item.id}
              >
                <div className="sidebar-playlist-cover">
                  {item.cover === 'jd-icon' ? (
                    <div className="mini-heart-container about-gradient">
                      <img src="/images/JD.svg" alt={item.label} className="jd-logo-icon" />
                    </div>
                  ) : item.cover === 'heart-icon' ? (
                    <div className="mini-heart-container">
                      <FaHeart size={20} color="white" />
                    </div>
                  ) : item.cover === 'code-icon' ? (
                    <div className="mini-heart-container projects-gradient">
                      <FaCode size={20} color="white" />
                    </div>
                  ) : item.cover === 'cog-icon' ? (
                    <div className="mini-heart-container skills-gradient">
                      <FaCogs size={20} color="white" />
                    </div>
                  ) : item.cover === 'envelope-icon' ? (
                    <div className="mini-heart-container contact-gradient">
                      <FaEnvelope size={20} color="white" />
                    </div>
                  ) : (
                    <img src={item.cover} alt={item.label} className="cover-image" />
                  )}
                </div>
                <div className="nav-label-container">
                  <span className="nav-label">{item.label}</span>
                  {item.id === 'about' && (
                    <div className="map-pin-container">
                      <FaMapPin size={12} color="#1ed760" />
                    </div>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;