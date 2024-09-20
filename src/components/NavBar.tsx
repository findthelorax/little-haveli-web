import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Drawer from "./Drawer";
import Image from "next/image";

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
        <section className="nav-section p-5">
            <div className="nav-container sticky top-0 z-50 backdrop-blur-sm">
                <nav className="flex items-center justify-between navbar relative h-24">
                    <div className="relative">
                        <Link href="/">
                            <Image
                                src="/assets/little-haveli-logo.jpg"
                                alt="Little Haveli"
                                className={`nav-icon cursor-pointer ${isClicked ? 'grow-bounce' : ''}`}
                                width={200}
                                height={200}
                                style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    left: '-50px',
                                    zIndex: '-1'
                                }}
                                onClick={handleImageClick}
                            />
                        </Link>
                    </div>
                    <div className="space-x-8 hidden lg:flex">
                        <Link href="/">
                            <span className="nav-button cursor-pointer">
                                HOME
                            </span>
                        </Link>
                        <Link href="/menu">
                            <span className="nav-button cursor-pointer">
                                MENU
                            </span>
                        </Link>
                        <Link href="/contact">
                            <span className="nav-button cursor-pointer">
                                CONTACT
                            </span>
                        </Link>
                    </div>
                    <div className="text-lg mr-[-50px]">
                        <p>Store Hours: 8am-8pm</p>
                        <p>Restaurant: &nbsp; 11am-8pm</p>
                    </div>
                    <div className="text-lg ml-[-50px]">
                        <p>46 N. Main Street</p>
                        <p>(802)-855-8767</p>
                    </div>
                </nav>
            </div>
        </section>
    );
}