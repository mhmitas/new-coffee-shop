import React, { createContext } from 'react';
const CoffeeContext = createContext([])
const CoffeeProvider = ({ children }) => {
    const [coffee, setCoffee] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/coffee')
            .then(res => res.json())
            .then(data => {
                setCoffee(data)
            })
    }, [])
    return (
        <div>
            {children}
        </div>
    );
};

export default CoffeeProvider;