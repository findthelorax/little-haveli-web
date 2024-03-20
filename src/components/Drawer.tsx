import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
    const menuItems = ['HOME', 'MENU', 'CONTACT', 'ORDER ONLINE'];
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={drawerRef} className={`drawer ${isOpen ? 'open' : ''}`}>
            <button className="close-button" onClick={onClose}>
                <AiOutlineClose size={30} color='#b52e13'/>
            </button>
            {menuItems.map((item) => (
                <Link href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}>
                    <span className="nav-button cursor-pointer" onClick={onClose}>{item}</span>
                </Link>
            ))}
            <div className="drawer-footer">
                <Link href="/">
                    <img
                        src="/assets/little-haveli-logo.jpg"
                        alt="Little Haveli"
                        className="w-28 h-auto nav-icon cursor-pointer"
                        onClick={onClose}
                    />
                </Link>
                <h1>Little Haveli</h1>
                <p>46 N. Main St. Rutland, VT</p>
                <p>(802)-855-8767</p>
                <p>Store Hours: 8am-8pm</p>
                <p>Restaurant Hours: 11am-8pm</p>
                <p>Restaurant Closed on Sundays</p>
            </div>
        </div>
    );
};

export default Drawer;