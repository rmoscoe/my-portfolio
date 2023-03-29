import React from "react";
import "../assets/css/nav.css";

export default function Nav({ currentPage, handlePageChange }) {

    return (
        <header>
            <nav>
                <a
                    href="#about"
                    // href="/"
                    onClick={() => handlePageChange("About")}
                    className={currentPage === 'About' || currentPage === "Home" ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange("Portfolio")}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
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
        </header>

    )
}