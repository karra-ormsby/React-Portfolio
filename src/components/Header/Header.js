import React from 'react';
import './Header.css';
// import './Navbar.css';

function Navbar({ currentPage, handlePageChange, clicked, setClicked }) {

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <header>
            <nav className="NavbarItems">
                {/* <h1 className="navbar-logo">React</h1> */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'bi bi-x' : 'bi bi-list'}></i>
                </div>
                <ul className={clicked ? 'nav-menu-active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a
                            href="#about-me"
                            onClick={() => handlePageChange('About Me')}
                            className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact-me"
                            onClick={() => handlePageChange('Contact Me')}
                            className={currentPage === 'Contact Me' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
