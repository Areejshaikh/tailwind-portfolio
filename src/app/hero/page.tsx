'use client'
import { GrInstallOption } from 'react-icons/gr'

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialDribbble } from "react-icons/sl";
import { IoLogoGithub } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import TransitionOptions from "./image";
import Button from "@/app/components/button";
function Hero() {
    return (
  
            <main className="bg-base-color h-full max-w-screen-2xl w-full grid md:grid-cols-2 grid-cols-1 mx-auto  md:pt-44 pt-28 md:px-12 px-8">
                {/* left Side hero */}
                <div>
                    {/* Define Name */}
                    <span className="text-base-text font-bold text-3xl mb-8">I am Areej Zaheer</span>
                    {/* Define work */}
                    <h1 className=" text-base-text font-bold text-5xl">
                        {/* Type writer Implement  */}
                        Full Stack Web Developer +
                        <Typewriter
                            onInit={(typewriter) => {
                                
                                typewriter.typeString(' UI/UX Designer!')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(7500)
                                    .deleteAll()
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start();
                            }}
                        />
                    </h1>
                    {/* Paragraph */}
                    <p
                        className=
                        "text-2xl leading-2 -tracking-tighter  sm:my-6 text-base-text animate-fadeIn animate-slideInRight md:animate-slideInLeft sm:text-1xl">
                        I break down complex user experience problems to create integrity focussed solutions that connect billions of people
                    </p>
                    <div className="">
                        <Button  name="Download CV" icon=<GrInstallOption className='w-6 h-6 ml-2' />/>
                        {/* Social links */}
                        <div className="icons cursor-pointer flex text-base-text py-2 gap-8 sm:m-2">
                            <Link href="https://www.facebook.com/login.php/">
                                <FaFacebookF
                                    className="transition ease-in-out delay-150  hover:bg-base-text  hover:text-base-color duration-300 border border-base-text px-2 py-2 w-10 h-10 font-bold rounded-full " /></Link>
                            <Link href="https://www.linkedin.com/feed/"><FaLinkedinIn
                                className=" hover:text-base-color hover:bg-base-text duration-300
                            border border-base-text px-2 py-2 w-10 h-10 font-bold rounded-full" />
                            </Link>
                            <Link href="#">
                                <SlSocialDribbble
                                    className="border hover:bg-base-text  hover:text-base-color border-base-text px-2 py-2 w-10 h-10 font-bold rounded-full
                                transition ease-in-out delay-150 duration-300" />
                            </Link>
                            <Link href="https://github.com/">
                                <IoLogoGithub
                                    className="border px-2 py-2 w-10 h-10 font-bold rounded-full transition ease-in-out hover:bg-base-text  hover:text-base-color border-base-text  duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>


                {/* right side */}
                <div className="md:ml-44 ml-0 pb-8 ">
                    <TransitionOptions />
                </div>
            </main>
      

    )
}

export default Hero