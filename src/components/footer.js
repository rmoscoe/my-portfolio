import React from "react";
import "../assets/css/footer.css";


export default function Footer() {
    return (
        <footer>
            <ul className="is-flex is-flex-wrap-nowrap is-justify-content-space-evenly is-align-content-center">
                <li>
                    <a href="mailto:ryanmoscoe@gmail.com">
                        <span className="contact-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                        <span>ryanmoscoe@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ryan-moscoe-8652973/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/rmoscoe" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/@ryanmoscoe" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-medium"></i>
                        <span>Medium</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
}