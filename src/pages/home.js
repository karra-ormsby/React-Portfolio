import React from "react";
import { HashLink } from 'react-router-hash-link';
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import { useTheme } from "../utils/ThemeContext";
import { Switch, Row, Col } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

function Home() {
    const { darkTheme, toggleTheme } = useTheme();

    return (
        <section id="home" className={`app ${darkTheme ? 'dark' : 'light'}`}>
            <header className={`header ${darkTheme ? 'dark' : 'light'}`}>
                <h1 id='header-heading'>Karra Ormsby</h1>
                <Row justify="center">
                    <Col sm={1} lg={2} xl={2}>
                        <div></div>
                    </Col>
                    <Col sm={4} md={14} lg={10} xl={10}>
                        <div id='nav-links'>
                            <Row justify="space-between">
                                <Col span={5}>
                                <HashLink smooth to='/React-Portfolio/#about'>About Me</HashLink>
                                </Col>
                                <Col span={5}>
                                <HashLink smooth to='/React-Portfolio/#portfolio'>Portfolio</HashLink>
                                </Col>
                                <Col span={5}>
                                <HashLink smooth to='/React-Portfolio/#resume'>Resume</HashLink>
                                </Col>
                                <Col span={5}>
                                <HashLink smooth to='/React-Portfolio/#contact'>Contact Me</HashLink>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={1} lg={2} xl={2}>
                        <div></div>
                    </Col>
                </Row>
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
                    <Switch checkedChildren="☀️" unCheckedChildren="🌙" defaultChecked onChange={toggleTheme} />
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