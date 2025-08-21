import React from 'react';
import { Link, NavLink } from 'react-router';

const Nav = () => {
    return (
        <header>
            <nav className='bg-gray-800 text-white p-4'>
                <ul className='flex gap-4 items-center justify-center'>
                    <li><NavLink to="/" className={({isActive})=> isActive?"text-red-500 font-bold":""} >Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive})=> isActive?"text-red-500 font-bold":""}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive})=> isActive?"text-red-500 font-bold":""}>Contact</NavLink></li>
                    <li><NavLink to="/services" className={({isActive})=> isActive?"text-red-500 font-bold":""}>Services</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;