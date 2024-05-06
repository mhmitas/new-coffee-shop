import React from 'react';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';


const AddCoffee = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data, e) => {
        // console.log(data)
        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    toast.success('New coffee added successfully')
                    e.target.reset()
                }
            })
    }
    return (
        <div>
            <h3 className='hero-content text-2xl font-bold text-slate-50'>Add New Coffee</h3>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-base-200 p-10'
            >
                <div className='grid grid-cols-2 gap-4'>
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Name"
                        required
                        name='name'
                        className="input input-bordered w-full" />
                    <input
                        {...register("supplier")}
                        type="text"
                        placeholder="Supplier"
                        required
                        className="input input-bordered w-full" />
                    <input
                        {...register("category")}
                        type="text"
                        placeholder="Category"
                        required
                        className="input input-bordered w-full" />
                    <input
                        {...register("chef")}
                        type="text"
                        placeholder="Chef"
                        required
                        className="input input-bordered w-full" />

                    <input
                        {...register("taste")}
                        type="number"
                        placeholder="Price"
                        required
                        className="input input-bordered w-full" />
                    <input
                        {...register("details")}
                        type="text"
                        placeholder="Details"
                        required
                        className="input input-bordered w-full" />
                    <input
                        {...register("photo")}
                        type="text"
                        placeholder="Photo"
                        required
                        className="input input-bordered w-full col-span-2" />
                    <input
                        type="submit" value="Submit" className='btn btn-primary w-full col-span-2' />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;