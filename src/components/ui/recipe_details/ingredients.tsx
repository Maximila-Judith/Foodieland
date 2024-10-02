import Image from 'next/image'
import React, { useState } from 'react'

export const Ingredients = () => {

    const [selected, setSelected] = useState(false);

    const handleRadioChange = () => {
        setSelected(!selected);
    };

    return (

        <div className='mb-20 flex flex-col '>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center m-20'>
                <div className='col-span-2 flex flex-col gap-y-5'>
                    <h1 className='text-black text-2xl font-bold'>Ingredients</h1>
                    <div className='flex flex-col space-y-5'>
                        <h1 className='text-black text-md font-bold'>For main dish</h1>
                        <ul className="w-[95%] flex flex-col gap-y-3 divide-y divide-gray-200 dark:divide-neutral-700">
                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input
                                        type="radio"
                                        name="hs-default-radio"
                                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-gray-600 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-gray-500 dark:checked:border-gray-500 dark:focus:ring-offset-gray-800"
                                        id="hs-default-radio"
                                        onChange={handleRadioChange}
                                        checked={selected}
                                    />
                                    <label
                                        htmlFor="hs-default-radio"
                                        className={`text-sm ms-2 dark:text-neutral-400 ${selected ? "text-black line-through" : "text-gray-500"
                                            }`}
                                    >
                                        Default radio
                                    </label>
                                </div>
                            </li>
                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Lorem ipsum dolor sit amet</label>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Lorem ipsum dolor sit amet</label>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Lorem ipsum dolor sit amet</label>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Lorem ipsum dolor sit amet</label>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Lorem ipsum dolor sit amet</label>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Lorem ipsum dolor sit amet</label>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col space-y-5'>
                        <h1 className='text-black text-md font-bold'>For main dish</h1>
                        <ul className="w-[95%] flex flex-col gap-y-3 divide-y divide-gray-200 dark:divide-neutral-700">
                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Lorem ipsum dolor sit amet</label>
                                </div>
                            </li>
                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Lorem ipsum dolor sit amet</label>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Lorem ipsum dolor sit amet</label>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Default radio</label>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                    <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Lorem ipsum dolor sit amet</label>
                                </div>
                            </li>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-black text-3xl font-bold'>Directions</h1>
                        <ul className="w-[95%] flex flex-col gap-y-10 divide-y divide-gray-200 dark:divide-neutral-700">
                            <div className='flex flex-col space-y-4'>
                                <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                    <div className="flex">
                                        <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                        <label className="flex flex-row items-center space-x-3 text-black text-lg font-bold ms-2">
                                            <p>1.</p>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </label>
                                    </div>
                                </li>
                                <div className='flex flex-col space-y-8'>
                                    <p className='text-gray-500 text-sm'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    <Image
                                        src="/Images/Rectangle 23.png"
                                        alt="icon 1"
                                        width={730}
                                        height={500}
                                        priority
                                        className="opacity-100 rounded-3xl"
                                    />
                                    <p className='text-black text-gray-500 text-sm'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                </div>

                            </div>

                            <div className='flex flex-col space-y-4'>
                                <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                    <div className="flex">
                                        <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                        <label className="flex flex-row items-center space-x-3 text-black text-lg font-bold ms-2">
                                            <p>2.</p>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </label>
                                    </div>
                                </li>
                                <div className='flex flex-col space-y-8'>
                                    <p className='text-black text-gray-500 text-sm'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                </div>

                            </div>

                            <div className='flex flex-col space-y-4'>
                                <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                                    <div className="flex">
                                        <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                                        <label className="flex flex-row items-center space-x-3 text-black text-lg font-bold ms-2">
                                            <p>3.</p>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </label>
                                    </div>
                                </li>
                                <div className='flex flex-col space-y-8'>
                                    <p className='text-black text-gray-500 text-sm'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                </div>

                            </div>

                            <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-black">
                            </li>
                        </ul>
                    </div>

                </div>

                <div className='flex flex-col gap-y-5'>
                    <h1 className='text-black text-xl font-bold'>Other Recipe</h1>

                    <div className='grid grid-rows-3 gap-5'>
                        <div className='flex flex-rows items-center space-x-3'>
                            <Image
                                src="/Images/chicken.png"
                                alt="icon 1"
                                width={180}
                                height={120}
                                priority
                                className="opacity-100 rounded-2xl"
                            />
                            <div className='flex flex-col space-y-1'>
                                <h3 className='font-semibold text-[15px] text-black'>Chicken Meatball with Creamy Chees...</h3>
                                <p className='text-sm text-gray-400'>By Andreas Paula</p>
                            </div>
                        </div>

                        <div className='flex flex-rows items-center space-x-3'>
                            <Image
                                src="/Images/creamy.png"
                                alt="icon 1"
                                width={180}
                                height={120}
                                priority
                                className="opacity-100 rounded-2xl"
                            />
                            <div className='flex flex-col space-y-1'>
                                <h3 className='font-semibold text-[15px] text-black'>Chicken Meatball with Creamy Chees...</h3>
                                <p className='text-sm text-gray-400'>By Andreas Paula</p>
                            </div>
                        </div>

                        <div className='flex flex-rows items-center space-x-3'>
                            <Image
                                src="/Images/best.png"
                                alt="icon 1"
                                width={180}
                                height={120}
                                priority
                                className="opacity-100 rounded-2xl"
                            />
                            <div className='flex flex-col space-y-1'>
                                <h3 className='font-semibold text-[15px] text-black'>Chicken Meatball with Creamy Chees...</h3>
                                <p className='text-sm text-gray-400'>By Andreas Paula</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat pl-4 pr-4 pt-5 mt-5" style={{ backgroundImage: "url('/Images/Mask Group.png')" }}>
                        <h1 className='text-white text-center text-3xl text-bold italic font-lobster'>Don&apos;t forget to eat <br /> healthy food</h1>
                        <Image
                            src="/Images/01.png"
                            alt="icon 1"
                            width={354}
                            height={336}
                            priority
                            className="opacity-100 rounded-xl relative"
                        />
                        <p className='absolute top-[370px] z-30 text-gray-500 text-lg'>www.foodieland.com</p>
                    </div>
                </div>
            </div>

            <div className="relative h-[400px] bg-[#E7F9FD] rounded-[40px] m-10 mb-20 mt-20 p-10 text-center flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute bottom-20 left-0 h-1/2">
                    <Image
                        src="/Icons/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.svg"
                        alt="Salad"
                        width={300}
                        height={300}
                        priority
                        className="opacity-100"
                    />
                </div>

                <div className="absolute -bottom-10 right-0 h-1/2">
                    <Image
                        src="/Icons/Photo-plate.svg"
                        alt="Plate"
                        width={200}
                        height={200}
                        priority
                        className="opacity-100"
                    />
                </div>

                <div className="absolute bottom-0 right-[14%] h-1/2 hidden md:block">
                    <Image
                        src="/Icons/rucola-png.svg"
                        alt="Rucola"
                        width={100}
                        height={100}
                        priority
                        className="opacity-100"
                    />
                </div>

                <h2 className="text-4xl font-bold text-black z-10">Deliciousness to your inbox</h2>
                <p className="text-gray-500 mt-4 text-center mb-8 text-lg z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="relative w-full md:w-1/2 z-10">
                    <input
                        type="email"
                        placeholder="Your email address..."
                        className="w-full py-6 px-6 rounded-2xl text-gray-700 "
                    />
                    <button className="absolute right-2 top-2 bottom-2 px-8 bg-black text-white rounded-2xl">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className='flex flex-col items-center mt-20 gap-y-10'>
                <h1 className='font-bold text-4xl items-center justify-center text-black'>You may like these recipe too</h1>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 pl-8 pr-8'>
                    <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        <Image
                            src="/Images/image 26.png"
                            alt="icon 1"
                            width={368}
                            height={250}
                            priority
                            className="opacity-100 rounded-xl"
                        />
                        <h1 className='text-black text-xl text-bold'>Mixed Tropical Fruit Salad with Superfood Boosts </h1>
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

                    <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        <Image
                            src="/Images/image 26 (1).png"
                            alt="icon 1"
                            width={368}
                            height={250}
                            priority
                            className="opacity-100 rounded-xl"
                        />
                        <h1 className='text-black text-xl text-bold'>Big and Juicy Wagyu Beef Cheeseburger</h1>
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
                                <span>Western</span>
                            </button>
                        </div>
                    </div>

                    <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        <Image
                            src="/Images/image 26 (2).png"
                            alt="icon 1"
                            width={368}
                            height={250}
                            priority
                            className="opacity-100 rounded-xl"
                        />
                        <h1 className='text-black text-xl text-bold'>Healthy Japanese Fried Rice with Asparagus</h1>
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

                    <div className='relative flex flex-col space-y-8 pl-4 pr-4 pb-5 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart absolute top-[50px] left-[240px] z-30 bg-white p-3 rounded-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        <Image
                            src="/Images/image 26 (3).png"
                            alt="icon 1"
                            width={368}
                            height={250}
                            priority
                            className="opacity-100 rounded-xl"
                        />
                        <h1 className='text-black text-xl text-bold'>Cauliflower Walnut Vegetarian Taco Meat</h1>
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
                                <span>Eastern</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
