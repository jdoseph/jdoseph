import React from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaChevronDown, FaVolumeUp } from 'react-icons/fa';
import { BiShuffle, BiRepeat } from 'react-icons/bi';
import { useMusic } from '../context/MusicContext';

const MobilePlayer = () => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isShuffled,
    repeatMode,
    isMobilePlayerOpen,
    togglePlayPause,
    handleNext,
    handlePrevious,
    seekTo,
    setVolume,
    toggleShuffle,
    toggleRepeat,
    toggleMobilePlayer
  } = useMusic();

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    seekTo(newTime);
  };

  const handleVolumeClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newVolume = Math.max(0, Math.min(1, clickX / width));
    setVolume(newVolume);
  };

  const getRepeatIcon = () => {
    if (repeatMode === 'one') return '1';
    return <BiRepeat />;
  };

  const volumePercentage = volume * 100;

  if (!isMobilePlayerOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="mobile-player-backdrop" onClick={toggleMobilePlayer}></div>
      
      {/* Mobile Player Off-canvas */}
      <div className="mobile-player-offcanvas">
        {/* Header with close button */}
        <div className="mobile-player-header">
          <button className="mobile-close-btn" onClick={toggleMobilePlayer}>
            <FaChevronDown />
          </button>
        </div>

        {/* Album Art */}
        <div className="mobile-album-container">
          <div className="mobile-album-art">
            <img 
              src={currentTrack?.cover || "/images/default-cover.jpg"} 
              alt="Now Playing" 
            />
          </div>
        </div>

        {/* Track Info */}
        <div className="mobile-track-info">
          <h2 className="mobile-track-title">
            {currentTrack?.title || "No song selected"}
          </h2>
          <p className="mobile-track-artist">
            {currentTrack?.artist || "Unknown artist"}
          </p>
        </div>

        <div className="mobile-time-display">
            <span className="mobile-current-time">{formatTime(currentTime)}</span>
            <span className="mobile-duration">{formatTime(duration)}</span>
          </div>

        {/* Progress Bar */}
        <div className="mobile-progress-section">
          <div className="mobile-progress-bar" onClick={handleProgressClick} style={{bottom: 'unset'}}>
            <div className="mobile-progress-bg">
              <div 
                className="mobile-progress-fill" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <div 
                className="mobile-progress-handle" 
                style={{ left: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mobile-controls">
          <button 
            className={`mobile-control-btn ${isShuffled ? 'active' : ''}`}
            onClick={toggleShuffle}
          >
            <BiShuffle />
          </button>
          
          <button className="mobile-control-btn" onClick={handlePrevious}>
            <FaStepBackward />
          </button>
          
          <button className="mobile-play-btn" onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          
          <button className="mobile-control-btn" onClick={handleNext}>
            <FaStepForward />
          </button>
          
          <button 
            className={`mobile-control-btn ${repeatMode !== 'none' ? 'active' : ''}`}
            onClick={toggleRepeat}
          >
            {getRepeatIcon()}
          </button>
        </div>

        {/* Volume Control */}
        <div className="mobile-volume-section">
          <FaVolumeUp className="mobile-volume-icon" />
          <div className="mobile-volume-bar" onClick={handleVolumeClick}>
            <div className="mobile-volume-bg">
              <div 
                className="mobile-volume-fill" 
                style={{ width: `${volumePercentage}%` }}
              ></div>
              <div 
                className="mobile-volume-handle" 
                style={{ left: `${volumePercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilePlayer;