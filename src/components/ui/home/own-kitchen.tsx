import Image from 'next/image'
import React from 'react'

export const Kitchen = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 3xl:mt-80 gap-10 md:gap-20 mt-20 p-4 md:pr-10 md:pl-10'>
            <div className='flex flex-col justify-center 3xl:space-y-20 space-y-8 text-left pl-4 md:pl-10'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl 3xl:text-9xl text-black'>Everyone can be a <br /> chef in their own kitchen</h1>
                <p className='text-black text-sm md:text-base 3xl:text-5xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button className='w-[9.375em] 3xl:p-8 p-2 md:p-3 mt-10 border 3xl:text-6xl 3xl:rounded-3xl rounded-xl bg-black text-white'>Learn More</button>
            </div>

            <div className='relative bg-gradient-to-t from-[#E7F9FD] to-transparent rounded-3xl p-4'>
                <Image
                    src="/Images/portrait-happy-male-chef-dressed-uniform 1.png"
                    alt="icon 1"
                    width={710}
                    height={300}
                    priority
                    className="opacity-100 w-full"
                />

                <Image
                    src="/Images/image 21.png"
                    alt="icon 1"
                    width={80}
                    height={80}
                    priority
                    className="opacity-100 3xl:w-[250px] absolute top-[1.875em] md:top-[4.375em] left-[3.125em] 3xl:top-[12em] 3xl:left-[24em] 3xl:w-[250px]"
                />

                <Image
                    src="/Images/image 28.png"
                    alt="icon 1"
                    width={50}
                    height={50}
                    priority
                    className="opacity-100 absolute top-[4.375em] left-[18.75em] md:left-[26.875em] 3xl:top-[12em] 3xl:left-[80em] 3xl:w-[200px]"
                />

                <Image
                    src="/Images/image 20.png"
                    alt="icon 1"
                    width={80}
                    height={80}
                    priority
                    className="opacity-100 absolute top-[9.375em] left-[21.875em] md:left-[30.625em] 3xl:top-[30em] 3xl:left-[95em] 3xl:w-[250px]"
                />

                <Image
                    src="/Images/image 27.png"
                    alt="icon 1"
                    width={50}
                    height={50}
                    priority
                    className="opacity-100 absolute top-[15.625em] md:top-[24.375em] -left-[1.25em] 3xl:top-[70em]  3xl:w-[200px]"
                />
            </div>
        </div>

    )
}
