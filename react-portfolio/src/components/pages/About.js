import React from 'react';
import avatar from '../../images/Avatar.png'

function About() {
    return (
        <section id='about'>
            <div>
                <h1>About Me</h1>
                <p>This is some info about me</p>
            </div>
            <img id='avatar' src={avatar} alt='avatar' />
        </section>
    );
}

export default About;