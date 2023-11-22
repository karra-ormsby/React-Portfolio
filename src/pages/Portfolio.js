import React from 'react';
import { useTheme } from '../utils/ThemeContext';
import Project from '../components/Project';
import trailBlaze from '../images/Trail Blaze.png';
import techBlog from '../images/Tech Blog.png';
import noteTaker from '../images/Note Taker.png';
import weatherDashboard from '../images/Weather Dashboard.png';
import TuttorificDashboard from '../images/TuttorificDashboard.png';

const projects = [
      {
        id: 1,
        img: TuttorificDashboard,
        alt: 'Tutoriffic Teacher homepage',
        name: 'Tutoriffic Teacher',
        url: 'https://tuttorific-d9fe24230c7c.herokuapp.com/',
        repo: 'https://github.com/emjkenz/Tutoriffic-Teacher',
        description: 'Tutoriffic is a MERN-based online teaching platform for educators. It allows teachers to create lessons, quizzes, and view due dates using an integrated calendar. Learning modules simplify content organisation, and a collaborative blog enables peer interaction and Q&A. This project was developed as a group project.',
        technologies: ['React','CSS', 'Ant Design', 'JavaScript', 'GraphQL', 'Express']
    },
    {
        id: 2,
        img: trailBlaze,
        alt: 'Trail Blaze homepage',
        name: 'Trail Blaze ',
        url: 'https://troy-earle.github.io/Trail-Blaze/',
        repo: 'https://github.com/troy-earle/Trail-Blaze',
        description:'Trail Blaze is an application that utilises third-party APIs to pinpoint hiking trails. It presents a map within a defined radius, showcasing nearby hiking trails, and offers a 7-day weather forecast for the specified location. In cases where no trails are detected, users are encouraged to zoom out for a broader search. Detailed information about trails is accessible through user clicks. This project was developed as a group project.',
        technologies: ['HTML', 'CSS', 'Materialize', 'JavaScript']
    },
    {   
        id: 3,
        img: techBlog,
        alt: 'Tech Blog homepage',
        name: 'Tech Blog',
        url: 'https://my-tech-blog-2023-238a1416fbe6.herokuapp.com/',
        repo: 'https://github.com/karra-ormsby/Tech-Blog',
        description: 'A tech blog where developers can publish their blog posts and comment on other developers posts.',
        technologies: ['HTML', 'CSS', 'Handlebars', 'Express', 'Sequelize']
    },
    {
        id: 4,
        img: noteTaker,
        alt: 'Note Taker homepage',
        name: 'Note Taker',
        url: 'https://my-note-taker-app-2023-b1187e79f9a4.herokuapp.com/',
        repo: 'https://github.com/karra-ormsby/Note-Taker',
        description: 'An application where the user can create and delete notes.',
        technologies: ['HTML', 'CSS', 'Express']
    },
    {
        id: 5,
        img: weatherDashboard,
        alt: 'Weather Dashboard homepage',
        name: 'Weather Dashboard',
        url: 'https://karra-ormsby.github.io/Weather-Dashboard/',
        repo: 'https://github.com/karra-ormsby/Weather-Dashboard',
        description: 'A weather dashboard where users can look up weather in location and be shown current weather and a five day forcast. Uses openweathermap API for all weather and location data.',
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
    }
]

function Portfolio(props) {
const { darkTheme } = useTheme();

    return (
        <section id='my-portfolio' >
            <div id='portfolio'>
                <h1 className={`section-heading${darkTheme ? 'dark' : 'light'}`}>Portfolio</h1>
                <Project projects={projects} />
            </div>
        </section>
    );
}

export default Portfolio