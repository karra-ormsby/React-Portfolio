import React from 'react';

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
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
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header