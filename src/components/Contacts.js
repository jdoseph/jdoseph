import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaClock, FaPlay } from 'react-icons/fa';

const Contacts = () => {
    const contactTracks = [
        {
            icon: <FaEnvelope />,
            name: "Email",
            platform: "Gmail",
            handle: "jdoseph02@gmail.com",
            url: "mailto:jdoseph02@gmail.com"
        },
        {
            icon: <FaLinkedin />,
            name: "LinkedIn",
            platform: "Professional Network",
            handle: "@jdoseph",
            url: "https://www.linkedin.com/in/jdoseph"
        },
        {
            icon: <FaGithub />,
            name: "GitHub",
            platform: "Code Repository",
            handle: "@jdoseph",
            url: "https://github.com/jdoseph"
        },
        {
            icon: <FaInstagram />,
            name: "Instagram",
            platform: "Social Media",
            handle: "@jdoseph",
            url: "https://www.instagram.com/jdoseph"
        }
    ];

    return (
        <div className="contact-section">
            <div className="contact-tracklist">
                <div className="tracklist-header">
                    <div className="header-number">#</div>
                    <div className="header-title">Title</div>
                    <div className="header-album">Album</div>
                    <div className="header-duration"><FaClock size={16} /></div>
                </div>
                
                <div className="contact-tracks">
                    {contactTracks.map((contact, index) => (
                        <div 
                            key={index} 
                            className="contact-track" 
                            onClick={() => window.open(contact.url, contact.name === 'Email' ? '_self' : '_blank')}
                        >
                            <div className="track-number">
                                <span className="track-num">{index + 1}</span>
                                <FaPlay className="play-icon" />
                            </div>
                            <div className="track-info">
                                <div className="track-icon">{contact.icon}</div>
                                <div className="track-details">
                                    <div className="track-name">{contact.name}</div>
                                    <div className="track-artist">{contact.handle}</div>
                                </div>
                            </div>
                            <div className="track-album">{contact.platform}</div>
                            <div className="track-duration">Active</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contacts;