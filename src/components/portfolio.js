import React, { useState, useEffect, useCallback } from "react";
import Project from "./project";
import MenuItem from "./menuItem";
import MenuChoice from "./menuChoice";
import "../assets/css/portfolio.css";

const fs = require("fs");


export default function Portfolio () {
    const [projects, setProjects] = useState([]);
    const [tech, setTech] = useState([]);
    const [team, setTeam] = useState("");
    const [scope, setScope] = useState([]);
    const [starter, setStarter] = useState(null);
    const [sort, setSort] = useState("default");
    const [technologies, setTechnologies] = useState([]);
    const [teamOptions, setTeamOptions] = useState(["solo", "group"]);
    const [scopeOptions, setScopeOptions] = useState(["back-end", "front-end", "full-stack"]);
    const [starterOptions, setStarterOptions] = useState(["Provided", "Not Provided"]);
    const [sortOptions, setSortOptions] = useState(["Default", "A-Z", "Z-A", "Recent"]);
    const [transformedProjects, setTransformedProjects] = useState([]);

    function loadProjects() {
        let projectList;
        fs.readFile("../projects.json", "utf-8", ((err, data) => {
            err ? console.error(err) : projectList = JSON.parse(data);
        }));
        return projectList;
    }

    const filterProjects = useCallback((projectArr) => {
        let filteredArr = projectArr;
        if (tech) {
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
        const projects = loadProjects();
        setProjects(projects);
    }, []);

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
    }, [sort, filterProjects, projects]);

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
            <div className="columns is-desktop">
                <Project projects={transformedProjects} />
            </div>
        </section>
    );
}