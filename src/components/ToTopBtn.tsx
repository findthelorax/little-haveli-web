import { useEffect, useState } from 'react';
import { BiSolidUpArrowAlt } from "react-icons/bi";

const ToTopBtn: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && 
                <div onClick={scrollToTop} className="fixed bottom-2 right-2 bg-black text-white h-10 w-10 rounded-md flex items-center justify-center cursor-pointer">
                    <BiSolidUpArrowAlt size={30}/>
                </div>}
        </div>
    );
};

export default ToTopBtn;