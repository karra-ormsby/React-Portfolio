import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { Form, Input, Button } from 'antd';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messgaeError, setMessageError] = useState(false);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message'){
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setErrorMessage('Please make sure you have filled in all fields');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }


        setName('');
        setEmail('');
        setMessage('');
    };

    const handleNameBlur = () => {
        if (name.trim() === '') {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    const handleEmailBlur = () => {
        if (name.trim() === '') {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const handleMessagelur = () => {
        if (name.trim() === '') {
            setMessageError(true);
        } else {
            setMessageError(false);
        }
    };

    return (
        <section id='contact' >
            <h1>Contact Me</h1>
              <Form
                name="contactForm"
                labelCol={{ span: 8 }}  // This controls the label width in the vertical form
                wrapperCol={{ span: 16 }}
                layout="vertical" // Set the layout to 'vertical'
                >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input a name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input an email!' }]}
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

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
            
        </section>
    );
}

export default Contact;