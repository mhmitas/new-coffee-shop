import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateCoffee = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
    } = useForm()

    const loadedCoffee = useLoaderData()

    const onSubmit = (data, e) => {
        // console.log(data);
        fetch(`https://coffee-house-er-adda2.vercel.app/coffee/${loadedCoffee._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Updated Successfully')
                    navigate(`/coffeeDetail/${loadedCoffee._id}`)
                } else {
                    toast.error('Something went rong. Please try agiain latter.', {
                        position: "bottom-center"
                    })
                }
            })
    }

    const { name, supplier, category, chef, taste, details, photo } = loadedCoffee;

    return (
        <div>
            <h3 className='hero-content text-2xl font-bold'>Update Existing Coffee Details</h3>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-base-200 p-10 text-slate-50'
            >
                <div className='grid grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name")}
                            defaultValue={name} type="text"
                            placeholder="Name"
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input
                            {...register("supplier")}
                            defaultValue={supplier} type="text"
                            placeholder="Supplier"
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input
                            {...register("category")}
                            defaultValue={category} type="text"
                            placeholder="Category"
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input
                            {...register("chef")}
                            defaultValue={chef} type="text"
                            placeholder="Chef"
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            {...register("taste")}
                            defaultValue={taste} type="text"
                            placeholder="Price"
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input
                            {...register("details")}
                            defaultValue={details} type="text"
                            placeholder="Details"
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            {...register("photo")}
                            defaultValue={photo} type="text"
                            placeholder="Photo"
                            className="input input-bordered w-full col-span-2" />
                    </div>
                    <input
                        type="submit" value="Submit" className='btn mt-2 btn-primary w-full col-span-2' />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;