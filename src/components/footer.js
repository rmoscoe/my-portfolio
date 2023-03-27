import React from "react";
import "../assets/css/footer.css";


export default function Footer() {
    return (
        <footer>
            <ul className="is-flex is-flex-wrap-nowrap is-justify-content-space-between mx-4 is-align-items-baseline">
                <li>
                    <a href="mailto:ryanmoscoe@gmail.com">
                        <span className="contact-icon mr-2 is-size-6-touch">
                            <i className="fa-solid fa-envelope is-size-6-touch"></i>
                        </span>
                        <span className="is-size-6-touch">ryanmoscoe@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ryan-moscoe-8652973/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin is-size-6-touch"></i>
                        <span className="ml-2 is-size-6-touch">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/rmoscoe" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github is-size-6-touch"></i>
                        <span className="ml-2 is-size-6-touch">GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/@ryanmoscoe" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-medium is-size-6-touch"></i>
                        <span className="ml-2 is-size-6-touch">Medium</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
}