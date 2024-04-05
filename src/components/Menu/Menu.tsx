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
            <p className="w-1/3 mt-2 text-center">
                Choose from our appetizers, vegetarian, chicken, lamb main dishes, naan bread, and desserts.</p>
            <p> Below is a key to indicate potential dietary information.
            </p>
            <p className="flex space-x-4">
                <span>
                    Vegetarian =&nbsp;
                    <VegetarianIcon />
                </span>
                <span>
                    Vegan =&nbsp;
                    <VeganIcon />
                </span>
                <span>
                    Gluten Free =&nbsp;
                    <GlutenFreeIcon />
                </span>
                <span>
                    Nuts =&nbsp;
                    <NutsIcon />
                </span>
                <span>
                    Spicy =&nbsp;
                    <SpicyIcon />
                </span>
            </p>
            {['Appetizers', 'Naan', 'Mains', 'Dessert', 'Sides'].map((category) => (
                <div key={category} className="w-1/2 mx-auto">
                    <h2 className="text-center text-3xl mt-10 mb-5">{category}</h2>
                    {MenuData.filter((item) => item.category === category).map((item) => (
                        <div key={item.name} className="flex justify-between items-center w-full mb-6">
                            <Image src={item.image} alt={item.name} className="rounded-lg" width={96} height={96} />
                            <div className="flex-grow ml-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl">{item.name}</h3>
                                    <div className="flex-grow border-b-2 border-dotted border-black ml-2 mr-2 mt-2"></div>
                                    <p className="text-xl">${item.price.toFixed(2)}</p>
                                </div>
                                <p>{item.description}</p>
                                <div className="flex space-x-2">
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