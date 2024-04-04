import Image from 'next/image';

const GrocerySection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center p-4">
            <div className='grocery-card mb-8 p-4'>
            <h2 className="text-2xl mt-4 font-bold text-center mb-4">Indian Grocery Experience</h2>
            <p className="text-center">
                We have a beer cave, wine selections, spices, snacks, lottery, and everyday convenience items. For questions or more details, feel free to contact us directly.
            </p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="relative grocery-image overflow-hidden">
                    <Image src="/assets/grocery1.jpg" alt="Grocery image" fill={true} object-fit="cover" />
                </div>
                <div className="grocery-image overflow-hidden">
                    <Image src="/assets/grocery2.jpg" alt="Grocery image" width={300} height={150} />
                </div>
                <div className="grocery-image overflow-hidden">
                    <Image src="/assets/grocery3.jpg" alt="Grocery image" width={300} height={150}/>
                </div>
                <div className="grocery-image overflow-hidden">
                    <Image src="/assets/grocery4.jpg" alt="Grocery image" width={300} height={150} />
                </div>
            </div>
        </section>
    );
};

export default GrocerySection;