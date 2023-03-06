import React from "react";
import Subskill from "./subskill";
import "../assets/css/skill.css";

export default function Skill () {
    const skills = [{
        category:"Tech Stack",
        details: ["Java", "C", "Python", "HTML", "CSS", "JavaScript", "Node.js", "MySQL", "MongoDB"]
    }, {
        category:"Frameworks and Libraries",
        details: ["Bootstrap", "Bulma", "jQuery", "Umbrella.JS", "Express", "React", "Sequelize", "Mongoose", "GraphQL"]
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
        <div className="tile is-child skill">
            <p className="is-size-5 has-text-weight-semi-bold">{skill.category}</p>
            <Subskill subskills={skill.details} />
        </div>
    ));
}