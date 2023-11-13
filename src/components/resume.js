import React, { useCallback, useEffect } from "react";
import Skill from "./skill";
import "../assets/css/resume.css";

export default function Resume() {

    const assignTargets = useCallback(() => {
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

        let targets = document.querySelectorAll(".experience");

        if (targets.length > 0) {
            targets.forEach((target) => {
                observer.observe(target);
            });
        }
    }, []);

    useEffect(() => {assignTargets()});

    return (
        <section className="link-to">
            <h2>Resume</h2>
            <section className="hero">
                <section className="hero-body is-flex justify-content-center align-content-center">
                    <a className="resume-download is-size-3 is-align-self-center has-text-centered" href="./Ryan%20Moscoe%20Resume.docx" download="Ryan Moscoe Resume">
                        <i className="fa-regular fa-file-word"></i>
                        <span className="ml-2">Download Resume</span>
                    </a>
                </section>
            </section>
            <section className="tile is-ancestor mx-3">
                <div className="tile is-parent is-vertical">
                    <h3>Experience</h3>
                    <div className="tile is-child box experience">
                        <p>
                            <span className="emphasis">Bruce Clay, Inc. </span>
                            Moorpark, CA (Remote)
                        </p>
                        <p className="italic">Software Engineer (Contract), 08/2023-Present</p>
                        <ul className="p-3">
                            <li>Created an analytics integrations hub using Python, Django, PosgreSQL, and CraftMyPDF.</li>
                            <li>Cached reports from Google Looker Studio using Python, Django, SQLite, Huey, and Selenium.</li>
                            <li>Debugged a complex application written in Elixir/Phoenix.</li>
                        </ul>
                    </div>
                    <div className="tile is-child box experience">
                        <p>
                            <span className="emphasis">Shield HealthCare </span>
                            Valencia, CA
                        </p>
                        <p className="italic">Senior Training Specialist, 06/2014-11/2022</p>
                        <p className="italic">Contact Center Training Specialist, 06/2012-06/2014</p>
                        <ul className="p-3">
                            <li>Selected, implemented, and administered an LMS, e-learning authoring tool, content library, virtual training platform, and adoption platform. </li>
                            <li>Built a comprehensive knowledge bank with over 1000 interlinked articles.</li>
                            <li>Redesigned training for new Customer Service Agents, resulting in 50% faster time to proficiency.</li>
                        </ul>
                    </div>
                    <div className="tile is-child box experience">
                        <p>
                            <span className="emphasis">Montecito Bank & Trust </span>
                            Santa Barbara, CA
                        </p>
                        <p className="italic">Training Specialist II, 04/2010-06/2012</p>
                        <p className="italic">Training Specialist I, 04/2009-04/2010</p>
                        <ul className="p-3">
                            <li>Implemented an LMS and e-learning authoring tools. </li>
                            <li>Developed training and change management programs for 6 software implementations, numerous regulatory changes, and a redesigned product suite.</li>
                            <li>Populated a sandbox environment with accounts and created numerous scenarios to enable practice and assessment before participants had to work with live accounts and customers in a branch.</li>
                        </ul>
                    </div>
                    <h3>Education</h3>
                    <div className="tile is-child box experience">
                        <p>
                            <span className="emphasis">Certificate</span>
                            , March 2023, Berkeley Coding Bootcamp, University of California, Berkeley
                        </p>
                    </div>
                    <div className="tile is-child box experience">
                        <p>
                            <span className="emphasis">Master of Arts (M.A.) in Leadership Studies</span>
                            , University of San Diego, San Diego, CA
                        </p>
                    </div>
                    <div className="tile is-child box experience">
                        <p>
                            <span className="emphasis">Bachelor of Arts (B.A.) in History</span>
                            , Metropolitan State University, Saint Paul, MN
                        </p>
                    </div>
                </div>
                <div className="tile is-vertical is-parent">
                    <h3>Skills</h3>
                    <Skill />
                </div>
            </section>
        </section>
    );
}