import React from 'react';
import About from './about';
import Contact from './contact';
import Software from './software';
import AI from './AI';
import InstructionalDesign from './instructionaldesign';
import Resume from "./resume";

export default function PortfolioContainer({ currentPage }) {
    const renderPage = () => {
        switch (currentPage) {
            case "Home":
                return <About />;
            case 'About':
                return <About />;
            case 'Software Engineering':
                return <Software />;
            case "AI Prompt Engineering":
                return <AI />;
            case "Instructional Design":
                return <InstructionalDesign />;
            case 'Contact':
                return <Contact />;
            default:
                return <Resume />;
        }
    };

    return (
        <>
            {renderPage()}
        </>
    );
}