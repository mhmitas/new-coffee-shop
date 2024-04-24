import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/Provider';

const Login = () => {
    const { loginUser } = useContext(AuthContext)

    function handleLogin(e) {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        // console.log(user);
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            <div className="container mx-auto mt-10 max-w-sm bg-base-200 p-8">
                <h1 className="text-center text-2xl font-bold mb-4">Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name="password" className="input input-bordered" />
                    </div>
                    <Link to="" className="text-sm mt-2 block link">Forgot Password?</Link>
                    <div className="form-control flex justify-between mt-4">
                        <button type="submit" className="btn btn-primary">Sign In</button>
                        <div className="divider">Or continue with</div>
                        <div className="flex justify-center space-x-2 mt-4">
                            <Link to="" className="btn btn-outline btn-icon btn-google">
                                <FaGoogle /> Google
                            </Link>
                            <Link to="" className="btn btn-outline btn-icon btn-twitter">
                                <FaXTwitter /> Twitter
                            </Link>
                        </div>
                    </div>
                    <p className="mt-4">
                        Don't have an account? Please <Link to="/register" className="link">Register</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;