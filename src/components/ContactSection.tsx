import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="left-side">
                <div className="section">
                    <h2>Name and Location</h2>
                    {/* Your name and location details go here */}
                </div>
                <div className="section">
                    <h2>Specials and Hours</h2>
                    {/* Your specials and hours details go here */}
                </div>
                <div className="section">
                    <h2>Socials</h2>
                    {/* Your social media links go here */}
                </div>
                <div className="section">
                    <h2>Map Location</h2>
                    {/* Your map location goes here */}
                </div>
            </div>
            <div className="right-side justify-center items-center">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactSection;