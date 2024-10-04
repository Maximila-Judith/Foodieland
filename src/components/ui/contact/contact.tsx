import Image from 'next/image'
import React from 'react'

export const Contact = () => {
    return (
        <div className='3xl:flex 3xl:flex-col 3xl:m-20 3xl:gap-y-40'>

            <div className="relative gap-y-5 p-10 text-center 3xl:w-full 3xl:pb-80 3xl:gap-y-50 flex flex-col items-center justify-center overflow-hidden">
                <h2 className="text-5xl font-bold text-black 3xl:text-9xl z-10">Contact us</h2>

                <div className='grid grid-cols-1 gap-y-10 3xl:mt-40 md:grid-cols-4 3xl:grid-cols-4 3xl:justify-center justify-center m-10'>
                    <div className='bg-gradient-to-t flex w-[350px] h-[472px] 3xl:h-[800px] justify-center items-center from-[#E7F9FD] to-transparent rounded-3xl'>
                        <Image
                            src="/Images/Layer 1 1.png"
                            alt="icon 1"
                            width={350}
                            height={472}
                            priority
                            className="opacity-100 flex 3xl:h-[800px] items-center"
                        />
                    </div>

                    <div className='col-span-3 3xl:col-span-3 flex 3xl:h-[200px] flex-col gap-y-5'>
                        <div className="flex flex-col items-center justify-center min-h-screen">
                            <form className="space-y-6 w-full max-w-3xl 3xl:h-full 3xl:justify-center">
                                <div className="grid grid-cols-1 3xl:w-full md:grid-cols-2 gap-6 3xl:flex-row 3xl:items-center 3xl:flex ">
                                    <div className='flex flex-col text-left space-y-3'>
                                        <label htmlFor="text" className='text-black 3xl:text-4xl text-sm uppercase'>Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name..."
                                            className="w-full 3xl:text-4xl 3xl:w-[1000px] 3xl:h-[100px] 3xl:border-gray-800 text-sm border border-gray-300 px-5 py-4 rounded-xl bg-white text-black placeholder-gray-500"
                                        />
                                    </div>

                                    <div className='flex flex-col text-left space-y-3'>
                                        <label htmlFor="text" className='text-black 3xl:text-4xl  text-sm uppercase'>Email address</label>
                                        <input
                                            type="email"
                                            placeholder="Your email address..."
                                            className="w-full 3xl:text-4xl 3xl:w-[1000px] 3xl:h-[100px] 3xl:border-gray-800 text-sm border boder-gray-300 px-5 py-4 rounded-xl bg-white text-black placeholder-gray-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 3xl:flex-row 3xl:items-center 3xl:flex ">
                                    <div className='flex flex-col text-left space-y-3'>
                                        <label htmlFor="text" className='text-black 3xl:text-4xl  text-sm uppercase'>Subject</label>
                                        <input
                                            type="text"
                                            placeholder="Enter subject..."
                                            className="w-full text-sm border 3xl:text-4xl 3xl:w-[1000px] 3xl:h-[100px] 3xl:border-gray-800 boder-gray-300 px-5 py-4 rounded-xl bg-white text-black placeholder-gray-500"
                                        />
                                    </div>

                                    <div className='flex flex-col text-left space-y-3'>
                                        <label htmlFor="text" className='text-black 3xl:text-4xl text-sm uppercase'>Enquiry type</label>
                                        <select name="" id="" className='w-full text-gray-300 text-sm 3xl:text-4xl 3xl:w-[1000px] 3xl:h-[100px] 3xl:border-gray-800 border border-gray-300 px-5 py-4 pr-10 rounded-xl bg-white text-black placeholder-gray-500 appearance-end'>
                                            <option value="" className=''>Advertising</option>
                                            <option value="">Advertising</option>
                                            <option value="">Advertising</option>
                                            <option value="">Advertising</option>
                                        </select>

                                    </div>
                                </div>

                                <div className='flex flex-col text-left space-y-3'>
                                    <label htmlFor="text" className='text-black 3xl:text-4xl text-sm uppercase'>Messages</label>
                                    <textarea placeholder="Enter your messages..." className="w-full 3xl:text-4xl 3xl:w-[2000px] 3xl:h-[300px] 3xl:border-gray-800 h-32 px-4 py-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500"></textarea>
                                </div>

                                <div className='flex justify-start 3xl:pb-80'>
                                    <button className=' w-[200px] text-sm p-4 border rounded-2xl bg-black text-white'>Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <div className="relative h-[400px] 3xl:h-[800px] 3xl:mt-40 bg-[#E7F9FD] rounded-[40px] m-10 mb-20 mt-20 p-10 3xl:space-y-10 text-center flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute bottom-20 left-0 h-1/2">
                    <Image
                        src="/Icons/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.svg"
                        alt="Salad"
                        width={300}
                        height={300}
                        priority
                        className="opacity-100 3xl:w-[500px]"
                    />
                </div>

                <div className="absolute -bottom-10 right-0 h-1/2">
                    <Image
                        src="/Icons/Photo-plate.svg"
                        alt="Plate"
                        width={200}
                        height={200}
                        priority
                        className="opacity-100 3xl:w-[500px]"
                    />
                </div>

                <div className="absolute bottom-0 right-[14%] h-1/2 hidden md:block">
                    <Image
                        src="/Icons/rucola-png.svg"
                        alt="Rucola"
                        width={100}
                        height={100}
                        priority
                        className="opacity-100 3xl:w-[300px]"
                    />
                </div>

                <h2 className="text-4xl font-bold text-black z-10 3xl:text-9xl">Deliciousness to your inbox</h2>
                <p className="text-gray-500 mt-4 text-center mb-8 text-lg z-10 3xl:text-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="relative w-full md:w-1/2 z-10">
                    <input
                        type="email"
                        placeholder="Your email address..."
                        className="w-full 3xl:w-[60%] py-6 3xl:py-14 px-6 3xl:text-4xl rounded-2xl text-gray-700 "
                    />
                    <button className="absolute right-2 top-2 bottom-2 px-8 3xl:right-[400px] 3xl:top-8 3xl:bottom-8 3xl:px-12 3xl:text-4xl bg-black text-white 3xl:rounded-4xl rounded-2xl">
                        Subscribe
                    </button>
                </div>

            </div>

            <div className='flex flex-col items-center 3xl:mt-40 3xl:mb-40 mt-20 gap-y-10'>
                <h1 className='font-bold text-4xl 3xl:text-9xl 3xl:text-9xl items-center justify-center text-black'>You may like these recipe too</h1>

                <div className='grid grid-cols-1 md:grid-cols-4 w-full 3xl:grid-cols-4  gap-3 pl-8 pr-8'>
                    <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] 3xl:top-[80px] 3xl:left-[800px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        <Image
                            src="/Images/image 26.png"
                            alt="icon 1"
                            width={368}
                            height={250}
                            priority
                            className="opacity-100 rounded-xl 3xl:rounded-[80px] w-full"
                        />
                        <h1 className='text-black text-xl text-bold 3xl:text-6xl'>Mixed Tropical Fruit Salad with Superfood Boosts </h1>
                        <div className='flex flex-rows items-center space-x-5'>
                            <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                                <Image
                                    src="/Icons/Timer.svg"
                                    alt="icon 1"
                                    width={24}
                                    height={24}
                                    priority
                                    className="opacity-100 3xl:w-[60px] "
                                />
                                <span className='3xl:text-4xl'>30 Minutes</span>
                            </button>

                            <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                                <Image
                                    src="/Icons/ForkKnife.svg"
                                    alt="icon 1"
                                    width={24}
                                    height={24}
                                    priority
                                    className="opacity-100 3xl:w-[60px] "
                                />
                                <span className=' 3xl:text-4xl'>Healthy</span>
                            </button>
                        </div>
                    </div>

                    <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] 3xl:top-[80px] 3xl:left-[800px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        <Image
                            src="/Images/image 26 (1).png"
                            alt="icon 1"
                            width={368}
                            height={250}
                            priority
                            className="opacity-100 rounded-xl 3xl:rounded-[80px] w-full"
                        />
                        <h1 className='text-black text-xl text-bold 3xl:text-6xl'>Big and Juicy Wagyu Beef Cheeseburger </h1>
                        <div className='flex flex-rows items-center space-x-5'>
                            <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                                <Image
                                    src="/Icons/Timer.svg"
                                    alt="icon 1"
                                    width={24}
                                    height={24}
                                    priority
                                    className="opacity-100 3xl:w-[60px] "
                                />
                                <span className='3xl:text-4xl'>30 Minutes</span>
                            </button>

                            <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                                <Image
                                    src="/Icons/ForkKnife.svg"
                                    alt="icon 1"
                                    width={24}
                                    height={24}
                                    priority
                                    className="opacity-100 3xl:w-[60px] "
                                />
                                <span className=' 3xl:text-4xl'>Western</span>
                            </button>
                        </div>
                    </div>

                    <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] 3xl:top-[80px] 3xl:left-[800px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        <Image
                            src="/Images/image 26 (2).png"
                            alt="icon 1"
                            width={368}
                            height={250}
                            priority
                            className="opacity-100 rounded-xl 3xl:rounded-[80px] w-full"
                        />
                        <h1 className='text-black text-xl text-bold 3xl:text-6xl'>Healthy Japanese Fried Rice with Asparagus </h1>
                        <div className='flex flex-rows items-center space-x-5'>
                            <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                                <Image
                                    src="/Icons/Timer.svg"
                                    alt="icon 1"
                                    width={24}
                                    height={24}
                                    priority
                                    className="opacity-100 3xl:w-[60px] "
                                />
                                <span className='3xl:text-4xl'>30 Minutes</span>
                            </button>

                            <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                                <Image
                                    src="/Icons/ForkKnife.svg"
                                    alt="icon 1"
                                    width={24}
                                    height={24}
                                    priority
                                    className="opacity-100 3xl:w-[60px] "
                                />
                                <span className=' 3xl:text-4xl'>Healthy</span>
                            </button>
                        </div>
                    </div>

                    <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] 3xl:top-[80px] 3xl:left-[800px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        <Image
                            src="/Images/image 26 (3).png"
                            alt="icon 1"
                            width={368}
                            height={250}
                            priority
                            className="opacity-100 rounded-xl 3xl:rounded-[80px] w-full"
                        />
                        <h1 className='text-black text-xl text-bold 3xl:text-6xl'>Cauliflower Walnut Vegetarian Taco Meat</h1>
                        <div className='flex flex-rows items-center space-x-5'>
                            <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                                <Image
                                    src="/Icons/Timer.svg"
                                    alt="icon 1"
                                    width={24}
                                    height={24}
                                    priority
                                    className="opacity-100 3xl:w-[60px] "
                                />
                                <span className='3xl:text-4xl'>30 Minutes</span>
                            </button>

                            <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                                <Image
                                    src="/Icons/ForkKnife.svg"
                                    alt="icon 1"
                                    width={24}
                                    height={24}
                                    priority
                                    className="opacity-100 3xl:w-[60px] "
                                />
                                <span className=' 3xl:text-4xl'>Eastern</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
