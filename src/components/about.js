import React from "react";
import "../assets/css/about.css";

export default function About() {
    return (
        <section className="link-to" id="about">
            <h2>About Me</h2>
            <p>Although I am fairly new to programming, I have extensive professional experience in the talent development field and a master's degree in Leadership Studies, so I am not at all new to high achievement in a professional role. To hone my programming skills, I am currently completing a <span className="highlight">web development bootcamp through the University of California, Berkeley</span>.
            </p>
            <p>For me, the transition from talent development to software engineering is quite natural. I taught myself the Basic programming language when I was eight years old, and I excelled at computer science in college. I also <span className="highlight">tutored symbolic logic</span> when I was in college. More recently, I began learning JavaScript so I could extend the capabilities of the elearning authoring software I used in my last role. In doing so, I discovered I still enjoyed coding and had a talent for it, and I continued learning additional programming languages and technologies such as Integrated Development Environments, the command line, Git, and GitHub.</p>
            <p>When I'm not writing code, I enjoy tabletop gaming and martial arts. I currently practice <span className="contrast">ninjutsu</span>.</p>
        </section>
    );
}