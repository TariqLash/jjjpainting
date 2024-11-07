import React from 'react'
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='flex justify-center'>

        <nav className="navbar h-[5vh] max-w-screen-2xl lg:px-5">
            <div className="navbar-start h-full">
                <a href='/' className="btn btn-ghost text-xl h-full">JJJ Painting</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='text-base' href='/'>Home</a></li>
                    <li><a className='text-base' href='/services'>Services</a></li>
                    <li><a className='text-base' href='about'>About</a></li>
                    <li><a className='text-base' href='/contact'>Contact Us</a></li>
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
            <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <AlignJustify />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='about'>About</a></li>
                        <li><a href='/contact'>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar