import React from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';

const AnimePopover = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const favoriteAnimes = [
    {
      id: 1,
      title: "Kaiju No. 8 2nd Season",
      genre: "Action, Sci-Fi, Military",
      rating: "8.2",
      year: "2025",
      episodes: "Episode 9",
      cover: "/images/kno8.jpg"
    },
    {
      id: 2,
      title: "SAKAMOTO DAYS Cour 2",
      genre: "Action, Comedy, Organized Crime",
      rating: "7.2",
      year: "2025",
      episodes: "Episode 10",
      cover: "/images/skd.jpg"
    },
    {
      id: 6,
      title: "Gachiakuta",
      genre: "Action, Fantasy",
      rating: "9",
      year: "2025",
      episodes: "Episode 9",
      cover: "/images/gachi.jpg"
    },
    {
      id: 3,
      title: "Rascal Does Not Dream of Santa Claus",
      genre: "Romance, School, Comedy",
      rating: "8.2",
      year: "2025",
      episodes: "Episode 11",
      cover: "/images/rdndsc.jpg"
    },
    {
      id: 4,
      title: "DR. STONE SCIENCE FUTURE Cour 2",
      genre: "Adventure, Comedy, Sci-Fi",
      rating: "10",
      year: "2025",
      episodes: "Episode 10",
      cover: "/images/drs.jpg"
    }
  ];

  return (
    <>
      {/* Backdrop */}
      <div className="anime-backdrop" onClick={onClose}></div>

      {/* Anime Popover */}
      <div className="anime-popover">
        <div className="anime-header">
          <div className="anime-header-text">
            <h2>Currently Watching</h2>
            <h6>If you're curious, here's my current watch list</h6>
          </div>
          <button className="anime-close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="anime-content">
          <div className="anime-list">
            {favoriteAnimes.map((anime, index) => (
              <div key={anime.id} className="anime-item">
                <div className="anime-rank">
                  #{index + 1}
                </div>
                <img
                  src={anime.cover || "/images/default-anime-cover.jpg"}
                  alt={anime.title}
                  className="anime-cover"
                />
                <div className="anime-info">
                  <div className="anime-title">{anime.title}</div>
                  <div className="anime-details">
                    <span className="anime-year">{anime.year}</span>
                    <span className="anime-separator">•</span>
                    <span className="anime-episodes">{anime.episodes}</span>
                  </div>
                  <div className="anime-genre">{anime.genre}</div>
                </div>
                <div className="anime-rating">
                  <FaStar className="rating-star" />
                  <span>{anime.rating}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="anime-footer">
            <span>To see more of my ratings and reviews,
              <a href="https://myanimelist.net/animelist/jdoseph" target="_blank" rel="noopener noreferrer" className="anime-link">
                 click here
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimePopover;