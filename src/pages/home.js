import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

function Home() {
    return (
        <section className="home">
            <About />
            <Portfolio />
            <Resume />
            <Contact />
        </section>
    );
};

export default Home;