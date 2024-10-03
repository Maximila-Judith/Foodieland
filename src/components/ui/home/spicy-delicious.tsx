import Image from 'next/image'
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

