import React from "react";
import { FaCss3, FaGithub, FaHtml5, FaJava, FaPython, FaDatabase, FaDocker, FaReact, FaGitAlt, FaBootstrap, FaFigma, FaClock, FaPlay } from "react-icons/fa";
import { SiCplusplus, SiBlazor, SiNumpy, SiMongodb, SiKubernetes } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
    const skillTracks = [
        { icon: <FaJava />, name: "Java", category: "Programming Languages", experience: "4+ years", url: "https://docs.oracle.com/en/java/" },
        { icon: <PiFileCSharp />, name: "C#", category: "Programming Languages", experience: "2 years", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
        { icon: <FaPython />, name: "Python", category: "Programming Languages", experience: "1 years", url: "https://docs.python.org/3/" },
        { icon: <IoLogoJavascript />, name: "JavaScript", category: "Programming Languages", experience: "1 years", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { icon: <SiCplusplus />, name: "C++", category: "Programming Languages", experience: "1 years", url: "https://devdocs.io/cpp/" },
        { icon: <FaDatabase />, name: "PSQL", category: "Database", experience: "2 years", url: "https://www.postgresql.org/docs/" },
        { icon: <FaReact />, name: "React", category: "Frontend Framework", experience: "4 years", url: "https://legacy.reactjs.org/docs/getting-started.html" },
        { icon: <SiBlazor />, name: "Blazor", category: "Frontend Framework", experience: "1 year", url: "https://learn.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-9.0" },
        { icon: <FaHtml5 />, name: "HTML", category: "Web Technology", experience: "4 years", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { icon: <FaCss3 />, name: "CSS", category: "Web Technology", experience: "4 years", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { icon: <FaBootstrap />, name: "Bootstrap", category: "CSS Framework", experience: "2 years", url: "https://getbootstrap.com/docs/4.1/getting-started/introduction/" },
        { icon: <SiMongodb />, name: "MongoDB", category: "Database", experience: "2 years", url: "https://www.mongodb.com/docs/" },
        { icon: <SiNumpy />, name: "NumPy", category: "Data Science", experience: "1 years", url: "https://numpy.org/doc/" },
        { icon: <FaGitAlt />, name: "Git", category: "Version Control", experience: "3 years", url: "https://git-scm.com/doc" },
        { icon: <FaGithub />, name: "GitHub", category: "Development Platform", experience: "3 years", url: "https://docs.github.com/en" },
        { icon: <FaDocker />, name: "Docker", category: "DevOps", experience: "1 year", url: "https://docs.docker.com/" },
        { icon: <SiKubernetes />, name: "Kubernetes", category: "DevOps", experience: "1 year", url: "https://kubernetes.io/docs/home/" },
        { icon: <FaFigma />, name: "Figma", category: "Design Tool", experience: "2 years", url: "https://help.figma.com/hc/en-us" }
    ];

    return (
        <div className="skills-section">
            <div className="skills-tracklist">
                <div className="tracklist-header">
                    <div className="header-number">#</div>
                    <div className="header-title">Title</div>
                    <div className="header-album">Album</div>
                    <div className="header-duration"><FaClock size={16} /></div>
                </div>
                
                <div className="skills-tracks">
                    {skillTracks.map((skill, index) => (
                        <div key={index} className="skill-track" onClick={() => window.open(skill.url, '_blank')}>
                            <div className="track-number">
                                <span className="track-num">{index + 1}</span>
                                <FaPlay className="play-icon" />
                            </div>
                            <div className="track-info">
                                <div className="track-icon">{skill.icon}</div>
                                <div className="track-details">
                                    <div className="track-name">{skill.name}</div>
                                </div>
                            </div>
                            <div className="track-album">{skill.category}</div>
                            <div className="track-duration">{skill.experience}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;