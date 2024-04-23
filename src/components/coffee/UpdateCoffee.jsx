import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data, e) => {
        console.log(data);
        fetch('', {

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    const loadedCoffee = useLoaderData()
    // console.log(loadedCoffee);
    const { name, supplier, category, chef, taste, details, photo } = loadedCoffee
    return (
        <div>
            <h3 className='hero-content text-2xl font-bold'>Update Existing Coffee Details</h3>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-base-200 p-10 text-slate-50'
            >
                <div className='grid grid-cols-2 gap-4'>
                    <input
                        {...register("name")}
                        defaultValue={name} type="text"
                        placeholder="Name"
                        className="input input-bordered w-full" />

                    <input
                        {...register("supplier")}
                        defaultValue={supplier} type="text"
                        placeholder="Supplier"
                        className="input input-bordered w-full" />
                    <input
                        {...register("category")}
                        defaultValue={category} type="text"
                        placeholder="Category"
                        className="input input-bordered w-full" />
                    <input
                        {...register("chef")}
                        defaultValue={chef} type="text"
                        placeholder="Chef"
                        className="input input-bordered w-full" />

                    <input
                        {...register("taste")}
                        defaultValue={taste} type="text"
                        placeholder="Taste"
                        className="input input-bordered w-full" />
                    <input
                        {...register("details")}
                        defaultValue={details} type="text"
                        placeholder="Details"
                        className="input input-bordered w-full" />
                    <input
                        {...register("photo")}
                        defaultValue={photo} type="text"
                        placeholder="Photo"
                        className="input input-bordered w-full col-span-2" />
                    <input
                        type="submit" value="Submit" className='btn btn-primary w-full col-span-2' />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;