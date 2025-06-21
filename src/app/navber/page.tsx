"use client"
import { useState } from 'react';
import Link from "next/link";
import { HiOutlineBars3 } from 'react-icons/hi2';


export default function Navber() {
    const [isOpen, setIsOpen] = useState(false); // Navbar toggle state

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full max-w-screen-2xl z-30 fixed justify-between mx-auto px-6 flex bg-base-text h-20 items-center text-center">
            {/* Logo */}
            <div>
              <Link href={"#home"} className='text-base-color font-bold text-xl md:text-4xl '>Developer A.</Link>
            </div>

            
            <HiOutlineBars3 onClick={toggleNavbar}  className='w-12 h-12 text-base-color md:hidden'/>
            {/* Naveber */}
            <nav
          className=
          {`absolute md:relative left-0 md:top-0 top-20 right-0 w-full  
            h-auto md:h-0 md:w-auto flex-col md:flex-row 
    md:flex md:items-center
             bg-base-text text-base-color md:text-xl text-2xl gap-8   ${isOpen ? "flex" : "hidden" } md:block animate-fadeIn animate-slideInRight md:animate-bounce
             `}
        >
               
                <Link href={"#home"}>Home</Link>
                <Link href={"#about"}>About</Link>
                <Link href={"#services"}>Services</Link>
                <Link href={"#portfolio"}>Portfolio</Link>
                <Link href={"#projects"}>Project</Link>
                <Link href={"#blog"}>Blog</Link>
                <Link href={"#contact"}>Contact</Link>

            </nav>

            {/* Button */}
          
        </div>
    );
}



