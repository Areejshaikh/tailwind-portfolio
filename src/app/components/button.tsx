interface ButtonProps {
    name: string;
    icon: React.ReactNode;
}

const Button = ({ name ,icon}: ButtonProps) => {
    return (
        <div>
            <button
                className=' hover:bg-base-text text-base-text duration-500 animate-fadeIn animate-slideInRight md:animate-slideInLeft
                        leading-3 cursor-pointer flex  py-4 justify-center sm:text-lg sm:pt-2 2xl:ml-32 xl:mt-2 my-8 hover:shadow-2xl hover:text-base-heading border-base-text border
                         rounded-3xl p-auto w-60 h-12  sm:text-12 '>
               {name}
                {/* {icon ? icon : <GrInstallOption className='w-6 h-6 ml-2' />} */}
                {icon}
            </button>

        </div>
    )
}

export default Button
