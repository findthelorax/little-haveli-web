'use client'
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ReviewCards from '@/components/Reviews/ReviewCards';
import ToTopBtn from '@/components/ToTopBtn';
import GrocerySection from '@/components/Grocery/Grocery';
import HomeSection from '@/components/Home/HomeSection';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen home-bg overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
                <section>
                    <HomeSection />
                </section>
                <section>
                    <GrocerySection />
                </section>
                <section>
                    <ReviewCards />
                </section>
                <ToTopBtn />
            </main>
            <Footer />
        </div>
    );
}