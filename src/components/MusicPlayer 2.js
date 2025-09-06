import React, { useState } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp, FaDesktop, FaListUl } from 'react-icons/fa';
import { BiShuffle, BiRepeat } from 'react-icons/bi';
import { FaComputer } from 'react-icons/fa6';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime] = useState(147); // 2:27
  const [duration] = useState(210); // 3:30

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <>
      <div className="music-player">
        {/* Currently Playing */}
        <div className="player-left">
          <div className="current-track">
            <img src="/images/pizza.png" alt="Now Playing" className="track-image" />
            <div className="track-info track-info-music">
              <div className="track-name">Joseph Do's Portfolio</div>
              <div className="track-artist">Software Engineer</div>
            </div>
          </div>
        </div>
        
        {/* Mobile: Play and Shuffle buttons on the right */}
        <div className="player-right">
          <button className="heart-btn">
            <FaComputer />
          </button>
          <button 
            className="play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        {/* Desktop Player Controls */}
        <div className="player-center">
          <div className="player-controls">
            <button className="control-btn">
              <BiShuffle />
            </button>
            <button className="control-btn">
              <FaStepBackward />
            </button>
            <button 
              className="play-btn"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button className="control-btn">
              <FaStepForward />
            </button>
            <button className="control-btn">
              <BiRepeat />
            </button>
          </div>
          
          <div className="progress-bar-container">
            <span className="time-text">{formatTime(currentTime)}</span>
            <div className="progress-bar">
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
          <button className="control-btn">
            <FaListUl />
          </button>
          <button className="control-btn">
            <FaDesktop />
          </button>
          <div className="volume-control">
            <button className="control-btn">
              <FaVolumeUp />
            </button>
            <div className="volume-bar">
              <div className="volume-bg">
                <div className="volume-fill" style={{ width: '70%' }}></div>
                <div className="volume-handle" style={{ left: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile: Progress bar at bottom */}
      <div className="player-center mobile-progress-bar">
        <div className="progress-bar-container">
          <div className="progress-bar">
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
    </>
  );
};

export default MusicPlayer;