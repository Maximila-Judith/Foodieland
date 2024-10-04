import Image from 'next/image'
import React from 'react'

export const Delicious = () => {
    return (
        <div className='flex flex-col items-center w-full 3xl:mt-80 mt-20 gap-y-10'>

            <div className='grid grid-cols-1 md:grid-cols-2 3xl:w-full justify-between items-center gap-10 md:gap-80'>
                <div className='font-bold text-4xl text-black 3xl:text-9xl '>Try this delicious recipe <br /> to make your day</div>
                <div className='text-sm text-gray-500 3xl:text-right 3xl:text-5xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqut enim ad minim </div>
            </div>

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

                <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] 3xl:top-[80px] 3xl:left-[800px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/image 26 (4).png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl 3xl:rounded-[80px] w-full"
                    />
                    <h1 className='text-black text-xl text-bold 3xl:text-6xl'>Rainbow Chicken Salad with Almond Honey Mustard Dressing </h1>
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
                        src="/Images/image 26 (5).png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl 3xl:rounded-[80px] w-full"
                    />
                    <h1 className='text-black text-xl text-bold 3xl:text-6xl'>Barbeque Spicy Sandwiches with Chips  </h1>
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
                            <span className=' 3xl:text-4xl'>Snack</span>
                        </button>
                    </div>
                </div>

                <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] 3xl:top-[80px] 3xl:left-[800px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/image 26 (6).png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl 3xl:rounded-[80px] w-full"
                    />
                    <h1 className='text-black text-xl text-bold 3xl:text-6xl'>Firecracker Vegan Lettuce Wraps - Spicy!  </h1>
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
                            <span className=' 3xl:text-4xl'>Seafood</span>
                        </button>
                    </div>
                </div>

                <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] 3xl:top-[80px] 3xl:left-[800px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/image 26 (7).png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl 3xl:rounded-[80px] w-full"
                    />
                    <h1 className='text-black text-xl text-bold 3xl:text-6xl'>Chicken Ramen Soup with Mushroom  </h1>
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
                            <span className=' 3xl:text-4xl'>Japanese</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
