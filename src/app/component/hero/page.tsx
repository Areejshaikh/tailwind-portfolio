"use client"
import Image from "next/image"
import HeroImage from "../../../../public/hero.jpg"
import { GrInstallOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialDribbble } from "react-icons/sl";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
function Hero () {
    return (
    <main className="text-white bg-gray-900 py-24 max-w-full">
        <div className="mx-12 sm:ml-6  pt-6 sm:grid sm:grid-cols-2 gap-0 lg:py-12  xl:ml-24 ">
            <div>
                <span className=" text-purple-300 font-bold text-2xl leading-relaxed translate-x-4 sm:text-1xl xl:text- xl:text-4xl">I am Areej Zaheer</span>

                <h1 className=" text-purple-800 font-bold  text-4xl  sm:text-[1.85rem] sm:leading-8 sm:tracking-tighter md:text- lg:leading-snug lg:text-5xl">Full Stack Web Developer + UI/UX Designer</h1>


                <div className=" right-0 md:justify-between sm:hidden">
                    <Image
                        src={HeroImage}
                        alt="hero"
                        width={200}
                        height={200}
                        className="h-48 w-80 rounded-3xl my-8 sm:w-72 
                        border-2 border-white sm:h-[18rem] m-auto " />
                </div>
                <p
                    className=
                    "text-2xl leading-2 -tracking-tighter  sm:my-6 text-white sm:text-1xl">
                    I break down complex user experience problems to create integrity focussed solutions that connect billions of people
                </p>
                <div className="lg:flex  xl:mt-12 gap-8">
                    <button
                        className='transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-10 hover:bg-purple-800  text-white duration-300
                        leading-3 cursor-pointer flex  pt-4 justify-center sm:text-lg sm:pt-2 2xl:ml-32 xl:mt-2 mt-8 hover:text-white border-white border
                         rounded-3xl p-auto w-56 h-12  sm:text-12 '>
                        Download Cv
                        <GrInstallOption
                            className="mt-0 ml-4 sm:mt-1" />
                    </button>

                    <div className="icons cursor-pointer flex text-white py-2 gap-6 sm:m-2">

                        <Link href="https://www.facebook.com/login.php/"><FaFacebookF
                            className="transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-10 hover:bg-purple-800  hover:text-white duration-300
                            border border-white px-2 py-2 w-10 h-10 font-bold rounded-full active:bg-purple-600 active:*:text-white" /></Link>
                        <Link href="https://www.linkedin.com/feed/"><FaLinkedinIn
                            className="transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-10 hover:bg-purple-800  hover:text-white duration-300
                            border border-white px-2 py-2 w-10 h-10 font-bold rounded-full" />
                        </Link>
                        <Link href="">
                            <SlSocialDribbble
                                className="border border-white px-2 py-2 w-10 h-10 font-bold rounded-full
                                transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-10 hover:bg-purple-800  hover:text-white duration-300" />
                        </Link>
                        <Link href="https://github.com/">
                            <IoLogoGithub
                                className="border border-white px-2 py-2 w-10 h-10 font-bold rounded-full transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-10 hover:bg-purple-800  hover:text-white duration-300" />
                        </Link>

                    </div>
                </div>

            </div>

            <div className="hidden sm:block ">
                <Image
                    src={HeroImage}
                    alt="hero"
                    width={500}
                    height={300}
                    className="h-48 w-44 rounded-3xl my-8 sm:w-72 sm:ml-12 border-2 border-white sm:h-[24rem] 
                    md:w-[90vh] md:mx-6 lg:ml-16 lg:h-[32rem] lg:w-[85vh] xl:ml-36 xl:h-[28rem] xl:w-[65vh]" />
            </div>

        </div>
    </main>

    )
}

export default Hero