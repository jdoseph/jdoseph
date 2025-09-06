import React from 'react';
import { FaPlay, FaPause, FaTimes } from 'react-icons/fa';
import { useMusic } from '../context/MusicContext';

const Queue = () => {
  const {
    currentTrack,
    isPlaying,
    playlist,
    isQueueOpen,
    toggleQueue,
    playTrack
  } = useMusic();

  if (!isQueueOpen) return null;

  const currentIndex = playlist.findIndex(track => track.id === currentTrack?.id);
  const nextTracks = currentIndex >= 0 ? playlist.slice(currentIndex + 1) : [];

  const handleTrackClick = (track) => {
    playTrack(track);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="queue-backdrop" onClick={toggleQueue}></div>
      
      {/* Queue Off-canvas */}
      <div className="queue-offcanvas">
        <div className="queue-header">
          <h2>Queue</h2>
          <button className="queue-close-btn" onClick={toggleQueue}>
            <FaTimes />
          </button>
        </div>

        <div className="queue-content">
          {/* Now Playing Section */}
          {currentTrack && (
            <div className="queue-section">
              <h3 className="queue-section-title">Now Playing</h3>
              <div className="queue-track now-playing">
                <img 
                  src={currentTrack.cover || "/images/default-cover.jpg"} 
                  alt={currentTrack.title}
                  className="queue-track-image"
                />
                <div className="queue-track-info">
                  <div className="queue-track-title">{currentTrack.title}</div>
                  <div className="queue-track-artist">{currentTrack.artist}</div>
                </div>
                <div className="queue-track-duration">
                  {currentTrack.duration}
                </div>
                <div className="queue-track-playing">
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </div>
              </div>
            </div>
          )}

          {/* Next Up Section */}
          {nextTracks.length > 0 && (
            <div className="queue-section">
              <h3 className="queue-section-title">Next Up from: Joseph's Favorites</h3>
              <div className="queue-tracks">
                {nextTracks.map((track, index) => (
                  <div 
                    key={track.id} 
                    className="queue-track"
                    onClick={() => handleTrackClick(track)}
                  >
                    <img 
                      src={track.cover || "/images/default-cover.jpg"} 
                      alt={track.title}
                      className="queue-track-image"
                    />
                    <div className="queue-track-info">
                      <div className="queue-track-title">{track.title}</div>
                      <div className="queue-track-artist">{track.artist}</div>
                    </div>
                    <div className="queue-track-duration">
                      {track.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {nextTracks.length === 0 && currentTrack && (
            <div className="queue-section">
              <h3 className="queue-section-title">Next Up</h3>
              <div className="queue-empty">
                <p>No more songs in queue</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Queue;