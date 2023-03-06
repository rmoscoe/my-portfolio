import React from 'react';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from "./resume";

export default function PortfolioContainer({ currentPage }) {

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
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