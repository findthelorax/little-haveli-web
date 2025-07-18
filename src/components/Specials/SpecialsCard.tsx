const SpecialsCard: React.FC = () => {
    return (
        <section className="w-full max-w-md min-w-0 px-2 sm:px-4">
            <div className="specials-card p-4 w-full">
                <h2 className="text-2xl font-bold m-4">HOURS</h2>
                <p className="mb-2">CLOSED SUNDAY</p>
                <p className="mb-2">MON - SAT: 8am - 8pm</p>
                <p className="mb-4">FOOD: 11am - 8pm</p>
                <p className="mb-2">LUNCH SPECIAL: 11am - 3pm</p>
                <p className="mb-4">ANY TWO WITH RICE FOR $9.99</p>
                <p className="mb-4">DINE IN: 4pm - 8pm</p>
                <p className="text-xl">BIG PARKING SPACE AVAILABLE IN BACK</p>
            </div>
        </section>
    );
};

export default SpecialsCard;