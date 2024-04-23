import React from 'react';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeDetail = () => {
    const loadedCoffee = useLoaderData()
    // console.log(loadedCoffee);
    const { supplier, category, chef, taste, details, name, photo } = loadedCoffee

    return (
        <div>
            <div className="card lg:card-side bg-base-200 shadow-xl my-10 rounded-none">
                <figure><img src={photo} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><strong>Chef: </strong>{chef}</p>
                    <p><strong>Category: </strong>{category}</p>
                    <p><strong>Supplier: </strong>{supplier}</p>
                    <p><strong>Taste: </strong>{taste}</p>
                    <p><strong>Details: </strong>{details}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary p-2"><MdDeleteOutline className='text-xl' /></button> */}
                        <Link to={`/updateCoffee/${loadedCoffee._id}`}>
                            <button className="btn btn-primary p-2"><MdEdit className='text-xl' /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeDetail;