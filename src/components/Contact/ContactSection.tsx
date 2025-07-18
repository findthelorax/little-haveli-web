import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
	return (
		<div className="contact-section">
			<div className="left-side">
				<div className="section flex flex-col justify-center text-center h-full text-xl m-2">
					<p className="text-2xl mb-2">Little Haveli is located at</p>
					<p className="mb-2">46 N. Main St. Rutland, VT</p>
					<p className="mb-2">(802)-855-8767</p>
					<p className="mb-2">littlehaveli46@gmail.com</p>
					<p className="mb-2">Store Hours: 8am - 8pm</p>
					<p className="mb-2">Restaurant Hours: 11am - 8pm</p>
					<p className="mb-2">Closed on Sundays</p>
					<p>DoorDash Delivery Is Available</p>
				</div>
				<div className="section">
					<iframe
						title="Little Haveli Location"
						width="100%"
						height="100%"
						style={{ border: 0, borderRadius: '8px' }}
						loading="lazy"
						allowFullScreen
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.758846360064!2d-72.97437133811816!3d43.61156251092359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e025eadcd7e031%3A0x70d023830d5e9443!2sLittle%20Haveli!5e0!3m2!1sen!2sus!4v1752764464657!5m2!1sen!2sus"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
			<div className="right-side justify-center items-center m-5">
				<ContactForm />
			</div>
		</div>
	);
};

export default ContactSection;
