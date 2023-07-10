import React, { useState } from 'react';

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#about-me">About Me</a> */}
                                <a
                                    href="#about-me"
                                    onClick={() => handlePageChange('About')}
                                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                >
                                    About Me
                                </a>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#portfolio">Portfolio</a> */}
                                <a
                                    href="#portfolio"
                                    onClick={() => handlePageChange('Portfolio')}
                                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#contact-me">Contact Me</a> */}
                                <a
                                    href="#contact-me"
                                    onClick={() => handlePageChange('Contact')}
                                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                >
                                    Contact Me
                                </a>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#resume">Resume</a> */}
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