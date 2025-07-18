import React from 'react';
import { MenuData } from './MenuData';
import GlutenFreeIcon from '../Icons/GlutenFree';
import SpicyIcon from '../Icons/Spicy';
import VeganIcon from '../Icons/Vegan';
import VegetarianIcon from '../Icons/Vegetarian';
import NutsIcon from '../Icons/Nuts';
import Image from 'next/image';

const Menu: React.FC = () => {
    return (
        <div className="flex flex-col mt-10 items-center justify-center menu">
            <h1 className="text-center text-6xl mt-8">Menu</h1>
            <p className="w-1/2 mt-2 text-center">
                Choose from our appetizers, vegetarian, chicken, lamb main dishes, naan bread, and desserts.</p>
            <p className="w-1/2 mt-2 text-center"> Below is a key to indicate potential dietary information.
            </p>
            <p className="flex space-x-4 text-center m-4">
                <span>
                    Vegetarian &nbsp;
                    <VegetarianIcon />
                </span>
                <span>
                    Vegan &nbsp;
                    <VeganIcon />
                </span>
                <span>
                    Gluten Free &nbsp;
                    <GlutenFreeIcon />
                </span>
                <span>
                    Nuts &nbsp;
                    <NutsIcon />
                </span>
                <span>
                    Spicy &nbsp;
                    <SpicyIcon />
                </span>
            </p>
            {['Appetizers', 'Naan', 'Mains', 'Dessert', 'Sides'].map((category) => (
                <div
                    key={category}
                    className="w-full sm:w-3/4 md:w-1/2 mx-auto px-2"
                >
                    <h2 className="text-center text-2xl sm:text-3xl mt-10 mb-5">{category}</h2>
                    {MenuData.filter((item) => item.category === category).map((item) => (
                        <div key={item.name} className="flex flex-col sm:flex-row justify-between items-center w-full mb-6">
                            <Image
                                src={item.image}
                                alt={item.name}
                                className="rounded-lg mb-2 sm:mb-0"
                                width={72}
                                height={72}
                            />
                            <div className="flex-grow sm:ml-4 w-full">
                                <div className="flex flex-col sm:flex-row justify-between items-center">
                                    <h3 className="text-lg sm:text-xl">{item.name}</h3>
                                    <div className="hidden sm:block flex-grow border-b-2 border-dotted border-black ml-2 mr-2 mt-2"></div>
                                    <p className="text-lg sm:text-xl">${item.price.toFixed(2)}</p>
                                </div>
                                <p className="text-sm xs:m-4 sm:text-base">{item.description}</p>
                                <div className="flex space-x-2  ml-4 -mt-4">
                                    {item.glutenFree && <GlutenFreeIcon />}
                                    {item.spicy && <SpicyIcon />}
                                    {item.vegan && <VeganIcon />}
                                    {item.vegetarian && <VegetarianIcon />}
                                    {item.nuts && <NutsIcon />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;