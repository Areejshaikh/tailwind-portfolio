function Contact() {
    return (
        <section id="contect" className="bg-purple-900 body-font z-auto text-white overflow-hidden">
            <div className="container  mx-auto flex sm:flex-nowrap flex-wrap">
                <div className=" bg-purple-950 sm:w-auto lg:w-2/3 md:w-1/2  items-end flex flex-wrap mt-8  md:mr-10 md:p-10  rounded-lg relative">

                    <div className="absolute inset-0 hidden md:block">
                        <h3 className="lg:text-4xl lg:m-12 m-4">Lets Work Together</h3>
                        <p className="lg:m-12 text-lg leading-relaxed m-4">
                            I design and code beautifully simple things and i love what i do. Just simple like that!
                        </p>
                    </div>
                    <div className="bg-purple-700  flex flex-wrap md:py-8 md:p-0 p-2 md:mr-12 lg:py-12  rounded shadow-md  ">
                        <div className="w-full lg:w-1/2 md:px-8">
                            <h2 className="title-font font-semibold text-white tracking-widest text-lg">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Photo booth tattooed prism, portland taiyaki hoodie neutra
                                typewriter
                            </p>
                        </div>
                        <div className="lg:w-1/2 md:px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-lg">
                                EMAIL
                            </h2>
                            <a className="text-purple-500 leading-relaxed text-lg">example@email.com</a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-lg mt-4">
                                PHONE NUMBER
                            </h2>
                            <p className="leading-relaxed text-lg">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 md:p-0 p-2 bg-purple-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white text-lg mb-1 font-medium title-font">
                        Feedback
                    </h2>
                    <p className="leading-relaxed mb-5 text-white">
                        Post-ironic portland shabby chic echo park, banjo fashion axe
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            defaultValue={""}
                        />
                    </div>
                    <button className="border-white text-white hover:bg-white hover:text-purple-800 border py-2 px-6 focus:outline-none  rounded text-lg">
                        Submit
                    </button>
                    <p className="text-xs text-white mt-3">
                        Chicharrones blog helvetica normcore iceland tousled brook viral
                        artisan.
                    </p>
                </div>
            </div>
        </section>



    )
}

export default Contact