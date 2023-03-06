import React, { useState, useEffect, useCallback } from "react";
import "../assets/css/project.css";

export default function Project (props) {
    const techIcons = {
        CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "Node.js":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
        MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
        Sequelize: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
        "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
        "Express-Handlebars": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg",
        Bulma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg",
        HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
        Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        jQuery: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg",
        Heroku: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
        Webpack: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        GitHub: "ttps://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    };

    return props.projects.map((project, i) => (
        <section className="project column is-half-desktop" key={`project-${i}`}>
            <h3 className="is-hidden-mobile">{project.name}</h3>
            <div className="columns">
                <div className="image-container column is-half hoverable">
                    <img className="project-image" src={project.imageSource} alt={project.imgAlt} />
                    <div className="card is-overlay is-hidden-tablet is-align-self-flex-end has-background-transparent">
                        <h3 className="has-text-centered">{project.name}</h3>
                        <div className="is-hidden has-background-transparent mobile-project-card-body show-on-hover">
                            <ul className="project-links">
                                {project.deployedLink ? <li className="project-link"><a href={project.deployedLink} target="_blank" rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a></li> : <span></span>}
                                {project.videoLink ? <li className="project-link"><a href={project.videoLink} target="_blank" rel="noreferrer"><i className="fa-solid fa-clapperboard"></i></a></li> : <span></span>}
                                <li className="project-link">
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                            <p className="description-mobile">{project.description}</p>
                            <ul className="tech-stack">
                                <Tech technologies={project.techStack} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ));
}