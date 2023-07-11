import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

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
        }
    };

    const handleEmailBlur = () => {
        if (name.trim() === '') {
            setEmailError(true);
        }
    };

    const handleMessagelur = () => {
        if (name.trim() === '') {
            setMessageError(true);
        }
    };

    return (
        <section id='contact'>
            <h1>Contact Me</h1>

            <div className="mb-3">
                <form className="form">
                    <label for="name" class="form-label">Name</label>
                    <input
                        type="text"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={handleNameBlur}
                        id="name"
                        className="form-control"
                        required
                    />
                    <label for="email" class="form-label">Email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleEmailBlur}
                        type="email" required
                        id="email"
                        className="form-control"
                    />
                    <label for="message" class="form-label">Message</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={handleMessagelur}
                        id="message"
                        className="form-control"
                    />
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
                {nameError && (
                    <div>
                        <p>Name is required!</p>
                    </div>
                )}
                {emailError && (
                    <div>
                        <p>Email is required!</p>
                    </div>
                )}
                {messgaeError && (
                    <div>
                        <p>Message is required!</p>
                    </div>
                )}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>

        </section>
    );
}

export default Contact;