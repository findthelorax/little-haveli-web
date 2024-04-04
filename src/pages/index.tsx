'use client'
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ReviewCards from '@/components/Reviews/ReviewCards';
import ToTopBtn from '@/components/ToTopBtn';
import GrocerySection from '@/components/Grocery/Grocery';
import SpecialsCard from '@/components/Specials/SpecialsCard';
import HomeSection from '@/components/Home/HomeSection';
import MenuPage from '@/components/Menu/MenuPage';
import MenuScroll from '@/components/Menu/MenuScroll';

export default function Home() {

	return (
        <div className="flex flex-col min-h-screen home-bg">
			<Navbar />
            <main className="flex-grow">
			<HomeSection />
			<GrocerySection />
			<ReviewCards />
			{/* <MenuPage /> */}
			<ToTopBtn />
			</main>
			<Footer />
		</div>
	);
}