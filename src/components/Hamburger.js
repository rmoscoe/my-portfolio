import React from 'react';
import "../assets/css/nav.css";

export default function Hamburger({ toggleHamburger, currentPage, handlePageChange }) {
    return (
        <nav className="is-mobile is-block-mobile">
            <section className="is-full nav-link is-flex is-justify-content-end">
                <div role="button" onClick={toggleHamburger} aria-label="menu" aria-expanded="false" className="ml-auto">
                    X
                </div>
            </section>
            <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={currentPage === 'About' || currentPage === "Home" ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </a>
            <a
                href="#software"
                onClick={() => handlePageChange("Software Engineering")}
                className={currentPage === 'software' ? 'nav-link active' : 'nav-link'}
            >
                Software Engineering
            </a>
            <a
                href="#ai"
                onClick={() => handlePageChange("AI Prompt Engineering")}
                className={currentPage === 'ai' ? 'nav-link active' : 'nav-link'}
            >
                AI Prompt Engineering
            </a>
            <a
                href="instructionaldesign"
                onClick={() => handlePageChange("Instructional Design")}
                className={currentPage === "Instructional Design" ? "nav-link active" : "nav-link"}
            >
                Instructional Design
            </a>
            <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
            <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </a>
        </nav>
    );
}