import React from 'react';
import Image from 'next/image';
import awardImage from '../../public/assets/award2.svg';

const AwardBadge: React.FC = () => {
    return (
        <div className="award-badge-container">
                <div className="award-badge">
                    <Image src={awardImage} alt="Award" width={200} height={200} />
                </div>
        </div>
    );
};

export default AwardBadge;