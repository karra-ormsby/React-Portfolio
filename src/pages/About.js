import React from 'react';
import { Button } from "antd";
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import avatar from '../images/Avatar2.png'

function About() {
    return (
        <section id='about-section' >
            <div id='about'>
                <div className='hero'>
                    <div id='links'> 
                        <a href="https://github.com/karra-ormsby">
                            <GithubOutlined className='icons'/>
                        </a>
                        <a href="https://au.linkedin.com/">
                            <LinkedinOutlined className='icons' />
                        </a>
                    </div>

                    <div className='info'>
                        <div id='heading-div'>
                            <h1>Hi I'm Karra.<br></br> I'm a recently graduated <span className='accent'>Full Stack</span> Web Developer.  </h1>
                        </div>

                        <p>
                        I am excited to showcase my skills and passion for crafting innovative and user-friendly digital experiences. With a strong foundation in both front-end and back-end technologies, I am proficient in HTML, CSS, JavaScript, and various frameworks such as React and Node.js. My portfolio website serves as a testament to my ability to create visually appealing designs while ensuring seamless functionality. By combining my technical expertise with my creative problem-solving abilities, I strive to deliver robust and intuitive web solutions that exceed client expectations. Join me on this journey as I continue to evolve and explore the ever-changing world of web development.
                        </p>

                        <Button className='contact-btn'>Let's Chat!</Button>
                    </div>
                </div>

                <div className="avatar-image-div">
                    <img img id='avatar' src={avatar} alt='avatar'/>
                </div>
            </div>
        </section>
    );
}

export default About;
