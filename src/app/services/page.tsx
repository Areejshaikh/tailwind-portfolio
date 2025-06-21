function Services() {
    return (
        <div id="services" className="bg-base-color text-base-text py-12 ">
            <div className="w-full border h-2 bg-base-text"></div>
            {/* left side Content */}
            <div className="py-10 px-6">
                <h2 className="text-center text-4xl font-bold  xl:text-4xl ">My Quality Services</h2>
                <p className="text-center px-4 text-xl -tracking-wide pt-4 md:pb-12 xl:text-2xl">
                    I provide high-quality, modern, and user-friendly web solutions tailored to your needs. With a strong focus on UI/UX design, web development, and content management, I ensure that every project is responsive, visually appealing, and optimized for the best user experience.
                </p>
            </div>

            {/* box
            */}
            <div className="max-w-full gap-3 my-6 " >
                <div className="line border border-base-text text-base-text  mx-4 "></div>
                {/* First Box */}
                <div className="relative group h-48 lg:ml-12 m-2 rounded-md 
                cursor-pointer sm:mx-6 sm:h-36 overflow-hidden">
                    {/* Sliding background layer */}
                    <div className="absolute inset-0 bg-base-text
                     transform -translate-x-full group-hover:translate-x-0 
                     transition-transform duration-500 ease-out z-0"></div>
                    {/* Content above the background */}
                    <div className="relative z-10 text-base-text
                     hover:text-base-color group-hover:text-white px-6 pt-6">
                        <div className="content flex items-start space-x-4">
                            <span className="text-2xl font-semibold xl:text-4xl">01</span>
                            <h3 className="text-2xl font-bold xl:text-4xl">E-Commerce Solutions</h3>
                        </div>
                        <p className="mt-4 leading-relaxed text-sm sm:text-base">
                            I specialize in developing seamless and high-performing e-commerce solutions that provide a smooth shopping experience for users. By integrating secure payment gateways like Stripe, I ensure that transactions are fast, reliable, and hassle-free.
                        </p>
                    </div>
                </div>

                {/* line */}
                <div className="line border border-base-text hover:text-base-color mx-4"></div>
                {/* 2nd Box */}
                <div className="relative group h-48 lg:ml-12 m-2 rounded-md 
                cursor-pointer sm:mx-6 sm:h-36 overflow-hidden">
                    {/* Sliding background layer */}
                    <div className="absolute inset-0 bg-base-text
                     transform -translate-x-full group-hover:translate-x-0 
                     transition-transform duration-500 ease-out z-0"></div>
                    {/* Content above the background */}
                    <div className="relative z-10 text-base-text
                     hover:text-base-color group-hover:text-white px-6 pt-6">
                        <div className="content flex items-start space-x-4">
                            <span className="text-2xl font-semibold xl:text-4xl">02</span>
                            <h3 className="text-2xl font-bold xl:text-4xl">UI/UX Design</h3>
                        </div>
                        <p className="mt-4 leading-relaxed text-sm sm:text-base">
                            My design approach is always responsive and user-friendly, ensuring a seamless experience across all screen sizes. I utilize modern UI/UX principles to create websites that are not only aesthetically appealing but also intuitive and accessible.
                        </p>
                    </div>
                </div>

                {/* line */}
                <div className="line border border-base-text hover:text-base-color mx-4 "></div>
                {/* 3rd Box */}
                <div className="relative group h-48 lg:ml-12 m-2 rounded-md 
                cursor-pointer sm:mx-6 sm:h-36 overflow-hidden">
                    {/* Sliding background layer */}
                    <div className="absolute inset-0 bg-base-text
                     transform -translate-x-full group-hover:translate-x-0 
                     transition-transform duration-500 ease-out z-0"></div>
                    {/* Content above the background */}
                    <div className="relative z-10 text-base-text
                     hover:text-base-color group-hover:text-white px-6 pt-6">
                        <div className="content flex items-start space-x-4">
                            <span className="text-2xl font-semibold xl:text-4xl">03</span>
                            <h3 className="text-2xl font-bold xl:text-4xl">Sanity Integration</h3>
                        </div>
                        <p className="mt-4 leading-relaxed text-sm sm:text-base">
                            I use Sanity to create easy-to-manage and flexible content structures. My approach ensures a smooth experience, making content dynamic, user-friendly, and simple to update.
                        </p>
                    </div>
                </div>
                {/* line */}
                <div className="line border border-base-text hover:text-base-color  mx-4"></div>
                {/* 4th Box */}
                <div className="relative group h-48 lg:ml-12 m-2 rounded-md 
                cursor-pointer sm:mx-6 sm:h-36 overflow-hidden">
                    {/* Sliding background layer */}
                    <div className="absolute inset-0 bg-base-text
                     transform -translate-x-full group-hover:translate-x-0 
                     transition-transform duration-500 ease-out z-0"></div>
                    {/* Content above the background */}
                    <div className="relative z-10 text-base-text
                     hover:text-base-color group-hover:text-white px-6 pt-6">
                        <div className="content flex items-start space-x-4">
                            <span className="text-2xl font-semibold xl:text-4xl">04</span>
                            <h3 className="text-2xl font-bold xl:text-4xl">Web Development</h3>
                        </div>
                        <p className="mt-4 leading-relaxed text-sm sm:text-base">
                            I specialize in web development, creating fast, responsive, and scalable websites using Next.js and Tailwind CSS. My approach focuses on building high-performance web applications that load quickly, provide a seamless user experience, and adapt flawlessly to all screen sizes.                        </p>
                    </div>
                </div>
                <div className="line border border-base-text hover:text-base-color mx-4"></div>
                {/* 5th Box */}
                <div className="relative group h-48 lg:ml-12 m-2 rounded-md 
                cursor-pointer sm:mx-6 sm:h-36 overflow-hidden">
                    {/* Sliding background layer */}
                    <div className="absolute inset-0 bg-base-text
                     transform -translate-x-full group-hover:translate-x-0 
                     transition-transform duration-500 ease-out z-0"></div>
                    {/* Content above the background */}
                    <div className="relative z-10 text-base-text
                     hover:text-base-color group-hover:text-white px-6 pt-6">
                        <div className="content flex items-start space-x-4">
                            <span className="text-2xl font-semibold xl:text-4xl">05</span>
                            <h3 className="text-2xl font-bold xl:text-4xl">Fully Responsive Designs</h3>
                        </div>
                        <p className="mt-4 leading-relaxed text-sm sm:text-base">
                            I create fully responsive designs that ensure websites work flawlessly on all devices, from desktops to smartphones.</p>
                    </div>
                </div>
                {/* line */}
            </div>
            <div className="line border border-base-text hover:text-base-color mx-4"></div>
        </div>

    )
}

export default Services;
