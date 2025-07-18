import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function OrderOnline() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-orange-700">Order Online</h1>
                <p className="text-xl sm:text-2xl mb-4">Coming Soon!</p>
                <p className="text-base text-gray-600">We&apos;re working hard to bring you online ordering. Please check back soon.</p>
            </main>
            <Footer />
        </div>
    );
}