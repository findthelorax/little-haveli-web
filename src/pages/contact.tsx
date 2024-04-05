'use client'
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/Contact/ContactSection';

export default function Contact() {

	return (
        <div className="flex flex-col min-h-screen contact-bg">
			<Navbar />
            <ContactSection />
			<Footer />
		</div>
	);
}