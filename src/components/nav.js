import React, { useState } from "react";
import "../assets/css/nav.css";
import Hamburger from "./Hamburger";

export default function Nav({ currentPage, handlePageChange }) {
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const toggleHamburger = () => setHamburgerActive(!hamburgerActive);

    return (
        <header>
            <nav className="is-hidden-mobile is-flex-tablet">
                <a
                    href="#about"
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
            {!hamburgerActive &&
                <div role="button" className="is-hidden-tablet is-size-3 has-text-right pr-2" onClick={toggleHamburger} aria-label="menu" aria-expanded="false">
                    &#x2630;
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            }
            {hamburgerActive && 
                <Hamburger toggleHamburger={toggleHamburger} hamburgerActive={hamburgerActive} currentPage={currentPage} handlePageChange={handlePageChange}/>
            }
        </header>

    )
}