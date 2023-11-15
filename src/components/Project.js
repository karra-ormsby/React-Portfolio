import React from 'react';
import { useTheme } from '../utils/ThemeContext';
import { GithubOutlined } from '@ant-design/icons';
import TechnologiesList from './Technologies';

function Project (props) {
    const { darkTheme } = useTheme();

    return (
        <section id='projects'>
            <ul id='project-list'>
                {props.projects.map(item => (
                    <li key={item.id} className='project-list-item'>
                        <img src={item.img} alt={item.alt} className='project-img'/>
                        <div className='project-info'>
                            <div className='title'>
                                <h4>{item.name}</h4>
                                <a className={`github ${darkTheme ? 'dark' : 'light'}`} href={item.repo}>
                                    <GithubOutlined />
                                </a>
                            </div>
                            <p className='project-description'>{item.description}</p>
                            <TechnologiesList technologies={item.technologies} />
                            <button className='project-button button' ><a href={item.url}>Visit site</a></button>
                        </div>
                    </li>
                ))}
               
            </ul>
        </section>
    );
}

export default Project;