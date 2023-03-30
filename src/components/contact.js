import React, { useState, } from "react";
import { validateEmail } from '../utils/helpers';
import "../assets/css/contact.css";

export default function Contact() {
    const [email, setEmail] = useState('');
    const [contactName, setcontactName] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const sendEmail = (data) => {
        setLoading(true);
        setSubmitted(false);
        setNotification(undefined);

        fetch("https://public.herotofu.com/v1/0c8d6c10-ce4a-11ed-9434-5b53665d9a66", {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.status === 422) {
                    throw new Error("Are you a robot?");
                }

                if (response.status !== 200) {
                    throw new Error(`${response.statusText} (${response.status})`);
                }

                setSubmitted(true);
                setLoading(false);
                
                return response.json();
            })
            .catch((err) => {
                setError(err.toString());
                setLoading(false);
            });

        return { submitted, loading, error, sendEmail }
    };

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'contactName') {
            setcontactName(inputValue);
        } else {
            setMessage(inputValue);
        }

        switch (notification) {
            case "Email is invalid":
                if (inputType === "email") {
                    setNotification("");
                }
                break;
            case "Please enter your name":
                if (inputType === "contactName") {
                    setNotification("");
                }
                break;
            case "Please enter a message to send":
                if (inputType === "message") {
                    setNotification("");
                }
                break;
            default:
                break;
        }
    };

    const handleEmailLoseFocus = (e) => {
        if (!validateEmail(email)) {
            setNotification('Email is invalid');
            return;
        }
    }

    const handleNameLoseFocus = (e) => {
        if (!contactName) {
            setNotification("Please enter your name");
            return;
        }
    }

    const handleMessageLoseFocus = (e) => {
        if (!message) {
            setNotification(
                "Please enter a message to send"
            );
            return;
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setNotification('Email is invalid');
            return;

        }
        if (!contactName) {
            setNotification("Please enter your name");
            return;
        }
        if (!message) {
            setNotification(
                "Please enter a message to send"
            );
            return;
        }

        const data = {
            email,
            contactName,
            message
        }

        sendEmail(data);
        console.log(submitted, error, loading);

        setcontactName('');
        setMessage('');
        setEmail('');
        if (submitted) {
            setNotification("Thank you for reaching out! I will get back to you promptly.");
        }
        if (error) {
            setNotification(error);
        }
        if (loading) {
            setNotification("Sending your message...");
        }

    };

    return (
        <section className="link-to">
            <h2>Contact</h2>
            <div className="container form-container">
                <form className="form" id="contact-form" onSubmit={handleFormSubmit}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control contact-input">
                            <input
                                className="input"
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Email"
                                onBlur={handleEmailLoseFocus}
                            />
                        </div>
                        {/* <p className="help is-danger">{notification}</p> */}
                    </div>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control contact-input">
                            <input
                                className="input"
                                value={contactName}
                                name="contactName"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Name"
                                onBlur={handleNameLoseFocus}
                            />
                        </div>
                        {/* <p className="help is-danger">{notification}</p> */}
                    </div>
                    <div className="field w-100">
                        <label className="label">Message</label>
                        <textarea
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="textarea"
                            placeholder="Message"
                            onBlur={handleMessageLoseFocus}
                            rows="5"
                        />
                        {/* <p className="help is-danger">{notification}</p> */}
                    </div>
                    <div className="control is-flex is-justify-content-flex-end my-5">
                        <input className="button is-small is-fullwidth is-size-5" id="contact-submit" type="submit" />
                    </div>
                </form>
                {notification && (
                    <div className="error-div">
                        <p className="error-text">{notification}</p>
                    </div>
                )}
            </div>
        </section>
    )
}