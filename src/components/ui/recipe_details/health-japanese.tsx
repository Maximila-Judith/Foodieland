import Image from 'next/image'
import React from 'react'

export const Health_japanese = () => {
    return (
        <div className='mt-20 m-20 3xl:mt-40 3xl:m-20 space-y-10'>

            <div className='flex flex-col space-y-5 md:flex-row md:items-center md:justify-between'>

                <div className='flex flex-col gap-y-10'>
                    <h1 className='font-bold text-4xl 3xl:text-9xl text-black'>Health Japanese Fried Rice</h1>

                    <div className='flex flex-col space-y-5 md:flex-row md:items-center 3xl:gap-x-20 md:space-x-6'>
                        <div className='flex flex-rows items-center 3xl:space-x-8 space-x-3'>
                            <Image
                                src="/Images/Ellipse 2.png"
                                alt="icon 1"
                                width={50}
                                height={50}
                                priority
                                className="opacity-100 3xl:w-[150px]"
                            />
                            <div className='flex flex-col space-y-1'>
                                <h3 className='font-semibold text-[11px] 3xl:text-4xl text-black'>Jonh Smith</h3>
                                <p className='text-sm text-gray-400 3xl:text-4xl'>15 March 2022</p>
                            </div>
                        </div>

                        <div className="my-2 md:my-0 md:mx-2">
                            <div className="w-full h-[40px] 3xl:h-40 3xl:bg-black md:w-px hidden md:block md:h-50 bg-gray-100 md:bg-gray-200"></div>
                        </div>

                        <div className='flex flex-rows items-center space-x-3'>
                            <Image
                                src="/Icons/Timer.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100 3xl:w-[50px]"
                            />
                            <div className='flex flex-col space-y-1'>
                                <h3 className='text-black font-semibold 3xl:text-4xl text-[11px]'>PREP TIME</h3>
                                <p className='text-sm text-gray-400 3xl:text-2xl'>15 Minutes</p>
                            </div>
                        </div>

                        <div className="my-2 md:my-0 md:mx-2">
                            <div className="w-full h-[40px] 3xl:h-40 3xl:bg-black md:w-px hidden md:block md:h-50 bg-gray-100 md:bg-gray-200"></div>
                        </div>

                        <div className='flex flex-rows items-center space-x-3'>
                            <Image
                                src="/Icons/Timer.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100 3xl:w-[50px]"
                            />
                            <div className='flex flex-col space-y-1'>
                                <h3 className='text-black font-semibold 3xl:text-4xl text-[11px]'>COOK TIME</h3>
                                <p className='text-sm text-gray-400 3xl:text-4xl'>15 Minutes</p>
                            </div>
                        </div>

                        <div className="my-2 md:my-0 md:mx-2">
                            <div className="w-full h-[40px] 3xl:h-40 3xl:bg-black md:w-px hidden md:block md:h-50 bg-gray-100 md:bg-gray-200"></div>
                        </div>

                        <div className='flex flex-rows items-center space-x-3'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100 3xl:w-[50px]"
                            />
                            <h3 className='text-bold text-[11px] 3xl:text-4xl text-black'>Chicken</h3>
                        </div>
                    </div>

                </div>

                <div className='flex flex-row 3xl:w-[200px] 3xl:space-x-10 items-center space-x-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-printer bg-[#E7F9FD] p-4 rounded-full"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" /><rect x="6" y="14" width="12" height="8" rx="1" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share bg-[#E7F9FD] p-4 rounded-full"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" x2="12" y1="2" y2="15" /></svg>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 3xl:gap-20 justify-center '>
                <div className='relative col-span-2 3xl:col-span-2'>
                    <Image
                        src="/Images/image.png"
                        alt="icon 1"
                        width={650}
                        height={800}
                        priority
                        className="opacity-100 rounded-3xl 3xl:w-full"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="#181945" stroke="#181945" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play bg-gray-300 p-6 rounded-full absolute top-[90px] left-[130px] md:top-[200px] md:left-[280px] z-30"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                </div>

                <div className='flex flex-col bg-[#E7F9FD] 3xl:space-y-20 p-10 3xl:w-full 3xl:h-full rounded-3xl h-[460px]'>
                    <h1 className='text-md font-bold text-black 3xl:text-8xl'>Nutrition Information</h1>
                    <div className='flex flex-col space-y-5 3xl:space-y-80'>
                        <ul className=" 3xl:w-[1000px] flex flex-col 3xl:space-y-10 3xl:pt-10 divide-y divide-gray-200 dark:divide-neutral-700">
                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex items-center justify-between w-full">
                                    <span className='text-gray-500 3xl:text-6xl text-sm'>Calories</span>
                                    <span className='text-sm 3xl:text-6xl font-bold'>219.9 kcal</span>
                                </div>
                            </li>
                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex items-center justify-between w-full">
                                    <span className='text-gray-500 text-sm 3xl:text-6xl'>Total Fat</span>
                                    <span className='text-sm font-bold 3xl:text-6xl'>10.7 g</span>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex items-center justify-between w-full">
                                    <span className='text-gray-500 text-sm 3xl:text-6xl'>Protein</span>
                                    <span className='text-sm font-bold 3xl:text-6xl'>7.9 g</span>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex items-center justify-between w-full">
                                    <span className='text-gray-500 text-sm 3xl:text-6xl'>Carbohydrate</span>
                                    <span className='text-sm font-bold 3xl:text-6xl'>22.3 g</span>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex items-center justify-between w-full">
                                    <span className='text-gray-500 text-sm 3xl:text-6xl'>Cholesterol</span>
                                    <span className='text-sm font-bold 3xl:text-6xl'>37.4 mg</span>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                            </li>

                        </ul>

                        <p className='text-sm text-gray-500 text-center pt-10 3xl:pt-20 3xl:text-4xl md:pt-20'>adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                </div>
            </div>

            <p className='text-sm text-black text-left pt-2 md:pt-5 3xl:text-5xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
    )
}
