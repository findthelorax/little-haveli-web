import React from 'react';
import HomeCard from '../HomeCard';
import AwardBadge from '../AwardBadge';

const HomeSection: React.FC = () => {
    return (
        <section className='home-section'>
            <HomeCard />
            <AwardBadge />
        </section>
    );
}

export default HomeSection;