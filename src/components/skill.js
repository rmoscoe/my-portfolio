import React from "react";
import Subskill from "./subskill";
import "../assets/css/skill.css";

export default function Skill () {
    const skills = [{
        category:"Tech Stack",
        "Tech Stack": ["Java", "C", "Python", "HTML", "CSS", "JavaScript", "Node.js", "MySQL", "MongoDB"]
    }, {
        category:"Frameworks and Libraries",
        "Frameworks and Libraries": ["Bootstrap", "Bulma", "jQuery", "Umbrella.JS", "Express", "React", "Sequelize", "Mongoose", "GraphQL"]
    }, {
        category: "Development Tools",
        "Development Tools": ["IDEs (VSCode, IntelliJ)", "Terminal (zsh)", "Git", "GitHub", "Jupyter"]
    }, {
        category: "Leadership",
        Leadership: ["Change Management", "Problem Solving", "Strategic Thinking"]
    }, {
        category: "Microsoft",
        Microsoft: ["PowerPoint", "Word", "Excel", "Outlook"]
    }];

    return skills.map((skill, i) => (
        <div className="tile is-child skill">
            <p className="is-size-5 has-text-weight-semi-bold">{skill.category}</p>
            <Subskill />
        </div>
    ));
}