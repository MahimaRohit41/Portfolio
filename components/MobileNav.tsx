import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface props {
    nav: boolean,
    closeNav: () => void,
}

const MobileNav = ({ nav, closeNav }: props) => {
    const navStyle = nav ? "transalate-x-0" : "translate-x-[-100%]";
    return (
        <div className={`fixed ${navStyle} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}>
            <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center '>
                <a href="#home" className="nav-link-mobile" onClick={closeNav}>Home</a>
                <a href="#about" className="nav-link-mobile" onClick={closeNav} >About</a>
                <a href="#education" className="nav-link-mobile" onClick={closeNav}>Education</a>
                <a href="#skills" className="nav-link-mobile" onClick={closeNav}>Experience/Skills</a>
                <a href="#projects" className="nav-link-mobile" onClick={closeNav}>Projects</a>
                <a href="#contact" className="nav-link-mobile" onClick={closeNav}>Contact</a>
            </div>
            <div onClick={closeNav} className='absolute top-[2rem] h-[2rem] w-[2rem] right-[2rem] cursor-pointer text-yellow-400'>
                <XMarkIcon />
            </div>
        </div>
    )
}

export default MobileNav
