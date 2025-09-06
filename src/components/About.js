import React from 'react';
import { FaPlay, FaHeart, FaEllipsisH, FaDownload, FaPlus, FaLink } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-section">
      {/* Podcast Header */}
      <div className="podcast-header">
        <div className="podcast-artwork">
          <img src="/images/jdosephgraduation.png" alt="Joseph Do Podcast" className="podcast-image" />
          <div className="podcast-overlay">
            <button className="podcast-play-btn">
              <FaPlay />
            </button>
          </div>
        </div>
        
        <div className="podcast-info">
          <div className="podcast-type">PODCAST</div>
          <h1 className="podcast-title">The Joseph Do Experience</h1>
          <p className="podcast-description">
            Hello! I'm Joseph Do, a software engineer passionate about technology, food, traveling
            and pickleball. Join me as I share insights from my career journey, discuss the news in my life
            and hobbies! Whether you're a fellow developer or just curious and want to be friends, 
            lets have a chat!
          </p>
          
          <div className="podcast-meta">
            <img src="/images/pizza.png" alt="Host" className="host-avatar" />
            <div className="podcast-details">
              <span className="host-name">Joseph Do</span>
              <div className="podcast-stats">
                <span>2+ years • Work Experience</span>
              </div>
            </div>
          </div>
          
          <div className="podcast-actions">
            <button className="action-btn primary">
              <FaPlay />
              <span>Play Latest</span>
            </button>
            <button className="action-btn secondary">
              <FaHeart />
            </button>
            <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" className="action-btn secondary">
              <FaDownload />
            </a>
            <button className="action-btn secondary">
              <FaEllipsisH />
            </button>
          </div>
        </div>
      </div>

      {/* Episodes List */}
      <div className="podcast-episodes">
        <div className="episodes-header">
          <h2>Latest Episodes</h2>
        </div>
        
        <div className="episode-list">
          <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/jdosephgraduation.png" alt="Episode" />
                <button className="episode-play-btn">
                  <FaPlay />
                </button>
              </div>
              <div className="episode-content">
                <h3 className="episode-title"> UGA to DoD Software Engineering</h3>
                <p className="episode-description">
                  In this episode, I graduated from the University of Georgia with a Bachelors of Science in
                  Computer Science in May 2024. Post grad, I joined the United States Air Force as a Software Engineer. 
                  I currently hold a secret clearance and work on various projects supporting national security.
                </p>
                <div className="episode-meta">
                  <div className="episode-info">
                    <span className="episode-date">May 2024</span>
                    <span className="episode-duration">• 45 min</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <FaPlay />
                    </button>
                  </div>
                </div>
                <div className="episode-actions-left">
                    <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaDownload />
                    </a>
                    <button className="episode-action-btn">
                      <FaPlus />
                    </button>
                    <button className="episode-action-btn">
                      <FaLink />
                    </button>
                  </div>
              </div>
            </div>
            
            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/jdosephgraduation.png" alt="Episode" />
                  <button className="episode-play-btn">
                    <FaPlay />
                  </button>
                </div>
                <div className="episode-content">
                  <h3 className="episode-title"> UGA to DoD Software Engineering</h3>
                </div>
              </div>
              <p className="episode-description">
                In this episode, I graduated from the University of Georgia with a Bachelors of Science in
                Computer Science in May 2024. Post grad, I joined the United States Air Force as a Software Engineer. 
                I currently hold a secret clearance and work on various projects supporting national security.
              </p>
              <div className="episode-meta">
                <div className="episode-info">
                  <span className="episode-date">May 2024</span>
                  <span className="episode-duration">• 45 min</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <FaPlay />
                  </button>
                </div>
              </div>
              <div className="episode-actions-left">
                  <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                    <FaDownload />
                  </a>
                  <button className="episode-action-btn">
                    <FaPlus />
                  </button>
                  <button className="episode-action-btn">
                    <FaLink />
                  </button>
                </div>
            </div>
          </div>
          
          <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/japan.JPG" alt="Episode" />
                <button className="episode-play-btn">
                  <FaPlay />
                </button>
              </div>
              <div className="episode-content">
                <h3 className="episode-title">Trip to Japan</h3>
                <p className="episode-description">
                  In this episode, I explored Tokyo and Kyoto, Japan for one week in March 2024.
                  From the bustling city life to the serene temples, I loved the 
                  culture, food, and unforgettable moments of my trip. P.S, you have to try the egg sandwiches
                  from the convenience stores!
                </p>
                <div className="episode-meta">
                  <div className="episode-info">
                    <span className="episode-date">March 2025</span>
                    <span className="episode-duration">• 38 min</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <FaPlay />
                    </button>
                  </div>
                </div>
                <div className="episode-actions-left">
                    <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaDownload />
                    </a>
                    <button className="episode-action-btn">
                      <FaPlus />
                    </button>
                    <button className="episode-action-btn">
                      <FaLink />
                    </button>
                  </div>
              </div>
            </div>
            
            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/japan.JPG" alt="Episode" />
                  <button className="episode-play-btn">
                    <FaPlay />
                  </button>
                </div>
                <div className="episode-content">
                  <h3 className="episode-title">Trip to Japan</h3>
                </div>
              </div>
              <p className="episode-description">
                In this episode, I explored Tokyo and Kyoto, Japan for one week in March 2024.
                From the bustling city life to the serene temples, I loved the 
                culture, food, and unforgettable moments of my trip. P.S, you have to try the egg sandwiches
                from the convenience stores!
              </p>
              <div className="episode-meta">
                <div className="episode-info">
                  <span className="episode-date">March 2025</span>
                  <span className="episode-duration">• 38 min</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <FaPlay />
                  </button>
                </div>
              </div>
              <div className="episode-actions-left">
                  <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                    <FaDownload />
                  </a>
                  <button className="episode-action-btn">
                    <FaPlus />
                  </button>
                  <button className="episode-action-btn">
                    <FaLink />
                  </button>
                </div>
            </div>
          </div>
          
          <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/pickleball.jpg" alt="Episode" />
                <button className="episode-play-btn">
                  <FaPlay />
                </button>
              </div>
              <div className="episode-content">
                <h3 className="episode-title">Pickleball Addiction</h3>
                <p className="episode-description">
                  Since graduating college, I've picked up pickleball as a new hobby.
                  In this episode, I earned my first ever pickleball second-place by 
                  winning a league in Spring 2024. Currently, I would say I am a 3.5 DUPR but
                  aiming to reach 4.0 by the end of 2025!
                </p>
                <div className="episode-meta">
                  <div className="episode-info">
                    <span className="episode-date">Spring 2025</span>
                    <span className="episode-duration">• 32 min</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <FaPlay />
                    </button>
                  </div>
                </div>
                <div className="episode-actions-left">
                    <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaDownload />
                    </a>
                    <button className="episode-action-btn">
                      <FaPlus />
                    </button>
                    <button className="episode-action-btn">
                      <FaLink />
                    </button>
                  </div>
              </div>
            </div>
            
            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/pickleball.jpg" alt="Episode" />
                  <button className="episode-play-btn">
                    <FaPlay />
                  </button>
                </div>
                <div className="episode-content">
                  <h3 className="episode-title">Pickleball Addiction</h3>
                </div>
              </div>
              <p className="episode-description">
                Since graduating college, I've picked up pickleball as a new hobby.
                In this episode, I earned my first ever pickleball second-place by 
                winning a league in Spring 2024. Currently, I would say I am a 3.5 DUPR but
                aiming to reach 4.0 by the end of 2025!
              </p>
              <div className="episode-meta">
                <div className="episode-info">
                  <span className="episode-date">Spring 2025</span>
                  <span className="episode-duration">• 32 min</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <FaPlay />
                  </button>
                </div>
              </div>
              <div className="episode-actions-left">
                  <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                    <FaDownload />
                  </a>
                  <button className="episode-action-btn">
                    <FaPlus />
                  </button>
                  <button className="episode-action-btn">
                    <FaLink />
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;