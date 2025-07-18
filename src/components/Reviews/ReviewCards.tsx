import Slider from "react-slick";
import StarRatings from 'react-star-ratings';

interface ReviewCardProps {
    avatar: string;
    name: string;
    stars: number;
    date: string;
    review: string;
    index: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ avatar, name, stars, date, review, index }) => {
    const initials = name.split(' ').map(word => word[0].toUpperCase()).join('');

    return (
            <div className="review-card">
                <div className="avatar" style={{ backgroundColor: avatar }}>{initials}</div>
                <h2 className="name">{name}</h2>
                <StarRatings
                    rating={stars}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name='rating'
                    starDimension="20px"
                    starSpacing="2px"
                />
                <p className="date">{date}</p>
                <p className="review">{review}</p>
            </div>
    );
};

const ReviewCards: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const reviews = [
        {
            avatar: 'purple',
            name: 'Jay Patel',
            stars: 5,
            date: 'Feb 23, 2024',
            review: 'Food was outstanding!! Didn’t expect it to be that good',
        },
        {
            avatar: 'blue',
            name: 'sijan shrestha',
            stars: 4,
            date: 'Jan 24, 2024',
            review: 'Very good food.',
        },
        {
            avatar: 'magenta',
            name: 'Will Purpura',
            stars: 5,
            date: 'Dec 1, 2023',
            review: 'Great food, great staff. They were able to make all their vegetarian dishes vegan. Grabbed a CBD seltzer to go along with the meal.',
        },
        {
            avatar: 'teal',
            name: 'Andrew Cushing',
            stars: 5,
            date: 'Nov 30, 2023',
            review: 'Perfect stop for a quick bite of some of the favorite modern Indian classics. Had the saag paneer which perfectly seasoned and the texture was just right. The chicken Tikka was delicious with a substantial gravy. I really loved the garlic naan which was hot and fresh with a soft center.',
        },
        {
            avatar: 'gold',
            name: 'Very Round Bird',
            stars: 5,
            date: 'Nov 30, 2023',
            review: 'The food here is amazing, and a great price. The lady who owns it is so kind and hospitable. I can\'t believe it took us 3 years to find out about them. They make their paneer in house!!!! Oh and their rice is perfect. Gorgeous fluffy endlessly long grains. Had the lamb saag, saag paneer, garlic naan, chicken tikka masala, veg samosa, lamb samosa (never seen this before, basically stuffed with lamb biryani-incredible,) and the veggie pakoras. Everything was great. Best apres ski dinner imaginable.',
        },
    ];

    return (
        <div className="review-cards-container">
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        avatar={review.avatar}
                        name={review.name}
                        stars={review.stars}
                        date={review.date}
                        review={review.review}
                        index={index}
                    />
                ))}
            </Slider>
        </div>
    );
};



export default ReviewCards;