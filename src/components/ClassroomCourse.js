import React, { useRef } from "react";
import Tech from "./tech";
import CourseComponent from "./CourseComponent";
import "../assets/css/project.css";

export default function ClassroomCourse({ course }) {
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

    const maxCols = course.components.length % 3 === 0 ? 3 : 2;

    return (
        <section ref={ref} className="project column is-half" key={course.id * 20}>
            <div className="project-background">
                <h3>{course.name}</h3>
                <div className="is-flex is-flex-wrap-nowrap is-justify-content-space-between is-align-items-flex-end">
                    {course.videoLink && <li className="project-link mr-3"><a href={course.videoLink} target="_blank" rel="noreferrer"><i className="fa-solid fa-clapperboard"></i></a></li>}
                    <ul className="tech-stack">
                        <Tech technologies={course.techStack} />
                    </ul>
                </div>
                <div className="box description">
                    <p>{course.description}</p>
                </div>
                <div className="columns">
                    {course.components.map((component, i) => (
                        <CourseComponent key={course.id * i} component={component} maxCols={maxCols} />
                    ))}
                </div>
            </div>

        </section>
    );
}