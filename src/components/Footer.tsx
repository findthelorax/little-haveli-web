import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import logo from '../../public/assets/l-h-logo.png';

const Footer: React.FC = () => {
	const { resolvedTheme } = useTheme();
	const year = new Date().getFullYear();

	return (
		<footer className={`${resolvedTheme === 'dark' ? 'dark' : ''} text-center footer`}>
			<div className="footer-columns">
				<div className="logo-column">
					<Image src={logo} alt="Logo" width={150} height={150} />
				</div>
				<div className="footer-column content-column">
					<h1>Little Haveli</h1>
					<p>46 N. Main St. Rutland, VT</p>
					<p>(802)-855-8767</p>
					<p>Store Hours: 8am-8pm</p>
					<p>Restaurant Hours: 11am-8pm</p>
					<p>Restaurant Closed on Sundays</p>
				</div>
				<div className="footer-column">
					<h2 className="pb-4">We Accept</h2>
					<p className="pb-4">
						<span style={{ color: 'orange' }}>Discover</span>,{' '}
						<span style={{ color: 'red' }}>Mastercard</span>, & <span style={{ color: 'blue' }}>Visa</span>
					</p>
					<div className="center-image mt-3">
						<Image src="/assets/accepted-ccs.jpg" alt="Accepted credit cards" width={250} height={150} />
					</div>
				</div>
				<div className="footer-column">
					<h2 className="pb-4">Find Us On</h2>
					<p className="pb-4">
						<span style={{ color: 'blue' }}>Facebook</span> &{' '}
						<span
							style={{
								background:
									'linear-gradient(to right, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							Instagram
						</span>
					</p>
					<div className="center-icons">
						<a href="https://www.facebook.com/littlehaveli">
							<FaFacebookSquare size={75} color="#4267B2" />
						</a>
						<a href="https://www.instagram.com/littlehaveli">
							<FaInstagram size={75} color="#C13584" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
