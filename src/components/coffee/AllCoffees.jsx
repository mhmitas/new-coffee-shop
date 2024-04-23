import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllCoffees = () => {
    const [coffee, setCoffee] = useState([])
    return (
        <div>
            <div className='hero'>
                <Link to="addCoffee"><button className='btn btn-primary'>Add Coffee</button></Link>

            </div>
        </div>
    );
};

export default AllCoffees;

function Coffee(coffee) {
    return (
        <div>

        </div>
    )
}