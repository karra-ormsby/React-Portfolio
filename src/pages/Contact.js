import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { useTheme } from '../utils/ThemeContext';
import { Form, Input } from 'antd';
import avatar from '../images/Avatar.png'

function Contact() {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    // const [nameError, setNameError] = useState(false);
    // const [emailError, setEmailError] = useState(false);
    // const [messgaeError, setMessageError] = useState(false);

    // const handleInputChange = (e) => {
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;

    //     if (inputType === 'name') {
    //         setName(inputValue);
    //     } else if (inputType === 'email') {
    //         setEmail(inputValue);
    //     } else if (inputType === 'message'){
    //         setMessage(inputValue);
    //     }
    // };

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();

    //     if (!name || !email || !message) {
    //         setErrorMessage('Please make sure you have filled in all fields');
    //         return;
    //     }

    //     if (!validateEmail(email)) {
    //         setErrorMessage('Please enter a valid email address');
    //         return;
    //     }


    //     setName('');
    //     setEmail('');
    //     setMessage('');
    // };

    const { darkTheme, toggleTheme } = useTheme();

    return (
        <section id='contact' >
            
            <h1>Contact Me</h1>

            <div id='hero2'>
                <Form
                    name="contactForm"
                    // Controls the label width in the vertical form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    // Set the layout to 'vertical'
                    layout="vertical"
                    >
                    <Form.Item
                        className={`form-item ${darkTheme ? 'dark' : 'light'}`}
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input a name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: "email", message: 'Please input an email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: 'Please write a message!' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item>
                        <button id ='contact-btn' type="primary" htmlType="submit">
                        Submit
                        </button>
                    </Form.Item>
                </Form>

                 <div id="image-container">
                    <img id='avatar2' src={avatar} alt='avatar waving' />
                </div>

            </div>

        </section>
    );
}

export default Contact;