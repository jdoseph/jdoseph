import React from "react";
import { FaCss3, FaGithub, FaHtml5, FaJava, FaPython, FaDatabase, FaDocker, FaReact, FaGitAlt, FaBootstrap, FaFigma } from "react-icons/fa";
import { SiCplusplus, SiBlazor, SiNumpy, SiMongodb, SiVim, SiKubernetes } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
    return (
        <div className="skills-section" id="skills">
            <h1><strong>technical skills</strong></h1>
            <br />
            <h2>programming languages</h2>
            <div className="skills-icons">
                <a href="https://docs.oracle.com/en/java/" title="Java"><FaJava /></a>
                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" title="C#"><PiFileCSharp /></a>
                <a href="https://docs.python.org/3/" title="Python"><FaPython /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><IoLogoJavascript /></a>
                <a href="https://devdocs.io/cpp/" title="C++"><SiCplusplus /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" title="HTML"><FaHtml5 /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" title="CSS"><FaCss3 /></a>
                <a href="https://www.postgresql.org/docs/" title="SQL"><FaDatabase /></a>
            </div>

            <h2>tools & frameworks</h2>
            <div className="skills-icons">
                <a href="https://git-scm.com/doc" title="Git"><FaGitAlt /></a>
                <a href="https://learn.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-9.0" title="Blazor"><SiBlazor /></a>
                <a href="https://docs.docker.com/" title="Docker"><FaDocker /></a>
                <a href="https://legacy.reactjs.org/docs/getting-started.html" title="React"><FaReact /></a>
                <a href="https://numpy.org/doc/" title="NumPy"><SiNumpy /></a>
                <a href="https://www.mongodb.com/docs/" title="MongoDB"><SiMongodb /></a>
                <a href="https://docs.github.com/en" title="GitHub"><FaGithub /></a>
                <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" title="Bootstrap"><FaBootstrap /></a>
                <a href="https://help.figma.com/hc/en-us" title="Figma"><FaFigma /></a>
                <a href="https://kubernetes.io/docs/home/" title="Kubernetes"><SiKubernetes /></a>
            </div>
        </div>
    );
};

export default Skills;