import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const routes = [
        { name: "Home", path: "/", id: 1 },
        // { name: "Home", path: "/", id: 1 },
        // { name: "Home", path: "/", id: 1 },
    ]
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100 shadow-2xl">
                    <div className="flex-1">
                        <Link to="/" className="btn btn-ghost text-xl">Mahim Coffee House</Link>
                    </div>
                    <div className="flex-none">
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