import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
	return (
		<div className="contact-section">
			<div className="left-side">
				<div className="section flex flex-col justify-center text-center h-full text-xl">
					<p className='text-2xl mb-2'>Little Haveli is located at</p>
					<p className='mb-2'>46 N. Main St. Rutland, VT</p>
					<p className='mb-2'>Call: (802)-855-8767</p>
					<p className='mb-2'>Email: littlehaveli46@gmail.com</p>
					<p className='mb-2'>Store Hours: 8am - 8pm</p>
					<p className='mb-2'>Restaurant Hours: 11am - 8pm</p>
					<p className='mb-2'>Closed on Sundays</p>
					<p>Doordash delivery is available</p>
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
