import React from "react";
import Skill from "./skill";
import "../assets/css/resume.css";

export default function Resume() {
    function downloadResume() {
        fetch("Ryan Moscoe Resume.docx")
            .then(response => {
                response.blob()
                    .then(blob => {
                        const fileURL = window.URL.createObjectURL(blob);
                        let alink = document.createElement('a');
                        alink.href = fileURL;
                        alink.download = "Ryan Moscoe Resume.docx";
                        alink.click();
                    });
            });
    }

    return (
        <section className="link-to">
            <h2>Resume</h2>
            <section className="hero">
                <section className="hero-body justify-content-center align-content-center">
                    <p className="is-size-4 has-text-centered" onClick={downloadResume}>
                        <i className="fa-regular fa-file-word"></i>
                        <span className="ml-2">Download Resume</span>
                    </p>
                </section>
            </section>
            <section className="tile is-ancestor mx-3">
                <div className="tile is-parent is-vertical">
                    <h3>Experience</h3>
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