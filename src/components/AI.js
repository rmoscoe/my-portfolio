import React, { useState, useEffect, useCallback } from "react";
import Project from "./project";
import MenuItem from "./menuItem";
import MenuChoice from "./menuChoice";
import "../assets/css/portfolio.css";

export default function AI() {
    const [projects, setProjects] = useState([
        {
            id: 19,
            name: "Odyssey",
            dateCreated: "11/11/2023",
            imageSource: "./images.adventureDetailsFantasy.jpg",
            imgAlt: "Adventure Details page, showing boxes containing text for parts of an RPG adventure",
            deployedLink: "odyssey-d4b3f26536d0.herokuapp.com/",
            githubLink: "https://github.com/rmoscoe/odyssey",
            description: "Odyssey uses the Google PaLM2 generative AI to craft thrilling adventures for tabletop roleplaying games in seconds. Choose from a large selection of the most popular games, enter a lesser-known title, or describe an unpublished/homebrew game. Refine your request with a campaign setting, number of players, experience level, and other parameters.",
            techStack: ["MySQL", "Python", "Django", "PaLM2", "Gencraft", "Vite", "TypeScript", "React", "CSS", "TailwindCSS", "Heroku"],
            team: "solo",
            scope: "full-stack",
            starterCode: false,
            defaultPosition: 1
        }
    ]);
    const [technologies, setTechnologies] = useState([]);
    
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

    const [tech, setTech] = useState([]);
    const [team, setTeam] = useState("");
    const [scope, setScope] = useState([]);
    const [starter, setStarter] = useState(null);
    const [sort, setSort] = useState("default");
    
    const [teamOptions, setTeamOptions] = useState(["solo", "group"]);
    const [scopeOptions, setScopeOptions] = useState(["back-end", "front-end", "full-stack"]);
    const [starterOptions, setStarterOptions] = useState(["Provided", "Not Provided"]);
    const [sortOptions, setSortOptions] = useState(["Default", "A-Z", "Z-A", "Recent"]);
    const [transformedProjects, setTransformedProjects] = useState(projects);

    const filterProjects = useCallback((projectArr) => {
        let filteredArr = projectArr;
        if (tech.length > 0) {
            const techArr = filteredArr.filter((project) => {
                for (let i = 0; i < tech.length; i++) {
                    if (project.techStack.indexOf(tech[i]) !== -1) {
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
        if (scope.length > 0) {
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
        if (starter !== null) {
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


    function handleTechChange(event) {
        if (event.target.checked) {
            setTech([...tech, event.target.value]);
        }
        else {
            const idx = tech.indexOf(event.target.value);
            setTech(tech.slice(idx, idx + 1));
        }
    }

    function clearTech() {
        setTech([]);
        const techCheckboxes = document.querySelectorAll("#tech-dropdown-menu .dropdown-content .dropdown-item .checkbox input");
        techCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkbox.checked = false;
            }
        });
        document.getElementById("tech-filter").classList.toggle("is-active");
    }

    function handleTeamChange(event) {
        event.target.classList.add("is-active");
        const teamChoices = document.querySelectorAll("#team-dropdown-menu .dropdown-content .dropdown-item");
        teamChoices.forEach(choice => {
            if (choice.classList.contains("is-active") && choice.textContent !== event.target.textContent) {
                choice.classList.remove("is-active");
            }
        });
        setTeam(event.target.textContent.toLowerCase());
        document.getElementById("team-filter").classList.toggle("is-active");
    }

    function clearTeam() {
        setTeam("");
        document.getElementById("team-filter").classList.toggle("is-active");
    }

    function handleScopeChange(event) {
        if (event.target.checked) {
            setScope([...scope, event.target.value]);
        } else {
            const newScope = [];
            scope.forEach(el => {
                if (el !== event.target.value) {
                    newScope.push(el);
                }
            });
            setScope(newScope);
        }
    }

    function clearScope() {
        setScope([]);
        const scopeCheckboxes = document.querySelectorAll("#scope-dropdown-menu .dropdown-content .dropdown-item .checkbox input");
        scopeCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkbox.checked = false;
            }
        });
        document.getElementById("scope-filter").classList.toggle("is-active");
    }

    function handleStarterChange(event) {
        event.target.classList.add("is-active");
        const starterChoices = document.querySelectorAll("#starter-dropdown-menu .dropdown-content .dropdown-item");
        starterChoices.forEach(choice => {
            if (choice.classList.contains("is-active") && choice.textContent !== event.target.textContent) {
                choice.classList.remove("is-active");
            }
        });
        if (event.target.textContent === "Provided") {
            setStarter(true);
        }
        if (event.target.textContent === "Not Provided") {
            setStarter(false);
        }
        document.getElementById("starter-filter").classList.toggle("is-active");
    }

    function clearStarter() {
        setStarter(null);
        document.getElementById("starter-filter").classList.toggle("is-active");
    }

    function handleSortChange(event) {
        event.target.classList.add("is-active");
        const sortChoices = document.querySelectorAll("#sort-dropdown-menu .dropdown-content .dropdown-item");
        sortChoices.forEach(choice => {
            if (choice.classList.contains("is-active") && choice.textContent !== event.target.textContent) {
                choice.classList.remove("is-active");
            }
        });
        setSort(event.target.textContent);
        document.getElementById("sort").classList.toggle("is-active");
    }

    useEffect(() => {
        const filteredProjects = filterProjects(projects);
        const sortedProjects = sortProjects(filteredProjects, sort);
        setTransformedProjects([...sortedProjects]);
    }, [projects, sort, tech, team, starter, scope]);

    const dropdowns = document.querySelectorAll(".dropdown");

    function toggleDropdown(menu) {
        document.getElementById(menu).classList.toggle("is-active");
        dropdowns.forEach(dropdown => {
            if (dropdown.getAttribute("id") !== menu && dropdown.classList.contains("is-active")) {
                dropdown.classList.toggle("is-active");
            }
        })
    }

    return (
        <section className="link-to">
            <h2>AI Prompt Engineering</h2>
            <div id="controls" className="columns is-mobile is-flex-wrap-wrap">
                <div className="column is-one-third-mobile is-one-quarter-tablet is-one-fifth-desktop">
                    <div className="dropdown" id="tech-filter">
                        <div className="dropdown-trigger">
                            <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="tech-dropdown-menu" onClick={() => { toggleDropdown("tech-filter") }}>
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
                    <div className="dropdown" id="team-filter">
                        <div className="dropdown-trigger">
                            <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="team-dropdown-menu" onClick={() => { toggleDropdown("team-filter") }}>
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
                    <div className="dropdown" id="scope-filter">
                        <div className="dropdown-trigger">
                            <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="scope-dropdown-menu" onClick={() => { toggleDropdown("scope-filter") }}>
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
                <div className="column is-one-third-mobile is-one-quarter-tablet is-one-fifth-desktop">
                    <div className="dropdown" id="starter-filter">
                        <div className="dropdown-trigger">
                            <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="starter-dropdown-menu" onClick={() => { toggleDropdown("starter-filter") }}>
                                <span className="is-hidden-touch">Starter Code</span>
                                <span className="is-hidden-desktop">Starter</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="starter-dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <button className="button is-small is-responsive is-outlined" onClick={clearStarter}>Clear</button>
                                <MenuChoice options={starterOptions} handleMenuClick={handleStarterChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-one-third-mobile is-one-quarter-tablet is-one-fifth-desktop">
                    <div className="dropdown" id="sort">
                        <div className="dropdown-trigger">
                            <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="sort-dropdown-menu" onClick={() => { toggleDropdown("sort") }}>
                                <span>Sort</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="sort-dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <MenuChoice options={sortOptions} handleMenuClick={handleSortChange} />
                            </div>
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