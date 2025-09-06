import React, { useState } from 'react';
import './App.css';
import { FaHome, FaSearch, FaChevronLeft, FaChevronRight, FaBell, FaUserFriends } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MusicPlayer from './components/MusicPlayer';
import WhatsNew from './components/WhatsNew';
import AnimePopover from './components/AnimePopover';
import { MusicProvider } from './context/MusicContext';
import confetti from "canvas-confetti";

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isAnimePopoverOpen, setIsAnimePopoverOpen] = useState(false);

  const handleHomeClick = () => {
    setActiveSection('about');
  };

  const handleBellClick = () => {
    setActiveSection('whatsnew');
  };

  const handleAnimeClick = () => {
    setIsAnimePopoverOpen(true);
  };

  const handleAnimePopoverClose = () => {
    setIsAnimePopoverOpen(false);
  };

  const handleConfetti = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <MusicProvider>
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
            <button className="header-icon-button" onClick={handleAnimeClick}>
              <FaUserFriends />
            </button>
            <button className="profile-icon-button" onClick={handleConfetti}>
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
        <AnimePopover isOpen={isAnimePopoverOpen} onClose={handleAnimePopoverClose} />
      </div>
    </MusicProvider>
  );
}

export default App;
