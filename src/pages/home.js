import React, { useState } from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import { useTheme } from "../utils/ThemeContext";

function Home() {
    const { darkTheme, toggleTheme } = useTheme();

      const [hovered, setHovered] = useState(false);

    const handleIconHover = () => {
        setHovered(!hovered);
    };

    return (
        <section id="home" className={`app ${darkTheme ? 'dark' : 'light'}`}>
            <header className={`header ${darkTheme ? 'dark' : 'light'}`}>
                <Navbar onNavHover={handleIconHover} />
            </header>
            <button id="themebutton" onClick={toggleTheme} type="button">
                Toggle dark theme
            </button>
            <About />
            <Portfolio />
            <Resume />
            <Contact />
        </section>
    );
};

export default Home;