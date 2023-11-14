import React from "react";
import "../assets/css/tech.css";

export default function Tech(props) {
    const techIcons = {
        CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
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
        GitHub: "ttps://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        graphQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        SQLAlchemy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-plain.svg",
        "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        PaLM2: "./images/google-ai-1.svg",
        Gencraft: "./images/gencraft.svg",
        Thymeleaf: "./images/icons8-thymeleaf.svg",
        Vite: "./images/icons8-vite.svg",
        "Articulate Storyline 360": "./images/storyline.svg",
        "Articulate Rise 360": "./images/rise.svg",
        "Microsoft PowerPoint": "./images/microsoft-office-powerpoint-2018-present--1.svg",
        "Microsoft Word": "./images/word-1.svg"
    };

    return props.technologies.map((tech, i) => (
        <li key={`tech-${i}`}>
            {techIcons[tech] && (["Express-Handlebars", "MySql", "Express.js", "Flask", "SQLAlchemy", "Django"].includes(tech) ? <img src={techIcons[tech]} alt="Logo for listed technology" className="tech filter-white" /> : <img src={techIcons[tech]} alt="Logo for listed technology" className="tech" />)}
            <span>{tech}</span>
        </li>
    ));
}