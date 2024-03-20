import React from 'react';
import Image from 'next/image';
import awardImage from '../../public/assets/award2.svg';
import outsideImage from '../../public/assets/outside.jpg';

const AwardCard: React.FC = () => {
    return (
        <div className="award-card-container">
            <div className="award-card">
                <div className="background-image">
                    <Image src={outsideImage} alt="Outside" />
                </div>
                <div className="award-image">
                    <Image src={awardImage} alt="Award" width={200} height={200} />
                </div>
            </div>
        </div>
    );
};

export default AwardCard;