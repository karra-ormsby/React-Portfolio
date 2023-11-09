import React from 'react';
import Project from '../components/Project';
import trailBlaze from '../images/Trail Blaze.png';
import techBlog from '../images/Tech Blog.png';
import noteTaker from '../images/Note Taker.png';
import weatherDashboard from '../images/Weather Dashboard.png';
import codingQuiz from '../images/Coding Quiz.png';
import TuttorificDashboard from '../images/TuttorificDashboard.png';

const projects = [
      {
        id: 1,
        img: TuttorificDashboard,
        alt: 'Tuttorific-teacher homepage',
        name: 'Tuttorific Tutor',
        url: 'https://tutoriffic-teacher-bc391b7a081b.herokuapp.com/',
        repo: 'https://github.com/emjkenz/Tutoriffic-Teacher',
        description: 'Tutoriffic is a MERN-based online teaching platform for educators. It allows teachers to create lessons, quizzes, and view due dates using an integrated calendar. Learning modules simplify content organisation, and a collaborative blog enables peer interaction and Q&A. This application uses ant-design for styling and GraphQL for the database.'
    },
    {
        id: 2,
        img: trailBlaze,
        alt: 'Trail Blaze homepage',
        name: 'Trail Blaze ',
        url: 'https://troy-earle.github.io/Trail-Blaze/',
        repo: 'https://github.com/emjkenz/Tutoriffic-Teacher',
        description:'Trail Blaze is an app that locates hiking trails. It provides a 7-day weather forecast for an inputted location, displays a map with a fixed radius, and lists nearby hiking trails. If none are found, users are prompted to zoom out for a wider search. Users can click on trails for more details. This applicatoin uses Materialize CSS for design and integrate APIs for trail and weather info.'
    },
    {   
        id: 3,
        img: techBlog,
        alt: 'Tech Blog homepage',
        name: 'Tech Blog',
        url: 'https://my-tech-blog-2023-238a1416fbe6.herokuapp.com/',
        repo: 'https://github.com/karra-ormsby/Tech-Blog',
        description: 'A tech blog where developers can publish their blog posts and comment on other developers posts. This application uses Sequelize as the database, and Handlebars.js to create reusable webpage templates.'
    },
    {
        id: 4,
        img: noteTaker,
        alt: 'Note Taker homepage',
        name: 'Note Taker',
        url: 'https://my-note-taker-app-2023-b1187e79f9a4.herokuapp.com/',
        repo: 'https://github.com/karra-ormsby/Note-Taker',
        description: 'An application where the user can create and delete notes.'
    },
    {
        id: 5,
        img: weatherDashboard,
        alt: 'Weather Dashboard homepage',
        name: 'Weather Dashboard',
        url: 'https://karra-ormsby.github.io/Weather-Dashboard/',
        repo: 'https://github.com/karra-ormsby/Weather-Dashboard',
        description: 'A weather dashboard where users can look up weather in location and be shown current weather and a five day forcast. Uses openweathermap API for all weather and location data.'
    }
]

function Portfolio(props) {
    return (
        <section id='my-portfolio' >
            <div id='portfolio'>
                <h1>Portfolio</h1>
                <Project projects={projects} />
            </div>
        </section>
    );
}

export default Portfolio