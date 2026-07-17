import React from 'react';
import { Link } from 'react-router-dom';
import {FiMenu, FiX, FiHome, FiInfo, FiLogIn, FiUserPlus } from 'react-icons/fi'
import './navBar.css';


const iconStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#ffffff",
    fontWeight: "bold"
}

const menuListStyle = {
    listStyleType: "none",
    margin: 0,
    borderRadius: "5px",
    border: "none",
    textAlign: "center",
    gap: "20px"
}
const MobileGuestNavBar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <header className='sticky top-0 z-50'>
            <div className='flex flex-col'>
                <nav className='w-full bg-[#c20044]'>
                    {/* LOGO AND HAMBURGER ICON */}
                    <div className='flex justify-between'>
                        {/* Hamburger */}
                        <button
                            className="bg-transparent font-semibold hover:text-white py-2 px-4 border-none"
                            onClick={() => setOpenMenu(!openMenu)}
                            aria-label={openMenu ? "Close menu" : "Open menu"}
                        >
                            {openMenu ? <FiX style={iconStyle} /> : <FiMenu style={iconStyle} />}
                        </button>
                        <div>
                            <img src="./logo.png" alt="logo" className='w-13 h-13 p-1 mr-2' />
                        </div>
                    </div>
                </nav>

                {/* MENU ITEMS */}
                <div
                    className={`fixed top-13 bg-white flex flex-col w-fit px-5 h-[calc(100dvh-64px)] z-50 p-2 border-2 border-gray-200 border-solid border rounded-b-xl shadow-lg transition-all duration-400 ease-in-out
                        ${openMenu
                            ? "translate-x-0 opacity-100 visible pointer-events-auto"
                            : "-translate-x-full opacity-0 invisible pointer-events-none"
                        }`}
                >
                    <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                        <li style={menuListStyle}>
                            <Link className='link' to="/" onClick={() => setOpenMenu(false)}>
                                <FiHome className='linkIcon' /> Home
                            </Link>
                        </li>
                        <li style={menuListStyle}>
                            <Link className='link' to="/about" onClick={() => setOpenMenu(false)}>
                                <FiInfo className='linkIcon' /> About
                            </Link>
                        </li>
                        <li style={menuListStyle}>
                            <Link className='link' to="/signin" onClick={() => setOpenMenu(false)}>
                                <FiLogIn className='linkIcon' /> Signin
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default MobileGuestNavBar
