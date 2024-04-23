import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { FaEye } from 'react-icons/fa'
import Default_coffe from '../../assets/coffee_3054889.png'
import toast from 'react-hot-toast';

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
            <h3>{coffee.length}</h3>
            <div className='mt-10 grid gap-6 grid-cols-1 md:grid-cols-2'>
                {coffee.map(c => <Coffee key={c._id} coffee={c}></Coffee>)}
            </div>
        </div>
    );
};

export default AllCoffees;

function Coffee({ coffee }) {
    const { name, chef } = coffee;
    // console.log(coffee._id);

    function handleDelete(id) {
        fetch(`http://localhost:3000/coffee/${id}`, {
            method: 'delete',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast('Deleted Coffee item')
                }
            })
    }

    return (
        <div className=" bg-base-200 shadow-xl grid grid-cols-6 gap-6 p-6 text-slate-200">
            <div className='col-span-2 '>
                <figure className=''><img src={Default_coffe} alt={name} /></figure>
            </div>
            <div className='space-y-4 my-auto col-span-3'>
                <h2 className="card-title"><strong>Name: </strong>{name}</h2>
                <p><strong>Chef: </strong>{chef}</p>
                <p><strong>Price: </strong>$9</p>

            </div>
            <div className=" flex flex-col justify-center gap-4 items-center">
                <Link to={`coffeeDetail/${coffee._id}`}>
                    <button className="btn btn-primary p-2"><FaEye className='text-xl' /></button>
                </Link>
                <Link to={`updateCoffee/${coffee._id}`}>
                    <button className="btn btn-primary p-2"><MdEdit className='text-xl' /></button>
                </Link>
                <button
                    onClick={() => handleDelete(coffee._id)}
                    className="btn btn-primary p-2"><MdDeleteOutline className='text-xl' />
                </button>
            </div>
        </div>
    )
}