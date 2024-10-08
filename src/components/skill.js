import React, { useCallback, useEffect } from "react";
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
        details: ["HTML", "CSS", "JavaScript", "Node.js", "TypeScript", "Python", "Java", "C", "C#", "Elixir", "MySQL", "PostgreSQL", "MongoDB"]
    }, {
        category:"Frameworks and Libraries",
        details: ["Bootstrap", "Bulma", "TailwindCSS", "jQuery", "Umbrella.JS", "Express", "React", "Django", "Flask", "Express-Handlebars", "Jinja2", "Openai", "Pydantic", "Instructor", "Spring Boot", "Thymeleaf", ".NET", "Phoenix", "Sequelize", "SQLAlchemy", "Psycopg", "Mongoose", "GraphQL", "JUnit", "Jest"]
    }, {
        category: "Development Tools",
        details: ["IDEs (VSCode, IntelliJ)", "Terminal (zsh)", "Git", "GitHub", "Insomnia"]
    }, {
        category: "Computer Science",
        details: ["Agile", "Data Structures", "Algorithms", "Object-Oriented Programming", "Functional Programming", "Design Patterns"]
    }, {
        category: "Cloud",
        details: ["Heroku", "AWS"]
    },{
        category: "Artificial Intelligence",
        details: ["Gemini", "OpenAI", "ChatGPT", "Claude", "Gencraft"]
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