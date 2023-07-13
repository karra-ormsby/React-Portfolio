import React from 'react';
import Project from '../Project';
import placeholder from '../../images/Placeholder.jpeg';

const projects = [
    {   
        id: 1,
        img: placeholder,
        alt: 'Placeholder',
        name: 'Placeholder',
        url: 'URL: Placeholder',
        repo: 'GitHub: Placeholder'
    },
    {
        id: 2,
        img: placeholder,
        alt: 'Placeholder',
        name: 'Placeholder',
        url: 'URL: Placeholder',
        repo: 'GitHub: Placeholder'
    },
    {
        id: 3,
        img: placeholder,
        name: 'Placeholder',
        url: 'URL: Placeholder',
        repo: 'GitHub: Placeholder'
    },
    {
        id: 4,
        img: placeholder,
        alt: 'Placeholder',
        name: 'Placeholder',
        url: 'URL: Placeholder',
        repo: 'GitHub: Placeholder'
    },
    {
        id: 5,
        img: placeholder,
        alt: 'Placeholder',
        name: 'Placeholder',
        url: 'URL: Placeholder',
        repo: 'GitHub: Placeholder'
    },
    {
        id: 6,
        img: placeholder,
        alt: 'Placeholder',
        name: 'Placeholder',
        url: 'URL: Placeholder',
        repo: 'GitHub: Placeholder'
    }
]

function Portfolio(props) {
    return (
        <section id='my-portfolio' className={props.clicked ? 'content-active' : 'content'}>
            <h1>Portfolio</h1>
            <Project projects={projects} />
        </section>
    );
}

export default Portfolio