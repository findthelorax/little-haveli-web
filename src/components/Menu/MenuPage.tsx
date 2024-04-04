// MenuPage.tsx

import React from 'react';
import { MenuData } from './MenuData';

const MenuPage: React.FC = () => {
    return (
        <div>
            <h1>Menu</h1>
            <p>In our menu, we have appetizers, Vegetarian, Chicken, Lamb main dishes, naan bread, and dessert. Below is a key to indicate potential dietary information. VG=Vegetarian V=Vegan Wheat=Gluten Free Pepper=Spicy</p>
            {['Appetizers', 'Vegetarian', 'Chicken', 'Lamb', 'Naan Breads', 'Dessert', 'Sides'].map(category => (
                <div key={category}>
                    <h2>{category}</h2>
                    {MenuData.filter(item => item.category === category).map(item => (
                        <div key={item.name}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>${item.price.toFixed(2)}</p>
                            {item.spicy && <p>Spicy</p>}
                            {item.gluten && <p>Contains gluten</p>}
                            {item.vegetarian && <p>Vegetarian</p>}
                            {item.vegan && <p>Vegan</p>}
                            {item.nuts && <p>Contains nuts</p>}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MenuPage;