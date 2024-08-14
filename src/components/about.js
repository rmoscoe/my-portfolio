import React from "react";
import "../assets/css/about.css";

export default function About() {
    return (
        <section className="link-to" id="about">
            <h2>About Me</h2>
            <p>Hello! I am an experienced software engineer and prompt engineer with extensive prior experience in the talent development field and a master's degree in Leadership Studies. In my current role with Bruce Clay, Inc., I primarily use Python, JavaScript, and SQL, along with a variety of other technologies. My coding journey started when I <span className="highlight">taught myself Basic</span> at eight years old. In college, I dabbled in coding by taking a Computer Science course and tutoring symbolic logic, but I only really took the plunge after working in talent development for over a decade.</p>
            <p>After a few courses on Codecademy and a coding boot camp through the University of California, Berkeley, I landed my first software engineering position. Today, I write both <span className="highlight">code and AI prompts</span> for internal and customer-facing applications. In particular, I'm proud of my contributions to <a href="https://app.prewriter.ai/" class="regular">Prewriter</a>, an AI-powered content creation suite. In addition to refactoring the UI and adding features like a Google Docs export, I've contributed a few of the content creation tools.</p>
            <p>When I'm not writing code, I enjoy tabletop gaming and martial arts. I currently practice <span className="contrast">ninjutsu</span>.</p>
        </section>
    );
}