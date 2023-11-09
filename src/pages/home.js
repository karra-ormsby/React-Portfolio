import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import Navbar from "../components/Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import { useTheme } from "../utils/ThemeContext";
import { Switch } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

function Home() {
    const { darkTheme, toggleTheme } = useTheme();

    const [hovered, setHovered] = useState(false);

    const handleIconHover = () => {
        setHovered(!hovered);
    };

    return (
        <section id="home" className={`app ${darkTheme ? 'dark' : 'light'}`}>
            <header className={`header ${darkTheme ? 'dark' : 'light'}`}>
                <h1 id='header-heading'> Karra Ormsby</h1>
                <div id='nav-links'>
                    <HashLink smooth to='/React-Portfolio/#about'>About Me</HashLink>
                    <HashLink smooth to='/React-Portfolio/#portfolio'>Portfolio</HashLink>
                    <HashLink smooth to='/React-Portfolio/#resume'>Resume</HashLink>
                    <HashLink smooth to='/React-Portfolio/#contact'>Contact Me</HashLink>
                </div>
                <div className="other-header">
                    <div></div>
                    <div id='external-links'>
                        <a href="https://github.com/karra-ormsby">
                            <GithubOutlined />
                        </a>
                        <a href="https://au.linkedin.com/">
                            <LinkedinOutlined />
                        </a>
                    </div>
                    <div id='dark-theme-toggle'>
                        <Switch checkedChildren="LIGHT ☀️" unCheckedChildren="DARK 🌙" defaultChecked onChange={toggleTheme} />
                    </div>
                </div>
            </header>
            <About />
            <Portfolio />
            <Resume />
            <Contact />
        </section>
    );
};

export default Home;