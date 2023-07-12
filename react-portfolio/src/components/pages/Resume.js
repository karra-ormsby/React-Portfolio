import React from 'react';

function Resume(props) {
    return (
        <section id='my-resume' className={props.clicked ? 'content-active' : 'content'}>
            <h1>Resume</h1>

            <a href="https://drive.google.com/uc?id=1DlYiT_4sKheuU7KeLl6HKCg3ZPulpg0k&export=download" download>Click here</a>

        </section>
    );
}

export default Resume;