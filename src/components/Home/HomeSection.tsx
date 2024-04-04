import React from 'react';
import HomeCard from './HomeCard';
import SpecialsCard from '../Specials/SpecialsCard';
import MenuScroll from '../Menu/MenuScroll';

const HomeSection: React.FC = () => {
    return (
        <section className='home-section h-[85vh]'>
            <div className='flex justify-between'>
            <HomeCard />
            <SpecialsCard />
            </div>
            <div className='mt-[6%]'>
            <MenuScroll />
            </div>
        </section>
    );
}

export default HomeSection;