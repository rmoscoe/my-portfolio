import React, { useState, useEffect } from "react";
import Tech from "./tech";
import "../assets/css/project.css";

export default function Project(props) {
    return props.projects.map((project, i) => (
        <section className="project column is-half" key={`project-${project.id}`}>
            <div className="project-background">
                <h3 className="is-hidden-mobile">{project.name}</h3>
                <div className="columns">
                    <div className="image-container column is-three-fifths hoverable">
                        <img className="project-image" src={project.imageSource} alt={project.imgAlt} />
                        <div className="container is-overlay is-hidden-tablet is-align-self-flex-end has-background-transparent">
                            <h3 className="is-hidden has-background-transparent show-on-hover mobile-project-name">{project.name}</h3>
                            <div className="is-hidden has-background-transparent mobile-project-card-body show-on-hover">
                                <div className="block">
                                    <ul className="project-links-mobile is-size-5">
                                        {project.deployedLink ? <li className="project-link"><a href={project.deployedLink} target="_blank" rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a></li> : <span></span>}
                                        {project.videoLink ? <li className="project-link"><a href={project.videoLink} target="_blank" rel="noreferrer"><i className="fa-solid fa-clapperboard"></i></a></li> : <span></span>}
                                        <li className="project-link">
                                            <a href={project.githubLink} target="_blank" rel="noreferrer">
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="description-mobile is-size-6">{project.description}</p>
                                    <ul className="tech-stack">
                                        <Tech technologies={project.techStack} />
                                    </ul>
                                </div>
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
                        <div className="box description">
                            <p>{project.description}</p>
                        </div>
                        <ul className="tech-stack">
                            <Tech technologies={project.techStack} />
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    ));
}