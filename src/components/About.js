import React from 'react';
import { FaPlay, FaHeart, FaEllipsisH, FaDownload } from 'react-icons/fa';

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
          <div className="podcast-type">INTRODUCTION</div>
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
                <img src="/images/IMG_0815.jpeg" alt="Episode" />
                <button className="episode-play-btn">
                  <a href="https://www.youtube.com/watch?v=_2qAu3Sd-qg" target="_blank" rel="noopener noreferrer" className="nyc-link">
                    <FaPlay />
                  </a>
                </button>
              </div>
              <div className="episode-content">
                <h3 className="episode-title">lisbon 2025</h3>
                <p className="episode-description">
                  i went to lisbon portugal with my friend michael.i was sick as fuck. we explored the city. we enjoyed lisbon.
                </p>
                <div className="episode-meta">
                  <div className="episode-info">
                    <span className="episode-date"> December 2025</span>
                    <span className="episode-duration">• 1 Week</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <a href="https://www.youtube.com/watch?v=_2qAu3Sd-qg" target="_blank" rel="noopener noreferrer" className="nyc-link">
                        <FaPlay />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/IMG_0815.jpeg" alt="Episode" />
                  <button className="episode-play-btn">
                    <a href="https://www.youtube.com/watch?v=CsUfV_KlPB8&t" target="_blank" rel="noopener noreferrer" className="nyc-link">
                      <FaPlay />
                    </a>
                  </button>
                </div>
                <div className="episode-content">
                <h3 className="episode-title">December 2025</h3>
                </div>
              </div>
              <p className="episode-description">
                  i went to lisbon portugal with my friend michael.i was sick as fuck. we explored the city. we enjoyed lisbon.
                </p>
              <div className="episode-meta">
                <div className="episode-info">
                  <span className="episode-date">December 2025</span>
                  <span className="episode-duration">• 1 Week</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <a href="https://www.youtube.com/watch?v=_2qAu3Sd-qg" target="_blank" rel="noopener noreferrer" className="nyc-link">
                      <FaPlay />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
         <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/IMG_0251.jpeg" alt="Episode" />
                <button className="episode-play-btn">
                  <a href="https://www.youtube.com/watch?v=CsUfV_KlPB8&t" target="_blank" rel="noopener noreferrer" className="nyc-link">
                    <FaPlay />
                  </a>
                </button>
              </div>
              <div className="episode-content">
                <h3 className="episode-title">Chicago 2025</h3>
                <p className="episode-description">
                  i went to chicago illinois for my friends. we ate. we drank. we explored the city. we enjoyed the windy city. 
                </p>
                <div className="episode-meta">
                  <div className="episode-info">
                    <span className="episode-date"> November 2025</span>
                    <span className="episode-duration">• 72 Hours</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <a href="https://www.youtube.com/watch?v=CsUfV_KlPB8&t" target="_blank" rel="noopener noreferrer" className="nyc-link">
                        <FaPlay />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/IMG_0251.jpeg" alt="Episode" />
                  <button className="episode-play-btn">
                    <a href="https://www.youtube.com/watch?v=CsUfV_KlPB8&t" target="_blank" rel="noopener noreferrer" className="nyc-link">
                      <FaPlay />
                    </a>
                  </button>
                </div>
                <div className="episode-content">
                <h3 className="episode-title">November 2025</h3>
                </div>
              </div>
              <p className="episode-description">
                  i went to chicago illinois for my friends. we ate. we drank. we explored the city. we enjoyed the windy city.
                </p>
              <div className="episode-meta">
                <div className="episode-info">
                  <span className="episode-date">November 2025</span>
                  <span className="episode-duration">• 72 Hours</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <a href="https://www.youtube.com/watch?v=CsUfV_KlPB8&t" target="_blank" rel="noopener noreferrer" className="nyc-link">
                      <FaPlay />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/IMG_0072.jpeg" alt="Episode" />
                <button className="episode-play-btn">
                  <a href="https://www.youtube.com/watch?v=FNVkawNDIVo" target="_blank" rel="noopener noreferrer" className="nyc-link">
                    <FaPlay />
                  </a>
                </button>
              </div>
              <div className="episode-content">
                <h3 className="episode-title">Asheville 2025</h3>
                <p className="episode-description">
                  i went to asheville north carolina with my friends. we ate. we hiked. we enjoyed peace. 
                </p>
                <div className="episode-meta">
                  <div className="episode-info">
                    <span className="episode-date"> October 2025</span>
                    <span className="episode-duration">• 48 Hours</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <a href="https://www.youtube.com/watch?v=FNVkawNDIVo" target="_blank" rel="noopener noreferrer" className="nyc-link">
                        <FaPlay />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/IMG_0072.jpeg" alt="Episode" />
                  <button className="episode-play-btn">
                    <a href="https://www.youtube.com/watch?v=FNVkawNDIVo" target="_blank" rel="noopener noreferrer" className="nyc-link">
                      <FaPlay />
                    </a>
                  </button>
                </div>
                <div className="episode-content">
                <h3 className="episode-title">October 2025</h3>
                </div>
              </div>
              <p className="episode-description">
                  i went to asheville north carolina with my friends. we ate. we hiked. we enjoyed peace. 
                </p>
              <div className="episode-meta">
                <div className="episode-info">
                  <span className="episode-date">October 2025</span>
                  <span className="episode-duration">• 48 Hours</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <a href="https://www.youtube.com/watch?v=FNVkawNDIVo" target="_blank" rel="noopener noreferrer" className="nyc-link">
                      <FaPlay />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/IMG_9781.JPG" alt="Episode" />
                <button className="episode-play-btn">
                  <a href="https://www.youtube.com/watch?v=V_HGCSg3udA" target="_blank" rel="noopener noreferrer" className="nyc-link">
                    <FaPlay />
                  </a>
                </button>
              </div>
              <div className="episode-content">
                <h3 className="episode-title">Italy 2025</h3>
                <p className="episode-description">
                  I visited Italy with my family! I visited Rome, Florence, Assisi and Venice! 
                  I ate lots of pasta and drank lots of wine....One memorable thing was def the 
                  gondola ride in Venice. Such a beautiful city OMG!
                </p>
                <div className="episode-meta">
                  <div className="episode-info">
                    <span className="episode-date"> September 2025</span>
                    <span className="episode-duration">• 1 week</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <a href="https://www.youtube.com/watch?v=V_HGCSg3udA" target="_blank" rel="noopener noreferrer" className="nyc-link">
                        <FaPlay />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/IMG_9781.JPG" alt="Episode" />
                  <button className="episode-play-btn">
                    <a href="https://www.youtube.com/watch?v=V_HGCSg3udA" target="_blank" rel="noopener noreferrer" className="nyc-link">
                      <FaPlay />
                    </a>
                  </button>
                </div>
                <div className="episode-content">
                <h3 className="episode-title">Italy 2025</h3>
                </div>
              </div>
              <p className="episode-description">
                  I visited Italy with my family! I visited Rome, Florence, Assisi and Venice! 
                  I ate lots of pasta and drank lots of wine....One memorable thing was def the 
                  gondola ride in Venice. Such a beautiful city OMG!
                </p>
              <div className="episode-meta">
                <div className="episode-info">
                  <span className="episode-date">September 2025</span>
                  <span className="episode-duration">• 1 week</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <a href="https://www.youtube.com/watch?v=V_HGCSg3udA" target="_blank" rel="noopener noreferrer" className="nyc-link">
                      <FaPlay />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

        <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/pizza.png" alt="Episode" />
                <button className="episode-play-btn">
                  <a href="https://www.youtube.com/watch?v=dwmDyCEg204" target="_blank" rel="noopener noreferrer" className="nyc-link">
                    <FaPlay />
                  </a>
                </button>
              </div>
              <div className="episode-content">
                <h3 className="episode-title">Weekend Trip To NYC</h3>
                <p className="episode-description">
                  For Memorial Day 2025, I visited NYC with my friend John. Our main goal of the NYC trip was to
                  hit major landmarks and eat good food. My favorite thing that we ate was Joe's Pizza. 
                  Probably a must try recommendation from me lol..
                </p>
                <div className="episode-meta">
                  <div className="episode-info">
                    <span className="episode-date">May 2025</span>
                    <span className="episode-duration">• 96 hours</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <a href="https://www.youtube.com/watch?v=dwmDyCEg204" target="_blank" rel="noopener noreferrer" className="nyc-link">
                        <FaPlay />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/pizza.png" alt="Episode" />
                  <button className="episode-play-btn">
                    <a href="https://www.youtube.com/watch?v=dwmDyCEg204" target="_blank" rel="noopener noreferrer" className="nyc-link">
                      <FaPlay />
                    </a>
                  </button>
                </div>
                <div className="episode-content">
                <h3 className="episode-title">Weekend Trip To NYC</h3>
                </div>
              </div>
              <p className="episode-description">
                  For Memorial Day 2025, I visited NYC with my friend John. Our main goal of the NYC trip was to
                  hit major landmarks and eat good food. My favorite thing that we ate was Joe's Pizza. 
                  Probably a must try recommendation from me lol..
                </p>
              <div className="episode-meta">
                <div className="episode-info">
                  <span className="episode-date">May 2025</span>
                  <span className="episode-duration">• 96 hours</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <a href="https://www.youtube.com/watch?v=dwmDyCEg204" target="_blank" rel="noopener noreferrer" className="nyc-link">
                      <FaPlay />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/lasvegas.jpg" alt="Episode" />
                <button className="episode-play-btn">
                  <a href="https://youtu.be/IBv16D1lZ64?si=Q3-4Cx0P8WQ2J2tW" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                    <FaPlay />
                  </a>
                </button>
              </div>
              <div className="episode-content">
                <h3 className="episode-title">Las Vegas</h3>
                <p className="episode-description">
                  Towards the beginning of May, my family invited me to go to Las Vegas.
                  This was my first time going to Vegas so I had two goals in mind: to eat a buffet
                  and win a lot from gambling. Let's just say I was able to eat a good buffet.
                </p>
                <div className="episode-meta">
                  <div className="episode-info">
                    <span className="episode-date">May 2025</span>
                    <span className="episode-duration">• 96 hours</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <a href="https://youtu.be/IBv16D1lZ64?si=Q3-4Cx0P8WQ2J2tW" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                        <FaPlay />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/lasvegas.jpg" alt="Episode" />
                  <button className="episode-play-btn">
                    <a href="https://youtu.be/IBv16D1lZ64?si=Q3-4Cx0P8WQ2J2tW" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaPlay />
                    </a>
                  </button>
                </div>
                <div className="episode-content">
                <h3 className="episode-title">Las Vegas</h3>
                </div>
              </div>
              <p className="episode-description">
                Towards the beginning of May, my family invited me to go to Las Vegas.
                This was my first time going to Vegas so I had two goals in mind: to eat a buffet
                and win a lot from gambling. Let's just say I was able to eat a good buffet.
                </p>
              <div className="episode-meta">
                <div className="episode-info">
                  <span className="episode-date">May 2025</span>
                  <span className="episode-duration">• 96 hours</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <a href="https://youtu.be/IBv16D1lZ64?si=Q3-4Cx0P8WQ2J2tW" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaPlay />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/pickleball.jpg" alt="Episode" />
                <button className="episode-play-btn">
                  <a href="https://youtube.com/shorts/csrHVybmAaU?feature=share" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                    <FaPlay />
                  </a>
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
                    <span className="episode-duration">• 6 months</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <a href="https://youtube.com/shorts/csrHVybmAaU?feature=share" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                        <FaPlay />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/pickleball.jpg" alt="Episode" />
                  <button className="episode-play-btn">
                    <a href="https://youtube.com/shorts/csrHVybmAaU?feature=share" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaPlay />
                    </a>
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
                  <span className="episode-duration">• 6 months</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <a href="https://youtube.com/shorts/csrHVybmAaU?feature=share" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaPlay />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/japan.JPG" alt="Episode" />
                <button className="episode-play-btn">
                  <a href="https://youtu.be/f5WFBwyNhik" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                    <FaPlay />
                  </a>
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
                    <span className="episode-duration">• 1 week</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <a href="https://youtu.be/f5WFBwyNhik" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                        <FaPlay />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/japan.JPG" alt="Episode" />
                  <button className="episode-play-btn">
                    <a href="https://youtu.be/f5WFBwyNhik" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaPlay />
                    </a>
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
                  <span className="episode-duration">• 1 week</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <a href="https://youtu.be/f5WFBwyNhik" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaPlay />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="episode-item">
            {/* Desktop version */}
            <div className="desktop-episode">
              <div className="episode-artwork">
                <img src="/images/jdosephgraduation.png" alt="Episode" />
                <button className="episode-play-btn">
                  <a href="https://youtu.be/8XBuzyqeP5s?si=5ZfIj9IIOUfV6MtC" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                    <FaPlay />
                  </a>
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
                    <span className="episode-duration">• Present</span>
                  </div>
                  <div className="episode-actions-right">
                    <button className="episode-action-btn play-btn-right">
                      <a href="https://youtu.be/8XBuzyqeP5s?si=5ZfIj9IIOUfV6MtC" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                        <FaPlay />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className="mobile-episode">
              <div className="episode-header">
                <div className="episode-artwork">
                  <img src="/images/jdosephgraduation.png" alt="Episode" />
                  <button className="episode-play-btn">
                    <a href="https://youtu.be/8XBuzyqeP5s?si=5ZfIj9IIOUfV6MtC" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaPlay />
                    </a>
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
                  <span className="episode-duration">• Present</span>
                </div>
                <div className="episode-actions-right">
                  <button className="episode-action-btn play-btn-right">
                    <a href="https://youtu.be/8XBuzyqeP5s?si=5ZfIj9IIOUfV6MtC" target="_blank" rel="noopener noreferrer" className="episode-action-btn">
                      <FaPlay />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;