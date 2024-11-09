import Image from "next/image"
import Link from "next/link"
import Image1 from "../../../../public/project one.jpg"
import Image2 from "../../../../public/project two.webp"
import Image3 from "../../../../public/project three.jpg"
import Image4 from "../../../../public/project four.webp"


function Work() {
    return (
        <div id="works" className="bg-purple-950 py-12 max-w-full">
            {/* Heading */}
            <div className="m-auto pb-12 flex flex-row  justify-center">
                <span className="text-3xl font-semibold text-purple-200 pt-24  xl:text-4xl 2xl:text-6xl">My Resent Works</span>
            </div>
            {/* Navber */}
            <div className="rounded-full bg-gray-900 ml-2 2xl:w-96">
                <ul className="flex gap-4 justify-center px-auto py-4 ">
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-purple-800 hover:p-1  hover:rounded-full">All</Link>
                    </li>
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-purple-800 hover:p-1  hover:rounded-full">Apps</Link>
                    </li>
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-purple-800 hover:p-1  hover:rounded-full">Branding</Link>
                    </li>
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-purple-800 hover:p-1  hover:rounded-full">UI/UX</Link>
                    </li>
                </ul>
            </div>

            {/* Box Start  */}


            <div className="flex flex-wrap justify-around">
                {/* Box one */}
                <div className="my-8 xl:my-48  border rounded-xl w-full sm:w-64 md:w-72 lg:w-80 
                xl:w-[45%]  h-56  bg-gray-900 hover:bg-purple-700 text-white 
                transition duration-300 ease-in-out">
                    <Image
                        src={Image1}
                        alt="Description of project 2"
                        width={400}
                        height={700}
                        className="w-full h-40 rounded-xl mt-4 xl:w-[100%] xl:h-[120%]" />
                    <h3
                        className="text-center my-12 mt-4 text-white text-lg font-semibold">
                        Project 1 Title
                    </h3>
                </div>
 
                {/* Box two */}
                <div className="my-8 xl:my-48 border rounded-xl w-full sm:w-64 md:w-72 lg:w-80 
                xl:w-[45%]  h-56  bg-gray-900 hover:bg-purple-700 text-white 
                transition duration-300 ease-in-out">
                    <Image
                        src={Image2}
                        alt="Description of project 2"
                        width={400}
                        height={700}
                        className="w-full h-40 rounded-xl mt-4 xl:w-[100%] xl:h-[120%]" />
                    <h3
                        className="text-center my-12 mt-4  text-white text-lg font-semibold">
                        Project 2 Title
                    </h3>
                </div>

                {/* box third */}
                <div className="my-8 xl:mb-48  border rounded-xl w-full sm:w-64 md:w-72 lg:w-80 
                xl:w-[45%] h-56  bg-gray-900 hover:bg-purple-700 text-white 
                transition duration-300 ease-in-out">
                    <Image
                        src={Image3}
                        alt="Description of project 2"
                        width={400}
                        height={700}
                        className="w-full h-40 rounded-xl mt-4 xl:w-[100%] xl:h-[120%]" />
                    <h3
                        className="text-center my-12 mt-4 text-white text-lg font-semibold">
                        Project 3 Title
                    </h3>
                </div>

                {/* Box fourth */}
                <div className="my-8 xl:mb-48 border rounded-xl w-full h-56 sm:w-64 md:w-72 lg:w-80 
                xl:w-[45%] bg-gray-900 hover:bg-purple-700 text-white 
                transition duration-300 ease-in-out">
                    <Image
                        src={Image4}
                        alt="Description of project 2"
                        width={400}
                        height={700}
                        className=" rounded-xl mt-4 xl:w-[100%] xl:h-[120%]" />
                    <h3
                        className="text-center my-12 mt-4  text-white text-lg font-semibold">
                        Project 4 Title
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Work