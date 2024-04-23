import React from 'react';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';

const CoffeDetail = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-200 shadow-xl my-10 rounded-none">
                <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary p-2"><MdEdit className='text-xl' /></button>
                        <button className="btn btn-primary p-2"><MdDeleteOutline className='text-xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeDetail;