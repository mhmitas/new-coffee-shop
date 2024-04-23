import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const routes = [
        { name: "Home", path: "/", id: 1 },
        // { name: "Home", path: "/", id: 1 },
        // { name: "Home", path: "/", id: 1 },
    ]
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Coffee CRUD</a>
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