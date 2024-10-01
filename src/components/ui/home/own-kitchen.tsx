import Image from 'next/image'
import React from 'react'

export const Kitchen = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 pr-10 pl-10'>
            <div className='flex flex-col justify-center space-y-8 text-left pl-10'>
                <h1 className='font-bold text-4xl text-black'>Everyone can be a <br /> chef in their own kitchen</h1>
                <p className='text-black text-wrap'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button className='w-[150px] p-3 mt-10 border rounded-xl bg-black text-white'>Learn More</button>
            </div>

            <div className='relative bg-gradient-to-t from-[#E7F9FD] to-transparent rounded-3xl'>
                <Image
                    src="/Images/portrait-happy-male-chef-dressed-uniform 1.png"
                    alt="icon 1"
                    width={710}
                    height={300}
                    priority
                    className="opacity-100"
                />

                <Image
                    src="/Images/image 21.png"
                    alt="icon 1"
                    width={80}
                    height={80}
                    priority
                    className="opacity-100 absolute top-[30px] md:top-[70px] left-[50px]"
                />

                <Image
                    src="/Images/image 28.png"
                    alt="icon 1"
                    width={50}
                    height={50}
                    priority
                    className="opacity-100 absolute top-[70px] left-[300px] md:left-[430px]"
                />

                <Image
                    src="/Images/image 20.png"
                    alt="icon 1"
                    width={80}
                    height={80}
                    priority
                    className="opacity-100 absolute top-[150px] left-[350px] md:left-[490px]"
                />

                <Image
                    src="/Images/image 27.png"
                    alt="icon 1"
                    width={50}
                    height={50}
                    priority
                    className="opacity-100 absolute top-[250px] md:top-[390px] -left-[20px]"
                />
            </div>
        </div>
    )
}
