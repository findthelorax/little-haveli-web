import React from 'react';
import HomeCard from './HomeCard';
import SpecialsCard from '../Specials/SpecialsCard';
import MenuScroll from '../Menu/MenuScroll';
import AwardSVG from '../Award/AwardSVG';

const HomeSection: React.FC = () => {
    return (
        <section className="home-section pb-12">
            <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="specials-card-container min-w-0 w-full max-w-[300px] sm:max-w-md relative">
                    <SpecialsCard />
                    <div className="block sm:hidden absolute left-10 top-0">
                        <AwardSVG className="w-36 h-36" />
                    </div>
                    <div className="hidden sm:block">
                        <AwardSVG className="w-[250px] h-auto" />
                    </div>
                </div>
                <div>
                    <HomeCard />
                </div>
            </div>
            <div className="mt-8 mb-12">
                <MenuScroll />
            </div>
        </section>
    );
}

export default HomeSection;