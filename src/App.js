import React from 'react';
import './App.css';
import { FaHome, FaSearch, FaChevronLeft, FaChevronRight, FaBell, FaUserFriends } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MusicPlayer from './components/MusicPlayer';

function App() {
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
          <button className="home-icon-button">
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
          <button className="header-icon-button">
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
        <Sidebar />
        <MainContent />
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
