import React from 'react';
import { NavLink, Outlet } from 'react-router';

const MarketingLayout = () => {
    return (
        <>
            <header className='py-5 text-center'>
                <ul className='flex justify-center gap-8'>
                    <li><NavLink to='/' className={({isActive})=>isActive?"text-red-400 font-bold":"text-black"}>Home</NavLink> </li>
                    <li><NavLink to='contact' className={({isActive})=>isActive?"text-red-400 font-bold":"text-black"}>Contact</NavLink> </li>
                </ul>
            </header>

            <main className='min-h-screen bg-green-300 text-center'>
                <Outlet/>
            </main>
        <footer className='bg-black text-white py-4'>
            Marketing Footer
        </footer>
        </>
    );
};

export default MarketingLayout;