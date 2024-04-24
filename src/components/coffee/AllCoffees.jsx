import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Coffee from './CoffeeCard';

const AllCoffees = () => {
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
            <div className='hero'>
                <Link to="addCoffee"><button className='btn btn-primary'>Add Coffee</button></Link>
            </div>
            <h3 className='hero-content'>{coffee.length}</h3>
            <div className='mt-10 grid gap-6 grid-cols-1 md:grid-cols-2'>
                {coffee.map(c => <Coffee key={c._id} coffee={c}></Coffee>)}
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