'use client'
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HomeCard from '@/components/HomeCard';
import AwardCard from '@/components/AwardCard';
import ReviewCards from '@/components/ReviewCards';
import ToTopBtn from '@/components/ToTopBtn';
import AwardBadge from '@/components/AwardBadge';
import GrocerySection from '@/components/Grocery';
import SpecialsCard from '@/components/SpecialsCard';
import HomeSection from '@/components/Home/HomeSection';

export default function Home() {

	return (
        <div className="flex flex-col min-h-screen home-bg">
			<Navbar />
            <main className="flex-grow">
			<HomeSection />
			<SpecialsCard />
			<GrocerySection />
			{/* <AwardCard /> */}
			<ReviewCards />
			<ToTopBtn />
			</main>
			<Footer />
		</div>
	);
}