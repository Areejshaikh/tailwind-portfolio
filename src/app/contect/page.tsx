import Link from "next/link"

function Contact() {
    return (
        <section id="contact" className="bg-base-color body-font z-auto text-base-text overflow-hidden">
            <div className="container  mx-auto flex sm:flex-nowrap flex-wrap">
                <div className=" bg-base-color shadow-2xl sm:w-auto lg:w-2/3 md:w-1/2  items-end flex flex-wrap mt-8  md:mr-10 md:p-10  rounded-lg relative">

                    <div className="absolute inset-0 hidden md:block">
                        <h3 className="lg:text-4xl lg:m-12 m-4">Lets Work Together</h3>
                        <p className="lg:m-12 text-lg leading-relaxed m-4">
                        I design and code beautifully simple things code and i love what i do! 
                        </p>
                    </div>
                    <div className="bg-base-color border border-base-text  flex flex-wrap md:py-8 md:p-0 p-2 md:mr-12 lg:py-12  rounded shadow-md  ">
                        <div className="w-full lg:w-1/2 md:px-8">
                            <h2 className="title-font font-semibold text-base-text tracking-widest text-lg">
                                ADDRESS
                            </h2>
                            <p className="mt-1 capitalize">
                            housing society karachi  street no 76, Pakistan
                            </p>
                        </div>
                        <div className="lg:w-1/2 md:px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-base-text tracking-widest text-lg">
                                EMAIL
                            </h2>
                            <Link href={"https://mail.google.com/mail/u/0/#inbox"} target="_blank" className="text-base-text cursor-pointer leading-relaxed text-lg">areejzaheer@gmail.com</Link>
                            <h2 className="title-font font-semibold text-base-text  tracking-widest text-lg mt-4">
                                PHONE NUMBER
                            </h2>
                            <p className="leading-relaxed text-lg">0317-XXXXXXX</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 md:p-0 p-2 bg-base-color flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-base-text text-lg mb-1 font-medium title-font">
                        Feedback
                    </h2>
                    <p className="leading-relaxed mb-5 text-base-text">
                    Your feedback drives my improvement. Keep sharing your thoughts!
                    </p>
                    <form
                    action="https://formspree.io/f/xanqdpdj"
                    method="POST">
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-base-text">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-base-color rounded-md border border-base-text text-base  py-1 px-3 leading-8"
                        required />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-base-text">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-base-color rounded-md text-base-text py-1 px-3 leading-8 border border-base-text"
                        required/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="subject" className="leading-7 text-sm text-base-text">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full bg-base-color rounded-md border border-base-text text-base-text py-1 px-3 leading-8"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-base-text">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-base-color rounded-md h-32 border border-base-text text-base-text py-1 px-3 leading-6 "
                            defaultValue={""}
                        />
                    </div>
                    
                    <button className="border-base-text w-full rounded-md border text-base-text hover:bg-base-color hover:text-base-text py-2 px-6 text-lg">
                        Submit
                    </button>
                    </form>
                    <p className="text-xs text-base-text mt-3">
                    Thank you for hiring me! I'm excited to work with you.
                    </p>
                </div>
            </div>
        </section>



    )
}

export default Contact