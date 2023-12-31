import React from 'react';
import { useTheme } from '../utils/ThemeContext';

function Resume() {
    const { darkTheme } = useTheme(); 

    return (
        <section id='resume' >
            <h1 className={`section-heading${darkTheme ? 'dark' : 'light'}`}>Resume</h1>
            <div id='skills'>
                <div>
                    <h3 className='accent'> Hard Skills</h3>
                    <ul>
                        <li>
                            Proficiency in front-end technologies such as HTML, CSS, and JavaScript
                        </li>
                        <li>
                            Experience with front-end frameworks like React
                        </li>
                        <li>
                            Knowledge of back-end technologies such as Node.js
                        </li>
                        <li>
                            Database management and querying skills (SQL, MongoDB)
                        </li>
                        <li>
                            Version control systems (Git, GitHub)
                        </li>
                        <li>
                            API integration and development (RESTful, GraphQL)
                        </li>
                        <li>
                            Testing and debugging skills to ensure code functionality and performance
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className='accent'>Soft Skills</h3>
                    <ul>
                        <li>
                            Excellent problem-solving and analytical abilities
                        </li>
                        <li>
                            Strong attention to detail and meticulousness in code development
                        </li>
                        <li>
                            Effective communication and collaboration skills for team projects
                        </li>
                        <li>
                            Adaptability and willingness to learn new technologies and frameworks
                        </li>
                        <li>
                            Time management and ability to meet deadlines
                        </li>
                        <li>
                            Creativity and an eye for visually appealing designs
                        </li>
                        <li>
                            Strong work ethic and commitment to delivering high-quality work
                        </li>
                        <li>
                            Ability to work independently and take ownership of projects
                        </li>
                    </ul>
                </div>
            </div>

            <button id='resume-button' className='button'><a href="https://drive.google.com/uc?id=1ZVIv_SGxehFWmgGEiGIfugsoJgF4oAog&export=download" download>Download Resume</a></button>


        </section>
    );
}

export default Resume;