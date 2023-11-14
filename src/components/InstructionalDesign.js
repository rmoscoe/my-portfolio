/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import ElearningCourse from "./ElearningCourse";
import ClassroomCourse from "./ClassroomCourse";
import MenuItem from "./menuItem";
import MenuChoice from "./menuChoice";
import "../assets/css/portfolio.css";

export default function InstructionalDesign() {
    const [elearningCourses] = useState(
        [
            {
                id: 101,
                name: "Game Guide: Ticket to Ride",
                dateCreated: "03/30/2020",
                imageSource: "./images/gameGuideTicketToRide.jpg",
                imgAlt: "Course title page screenshot",
                deployedLink: "https://storage.googleapis.com/ryanmoscoeportfolio/Game%20Guide%20-%20Ticket%20to%20Ride/Game%20Guide%20Ticket%20to%20Ride%20-%20Storyline%20output/story.html",
                description: "An elearning course designed to teach participants how to play the board game Ticket to Ride. Intended for completion on a desktop or laptop computer but can be completed on a mobile device.",
                techStack: ["Articulate Storyline 360"],
                team: "solo",
                defaultPosition: 1
            },
            {
                id: 102,
                name: "Graphic Design Hacks: Custom Shapes in PowerPoint",
                dateCreated: "04/10/2020",
                imageSource: "./images/graphicDesignHacks.jpg",
                imgAlt: "Course title page screenshot",
                deployedLink: "https://storage.googleapis.com/ryanmoscoeportfolio/Graphic%20Design%20Hacks%20-%20Custom%20Shapes%20in%20PowerPoint/Graphic%20Design%20Hacks%20-%20Custom%20Shapes%20in%20PowerPoint%20-%20Storyline%20output/story.html",
                description: "A software simulation elearning course designed to teach participants how to create custom shapes in Microsoft PowerPoint 365. Intended for completion on a desktop or laptop computer but can be completed on a mobile device.",
                techStack: ["Articulate Storyline 360", "Microsoft PowerPoint"],
                team: "solo",
                defaultPosition: 5
            },
            {
                id: 103,
                name: "Choosing the Right Words",
                dateCreated: "04/19/2020",
                imageSource: "./images/choosingTheRightWords.jpg",
                imageAlt: "A clear and red pen on top of a page with text, behind the course title and a Start Course button",
                deployedLink: "https://storage.googleapis.com/ryanmoscoeportfolio/Choosing%20the%20Right%20Words/content/index.html#/",
                description: "An mlearning (mobile learning) course designed to improve participants' use of commonly confused words. Intended for completion on a mobile device but can be completed on a desktop or laptop computer.",
                techStack: ["Articulate Rise 360"],
                team: "solo",
                defaultPosition: 10
            }
        ]
    );
    const [classroomCourses] = useState(
        [
            {
                id: 201,
                name: "Training a New Team Member",
                dateCreated: "08/08/2020",
                description: "Sample materials for a classroom training session on delivering classroom and on-the-job training, intended for an audience of Subject Matter Experts who will deliver training. Developed for a fictitious company called Acme.",
                techStack: ["Microsoft PowerPoint", "Microsoft Word"],
                team: "solo",
                defaultPosition: 1,
                components: [
                    {
                        name: "Slide Deck",
                        imageSource: "./images/trainingNewTeamMemberPpt.jpg",
                        imageAlt: "An instructor standing in front of participants to the left of a logo and course title, above a gray and purple bar",
                        link: "https://drive.google.com/file/d/1linkbezJZ1_g0jkGs5AFOI9-quh5OdiE/view"
                    },
                    {
                        name: "Facilitator Workbook",
                        imageSource: "./images/trainingNewTeamMemberFacilitator.jpg",
                        imageAlt: "Facilitator workbook cover page",
                        link: "https://drive.google.com/file/d/1f3T6Y6OYqqiiVCn0xo5I6nX1HDapvIhF/view"
                    },
                    {
                        name: "Participant Workbook",
                        imageSource: "./images/trainingNewTeamMemberParticipant.jpg",
                        imageAlt: "Participant workbook cover page",
                        link: "https://drive.google.com/file/d/1MoggC-7IplM37GkeNgl1Py0qyS6JeC-O/view"
                    },
                    {
                        name: "Job Aid",
                        imageSource: "./images/trainingNewTeamMemberJobAid.jpg",
                        imageAlt: "A job aid with three columns of information",
                        link: "https://drive.google.com/file/d/1Z_UoOPJJUwBH13kWHw9Qe6gvZ5NWxDTg/view"
                    }
                ]
            },
            {
                id: 202,
                name: "Performance Review Training",
                dateCreated: "04/13/2020",
                description: "Sample materials for a classroom training session on writing and delivering performance reviews. Developed for a fictitious company called Acme.",
                techStack: ["Microsoft PowerPoint", "Microsoft Word"],
                team: "solo",
                defaultPosition: 5,
                components: [
                    {
                        name: "Slide Deck",
                        imageSource: "./images/performanceReviewTrainingPpt.jpg",
                        imageAlt: "A purple title against a white background with purple bars in front of a brick wall",
                        link: "https://drive.google.com/file/d/1oIOHo-4KmfiPCfmSkEDkGsWc6ANLsFnQ/view"
                    },
                    {
                        name: "Facilitator Workbook",
                        imageSource: "./images/performanceReviewTrainingFacilitator",
                        imageAlt: "A logo above a purple rectangle with the course title",
                        link: "https://drive.google.com/file/d/1C8HElqSrUbtCnjSuDcH469ioJYzJtt2J/view?usp=drive_link"
                    },
                    {
                        name: "Participant Workbook",
                        imageSource: "./images/performanceReviewTrainingParticipant",
                        imageAlt: "A logo above a purple rectangle with the course title",
                        link: "https://drive.google.com/file/d/1WeKrfrDI7orU6B2ExDdFAHwa1A9p29hQ/view?usp=drive_link"
                    }
                ]
            }
        ]
    );

    const [technologies, setTechnologies] = useState([]);
    
    useEffect(() => {
        const techList = [];
        elearningCourses.forEach((course) => {
            for (let i = 0; i < course.techStack.length; i++) {
                if (techList.indexOf(course.techStack[i]) === -1) {
                    techList.push(course.techStack[i]);
                }
            }
        });
        classroomCourses.forEach((course) => {
            for (let i = 0; i < course.techStack.length; i++) {
                if (techList.indexOf(course.techStack[i]) === -1) {
                    techList.push(course.techStack[i]);
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
    }, [elearningCourses, classroomCourses]);

    const [tech, setTech] = useState([]);
    const [team, setTeam] = useState("");
    const [type, setType] = useState([]);
    const [sort, setSort] = useState("default");
    const [showElearning, setShowElearning] = useState(true);
    const [showClassroom, setShowClassroom] = useState(true);
    const [teamOptions] = useState(["solo", "group"]);
    const [typeOptions] = useState(["elearning", "classroom"]);
    const [sortOptions] = useState(["Default", "A-Z", "Z-A", "Recent"]);
    const [transformedElearning, setTransformedElearning] = useState(elearningCourses);
    const [transformedClassroom, setTransformedClassroom] = useState(classroomCourses);

    const filterCourses = useCallback((courseArr) => {
        let filteredArr = courseArr;
        if (tech.length > 0) {
            const techArr = filteredArr.filter((course) => {
                for (let i = 0; i < tech.length; i++) {
                    if (course.techStack.indexOf(tech[i]) !== -1) {
                        return true;
                    }
                }
                return false;
            });
            filteredArr = techArr;
        } 
        if (team) {
            const teamArr = filteredArr.filter((course) => {
                return course.team === team;
            });
            filteredArr = teamArr;
        }
        setShowElearning(type.includes("elearning"));
        setShowClassroom(type.includes("classroom"));
        return filteredArr;
    }, [type, team, tech]);

    function sortCourses(courseArr, criteria) {
        switch (criteria) {
            case "A-Z":
                return courseArr.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
            case "Z-A":
                return courseArr.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                });
            case "Recent":
                return courseArr.sort((a, b) => {
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
                return courseArr.sort((a, b) => {
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

    function handleTypeChange(event) {
        if (event.target.checked) {
            setType([...type, event.target.value]);
        } else {
            const newType = [];
            type.forEach(el => {
                if (el !== event.target.value) {
                    newType.push(el);
                }
            });
            setType(newType);
        }
    }

    function clearType() {
        setType([]);
        const typeCheckboxes = document.querySelectorAll("#type-dropdown-menu .dropdown-content .dropdown-item .checkbox input");
        typeCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkbox.checked = false;
            }
        });
        document.getElementById("type-filter").classList.toggle("is-active");
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
        const filteredElearning = filterCourses(elearningCourses);
        const filteredClassroom = filterCourses(classroomCourses);
        const sortedElearning = sortCourses(filteredElearning, sort);
        const sortedClassroom = sortCourses(filteredClassroom, sort);
        setTransformedElearning([...sortedElearning]);
        setTransformedClassroom([...sortedClassroom]);
    }, [elearningCourses, classroomCourses, sort, tech, team, type]);

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
            <h2>Instructional Design</h2>
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
                    <div className="dropdown" id="type-filter">
                        <div className="dropdown-trigger">
                            <button className="button is-small is-responsive is-outlined port-control" aria-haspopup="true" aria-controls="type-dropdown-menu" onClick={() => { toggleDropdown("type-filter") }}>
                                <span>Type</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="type-dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <button className="button is-small is-responsive is-outlined" onClick={clearType}>Clear</button>
                                <MenuItem options={typeOptions} handleSelectionChange={handleTypeChange} />
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
            {showElearning &&
                <div className="columns is-desktop is-flex-wrap-wrap">
                    {transformedElearning?.map((course, i) => (
                        <ElearningCourse key={course.id * i} course={course} />
                    ))}
                </div>
            }
            {showClassroom &&
                <div className="columns is-desktop is-flex-wrap-wrap">
                    {transformedClassroom?.map((course, i) => (
                        <ClassroomCourse key={course.id + i * 10} course={course} />
                    ))}
                </div>
            }
        </section>
    );
}