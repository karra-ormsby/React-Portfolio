import React from 'react';
import { useTheme } from '../utils/ThemeContext';
import { Form, Input, Button } from 'antd';
import emailjs from '@emailjs/browser';
import avatar from '../images/Avatar.png';

function Contact() {
    // create a form instance and store it in the form variable.
    const [form] = Form.useForm();

    const sendEmail = () => {

        // use this to get the form values. This is needed as Ant Design handle form validation and submission differently.
        form.validateFields().then((values) => {
            console.log('Form values:', values);

            emailjs.send('service_zsvo20n', 'template_dul4hhs', values, 'BBtbIuKyxrzKgoK2q')
                .then((result) => {
                    console.log(result.text);
                })
                .catch((error) => {
                    console.log(error.text);
                });

            // clear the form fields
            form.resetFields();
        });
    };

    const { darkTheme, toggleTheme } = useTheme();

    return (
        <section id="contact">
            <h1>Contact Me</h1>
            <div id="hero2">
                <Form
                    // used to associate the form variable with the Ant Design Form component. This allows the form variable to control and manage the state of the form component.
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
