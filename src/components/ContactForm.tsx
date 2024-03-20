import React from 'react';

const ContactForm: React.FC = () => {
	return (
		<section id="contact">
			<div className="contact-form-container flex justify-center items-center">
				<div className="w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4 contact-form">
					<h2 className="mb-4 text-2xl text-center">PLEASE REACH OUT</h2>
					<form>
						<div className="mb-4 grid grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-bold mb-2" htmlFor="name">
									Name
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label className="block text-sm font-bold mb-2" htmlFor="email">
									Email
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Your email"
								/>
							</div>
						</div>
						<div className="mb-6">
							<label className="block text-sm font-bold mb-2" htmlFor="message">
								Message
							</label>
							<textarea
								className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
								id="message"
								placeholder="Your message"
								rows={4}
							></textarea>
						</div>
						<div className="flex items-center justify-center">
							<div className="inline-flex items-center justify-center contact-btn">
								<button
									className="inline-block font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button"
								>
									SEND MESSAGE
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
