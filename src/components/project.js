import React, { useState, useEffect } from "react";
import Tech from "./tech";
import "../assets/css/project.css";

export default function Project(props) {
    return props.projects.map((project, i) => (
        <section className="project column is-half-desktop" key={`project-${project.id}`}>
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
                <div className="details column is-half pl-3 is-hidden-mobile is-justify-content-flex-end">
                    <ul className="project-links">
                        {project.deployedLink && <li className="project-link"><a href={project.deployedLink} target="_blank" rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a></li>}
                        {project.videoLink && <li className="project-link"><a href={project.videoLink} target="_blank" rel="noreferrer"><i className="fa-solid fa-clapperboard"></i></a></li>}
                        <li className="project-link">
                            <a href={project.githubLink} target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                    <p className="box description">{project.description}</p>
                    <ul className="tech-stack">
                        <Tech technologies={project.techStack} />
                    </ul>
                </div>
            </div>
        </section>
    ));
}