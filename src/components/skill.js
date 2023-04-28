import React, { useRef, useCallback, useEffect } from "react";
import Subskill from "./subskill";
import "../assets/css/skill.css";

export default function Skill () {
    // const ref = useRef(null);

    const animationOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
    };

    let observer = new IntersectionObserver((entries, observer) => {
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

    const assignTargets = useCallback(() => {
        let targets = document.querySelectorAll(".skill");

        if (targets.length > 0) {
            targets.forEach((target) => {
                observer.observe(target);
            });
        }
    }, []);

    useEffect(() => {assignTargets()});

    const skills = [{
        category:"Tech Stack",
        details: ["Java", "C", "Python", "HTML", "CSS", "JavaScript", "Node.js", "MySQL", "MongoDB"]
    }, {
        category:"Frameworks and Libraries",
        details: ["Bootstrap", "Bulma", "jQuery", "Umbrella.JS", "Express", "React", "Flask", "Express-Handlebars", "Jinja2", "Sequelize", "SQLAlchemy", "Mongoose", "GraphQL"]
    }, {
        category: "Development Tools",
        details: ["IDEs (VSCode, IntelliJ)", "Terminal (zsh)", "Git", "GitHub", "Jupyter"]
    }, {
        category: "Leadership",
        details: ["Change Management", "Problem Solving", "Strategic Thinking"]
    }, {
        category: "Microsoft",
        details: ["PowerPoint", "Word", "Excel", "Outlook"]
    }];

    return skills.map((skill, i) => (
        <div key={i} className="tile is-child skill p-3">
            <p className="is-size-4 has-text-weight-semi-bold">{skill.category}</p>
            <Subskill subskills={skill.details} />
        </div>
    ));
}