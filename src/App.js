import React, { useState } from 'react';
import './App.css';
import { FaHome, FaSearch, FaChevronLeft, FaChevronRight, FaBell, FaUserFriends } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MusicPlayer from './components/MusicPlayer';
import WhatsNew from './components/WhatsNew';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleHomeClick = () => {
    setActiveSection('about');
  };

  const handleBellClick = () => {
    setActiveSection('whatsnew');
  };

  return (
    <div className="spotify-app">
      <div className="search-header">
        <div className="nav-buttons">
          <button className="nav-btn" disabled>
            <FaChevronLeft />
          </button>
          <button className="nav-btn" disabled>
            <FaChevronRight />
          </button>
        </div>
        <div className="search-center">
          <button className="home-icon-button" onClick={handleHomeClick}>
              <FaHome />
          </button>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              className="search-input" 
              placeholder="What do you want to listen to?"
            />
          </div>
        </div>
        <div className="header-right-icons">
          <button className="header-icon-button" onClick={handleBellClick}>
            <FaBell />
          </button>
          <button className="header-icon-button">
            <FaUserFriends />
          </button>
          <button className="profile-icon-button">
            <img src="/images/pizza.png" alt="Profile" className="profile-image" />
          </button>
        </div>
      </div>
      <div className="app-body">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        {activeSection === 'whatsnew' ? (
          <div className="spotify-main-content">
            <WhatsNew />
          </div>
        ) : (
          <>
            <MainContent activeSection={activeSection} setActiveSection={setActiveSection} />
          </>
        )}
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
