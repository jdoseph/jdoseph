import React from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp, FaListUl } from 'react-icons/fa';
import { BiShuffle, BiRepeat } from 'react-icons/bi';
import { useMusic } from '../context/MusicContext';
import Queue from './Queue';
import MobilePlayer from './MobilePlayer';

const MusicPlayer = () => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isShuffled,
    repeatMode,
    isLoading,
    togglePlayPause,
    handleNext,
    handlePrevious,
    seekTo,
    setVolume,
    toggleShuffle,
    toggleRepeat,
    toggleQueue,
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

  const handleVolumeMouseDown = (e) => {
    e.preventDefault();
    
    const volumeBar = e.currentTarget.closest('.volume-bar');
    if (!volumeBar) return;
    
    const handleMouseMove = (e) => {
      const rect = volumeBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newVolume = Math.max(0, Math.min(1, clickX / width));
      setVolume(newVolume);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const getRepeatIcon = () => {
    if (repeatMode === 'one') return '1';
    return <BiRepeat />;
  };

  const volumePercentage = volume * 100;

  const handleMobilePlayerClick = (e) => {
    // Only trigger on mobile screens
    if (window.innerWidth <= 768) {
      // Don't trigger if clicking on buttons
      if (!e.target.closest('button')) {
        toggleMobilePlayer();
      }
    }
  };

  return (
    <>
      <div className="music-player" onClick={handleMobilePlayerClick}>
        {/* Currently Playing */}
        <div className="player-left">
          <div className="current-track">
            <img 
              src={currentTrack?.cover || "/images/default-cover.jpg"} 
              alt="Now Playing" 
              className="track-image" 
            />
            <div className="track-info track-info-music">
              <div className="track-name">
                {currentTrack?.title || "No song selected"}
              </div>
              <div className="track-artist">
                {currentTrack?.artist || "Unknown artist"}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile: Play and Shuffle buttons on the right */}
        <div className="player-right">
          <button 
            className="play-btn"
            onClick={togglePlayPause}
            disabled={!currentTrack || isLoading}
          >
            {isLoading ? '...' : (isPlaying ? <FaPause /> : <FaPlay />)}
          </button>
        </div>

        {/* Desktop Player Controls */}
        <div className="player-center">
          <div className="player-controls">
            <button 
              className={`control-btn ${isShuffled ? 'active' : ''}`}
              onClick={toggleShuffle}
              title="Shuffle"
            >
              <BiShuffle />
            </button>
            <button 
              className="control-btn"
              onClick={handlePrevious}
              disabled={!currentTrack}
              title="Previous"
            >
              <FaStepBackward />
            </button>
            <button 
              className="play-btn"
              onClick={togglePlayPause}
              disabled={!currentTrack || isLoading}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isLoading ? '...' : (isPlaying ? <FaPause /> : <FaPlay />)}
            </button>
            <button 
              className="control-btn"
              onClick={handleNext}
              disabled={!currentTrack}
              title="Next"
            >
              <FaStepForward />
            </button>
            <button 
              className={`control-btn ${repeatMode !== 'none' ? 'active' : ''}`}
              onClick={toggleRepeat}
              title={`Repeat: ${repeatMode}`}
            >
              {getRepeatIcon()}
            </button>
          </div>
          
          <div className="progress-bar-container">
            <span className="time-text">{formatTime(currentTime)}</span>
            <div className="progress-bar" onClick={handleProgressClick}>
              <div className="progress-bg">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
                <div 
                  className="progress-handle" 
                  style={{ left: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            <span className="time-text">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Desktop Right Controls */}
        <div className="player-right desktop-only">
          <button className="control-btn" onClick={toggleQueue} title="Queue">
            <FaListUl />
          </button>
          <div className="volume-control">
            <button className="control-btn">
              <FaVolumeUp />
            </button>
            <div className="volume-bar" onClick={handleVolumeClick}>
              <div className="volume-bg">
                <div 
                  className="volume-fill" 
                  style={{ width: `${volumePercentage}%` }}
                ></div>
                <div 
                  className="volume-handle" 
                  style={{ left: `${volumePercentage}%` }}
                  onMouseDown={handleVolumeMouseDown}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile: Progress bar at bottom */}
      <div className="player-center mobile-progress-bar">
        <div className="progress-bar-container">
          <div className="progress-bar" onClick={handleProgressClick}>
            <div className="progress-bg">
              <div 
                className="progress-fill" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <div 
                className="progress-handle" 
                style={{ left: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <Queue />
      <MobilePlayer />
    </>
  );
};

export default MusicPlayer;