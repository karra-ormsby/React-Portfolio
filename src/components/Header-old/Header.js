import React, { useState } from 'react';
import './Header.css';

function Navbar({ currentPage, handlePageChange }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleItemClick = (page) => {
    handlePageChange(page);
    setClicked(false);
  };

  return (
    <header>
      <nav className="NavbarItems">
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? 'bi bi-x' : 'bi bi-list'}></i>
        </div>
        <ul className={clicked ? 'nav-menu-active' : 'nav-menu'}>
          <li className="nav-item">
            <a
              href="#about-me"
              onClick={() => handleItemClick('About Me')}
              className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handleItemClick('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact-me"
              onClick={() => handleItemClick('Contact Me')}
              className={currentPage === 'Contact Me' ? 'nav-link active' : 'nav-link'}
            >
              Contact Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handleItemClick('Resume')}
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
