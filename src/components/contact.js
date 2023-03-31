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
    const [confirmation, setConfirmation] = useState(false);

    const sendEmail = async (data) => {
        setLoading(true);
        setSubmitted(false);
        setNotification(undefined);
        try {
            const response = await fetch("https://public.herotofu.com/v1/0c8d6c10-ce4a-11ed-9434-5b53665d9a66", {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
            if (response.status === 422) {
                throw new Error("Are you a robot?");
            }

            if (response.status !== 200) {
                throw new Error(`${response.statusText} (${response.status})`);
            }

            setSubmitted(true);
            setLoading(false);

            return response.json();

        } catch (err) {
            setError(err.toString());
            setLoading(false);
        }

        // return { submitted, loading, error, sendEmail }
    };

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        setConfirmation(false);
        target.classList.remove("invalid-entry");

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
                document.querySelectorAll(".invalid-entry").forEach((node) => {
                    node.classList.remove("invalid-entry");
                });
                break;
        }
    };

    const handleEmailLoseFocus = (e) => {
        if (!validateEmail(email)) {
            setNotification('Email is invalid');
            e.target.classList.add("invalid-entry");
            return;
        }
    }

    const handleNameLoseFocus = (e) => {
        if (!contactName) {
            setNotification("Please enter your name");
            e.target.classList.add("invalid-entry");
            return;
        }
    }

    const handleMessageLoseFocus = (e) => {
        if (!message) {
            setNotification(
                "Please enter a message to send"
            );
            e.target.classList.add("invalid-entry");
            return;
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setNotification('Email is invalid');
            document.getElementById("email-input").classList.add("invalid-entry");
            setConfirmation(false);
            return;
        }
        if (!contactName) {
            setNotification("Please enter your name");
            document.getElementById("name-input").classList.add("invalid-entry");
            setConfirmation(false);
            return;
        }
        if (!message) {
            setNotification(
                "Please enter a message to send"
            );
            document.getElementById("message-input").classList.add("invalid-entry");
            setConfirmation(false);
            return;
        }

        const data = {
            email,
            contactName,
            message
        }
        // console.log("Line 145: ", loading, submitted);
        setLoading(true);

        const response = await sendEmail(data);
        // console.log("Line 149: ", loading, submitted, response);

        if (response.status === 200) {
            setSubmitted(true);
            setLoading(false);
        }
        // console.log("Line 155: ", loading, submitted);
        setcontactName('');
        setMessage('');
        setEmail('');
        if (submitted) {
            setNotification("Thank you for reaching out! I will get back to you promptly.");
            setConfirmation(true);
        }
        if (error) {
            setNotification(error);
            setConfirmation(true);
        }
        if (loading) {
            setNotification("Sending your message...");
            setConfirmation(true);
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
                                id="email-input"
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Email"
                                onBlur={handleEmailLoseFocus}
                            />
                        </div>
                        {notification === "Email is invalid" && <p className="is-size-6 invalid">{notification}</p>}
                    </div>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control contact-input">
                            <input
                                className="input"
                                id="name-input"
                                value={contactName}
                                name="contactName"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Name"
                                onBlur={handleNameLoseFocus}
                            />
                        </div>
                        {notification === "Please enter your name" && <p className="is-size-6 invalid">{notification}</p>}
                    </div>
                    <div className="field w-100">
                        <label className="label">Message</label>
                        <textarea
                            value={message}
                            id="message-input"
                            name="message"
                            onChange={handleInputChange}
                            type="textarea"
                            placeholder="Message"
                            onBlur={handleMessageLoseFocus}
                            rows="5"
                        />
                        {notification === "Please enter a message to send" && <p className="is-size-6 invalid">{notification}</p>}
                    </div>
                    <div className="control is-flex is-justify-content-flex-end my-5">
                        <input className="button is-small is-fullwidth is-size-5" id="contact-submit" type="submit" />
                    </div>
                </form>
                {notification && confirmation && (
                    <div className="error-div">
                        <p className="error-text">{notification}</p>
                    </div>
                )}
            </div>
        </section>
    )
}