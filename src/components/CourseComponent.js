import React from "react";
import "../assets/css/project.css";

export default function CourseComponent({ component, maxCols }) {
    const desktopWidth = {
        2: "is-half-desktop",
        3: "is-one-third-desktop"
    }

    return (
        <section className={`column is-half-tablet ${desktopWidth[maxCols]} mb-4`}>
            <div className="image-container">
                <img className="project-image" src={component.imageSource} alt={CourseComponent.imgAlt} />
                <div className="container is-overlay translucent is-fullheight is-fullwidth">
                    <div className="block">
                        <ul className="project-links is-size-5 ml-auto">
                            <li className="project-link ml-auto">
                                <a href={component.deployedLink} target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h4 className="mt-2 has-text-centered is-fullwidth px-1">{component.name}</h4> 
        </section>
    );
}