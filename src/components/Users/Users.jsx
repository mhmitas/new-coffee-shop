import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData()
    const [users, setUsers] = useState(loadedUser)

    function deleteUser(id) {
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const updatedUsers = users.filter(user => user._id !== id)
                    setUsers(updatedUsers)
                }
            })
    }
    return (
        <div>
            <h3 className='hero-content text-xl font-bold '>Users({users.length})</h3>
            <div className='flex flex-wrap gap-6 my-10 text-slate-50'>
                {
                    users.map(user => (
                        <User key={user._id} user={user} deleteUser={deleteUser}></User>
                    ))
                }
            </div>
        </div>
    );
};

export default Users;

function User({ user, deleteUser }) {
    return (
        <div className="card w-96 bg-base-200 shadow-xl">
            <div className='card-body'>
                <h3 className='card-title'>Username: {user.name}</h3>
                <p>Email: {user.email}</p>
                <p>User Id: {user._id}</p>
                <p>lastLoggedAt: {user?.lastLoggedAt || 'undefined'}</p>
                <p>Created: {user?.createdAt}</p>
                <div className='card-actions justify-end'>
                    <button onClick={() => deleteUser(user._id)} className='btn btn-error'>Delete</button>
                </div>
            </div>
        </div>
    )
}