import React from 'react';
import HomeCard from './HomeCard';
import SpecialsCard from '../Specials/SpecialsCard';
import MenuScroll from '../Menu/MenuScroll';
import AwardSVG from '../Award/AwardSVG';

const HomeSection: React.FC = () => {
    return (
        <section className='home-section h-[85vh]'>
            <div className='flex justify-center items-center space-x-4'>
                <div className='specials-card-container'>
                    <SpecialsCard />
                    <div className='absolute top-[14%] left-[21.75%] rotate-svg'>
                        <AwardSVG />
                    </div>
                </div>
                <div>
                    <HomeCard />
                </div>
            </div>
            <div className='mt-[6%] mb-[10%]'>
                <MenuScroll />
            </div>
        </section>
    );
}

export default HomeSection;