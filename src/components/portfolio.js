import React, { useState, useEffect, useCallback } from "react";
import Project from "./project";
import MenuItem from "./menuItem";
import MenuChoice from "./menuChoice";
import "../assets/css/portfolio.css";

export default function Portfolio() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "Bullet Journal",
            dateCreated: "02/15/2023",
            imageSource: "./assets/images/bulletJournal.jpg",
            imgAlt: "Bullet Journal application screenshot",
            deployedLink: "https://bullet-journal.herokuapp.com/",
            githubLink: "https://github.com/megellman/bullet-journal",
            description: "Bullet Journal allows users to organize their thoughts and feelings by creating an unlimited number of journals, which can each contain an unlimited number of entries.",
            techStack: ["CSS", "JavaScript", "Node.js", "MySQL", "Sequelize", "Express.js", "Express-Handlebars", "Bulma", "Heroku"],
            team: "group",
            scope: "fullStack",
            starterCode: false,
            defaultPosition: 1
        },
        {
            id: 2,
            name: "Employee Tracker",
            dateCreated: "02/07/2023",
            imageSource: "./assets/images/AddEmployee.jpg",
            imgAlt: "Terminal screenshot showing an employee being added",
            videoLink: "https://drive.google.com/file/d/1Gm278AQvauy9FiAlEyKEf22vmOyIWjy3/view?usp=sharing",
            githubLink: "https://github.com/rmoscoe/employee-tracker",
            description: "This command line application interacts with a MySQL database, representing a sliver of an HRIS. The user can select various actions, including viewing a table with departments, roles, or employees; adding a department, role, or employee; updating an existing employee's role; or exiting the system.",
            techStack: ["JavaScript", "Node.js", "MySQL"],
            team: "solo",
            scope: "backEnd",
            starterCode: false,
            defaultPosition: 3
        },
        {
            id: 3,
            name: "Team Profile Generator",
            dateCreated: "01/25/2023",
            imageSource: "./assets/images/prompts.jpg",
            imgAlt: "Terminal screenshot showing the prompts accepting input",
            videoLink: "https://drive.google.com/file/d/1lreVZYBKH0te8r_BKABnFH3PhMw0nJqC/view?usp=sharing",
            githubLink: "https://github.com/rmoscoe/team-profile-generator",
            description: "This command line application prompts the user to enter pertinent details about a team manager and as many additional team members as desired. Then the application dynamically generates an HTML file to display the details for each team member. In addition, this project incorporates unit testing using Jest.",
            techStack: ["HTML", "Bootstrap", "JavaScript", "Node.js", "Jest"],
            team: "solo",
            scope: "backEnd",
            skills: ["unit testing"],
            starterCode: false,
            defaultPosition: 4
        },
        {
            id: 4,
            name: "Note Taker",
            dateCreated: "01/29/2023",
            imageSource: "./assets/images/Note.jpg",
            imgAlt: "Application screenshot showing a note",
            deployedLink: "https://sheltered-anchorage72122.herokuapp.com/",
            githubLink: "https://github.com/rmoscoe/note-taker",
            description: "This app allows a user to save notes in an online repository so they can be retrieved, viewed, and deleted from anywhere. For this project, the front end was provided as starter code and did not require refactoring. The back end had to be created from scratch.",
            techStack: ["JavaScript", "Node.js", "Express.js", "Heroku"],
            team: "solo",
            scope: "backEnd",
            starterCode: true,
            defaultPosition: 6
        },
        {
            id: 5,
            name: "Code Quiz",
            dateCreated: "12/30/2022",
            imageSource: "./assets/images/Question.jpg",
            imgAlt: "Application screenshot showing a quiz question",
            deployedLink: "https://rmoscoe.github.io/code-quiz-challenge/",
            githubLink: "https://github.com/rmoscoe/code-quiz-challenge",
            description: "This quiz presents the user with ten questions about JavaScript in a random order. The quiz has a time limit of 10 minutes, and the user's score is the number of seconds remaining when all questions are answered or time runs out.",
            techStack: ["HTML", "CSS", "JavaScript"],
            team: "solo",
            scope: "frontEnd",
            starterCode: false,
            defaultPosition: 7
        },
        {
            id: 6,
            name: "Aliens Vs. Humans",
            dateCreated: "10/18/2022",
            imageSource: "./assets/images/aliens_vs_humans.png",
            imgAlt: "Terminal screenshot showing the simulation running",
            videoLink: "https://drive.google.com/file/d/1KAprcbPIazQMIhQZRtQt_cjz1drXku/view?usp=sharing",
            githubLink: "https://github.com/rmoscoe/aliens_vs_humans",
            description: "A simulation in the style of a tabletop roleplaying game based on a laser tag arena where I used to work. It programmatically generates a human character and an alien character and then simulates combat between them, describing the results through Standard Output.",
            techStack: ["Java", "JUnit"],
            team: "solo",
            scope: "backEnd",
            skills: ["unit testing"],
            starterCode: false,
            defaultPosition: 8
        },
        {
            id: 7,
            name: "Weather Dashboard",
            dateCreated: "01/11/2023",
            imageSource: "./assets/images/Dashboard.jpg",
            imgAlt: "Application screenshot showing a weather forecast",
            deployedLink: "https://rmoscoe.github.io/weather-dashboard/",
            githubLink: "https://github.com/rmoscoe/weather-dashboard",
            description: "View current weather conditions and a 5Day forecast for a city by searching or retrieving a saved search.",
            techStack: ["HTML", "JavaScript", "jQuery", "Bootstrap", "Day.js"],
            team: "solo",
            scope: "frontEnd",
            starterCode: false,
            defaultPosition: 9
        },
        {
            id: 8,
            name: "Mixed Messages",
            dateCreated: "05/15/2022",
            imageSource: "./assets/images/mixedMessages.jpg",
            imgAlt: "Application screenshot showing a generated insult",
            deployedLink: "https://rmoscoe.github.io/mixed-messages/",
            githubLink: "https://github.com/rmoscoe/mixed-messages",
            description: "A Shakespearean insult generator that assembles three randomly selected components to form an insult at the push of a button.",
            techStack: ["HTML", "CSS", "JavaScript"],
            team: "solo",
            scope: "frontEnd",
            starterCode: false,
            defaultPosition: 10
        },
        {
            id: 9,
            name: "Marketing Refactor",
            dateCreated: "12/14/2022",
            imageSource: "./assets/images/Horiseon.jpg",
            imgAlt: "Screenshot showing the refactored website",
            deployedLink: "https://rmoscoe.github.io/marketing-refactor/",
            githubLink: "https://github.com/rmoscoe/marketing-refactor",
            description: "Horiseon, a fictitious marketing agency, requested a refactoring of its website to improve accessibility. This project included several improvements to the existing code.",
            techStack: ["HTML", "CSS"],
            team: "solo",
            scope: "frontEnd",
            starterCode: true,
            defaultPosition: 11
        },
        {
            id: 10,
            name: "Reading Is Fun",
            dateCreated: "01/18/2023",
            imageSource: "./assets/images/SearchResults.jpg",
            imgAlt: "Application screenshot showing the dashboard",
            deployedLink: "https://justhenner.github.io/reading-is-fun/",
            githubLink: "https://github.com/justhenner/reading-is-fun",
            description: "View information from Google Books and save favorites with this app.",
            techStack: ["HTML", "CSS", "JavaScript", "Bulma", "UmbrellaJS"],
            team: "group",
            scope: "frontEnd",
            starterCode: false,
            defaultPosition: 12
        },
        {
            id: 11,
            name: "Password Generator",
            dateCreated: "12/22/2022",
            imageSource: "./assets/images/Password.jpg",
            imgAlt: "Application screenshot showing a generated password",
            deployedLink: "https://rmoscoe.github.io/password-generator",
            githubLink: "https://github.com/rmoscoe/password-generator",
            description: "This app randomly generates a password according to criteria the user specifies.",
            techStack: ["JavaScript"],
            team: "solo",
            scope: "frontEnd",
            starterCode: true,
            defaultPosition: 13
        },
        {
            id: 12,
            name: "Text Editor",
            dateCreated: "03/01/2023",
            imageSource: "./assets/images/JATE.png",
            imgAlt: "Application screenshot showing the editor launching in the browser",
            deployedLink: "https://vast-wave58973.herokuapp.com/",
            githubLink: "https://github.com/rmoscoe/text-editor",
            description: "This progressive web app (PWA) loads a basic text editor in a browser. The editor automatically saves text entered by the user in a clientSide database using IndexedDB and retrieves the user's saved text on load. In addition, the user can install the editor as an app for offline use.",
            techStack: ["JavaScript", "Node.js", "Webpack", "IndexedDB", "Concurrently", "Heroku"],
            team: "solo",
            scope: "fullStack",
            skills: ["progressive web apps"],
            starterCode: true,
            defaultPosition: 2
        },
        {
            id: 13,
            name: "Social Network API",
            dateCreated: "02/27/2023",
            imageSource: "./assets/images/social-network-api.png",
            imgAlt: "Screenshot showing API routes being tested in Insomnia",
            videoLink: "https://drive.google.com/file/d/1rPIdWe4D88s7tA4qS12kakkzTLXSyi6Q/view?usp=share_link",
            githubLink: "https://github.com/rmoscoe/social-network-api",
            description: "This project consists of a MongoDB database and routes to create, read, update, and delete data from the database. The database includes models for users and thoughts, with the thought model containing a subdocument for reactions. Users have a friends list, facilitating relationships with other users. In addition, thoughts and reactions reference users as owners, and users have a list of thoughts.",
            techStack: ["JavaScript", "Node.js", "MongoDB", "Mongoose", "Express.js"],
            team: "solo",
            scope: "backEnd",
            starterCode: false,
            defaultPosition: 5
        }
    ]);
    const [tech, setTech] = useState();
    const [team, setTeam] = useState("");
    const [scope, setScope] = useState();
    const [starter, setStarter] = useState(null);
    const [sort, setSort] = useState("default");
    const [technologies, setTechnologies] = useState([]);
    const [teamOptions, setTeamOptions] = useState(["solo", "group"]);
    const [scopeOptions, setScopeOptions] = useState(["back-end", "front-end", "full-stack"]);
    const [starterOptions, setStarterOptions] = useState(["Provided", "Not Provided"]);
    const [sortOptions, setSortOptions] = useState(["Default", "A-Z", "Z-A", "Recent"]);
    const [transformedProjects, setTransformedProjects] = useState([]);

    const filterProjects = useCallback((projectArr) => {
        let filteredArr = projectArr;
        if (tech) {
            console.log()
            const techArr = filteredArr.filter((project) => {
                for (let i = 0; i < tech.length; i++) {
                    if (project.techStack.includes(tech[i])) {
                        return true;
                    }
                }
                return false;
            });
            filteredArr = techArr;
        }
        if (team) {
            const teamArr = filteredArr.filter((project) => {
                return project.team === team;
            });
            filteredArr = teamArr;
        }
        if (scope) {
            const scopeArr = filteredArr.filter((project) => {
                for (let i = 0; i < scope.length; i++) {
                    if (project.scope === scope[i]) {
                        return true;
                    }
                }
                return false;
            });
            filteredArr = scopeArr;
        }
        if (starter) {
            const starterArr = filteredArr.filter((project) => {
                return project.starterCode === starter;
            });
            filteredArr = starterArr;
        }
        return filteredArr;
    }, [scope, starter, team, tech]);

    function sortProjects(projectArr, criteria) {
        switch (criteria) {
            case "A-Z":
                return projectArr.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
            case "Z-A":
                return projectArr.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                });
            case "Recent":
                return projectArr.sort((a, b) => {
                    const aDate = new Date(a.dateCreated);
                    const bDate = new Date(b.dateCreated);
                    if (aDate > bDate) {
                        return -1;
                    }
                    if (aDate < bDate) {
                        return 1;
                    }
                    return 0;
                });
            default:
                return projectArr.sort((a, b) => {
                    if (a.defaultPosition < b.defaultPosition) {
                        return -1;
                    }
                    if (a.defaultPosition > b.defaultPosition) {
                        return 1;
                    }
                    return 0;
                });
        }
    }

    useEffect(() => {
        const techList = [];
        projects.forEach((project) => {
            for (let i = 0; i < project.techStack.length; i++) {
                if (techList.indexOf(project.techStack[i]) === -1) {
                    techList.push(project.techStack[i]);
                }
            }
        });
        techList.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        setTechnologies(techList);
    }, [projects]);


    function handleTechChange(event) {
        event.preventDefault();
        if (event.target.checked) {
            setTech([...tech, event.target.value]);
        }
        else {
            const idx = tech.indexOf(event.target.value);
            setTech(tech.slice(idx, idx + 1));
        }
    }

    function clearTech(event) {
        event.preventDefault();
        setTech([]);
    }

    function handleTeamChange(event) {
        setTeam(event.target.textContent);
    }

    function clearTeam(event) {
        setTeam("");
    }

    function handleScopeChange(event) {
        event.preventDefault();
        if (event.target.checked) {
            setScope([...scope, event.target.value]);
        } else {
            const idx = scope.indexOf(event.target.value);
            setScope(scope.slice(idx, idx + 1));
        }
    }

    function clearScope(event) {
        event.preventDefault();
        setScope([]);
    }

    function handleStarterChange(event) {
        if (event.target.textContent === "Provided") {
            setStarter(true);
        }
        if (event.target.textContent === "Not Provided") {
            setStarter(false);
        }
    }

    function clearStarter(event) {
        setStarter(null);
    }

    function handleSortChange(event) {
        setSort(event.target.textContent);
    }

    useEffect(() => {
        const filteredProjects = filterProjects(projects);
        const sortedProjects = sortProjects(filteredProjects, sort);
        setTransformedProjects(sortedProjects);
      }, [projects, sort]);

    return (
        <section className="link-to">
            <h2>Portfolio</h2>
            <div id="controls" className="columns is-mobile">
                <div className="column is-one-third-mobile is-one-quarter-tablet is-one-fifth-desktop">
                    <div className="dropdown is-active">
                        <div className="dropdown-trigger">
                            <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span className="is-hidden-touch">Technologies</span>
                                <span className="is-hidden-desktop">Tech</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="tech-dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <button className="button is-small is-responsive is-outlined" onClick={clearTech}>Clear</button>
                                <MenuItem options={technologies} handleSelectionChange={handleTechChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-one-third-mobile is-one-quarter-tablet is-one-fifth-desktop">
                    <div className="dropdown is-active">
                        <div className="dropdown-trigger">
                            <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Team</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="team-dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <button className="button is-small is-responsive is-outlined" onClick={clearTeam}>Clear</button>
                                <MenuChoice options={teamOptions} handleMenuClick={handleTeamChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-one-third-mobile is-one-quarter-tablet is-one-fifth-desktop">
                    <div className="dropdown is-active">
                        <div className="dropdown-trigger">
                            <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Scope</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="scope-dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <button className="button is-small is-responsive is-outlined" onClick={clearScope}>Clear</button>
                                <MenuItem options={scopeOptions} handleSelectionChange={handleScopeChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-one-third-mobile is-one-quarter-tablet is-one-fifth-desktop">
                <div className="dropdown is-active">
                    <div className="dropdown-trigger">
                        <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span className="is-hidden-touch">Starter Code</span>
                            <span className="is-hidden-desktop">Starter</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="team-dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <button className="button is-small is-responsive is-outlined" onClick={clearStarter}>Clear</button>
                            <MenuChoice options={starterOptions} handleMenuClick={handleStarterChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-one-third-mobile is-one-quarter-tablet is-one-fifth-desktop">
                <div className="dropdown is-active">
                    <div className="dropdown-trigger">
                        <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>Sort</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="team-dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <MenuChoice options={sortOptions} handleMenuClick={handleSortChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns is-desktop is-flex-wrap-wrap">
                <Project projects={transformedProjects} />
            </div>
        </section>
    );
}