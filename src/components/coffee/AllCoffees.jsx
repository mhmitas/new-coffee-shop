import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Coffee from './CoffeeCard';
import { CoffeeContext } from '../authentication/provider/CoffeeProvider';

const AllCoffees = () => {
    const { coffees, setCoffees } = useContext(CoffeeContext)
    useEffect(() => {
        fetch('https://coffee-house-er-adda2.vercel.app/coffee')
            .then(res => res.json())
            .then(data => {
                setCoffees(data)
            })
    }, [])
    return (
        <div>
            <div className='hero'>
                <Link to="addCoffee"><button className='btn btn-primary'>Add Coffee</button></Link>
            </div>
            <h3 className='hero-content'>{coffees.length}</h3>
            <div className='mt-10 grid gap-6 grid-cols-1 md:grid-cols-2'>
                {coffees.map(c => <Coffee key={c._id} coffee={c}></Coffee>)}
            </div>
        </div>
    );
};

export default AllCoffees;



/*
https://i.postimg.cc/pLVC8WXw/Rectangle-10.png
https://i.postimg.cc/WbvXN6Rb/Rectangle-11.png
https://i.postimg.cc/rsCG036y/Rectangle-13.png
https://i.postimg.cc/90jtfVnN/Rectangle-14.png
https://i.postimg.cc/k5zvkWFC/Rectangle-15.png
https://i.postimg.cc/8PQnFgvG/Rectangle-16.png
https://i.postimg.cc/zGdjFsyV/Rectangle-9.png
*/