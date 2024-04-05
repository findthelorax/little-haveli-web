import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import Drawer from './Drawer';
import Image from 'next/image';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    return (
        <section className="nav-section p-5">
        <div className='nav-container sticky top-0 z-50 backdrop-blur-sm'>
            <nav className="flex items-center justify-between navbar">
                <div className='text-lg ml-[-50px]'>
                    <p>46 N. Main Street</p>
                    <p>(802)-855-8767</p>
                </div>
                <Link href="/">
                    <Image
                        src="/assets/little-haveli-logo.jpg"
                        alt="Little Haveli"
                        className="w-28 h-auto mr-20 nav-icon cursor-pointer"
                        width={100}
                        height={100}
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
                <div className='text-lg mr-[-50px]'>
                    <p>Store Hours: 8am-8pm</p>
                    <p>Restaurant: &nbsp; 11am-8pm</p>
                </div>
            </nav>
        </div>
        </section>
    );
};