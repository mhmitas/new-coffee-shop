import React, { createContext, useState } from 'react';
export const CoffeeContext = createContext(null)
const CoffeeProvider = ({ children }) => {
    const [coffees, setCoffees] = useState([])

    const coffeeInfo = { coffees, setCoffees }
    return (
        <CoffeeContext.Provider value={coffeeInfo}>
            {children}
        </CoffeeContext.Provider>
    );
};

export default CoffeeProvider;