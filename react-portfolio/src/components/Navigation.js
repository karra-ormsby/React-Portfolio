import React, { useState } from 'react';
import Header from './Header/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';



export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('About Me');
    const [clicked, setClicked] = useState(false); 

    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <About clicked={clicked} />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio clicked={clicked} />;
        }
        if (currentPage === 'Contact Me') {
            return <Contact clicked={clicked} />;
        }
        return <Resume clicked={clicked} />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange} clicked={clicked} setClicked={setClicked} /> 
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}