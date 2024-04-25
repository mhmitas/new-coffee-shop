import React from 'react';
import coffee_banner from '../../assets/6.jpeg'
import AllCoffees from '../coffee/AllCoffees';

const Home = () => {

    return (
        <div>
            <header className="hero h-[500px] mb-16" style={{ backgroundImage: `url(${coffee_banner})` }}>
                <div className="hero h-[500px] bg-slate-950 bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-extrabold rancho-regular text-primary">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </header>
            <AllCoffees></AllCoffees>
        </div>
    );
};

export default Home;