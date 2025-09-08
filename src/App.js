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
  const [navigationHistory, setNavigationHistory] = useState(['about']);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  // Enhanced section change function that tracks history
  const navigateToSection = (section) => {
    if (section === activeSection) return; // Don't add duplicate entries
    
    // Remove any forward history if we're not at the end
    const newHistory = navigationHistory.slice(0, currentHistoryIndex + 1);
    
    // Add new section to history
    newHistory.push(section);
    
    setNavigationHistory(newHistory);
    setCurrentHistoryIndex(newHistory.length - 1);
    setActiveSection(section);
  };

  const handleBackClick = () => {
    if (currentHistoryIndex > 0) {
      const newIndex = currentHistoryIndex - 1;
      setCurrentHistoryIndex(newIndex);
      setActiveSection(navigationHistory[newIndex]);
    }
  };

  const handleForwardClick = () => {
    if (currentHistoryIndex < navigationHistory.length - 1) {
      const newIndex = currentHistoryIndex + 1;
      setCurrentHistoryIndex(newIndex);
      setActiveSection(navigationHistory[newIndex]);
    }
  };

  const handleHomeClick = () => {
    navigateToSection('about');
  };

  const handleBellClick = () => {
    navigateToSection('whatsnew');
  };

  const handleAnimeClick = () => {
    setIsAnimePopoverOpen(true);
  };

  const handleAnimePopoverClose = () => {
    setIsAnimePopoverOpen(false);
  };

  // Check if navigation buttons should be enabled
  const canGoBack = currentHistoryIndex > 0;
  const canGoForward = currentHistoryIndex < navigationHistory.length - 1;

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
            <button 
              className="nav-btn" 
              disabled={!canGoBack}
              onClick={handleBackClick}
              title="Go back"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="nav-btn" 
              disabled={!canGoForward}
              onClick={handleForwardClick}
              title="Go forward"
            >
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
        <Sidebar activeSection={activeSection} setActiveSection={navigateToSection} />
          {activeSection === 'whatsnew' ? (
            <div className="spotify-main-content">
              <WhatsNew />
            </div>
          ) : (
            <>
              <MainContent activeSection={activeSection} setActiveSection={navigateToSection} />
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
