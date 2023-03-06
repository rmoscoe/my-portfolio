import React, { useState, } from "react";
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [contactName, setcontactName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

        switch (errorMessage) {
            case "Email is invalid":
                if (inputType === "email") {
                    setErrorMessage("");
                }
                break;
            case "Please enter your name":
                if (inputType === "contactName") {
                    setErrorMessage("");
                }
                break;
            case "Please enter a message to send":
                if (inputType === "message") {
                    setErrorMessage("");
                }
                break;
            default:
                break;
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;

        }
        if (!contactName) {
            setErrorMessage("Please enter your name");
            return;
        }
        if (!message) {
            setErrorMessage(
                "Please enter a message to send"
            );
            return;
        }

        setcontactName('');
        setMessage('');
        setEmail('');
        setErrorMessage("This form is for demonstration only. Please use the links below to contact me.")

    };

    return (
        <section className="link-to">
            <h2>Contact</h2>
            <form className="form">
                <div className="field">
                    <label for="email" className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <p class="help is-danger">{errorMessage}</p>
                </div>
                <div className="field">
                    <label for="contactName" className="label">Name</label>
                    <div className="control">
                        <input
                            className="input"
                            value={contactName}
                            name="contactName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <p class="help is-danger">{errorMessage}</p>
                </div>
                <div className="field">
                    <label for="message" className="label">Message</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="textarea"
                        placeholder="Message"
                    />
                    <p class="help is-danger">{errorMessage}</p>
                </div>
                <div className="control">
                    <input type="submit" onClick={handleFormSubmit}>Submit</input>
                </div>
            </form>
            {/* {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )} */}
        </section>
    )
}