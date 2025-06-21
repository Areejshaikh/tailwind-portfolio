'use client'
import Button from "@/app/components/button";
import TransitionOptions from "../hero/image";
import Link from "next/link";
function About() {
    return (
        <div id="about" className="max-w-screen-2xl w-full  mx-auto my-48">
            <div className="w-full border h-2 bg-base-text"></div>

            {/* top side */}
            <div className="justify-center flex mx-auto py-12 w-200 h-200">
                <TransitionOptions/>
            </div>
            {/* buttom side */}
            <div className="">
                <span className="justify-center flex mx-auto text-base-text font-bold text-5xl mb-8 ">About Me</span>

                <p className='justify-center flex mx-auto text-center mt-4 text-lg w-3/4 text-base-text'>
                    This is the about page of our application. 
                    Here you can find information about our team, mission, and values.
                    We are dedicated to providing the best service possible and ensuring customer satisfaction.
                    Our team is composed of experienced professionals who are passionate about their work.
                    </p>

                <Link href='#services' className="justify-center flex mx-auto mt-8">
                    <Button  name="Read More" icon />
                    </Link>

            </div>




        </div>
    )
}

export default About
