import React from 'react';
import { useTheme } from '../utils/ThemeContext';
import { Form, Input } from 'antd';
import emailjs from '@emailjs/browser';
import avatar from '../images/Avatar.png';

function Contact() {
    const [form] = Form.useForm();

    const sendEmail = () => {
        form.validateFields().then((values) => {
            console.log('Form values:', values);

            emailjs.send('service_zsvo20n', 'template_dul4hhs', values, 'BBtbIuKyxrzKgoK2q')
                .then((result) => {
                    console.log(result.text);
                    form.resetFields(); // Clear the form fields on successful submission
                })
                .catch((error) => {
                    console.log(error.text);
                });
        });
    };

    const { darkTheme } = useTheme();

    return (
        <section id="contact">
            <h1>Contact Me</h1>
            <div id="hero2">
                <Form
                    form={form}
                    name="contactForm"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
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
                        className={`form-item ${darkTheme ? 'dark' : 'light'}`}
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Please input an email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className={`form-item ${darkTheme ? 'dark' : 'light'}`}
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: 'Please write a message!' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item>
                        <button id="contact-btn" type="primary" onClick={sendEmail}>
                            Submit
                        </button>
                    </Form.Item>
                </Form>

                <div id="image-container">
                    <img id="avatar2" src={avatar} alt="avatar waving" />
                </div>
            </div>
        </section>
    );
}

export default Contact;
