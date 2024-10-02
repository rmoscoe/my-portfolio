import React, { useRef } from "react";
import Tech from "./tech";
import "../assets/css/project.css";

export default function Project(props) {
    const ref = useRef(null);

    const animationOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
    };

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.25) {
                entry.target.classList.add("fade-in");
            }
            if (entry.intersectionRatio < 0.25 && entry.target.classList.contains("fade-in")) {
                entry.target.classList.remove("fade-in");
                entry.target.classList.add("fade-out");
            }
            if (!entry.target.isVisible) {
                entry.target.classList.remove("fade-out");
            }
        });
    }, animationOptions);

    let targets = document.querySelectorAll(".project");

    if (targets.length > 0) {
        targets.forEach((target) => {
            observer.observe(target);
        });
    }

    return props.projects.map((project, i) => (
        <section ref={ref} className="project column is-half" key={`project-${project.id}`}>
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
                                        {project.githubLink && <li className="project-link">
                                            <a href={project.githubLink} target="_blank" rel="noreferrer">
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        </li>}
                                    </ul>
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
                            {project.githubLink && <li className="project-link">
                                <a href={project.githubLink} target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>}
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