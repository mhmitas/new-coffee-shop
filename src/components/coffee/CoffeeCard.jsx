import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { CoffeeContext } from "../authentication/provider/CoffeeProvider";

export default function Coffee({ coffee }) {
    const { name, chef, photo, taste } = coffee;
    // console.log(coffee._id);
    const { coffees, setCoffees } = useContext(CoffeeContext)

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
                    const updatedCoffees = coffees.filter(coffee => coffee._id !== id)
                    setCoffees(updatedCoffees)
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