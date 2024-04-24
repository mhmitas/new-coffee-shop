import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/Provider';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    function handleRegister(e) {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // console.log(user);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const createdAt = result.user?.metadata?.creationTime;
                const user = { name, email, password, createdAt }
                fetch('http://localhost:3000/users/', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Successfully added user');
                        console.log(data);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="container mx-auto mt-10 max-w-sm bg-base-200 p-8">
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="text"
                            name="password"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Regsiter
                        </button>
                    </div>
                    <p className="mt-4">
                        Already have an account? Please{' '}
                        <Link to="/login" className="link">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;