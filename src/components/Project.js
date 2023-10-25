import React from 'react';
import { GithubOutlined } from '@ant-design/icons';

function Project (props) {
    return (
        <section id='projects'>
            <ul id='project-list'>
                {props.projects.map(item => (
                    <li key={item.id} className='project-list-item'>
                        <img src={item.img} alt={item.alt} className='project-img'/>
                        <div className='project-info'>
                            <div className='title'>
                                <h4>{item.name}</h4>
                                <a href={item.repo}>
                                    <GithubOutlined className='icons'/>
                                </a>
                            </div>
                            <p>{item.description}</p>
                            <button className='project-button' ><a href={item.url}>Visit site</a></button>
                        </div>
                    </li>
                ))}
               
            </ul>
        </section>
    );
}

export default Project;