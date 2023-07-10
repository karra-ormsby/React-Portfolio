import React, { useState } from 'react';
import Header from './Header';



export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact Me') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}

function About() {
    return (
        <h1>About Me</h1>
    );
}
function Portfolio() {
    return (
        <h1>Portfolio</h1>
    );
}

function Contact() {
    return (
        <h1>Contact Me</h1>
    );
}
function Resume() {
    return (
        <h1>Resume</h1>
    );
}