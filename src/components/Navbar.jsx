import React from 'react'
import logo from '../images/logoTrans.png'

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 h-24">
            <div className="navbar-start h-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Services</a>
                            <ul className="p-2">
                                <li><a>Exterior Residential</a></li>
                                <li><a>Exterior Commercial</a></li>
                                <li><a>Fences and Decks Staining</a></li>
                                <li><a>Cabinetry and Doors</a></li>
                                <li><a>Interior Residential</a></li>
                                <li><a>Interior Commercial</a></li>
                                <li><a>Industrial</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl h-full"><img src={logo} alt="logo" className='h-full' /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li ><a className='text-base'>Item 1</a></li>
                    <li>
                        <details>
                            <summary className='text-base'>Services</summary>
                            <ul className="p-2 w-60 m-0">
                                <li><a>Exterior Residential</a></li>
                                <li><a>Exterior Commercial</a></li>
                                <li><a>Fences and Decks Staining</a></li>
                                <li><a>Cabinetry and Doors</a></li>
                                <li><a>Interior Residential</a></li>
                                <li><a>Interior Commercial</a></li>
                                <li><a>Industrial</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a className='text-base'>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </nav>
    )
}

export default Navbar