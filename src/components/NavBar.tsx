import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import Drawer from './Drawer';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    return (
        <section className="nav-section p-5">
        <div className='nav-container sticky top-0 z-50 backdrop-blur-sm w-full mx-auto'>
            <nav className="flex items-center justify-center navbar">
                <Link href="/">
                    <img
                        src="/assets/little-haveli-logo.jpg"
                        alt="Little Haveli"
                        className="w-28 h-auto mr-20 nav-icon cursor-pointer"
                    />
                </Link>
                <div className='space-x-8 hidden lg:flex'>
                    <Link href="/">
                        <span className="nav-button cursor-pointer">HOME</span>
                    </Link>
                    <Link href="/menu">
                        <span className="nav-button cursor-pointer">MENU</span>
                    </Link>
                    <Link href="/contact">
                        <span className="nav-button cursor-pointer">CONTACT</span>
                    </Link>
                </div>
                {/* <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <GiHamburgerMenu />
                    </button>
                </div> */}
            </nav>
            {/* <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)} />} */}
        </div>
        </section>
    );
};