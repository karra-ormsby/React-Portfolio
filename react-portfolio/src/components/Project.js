import React from 'react';

function Project (props) {
    return (
        <section id='projects'>
            <ul id='project-list'>
                {props.projects.map(item => (
                    <li key={item.id} className='project-list-item'>
                        <img src={item.img} alt={item.alt} className='project-img'/>
                        <div className='project-info'>
                            <h4>{item.name}</h4>
                            <h4>{item.url}</h4>
                            <h4>{item.repo}</h4>
                        </div>
                    </li>
                ))}
               
            </ul>
        </section>
    );
}

export default Project;