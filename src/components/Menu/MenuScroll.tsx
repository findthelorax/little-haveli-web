import React, { useState } from 'react';
import Image from 'next/image';
import { MenuData } from './MenuData';
import Slider from "react-slick";
import ReactCardFlip from 'react-card-flip';

interface MenuItemProps {
    image: string;
    name: string;
    description: string;
}

const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 8,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const MenuItem = ({ item }: { item: MenuItemProps }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
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

const MenuScroll = () => (
    <div className='overflow-hidden items-center justify-center text-center'>
        <Slider {...settings}>
            {MenuData.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </Slider>
    </div>
);

export default MenuScroll;