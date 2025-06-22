"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Image1 from "../../../public/image1.webp"
import Image2 from "../../../public/image2.jpg"
import Image3 from "../../../public/image3.jpg"

import Button from "../components/button"
import { motion } from 'framer-motion'

const Blog = () => {
    return (
        <div id='blog'>
            <div className="m-auto flex flex-row  justify-center">
                <span className="text-3xl font-semibold text-base-text xl:text-6xl 2xl:text-6xl">Our Blog</span>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-between -m-4">
                        {/* First Blog Star */}
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.8 }}
                            viewport={{ once: true }}
                            className="p-4 md:w-96"
                        >
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                                {/* Rest of card content here */}
                                <div className="p-4 md:w-96">
                                    <div className="h-full overflow-hidden">
                                        <Image
                                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                                            src={Image1}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-base-text mb-1">
                                                JOURNEY
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-base-text mb-3">
                                                My Frontend Journey
                                            </h1>
                                            <p className="leading-relaxed mb-3 text-base-text line-clamp-3">
                                                I started my journey into frontend development out of pure curiosity. Today, I build modern UIs with Next.js and Tailwind CSS. This blog covers how I learned, what mistakes I made, and how you can begin too.
                                            </p>
                                            <div className="flex items-center flex-wrap ">
                                                <Link href={"/"} className="text-base-text inline-flex items-center md:mb-2 lg:mb-0">
                                                    <Button name={"Learn More"} icon={""} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/*Blog End */}
                        {/* second Blog Start */}
                        <motion.div
                            initial={{ opacity: 0, y: 300 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6 }}
                            viewport={{ once: true }}
                            className="p-4 md:w-96"
                        >
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                                {/* Rest of card content here */}
                                <div className="p-4 md:w-96">
                                    <div className="h-full overflow-hidden">
                                        <Image
                                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                                            src={Image2}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-base-text mb-1">
                                                AI + FRONTEND
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-base-text mb-3">
                                                I&apos;m Learning AI Alongside Web Development
                                            </h1>
                                            <p className="leading-relaxed mb-3 text-base-text line-clamp-2">
                                                As a frontend developer, I believe AI is the future. In this post, I talk about how AI and web development go hand in hand — and why I joined the Governor&apos;s AI Program to level up my skills.
                                            </p>


                                            <div className="flex items-center flex-wrap ">
                                                <Link href={"/"} className="text-base-text inline-flex items-center md:mb-2 lg:mb-0">
                                                    <Button name={"Learn More"} icon={""} />

                                                </Link>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                        {/* Third Blog Start */}
                        <motion.div
                            initial={{ opacity: 0, y: 300 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.9 }}
                            viewport={{ once: true }}
                            className="p-4 md:w-96"
                        >
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                                {/* Rest of card content here */}
                                <div className="p-4 md:w-96 ">
                                    <div className="h-full  overflow-hidden">
                                        <Image
                                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                                            src={Image3}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-base-text mb-1">
                                                FREELANCING
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-base-text mb-3">
                                                My First Step Towards Freelancing
                                            </h1>
                                            <p className="leading-relaxed mb-3 text-base-text line-clamp-3">
                                                Freelancing is more than just earning online — it&apos;s about independence and growth. I&apos;m building my profile, learning client communication, and preparing to offer frontend services globally.

                                            </p>
                                            <div className="flex items-center flex-wrap ">
                                                <Link href={"#"} className="text-base-text inline-flex items-center md:mb-2 lg:mb-0">
                                                    <Button name={"Learn More"} icon={""} />

                                                </Link >


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>



                    </div>
                </div>
            </section>



        </div>
    )
}

export default Blog
