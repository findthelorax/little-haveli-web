import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import Drawer from './Drawer';
import Image from 'next/image';

export default function Navbar() {
	const [mounted, setMounted] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => setMounted(true), []);

	const handleImageClick = () => {
		setIsClicked(true);
		setTimeout(() => setIsClicked(false), 500);
	};

	if (!mounted) {
		return null;
	}
    
        return (
            <section className="nav-section p-2 md:p-5">
                <div className="nav-container sticky top-0 z-50 backdrop-blur-sm">
                    <nav className="flex flex-wrap items-center justify-between navbar relative h-20 md:h-24 w-full min-w-0 px-2">
                        <div className="flex-shrink-0 flex items-center h-16 w-16 relative min-w-0">
                            <Link href="/" aria-label="Home">
                                <Image
                                    src="/assets/little-haveli-logo.jpg"
                                    alt="Little Haveli Logo"
                                    className={`nav-icon cursor-pointer ${isClicked ? 'grow-bounce' : ''}`}
                                    width={64}
                                    height={64}
                                    style={{ objectFit: 'contain' }}
                                    onClick={handleImageClick}
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="hidden md:flex md:flex-row md:space-x-8 items-center flex-1 justify-center min-w-0">
                            <div className="text-xs md:text-base text-center md:text-left md:mr-6 min-w-0">
                                <p className="truncate">Store Hours: 8am-8pm</p>
                                <p className="truncate">Restaurant: 11am-8pm</p>
                            </div>
                            <div className="text-xs md:text-base text-center md:text-left min-w-0">
                                <p className="truncate">46 N. Main Street</p>
                                <p className="truncate">(802)-855-8767</p>
                            </div>
                        </div>
                        <div className="flex md:hidden flex-col items-center justify-center space-y-1 text-xs min-w-0">
                            <div className="hidden sm:block">
                                <p className="mb-1 truncate">Store Hours: 8am-8pm</p>
                                <p className="mb-1 truncate">Restaurant: 11am-8pm</p>
                            </div>
                            <div className="xs:block">
                                <p className="mb-1 truncate">46 N. Main Street</p>
                                <p className="mb-1 truncate">(802)-855-8767</p>
                            </div>
                        </div>
                        <div className="hidden lg:flex space-x-8 items-center pr-4">
                            <Link href="/"><span className="nav-button cursor-pointer">HOME</span></Link>
                            <Link href="/menu"><span className="nav-button cursor-pointer">MENU</span></Link>
                            <Link href="/order-online"><span className="nav-button cursor-pointer">ORDER ONLINE</span></Link>
                            <Link href="/contact"><span className="nav-button cursor-pointer">CONTACT</span></Link>
                        </div>
                        <button
                            className="lg:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-main"
                            aria-label="Open navigation menu"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <GiHamburgerMenu size={24} />
                        </button>
                        <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                    </nav>
                </div>
            </section>
        );
    }
