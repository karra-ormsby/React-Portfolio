import React from 'react';
import Project from '../Project';
import trailBlaze from '../../images/Trail Blaze.png';
import techBlog from '../../images/Tech Blog.png';
import noteTaker from '../../images/Note Taker.png';
import weatherDashboard from '../../images/Weather Dashboard.png';
import codingQuiz from '../../images/Coding Quiz.png';
import TuttorificDashboard from '../../images/TuttorificDashboard.png';

const projects = [
      {
        id: 1,
        img: TuttorificDashboard,
        alt: 'Tuttorific-teacher homepage',
        name: 'Tuttorific Tutor',
        url: 'https://tutoriffic-teacher-bc391b7a081b.herokuapp.com/',
        repo: 'https://github.com/emjkenz/Tutoriffic-Teacher',
        description: 'A planner app that displays time block for an average work day (9am to 5pm) with the colour of the time block changing depending on whether the time has passed. The planner uses local storage to store the users data. '
    },
    {
        id: 2,
        img: trailBlaze,
        alt: 'Trail Blaze homepage',
        name: 'Trail Blaze ',
        url: 'https://troy-earle.github.io/Trail-Blaze/',
        repo: 'https://github.com/emjkenz/Tutoriffic-Teacher',
        description:'A virtual classroom application for a teacher or tutor. This is a MERN application that uses GraphQl'
    },
    {   
        id: 3,
        img: techBlog,
        alt: 'Tech Blog homepage',
        name: 'Tech Blog',
        url: 'https://my-tech-blog-2023-38c9b7057a35.herokuapp.com/',
        repo: 'https://github.com/karra-ormsby/Tech-Blog',
        description: 'A tech blog where developers can publish their blog posts and comment on other developers’ posts. This application uses Sequelize as the database.'
    },
    {
        id: 4,
        img: noteTaker,
        alt: 'Note Taker homepage',
        name: 'Note Taker',
        url: 'https://my-note-taker-app-2023-c8fe22ce1727.herokuapp.com/',
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
    },
    {
        id: 6,
        img: codingQuiz,
        alt: 'Coding Quiz homepage',
        name: 'Coding Quiz',
        url: 'https://karra-ormsby.github.io/Coding-Quiz/',
        repo: 'https://github.com/karra-ormsby/Coding-Quiz',
        description: 'A coding quiz that utilises local storage to store users score and save them to a Highscores page.'
    }
]

function Portfolio(props) {
    return (
        <section id='my-portfolio' >
            <h1>Portfolio</h1>
            <Project projects={projects} />
        </section>
    );
}

export default Portfolio