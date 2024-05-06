import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../authentication/provider/Provider';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const routes = [
        { name: "Home", path: "/", id: 1 },
        { name: "Login", path: "/login", id: 2 },
    ]
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100 shadow-2xl">
                    <div className="flex-1">
                        <Link to="/" className="btn btn-ghost text-xl">Mahim's Perfect Cup </Link>
                    </div>
                    <div className="flex-none">
                        <div>
                            {user && <>{user?.displayName} | {user.email}</>}
                        </div>
                        <ul className="menu menu-horizontal px-1">
                            {routes.map(route => (
                                <li key={route.id}><NavLink to={route.path}>{route.name}</NavLink></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;