import React from 'react';

const UpdateCoffee = () => {
    return (
        <div>
            <h3 className='hero-content text-2xl font-bold'>Update Existing Coffee Details</h3>
            <form className='bg-base-200 p-10'>
                <div className='grid grid-cols-2 gap-4'>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full" />

                    <input
                        type="text"
                        placeholder="Supplier"
                        className="input input-bordered w-full" />
                    <input
                        type="text"
                        placeholder="Category"
                        className="input input-bordered w-full" />
                    <input
                        type="text"
                        placeholder="Chef"
                        className="input input-bordered w-full" />

                    <input
                        type="text"
                        placeholder="Taste"
                        className="input input-bordered w-full" />
                    <input
                        type="text"
                        placeholder="Details"
                        className="input input-bordered w-full" />
                    <input
                        type="text"
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