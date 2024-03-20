import Image from 'next/image';

const GrocerySection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center p-4">
            <div className='grocery-card mb-8'>
            <h2 className="text-2xl mt-4 font-bold text-center mb-4">Indian Grocery Experience</h2>
            <p className="text-center mb-4">
                Little Haveli also has an Indian Grocery experience. We have a beer cave, wine selections, spices, snacks, everyday convenience items, and lottery. For questions or more details, feel free to contact us directly.
            </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="relative h-70 w-full grocery-image">
                    <Image src="/assets/grocery1.jpg" alt="Grocery image" layout="fill" objectFit="cover" />
                </div>
                <div className="grocery-image">
                    <Image src="/assets/grocery2.jpg" alt="Grocery image" width={300} height={150} />
                </div>
                <div className="grocery-image">
                    <Image src="/assets/grocery3.jpg" alt="Grocery image" width={300} height={150}/>
                </div>
                <div className="grocery-image">
                    <Image src="/assets/grocery4.jpg" alt="Grocery image" width={300} height={150} />
                </div>
            </div>
        </section>
    );
};

export default GrocerySection;