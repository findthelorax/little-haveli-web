import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MenuPage from '@/components/Menu/MenuPage';

export default function Menu() {

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <MenuPage />
            <Footer />
        </div>
    );
}