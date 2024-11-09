"use client"
import { useState } from 'react';
import image from '../../../../public/logo.png';
import Image from "next/image";
import Link from "next/link";

export default function Navber() {
    const [isOpen, setIsOpen] = useState(false); // Navbar toggle state

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="max-w-full sm:fixed flex flex-col sm:flex-row text-white font-bold px-4 py-2 bg-purple-950">
            <div className=' w-28 justify-center m-auto xl:ml-16 sm:ml-0'>
                <Image src={image} alt="logo" />
            </div>
            <div className='hidden lg:block sm:pt-4 xl:ml-4 2xl:mr-48'>
                <Link href="/">areejzaheer96@gmail.com</Link>
            </div>

            <button
                className="sm:hidden mt-2 border border-purple-800 hover:text-white hover:bg-purple-800 text-purple-800 p-4 rounded-full"
                onClick={toggleNavbar}
            >
                {isOpen ? 'Close' : 'Menu'}
            </button>


            <nav className={`flex-col  sm:flex-row ${isOpen ? 'flex' : 'hidden'} sm:flex ml-0 sm:ml-2
            space-y-2 sm:space-y-0 sm:space-x-2 pt-4 2xl:mx-8 xl:ml-48 xl:gap-8 xl:text-sm md:justify-center 2xl:text-2xl 2xl:gap-12 2xl:ml-[18rem] md:m-auto md:mb-6`}>


                <Link href={"#home"}
                    className="border-b-2 border-transparent hover:border-white transition duration-700 ease-in-out delay-75"
                >Home</Link>

                <Link href={"#services"}
                    className="border-b-2 border-transparent hover:border-white transition duration-700 ease-in-out delay-75"
                >Services</Link>
                <Link href={"#works"}
                    className="border-b-2 border-transparent hover:border-white transition duration-700 ease-in-out delay-75"
                >Works</Link>
                <Link href={"/"}
                    className="border-b-2 border-transparent hover:border-white transition duration-700 ease-in-out delay-75"
                >Resume</Link>
                <Link href={"/"}
                    className="border-b-2 border-transparent hover:border-white transition duration-700 ease-in-out delay-75"
                >Skills</Link>

                <Link href={"#contect"}
                    className="border-b-2 border-transparent hover:border-white transition duration-700 ease-in-out delay-75">Contact</Link>
            </nav>
            <button className='ml-auto justify-center my-8 m-auto sm:text-sm sm:p-1 sm:ml-14 sm:m-2 md:ml-16 2xl:ml-32 xl:mt-2 
            xl:mr-24 mt-4 border border-white rounded-md w-40 h-12 hover:text-white hover:bg-purple-800 text-white  sm:text-12'>
                Hire me!
            </button>
        </div>
    );
}
