import { Bars3Icon } from '@heroicons/react/16/solid';
import React from 'react';

interface props {
    openNav: () => void,
}

const Navbar = ({ openNav }: props) => {

    return (
        <div className="w-[100%] fixed z-[100] top-0 h-[12vh] shadow-md bg-[#141c27]">
            <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                    Mahima
                    <span className="text-yellow-300">Rohit</span>
                </h1>

                <div className="flex space-x-4">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#education" className="nav-link">Education</a>
                    <a href="#skills" className="nav-link">Experience/Skills</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] h-[2rem] cursor-pointer text-yellow-300 md:hidden' />
                </div>
            </div>


        </div>
    )
}

export default Navbar;
