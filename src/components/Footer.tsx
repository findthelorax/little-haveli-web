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
				<div className="logo-column" style={{ marginTop: '-20px' }}>
					<Image src={logo} alt="Logo" width={150} height={150} />
				</div>
				<div className="footer-column content-column">
					<p>46 N. Main St. Rutland, VT</p>
					<p>(802)-855-8767</p>
					<p>Store Hours: 8am-8pm</p>
					<p>Restaurant Hours: 11am-8pm</p>
					<p>Restaurant Closed on Sundays</p>
				</div>
				<div className="footer-column">
					<h2 className="pb-4">We Accept</h2>
					<div className="center-image">
						<Image src="/assets/accepted-ccs.png" alt="Accepted credit cards" width={250} height={150} />
					</div>
				</div>
				<div className="footer-column">
					<h2 className="pb-4">Find Us On</h2>
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
