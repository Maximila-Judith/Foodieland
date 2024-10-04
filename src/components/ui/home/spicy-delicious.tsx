/* import Image from 'next/image'
import React from 'react'

export const Spicy_delicious = () => {
    return (
        <div className='w-full h-full flex flex-row justify-center pl-10 '>
            <div className='w-1/2 bg-[#E7F9FD] border border-[#E7F9FD] rounded-l-[40px] relative flex flex-col md:flex-rows gap-y-8 pt-10 pb-10 pl-10 pr-5'>
                <button className='flex flex-row items-center space-x-2 bg-white text-black border border-white rounded-full w-[150px] p-2 text-black mt-2'>
                    <Image
                        src="/Images/image 14.png"
                        alt="icon 1"
                        width={24}
                        height={24}
                        priority
                        className="opacity-100"
                    />
                    <span>Hot Recipes</span>
                </button>

                <div className='flex flex-col gap-y-6'>
                    <h1 className='text-7xl text-black text-bold'>Spicy delicious chicken wings</h1>

                    <p className='text-gary-300 text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>

                    <div className='flex flex-rows items-center space-x-5'>
                        <button className='flex flex-row justify-center items-center space-x-2 text-black border border-slate-300 rounded-full w-[139px] p-2 bg-slate-300 text-black'>
                            <Image
                                src="/Icons/Timer.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100"
                            />
                            <span>30 Minutes</span>
                        </button>

                        <button className='flex flex-row justify-center items-center space-x-2 text-black border border-slate-300 rounded-full w-[139px] p-2 bg-slate-300 text-black'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100"
                            />
                            <span>Chicken</span>
                        </button>
                    </div>
                </div>

                <div className='flex flex-rows items-center justify-between mt-10'>
                    <div className='flex flex-rows items-center space-x-3'>
                        <Image
                            src="/Images/Ellipse 2.png"
                            alt="icon 1"
                            width={50}
                            height={50}
                            priority
                            className="opacity-100"
                        />
                        <div className='flex flex-col space-y-1'>
                            <h3 className='text-bold text-black'>Jonh Smith</h3>
                            <p className='text-md text-gray-400'>15 March 2022</p>
                        </div>
                    </div>

                    <button className='flex flex-rows items-center space-x-4 p-5 border rounded-2xl bg-black text-white'>
                        <p>View Recipes</p>
                        <Image
                            src="/Icons/PlayCircle.svg"
                            alt="icon 1"
                            width={24}
                            height={24}
                            priority
                            className="opacity-100"
                        />
                    </button>
                </div>
            </div>

            <div className='w-1/2'>
                <Image
                    src="/Images/Badge.png"
                    alt="icon 1"
                    width={150}
                    height={150}
                    priority
                    className="opacity-100 absolute top-[198px] right-[590px] z-30"
                />
                <Image
                    src="/Images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png"
                    alt="icon 1"
                    width={660}
                    height={638}
                    priority
                    className="opacity-100 rounded-r-[40px]"
                />
            </div>
        </div>
    )
}

 */


import Image from 'next/image'
import React from 'react'

export const Spicy_delicious = () => {
    return (
        <div className='w-full max-w-screen-8xl mx-auto h-full flex flex-col lg:flex-row justify-center lg:pl-10 p-5'>

            <div className='w-full lg:w-1/2 8xl:w-full bg-[#E7F9FD] 3xl:gap-y-40 border border-[#E7F9FD] rounded-l-[40px] relative flex flex-col gap-y-8 pt-10 pb-10 pl-5 pr-5 md:pl-10 md:pr-5'>
                <button className='flex flex-row items-center space-x-2 3xl:space-x-6 bg-white text-black border border-white rounded-full w-[150px] 3xl:w-[600px] 3xl:p-8 p-2 mt-2 text-[0.875em]'>
                    <Image
                        src="/Images/image 14.png"
                        alt="icon 1"
                        width={24}
                        height={24}
                        priority
                        className="opacity-100 3xl:w-[100px]"
                    />
                    <span className='3xl:text-7xl'>Hot Recipes</span>
                </button>

                <div className='flex flex-col 3xl:gap-y-40 gap-y-6 '>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-[200px] text-black font-bold'>
                        Spicy delicious chicken wings
                    </h1>

                    <p className='text-gray-500 text-sm 3xl:text-[40px] 3xl:tracking-wider md:text-base lg:text-lg'>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className='flex flex-row items-center space-x-5'>
                        <button className='flex flex-row justify-center items-center 3xl:w-[600px] 3xl:p-8 3xl:space-x-6 space-x-2 text-black border border-slate-300 rounded-full w-[110px] md:w-[139px] p-2 bg-slate-300 text-[0.875em]'>
                            <Image
                                src="/Icons/Timer.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100 3xl:w-[100px]"
                            />
                            <span className='3xl:text-7xl'>30 Minutes</span>
                        </button>

                        <button className='flex flex-row justify-center items-center 3xl:w-[600px] 3xl:p-8 3xl:space-x-6 space-x-2 text-black border border-slate-300 rounded-full w-[110px] md:w-[139px] p-2 bg-slate-300 text-[0.875em]'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100 3xl:w-[100px]"
                            />
                            <span className='3xl:text-7xl'>Chicken</span>
                        </button>
                    </div>
                </div>

                <div className='flex flex-row items-center justify-between mt-10'>
                    <div className='flex flex-row items-center space-x-3 3xl:space-x-10'>
                        <Image
                            src="/Images/Ellipse 2.png"
                            alt="icon 1"
                            width={50}
                            height={50}
                            priority
                            className="opacity-100 3xl:w-[200px]"
                        />
                        <div className='flex flex-col space-y-1'>
                            <h3 className='font-bold text-black 3xl:text-6xl '>Jonh Smith</h3>
                            <p className='text-md text-gray-400 3xl:text-5xl'>15 March 2022</p>
                        </div>
                    </div>

                    <button className='flex flex-row items-center 3xl:w-[600px] 3xl:p-8 3xl:space-x-6 space-x-4 p-5 border rounded-2xl bg-black text-white'>
                        <p className='3xl:text-6xl'>View Recipes</p>
                        <Image
                            src="/Icons/PlayCircle.svg"
                            alt="icon 1"
                            width={24}
                            height={24}
                            priority
                            className="opacity-100 3xl:w-[100px]"
                        />
                    </button>
                </div>
            </div>


            <div className='w-full lg:w-1/2 8xl:w-full flex items-center justify-center relative mt-5 lg:mt-0'>
                <Image
                    src="/Images/Badge.png"
                    alt="icon 1"
                    width={100}
                    height={100}
                    priority
                    className="opacity-100 absolute 3xl:w-[550px] 3xl:top-[150px] 3xl:right-[1550px] lg:top-[198px] lg:right-[90px] z-30"
                />
                <Image
                    src="/Images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png"
                    alt="icon 1"
                    width={660}
                    height={638}
                    priority
                    className="opacity-100 rounded-r-[40px] w-full h-auto max-w-8xl"
                />
            </div>
        </div>
    )
}
