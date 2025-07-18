import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface DrawerProps {
	isOpen: boolean;
	onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
	const menuItems = ['HOME', 'MENU', 'ORDER ONLINE', 'CONTACT'];
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
		<div
			ref={drawerRef}
			className={`drawer ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
			style={{ display: isOpen ? 'block' : 'none' }}
			aria-hidden={!isOpen}
			tabIndex={-1}
		>
			<button className="close-button absolute top-4 right-4" onClick={onClose} aria-label="Close menu">
				<AiOutlineClose size={30} color="#b52e13" />
			</button>
			<div className="flex flex-col items-start mt-16 ml-6 space-y-4">
				{menuItems.map((item, index) => {
					let href = '/';
					if (item === 'HOME') href = '/';
					else if (item === 'ORDER ONLINE') href = '/order-online';
					else href = `/${item.toLowerCase()}`;
					return (
						<Link key={index} href={href}>
							<span className="nav-button cursor-pointer" onClick={onClose}>
								{item}
							</span>
						</Link>
					);
				})}
			</div>
			<div className="drawer-footer mt-8 ml-6">
				<Link href="/">
					<Image
						src="/assets/little-haveli-logo.jpg"
						alt="Little Haveli"
						className="w-28 h-auto nav-icon cursor-pointer"
						width={100}
						height={100}
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
