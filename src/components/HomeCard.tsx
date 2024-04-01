import React from 'react';

const HomeCard = () => {
	return (
		<div className="home-card-container">
			<div className="md:flex flex-col items-center text-center p-4 max-w-md mx-auto  overflow-hidden md:max-w-2xl home-card">
				<h1 className="uppercase tracking-wide font-bold home-card-title">Little Haveli</h1>
				<p className="mt-2 home-card-text">
					Discover the essence of India at Little Haveli, where culinary craftsmanship meets community spirit. As
					a cherished establishment for over a decade, we take pride in delivering the vibrant flavors of
					authentic Indian cuisine. Our commitment to quality shines through in every dish, prepared with fresh,
					handpicked ingredients. Delight in the savory flavors as you enjoy our slow-cooked sauces, crafted with
					care and attention to detail. Join us on a culinary journey that celebrates the diversity of Indian
					cuisine, where every meal is an invitation to savor the richness of our culture and keeps our loyal
					patrons returning time and again.
				</p>
			</div>
		</div>
	);
};

export default HomeCard;