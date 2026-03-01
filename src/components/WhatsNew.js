import React from 'react';
import { FaGithub, FaCode, FaBug, FaStar, FaBell, FaSync } from 'react-icons/fa';

const WhatsNew = () => {
  const updates = [
    {
        id: 0,
        title: "Inital Launch of Website",
        description: "The first inital commit of this portfolio website. Built with React, showcasing my projects and experience.",
        type: "Launch",
        date: "1 week ago",
        icon: <FaGithub />,
        color: "#fff"
    },
    {
      id: 1,
      title: "Enhanced Mobile Responsiveness",
      description: "Improved mobile navigation and fixed styling issues on smaller screens. Specifically adding margin-left for the music player on mobile.",
      type: "Enhancement",
      date: "Aug 25, 2025",
      icon: <FaCode />,
      color: "#fff"
    },
    {
      id: 2,
      title: "Fixed Home Button Navigation",
      description: "Home button now properly navigates to About section without nav-link styling conflicts. Improved state management across components.",
      type: "Bug Fix",
      date: "Sept 5, 2025",
      icon: <FaBug />,
      color: "#fff"
    },
    {
      id: 3,
      title: "Introduced 'What's New' Section",
        description: "Added a new section to highlight recent updates and improvements to the portfolio website. This section will be updated regularly to keep visitors informed about the latest changes.",
        type: "New Feature",
        date: "Sept 6, 2025",
        icon: <FaStar />,
        color: "#fff"
    },
    {
        id: 4,
        title: "Updated About Episodes",
        description: "Refreshed the About section with new episodes (Las Vegas and NYC).",
        type: "Update",
        date: "Sept 6, 2025",
        icon: <FaSync />,
        color: "#fff"
    },
    {
        id: 5,
        title: "Music Player Functionality",
        description: "Music Player now plays my playlist that I made.",
        type: "New Feature",
        date: "Sept 6, 2025",
        icon: <FaStar />,
        color: "#fff"
    },
    {
        id: 6,
        title: "Functionality for Header Icons",
        description: "Friend Icon at the top right now shows a popover of my fav animes. Click the profile for an easter egg. ",
        type: "New Feature",
        date: "Sept 6, 2025",
        icon: <FaStar />,
        color: "#fff"
    },
    {
        id: 7,
        title: "Shuffle/Play Buttons Functionality",
        description: "Pressing the shuffle and the play will scroll either a random or the first element into view. ",
        type: "New Feature",
        date: "Sept 6, 2025",
        icon: <FaStar />,
        color: "#fff"
    },
    {
        id: 8,
        title: "About Episode Button Functionality",
        description: "Pressing the play buttons within the episodes will open my youtube video about the topic.",
        type: "New Feature",
        date: "Sept 6, 2025",
        icon: <FaStar />,
        color: "#fff"
    },
    {
        id:9,
        title: "Nav Bar Desktop Update",
        description: "Nav prev and Nav next in the top left of desktop view works accordingly.",
        type: "Enhancement",
        date: "Sept 7, 2025",
        icon: <FaCode />,
        color: "#fff"
    },
    {
      id: 10,
      title: "Added Italy to About Section",
      description: "Added my trip to Italy in the About section with a new episode card.",
      type: "Update",
      date: "Sept 17, 2025",
      icon: <FaSync />,
      color: "#fff"
    },
    {
      id: 11,
      title: "Added updates to the Experience Section and added more travel videos (currrent as of 2026)",
      description: "updated resume & experience section & more travel videos.",
      type: "Update",
      date: "Feb 28, 2026",
      icon: <FaSync />,
      color: "#fff"
    },
  ];

  return (
    <div className="whats-new-section">
      {/* Hero Section */}
      <div className="whats-new-hero">
        <div className="hero-content">
          <div className="hero-icon">
            <FaBell size={80} color="#fff" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">What's New</h1>
            <p className="hero-subtitle">The latest updates and improvements to jdoseph's portfolio</p>
            <div className="hero-meta">
              <span>Updated ASAP • Latest changes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Updates List */}
      <div className="updates-container">
        <div className="updates-header">
          <h2>Recent Updates</h2>
          <span className="updates-count">{updates.length} updates</span>
        </div>

        <div className="updates-list">
          {updates.slice().reverse().map((update, index) => (
            <div key={update.id} className={`update-card ${index === 0 ? 'latest' : ''}`}>
              <div className="update-icon" style={{ color: update.color }}>
                {update.icon}
              </div>
              <div className="update-content">
                <div className="update-header">
                  <h3 className="update-title">{update.title}</h3>
                  <div className="update-meta">
                    <span className="update-date">{update.date}</span>
                    <span className="update-type" style={{ color: update.color }}>
                      {update.type}
                    </span>
                    {index === 0 && (
                  <div className="latest-badge">
                    <span>Latest</span>
                  </div>
                )}
                  </div>
                </div>
                <p className="update-description">{update.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;