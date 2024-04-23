import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { FaEye } from 'react-icons/fa';
// import Default_coffe from '../../assets/coffee_3054889.png';
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
            <h3 className='hero-content'>{coffee.length}</h3>
            <div className='mt-10 grid gap-6 grid-cols-1 md:grid-cols-2'>
                {coffee.map(c => <Coffee key={c._id} coffee={c}></Coffee>)}
            </div>
        </div>
    );
};

export default AllCoffees;

function Coffee({ coffee }) {
    const navigate = useNavigate()
    const { name, chef, photo, taste } = coffee;
    // console.log(coffee._id);

    function handleDelete(id) {
        alert('You are deleting an item')
        fetch(`http://localhost:3000/coffee/${id}`, {
            method: 'delete',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    toast('Deleted Coffee item')
                    navigate('/')
                }
            })
    }

    return (
        <div className=" bg-base-200 shadow-xl grid grid-cols-6 gap-6 p-6 text-slate-200">
            <div className='col-span-2 '>
                <figure className=''><img src={photo} alt={name} /></figure>
            </div>
            <div className='space-y-4 my-auto col-span-3'>
                <h2 className="card-title"><strong>Name: </strong>{name}</h2>
                <p><strong>Chef: </strong>{chef}</p>
                <p><strong>Price: </strong>{taste}</p>
            </div>
            <div className=" flex flex-col justify-center gap-4 items-center">
                <Link to={`/coffeeDetail/${coffee._id}`}>
                    <button className="btn btn-primary p-2"><FaEye className='text-xl' /></button>
                </Link>
                <Link to={`/updateCoffee/${coffee._id}`}>
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

/*
https://i.postimg.cc/pLVC8WXw/Rectangle-10.png
https://i.postimg.cc/WbvXN6Rb/Rectangle-11.png
https://i.postimg.cc/rsCG036y/Rectangle-13.png
https://i.postimg.cc/90jtfVnN/Rectangle-14.png
https://i.postimg.cc/k5zvkWFC/Rectangle-15.png
https://i.postimg.cc/8PQnFgvG/Rectangle-16.png
https://i.postimg.cc/zGdjFsyV/Rectangle-9.png
*/