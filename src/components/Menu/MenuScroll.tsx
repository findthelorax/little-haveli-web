import React, { useState } from 'react';
import Image from 'next/image';
import { MenuData } from './MenuData';
import ReactCardFlip from 'react-card-flip';
import Marquee from 'react-fast-marquee';

interface MenuItemProps {
    name: string;
    image: string;
    price: number;
    description: string;
    spicy: boolean;
    glutenFree: boolean;
    vegetarian: boolean;
    vegan: boolean;
    nuts: boolean;
    category: string;
}

const MenuItem = ({ item, isFlipped, onFlip }: { item: MenuItemProps; isFlipped: boolean; onFlip: (flipped: boolean) => void }) => {
    return (
        <div
            className="mx-4 inline-block"
            onMouseEnter={() => onFlip(true)}
            onMouseLeave={() => onFlip(false)}
            onClick={() => onFlip(!isFlipped)}
            style={{ width: '12rem' }}
        >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div>
                    <div className='w-48 h-48 relative overflow-hidden menu-image' style={{ borderRadius: '20px' }}>
                        <Image src={item.image} alt={item.name} fill={true} style={{ objectFit: 'cover' }} />
                    </div>
                    <h2 className='mt-2'>{item.name}</h2>
                </div>
                <div className='back-face'>
                    <div className='w-48 h-48 relative overflow-hidden menu-image' style={{ borderRadius: '20px' }}>
                        <Image src={item.image} alt={item.name} fill={true} style={{ objectFit: 'cover' }} />
                        <div className='dark-overlay'></div>
                        <div className='back-face-content'>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <h2 className='mt-4'>{item.name}</h2>
                </div>
            </ReactCardFlip>
        </div>
    );
};

const MenuScroll = () => {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    // Detect mobile screen
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <div className='overflow-hidden items-center justify-center text-center w-full'>
            <Marquee
                gradient={false}
                speed={100}
                pauseOnHover={true}
                play={!(isMobile && flippedIndex !== null)}
            >
                {MenuData.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        isFlipped={flippedIndex === index}
                        onFlip={(flipped) => setFlippedIndex(flipped ? index : null)}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default MenuScroll;