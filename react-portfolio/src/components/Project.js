import React from 'react';

function Projects (props) {
    return (
        <section>
            <ul style={{ listStyle: 'none' }}>
                {props.projects.map(item => (
                    <li>
                        <img src={item.img} alt={item.alt} />
                        <h4>{item.name}</h4>
                        <h4>{item.url}</h4>
                        <h4>{item.repo}</h4>
                    </li>
                ))}
               
            </ul>
        </section>
    );
}

export default Projects;