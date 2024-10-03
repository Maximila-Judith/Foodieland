import Image from 'next/image'
import React from 'react'

export const Simple_tasty = () => {
    return (
        <div className='w-full flex flex-col justify-center gap-y-20 mt-20'>
            <div className='flex flex-col items-center space-y-5'>
                <h1 className='font-bold text-4xl text-center text-black'>Simple and tasty recipes</h1>
                <p className='text-gray-400 text-md text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center'>
                <div className='w-full relative flex flex-col space-y-8 bg-gradient-to-t from-[#E7F9FD] to-transparent pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[620px] z-30 bg-white p-4 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/big.png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl w-full"
                    />
                    <h1 className='text-black text-4xl text-bold'>Big and Juicy Wagyu Beef Cheeseburger</h1>
                    <div className='flex flex-rows items-center space-x-5'>
                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
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

                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100"
                            />
                            <span>Snack</span>
                        </button>
                    </div>
                </div>

                <div className='w-full relative flex flex-col space-y-8 bg-gradient-to-t from-[#E7F9FD] to-transparent pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[620px] z-30 bg-white p-4 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/fresh lime.png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl w-full"
                    />
                    <h1 className='text-black text-4xl text-bold'>Fresh Lime Roasted Salmon with Ginger Sauce</h1>
                    <div className='flex flex-rows items-center space-x-5'>
                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
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

                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100"
                            />
                            <span>Fish</span>
                        </button>
                    </div>
                </div>

                <div className='w-full relative flex flex-col space-y-8 bg-gradient-to-t from-[#E7F9FD] to-transparent pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[620px] z-30 bg-white p-4 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/pancake.png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl w-full"
                    />
                    <h1 className='text-black text-4xl text-bold'>Strawberry Oatmeal Pancake with Honey Syrup</h1>
                    <div className='flex flex-rows items-center space-x-5'>
                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
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

                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100"
                            />
                            <span>Breakfast</span>
                        </button>
                    </div>
                </div>

                <div className='w-full relative flex flex-col space-y-8 bg-gradient-to-t from-[#E7F9FD] to-transparent pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[620px] z-30 bg-white p-4 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/fresh.png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl w-full"
                    />
                    <h1 className='text-black text-4xl text-bold'>Fresh and Healthy Mixed Mayonnaise Salad</h1>
                    <div className='flex flex-rows items-center space-x-5'>
                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
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

                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100"
                            />
                            <span>Healthy</span>
                        </button>
                    </div>
                </div>

                <div className='w-full relative flex flex-col space-y-8 bg-gradient-to-t from-[#E7F9FD] to-transparent pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[620px] z-30 bg-white p-4 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/chicken.png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl w-full"
                    />
                    <h1 className='text-black text-4xl text-bold'>Chicken Meatballs with Cream Cheese</h1>
                    <div className='flex flex-rows items-center space-x-5'>
                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
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

                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100"
                            />
                            <span>Meat</span>
                        </button>
                    </div>
                </div>

                <div className="w-full relative flex flex-col items-center bg-cover bg-center bg-no-repeat pl-4 pr-4 pt-5 mt-5" style={{ backgroundImage: "url('/Images/Mask Group.png')" }}>
                    <h1 className='text-white text-center text-3xl text-bold italic font-lobster'>Don&apos;t forget to eat <br /> healthy food</h1>
                    <Image
                        src="/Images/01.png"
                        alt="icon 1"
                        width={354}
                        height={336}
                        priority
                        className="opacity-100 rounded-xl w-full"
                    />
                    <p className='absolute top-[370px] z-30 text-gray-500 text-lg'>www.foodieland.com</p>
                </div>

                <div className='w-full relative flex flex-col space-y-8 bg-gradient-to-t from-[#E7F9FD] to-transparent pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[620px] z-30 bg-white p-4 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/fruity.png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl w-full"
                    />
                    <h1 className='text-black text-4xl text-bold'>Fruity Pancake with Orange & Blueberry</h1>
                    <div className='flex flex-rows items-center space-x-5'>
                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
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

                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100"
                            />
                            <span>Sweet</span>
                        </button>
                    </div>
                </div>

                <div className='w-full relative flex flex-col space-y-8 bg-gradient-to-t from-[#E7F9FD] to-transparent pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[620px] z-30 bg-white p-4 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/best.png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl w-full"
                    />
                    <h1 className='text-black text-4xl text-bold'>The Best Easy One Pot Chicken and Rice</h1>
                    <div className='flex flex-rows items-center space-x-5'>
                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
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

                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100"
                            />
                            <span>Snack</span>
                        </button>
                    </div>
                </div>

                <div className='w-full relative flex flex-col space-y-8 bg-gradient-to-t from-[#E7F9FD] to-transparent pl-4 pr-4 pb-5 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[620px] z-30 bg-white p-4 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    <Image
                        src="/Images/creamy.png"
                        alt="icon 1"
                        width={368}
                        height={250}
                        priority
                        className="opacity-100 rounded-xl w-full"
                    />
                    <h1 className='text-black text-4xl text-bold'>The Creamiest Creamy Chicken and Bacon Pasta</h1>
                    <div className='flex flex-rows items-center space-x-5'>
                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
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

                        <button className='flex flex-row justify-center items-center space-x-2 text-black'>
                            <Image
                                src="/Icons/ForkKnife.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100"
                            />
                            <span>Noodles</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

