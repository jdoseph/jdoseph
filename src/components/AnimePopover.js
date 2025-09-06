import React from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';

const AnimePopover = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const favoriteAnimes = [
    {
      id: 1,
      title: "Attack on Titan",
      genre: "Action, Drama, Fantasy",
      rating: "10",
      year: "2013",
      episodes: "104 episodes",
      cover: "/images/aot.jpg"
    },
    {
      id: 2,
      title: "Your Name",
      genre: "Romance, Drama, Fantasy",
      rating: "10",
      year: "2016",
      episodes: "Movie",
      cover: "/images/yourname.png"
    },
    {
      id: 6,
      title: "Hunter x Hunter",
      genre: "Action, Adventure, Fantasy",
      rating: "10",
      year: "2011",
      episodes: "148 episodes",
      cover: "/images/hxh.jpg"
    },
    {
      id: 3,
      title: "Toradora",
      genre: "Romance, Slice of life, Comedy",
      rating: "9",
      year: "2001",
      episodes: "25 episodes",
      cover: "/images/toradora.jpg"
    },
    {
      id: 4,
      title: "Jujutsu Kaisen",
      genre: "Action, School, Supernatural",
      rating: "9",
      year: "2020",
      episodes: "24 episodes",
      cover: "/images/jjk.jpg"
    },
    {
      id: 5,
      title: "Demon Slayer",
      genre: "Action, Supernatural",
      rating: "8",
      year: "2019",
      episodes: "32 episodes",
      cover: "/images/demonslayer.jpg"
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
            <h2>My Favorite Animes</h2>
            <h6>If you're curious, heres my favorite animes :D</h6>
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