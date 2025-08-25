import React, { useState } from 'react';
import { FaClock, FaPlay } from 'react-icons/fa';

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  
  const getShortDuration = (duration) => {
    const parts = duration.split(' – ');
    if (parts.length > 1) {
      const endPart = parts[1];
      if (endPart === 'Present') return 'Present';
      if (endPart.includes('2021')) return '2021';
      return endPart;
    }
    return duration;
  };
  
  const experienceTracks = [
    {
      company: "USAF DoD",
      role: "Software Engineer", 
      location: "Robins AFB, GA",
      duration: "July 2024 – Present",
      logo: "/images/dod.png",
      highlights: [
        "Worked under the 402d Software Directorate at the Robins AFB",
        "Developed and maintained full-stack web applications using Blazor and C# .NET frameworks",
        "Architected and managed cloud-based data infrastructure for efficient dataset management",
        "Improved application efficiency by 15% through optimized software architecture",
        "Developed comprehensive software documentation ensuring compliance with Department of Defense standards"
      ]
    },
    {
      company: "Georgia Southern University",
      role: "Student Technician",
      location: "Savannah, GA", 
      duration: "August 2020 – December 2021",
      logo: "/images/Georgia_Southern_Eagles_logo.svg.png",
      highlights: [
        "Automated lab computer software checks using PowerShell, enhancing IT compliance",
        "Reduced manual workload by 30% through automated system monitoring solutions",
        "Delivered IT maintenance and technical support with 90% first-contact resolution rate", 
        "Maintained 99% uptime across institutional systems through proactive troubleshooting"
      ]
    }
  ];

  return (
    <div className="experience-section">
      <div className="experience-tracklist">
        <div className="tracklist-header">
          <div className="header-number">#</div>
          <div className="header-title">Title</div>
          <div className="header-album">Album</div>
          <div className="header-duration"><FaClock size={16} /></div>
        </div>
        
        <div className="experience-tracks">
          {experienceTracks.map((experience, index) => (
            <div key={index}>
              <div 
                className={`experience-track ${expandedExperience === index ? 'expanded' : ''}`}
                onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
              >
                <div className="track-number">
                  <span className="track-num">{index + 1}</span>
                  <FaPlay className="play-icon" />
                </div>
                <div className="track-info">
                  <div className="track-icon">
                    <img src={experience.logo} alt={experience.company} className="experience-logo" />
                  </div>
                  <div className="track-details">
                    <div className="track-name">{experience.role}</div>
                    <div className="track-artist desktop-location">{experience.location}</div>
                  </div>
                </div>
                <div className="track-album desktop-company">{experience.company}</div>
                <div className="track-duration desktop-duration">{experience.duration}</div>
                <div className="track-duration mobile-short-duration">{getShortDuration(experience.duration)}</div>
              </div>
              {expandedExperience === index && (
                <div className="experience-highlights">
                  <div className="mobile-company">
                    <strong>Company:</strong> {experience.company}
                  </div>
                  <div className="mobile-location">
                    <strong>Location:</strong> {experience.location}
                  </div>
                  <div className="mobile-duration">
                    <strong>Duration:</strong> {experience.duration}
                  </div>
                  <ul>
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;