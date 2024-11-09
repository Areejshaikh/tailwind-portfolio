function Services() {
    return (
        <div id="services" className="bg-gray-800 text-white">
            {/* left side Content */}
            <div className="py-10 px-6">
                <h2 className="text-center text-4xl font-bold  xl:text-4xl ">My Quality Services</h2>
                <p className="text-center px-4 text-xl -tracking-wide pt-4 md:mx-10 md:pb-12 xl:text-2xl xl:mx-40">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>

            {/* box
            */}
            <div className="max-w-full gap-3 my-6 " >
                <div className="line border border-purple-800 text-white mx-4 "></div>

                <div className="w-64 h-48 lg:ml-12 hover:bg-purple-600   my-2 mx-2 rounded-md cursor-pointer sm:w-[135vh] sm:h-36 sm:mx-6 md:flex md:w-[210vh] xl:w-[92%]">
                    <div className="content flex ml-6  md:flex-none md: mt-4">
                        <span className="text-2xl mx-2 my-4 font-semibold xl:text-4xl ">01</span>
                        <h3 className="text-[1.5rem] my-4 font-bold xl:text-4xl">Branding Design</h3>
                    </div>
                    <div>
                        <p className="mx-6 leading-12 -tracking-tighter  md:mt-12  md:ml-28 text-wrap ">
                            Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
                        </p>
                    </div>
                </div>
                {/* line */}
                <div className="line border border-purple-800 text-white mx-4"></div>
                {/* 2nd Box */}
                <div className="w-64 h-48 lg:ml-12 hover:bg-purple-600 my-2 mx-2 rounded-md cursor-pointer sm:w-[135vh] sm:mx-6 sm:h-36 md:flex md:w-[210vh] xl:w-[92%]">
                    <div className="content flex ml-6  md:flex-none md: mt-8">
                        <span className="text-2xl mx-4 my-4 font-semibold xl:text-4xl">02</span>
                        <h3 className="text-2xl my-4 font-bold xl:text-4xl">UI/UX Design</h3>
                    </div>
                    <div>
                        <p className="mx-6 leading-12  -tracking-tighter  md:mt-12  md:ml-40 text-wrap ">
                            Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
                        </p>
                    </div>

                </div>
                {/* line */}
                <div className="line border border-purple-800 text-white mx-4 "></div>
                {/* 3rd Box */}
                <div className="w-64 h-48 lg:ml-12 hover:bg-purple-600  my-2 mx-2 rounded-md cursor-pointer sm:w-[135vh] sm:mx-6 sm:h-36 md:flex md:w-[210vh] xl:w-[92%]">
                    <div className="content flex ml-6  md:flex-none md: mt-8">
                        <span className="text-2xl mx-4 my-4 font-semibold xl:text-4xl ">03</span>
                        <h3 className="text-2xl my-4 font-bold xl:text-4xl" >Web Design</h3>
                    </div>
                    <div>
                        <p className="mx-6 leading-12 -tracking-tighter  md:mt-12  md:ml-48 text-wrap ">
                            Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
                        </p>
                    </div>
                </div>
                {/* line */}

                <div className="line border border-purple-800 text-white mx-4"></div>
                {/* 4th Box */}
                <div className=" w-64 h-48 lg:ml-12 hover:bg-purple-600 my-2 mx-2 rounded-md cursor-pointer sm:w-[135vh] sm:mx-6 sm:h-36 md:flex md:w-[210vh] xl:w-[92%]">
                    <div className="flex ml-6  md:flex-none md: mt-8">
                        <span className="text-2xl mx-4 my-4 font-semibold xl:text-4xl ">04</span>
                        <h3 className="text-2xl my-4 font-bold xl:text-4xl">App Design</h3>
                    </div>
                    <div>
                        <p className="mx-6 leading-12 -tracking-tighter  md:mt-12  md:ml-52 text-wrap ">
                            Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
                        </p>
                    </div>
                </div>
                {/* line */}
            </div>
            <div className="line border border-purple-800 text-white mx-4"></div>

        </div>

    )
}

export default Services;
