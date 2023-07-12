import React from 'react';
import avatar from '../../images/Avatar.png'

const styles = {
    display: 'block',
    // justifyContent: 'center',
    padding: '2rem 2rem 7rem 2rem',
    backgroundColor: '#212529',
    // height: '100vh',
    color: 'white',
}

function About(props) {
    return (
        <section id='about' style={styles} className={props.clicked ? 'content-active' : 'content'}>
            <div>
                <div id='heading-div'>
                    <h1>About Me</h1>
                    <img id='avatar' src={avatar} alt='avatar' />
                </div>
                <p>This is some info about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id. Lorem mollis aliquam ut porttitor leo a. Cum sociis natoque penatibus et magnis. Volutpat sed cras ornare arcu dui vivamus arcu felis. Viverra orci sagittis eu volutpat odio facilisis. Aliquam malesuada bibendum arcu vitae elementum curabitur. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Amet mauris commodo quis imperdiet massa tincidunt nunc. Auctor elit sed vulputate mi sit amet mauris commodo quis. Mi bibendum neque egestas congue quisque egestas. Ac turpis egestas sed tempus. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Fermentum odio eu feugiat pretium. Varius vel pharetra vel turpis nunc eget lorem.

                Augue eget arcu dictum varius. Metus dictum at tempor commodo ullamcorper a lacus. Nisi lacus sed viverra tellus in hac habitasse platea. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Eu volutpat odio facilisis mauris sit. Semper feugiat nibh sed pulvinar. Nisl tincidunt eget nullam non nisi. Arcu dui vivamus arcu felis. Id semper risus in hendrerit. Eget felis eget nunc lobortis mattis. Lacus vestibulum sed arcu non. Egestas sed tempus urna et. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eu turpis egestas pretium aenean pharetra magna ac. Integer vitae justo eget magna fermentum iaculis. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Egestas congue quisque egestas diam in arcu cursus euismod quis.

                </p>
            </div>
        </section>
    );
}

export default About;