import Image from 'next/image'
import React from 'react'

export const Blog_post = () => {
    return (
        <div className='mt-10 mb-20 3xl:m-20 justify-center'>

            <div className="relative m-10 gap-y-5 p-10 text-center flex flex-col items-center justify-center overflow-hidden">
                <h2 className="text-5xl font-bold text-black z-10 3xl:text-8xl">Full Guide to Becoming a Professional Chef</h2>

                <p className="text-gray-500 mt-4 text-center mb-8 text-lg z-10 3xl:text-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
                </p>

                <div className='flex flex-rows items-center space-x-5'>
                    <Image
                        src="/Images/Ellipse 2.png"
                        alt="icon 1"
                        width={35}
                        height={35}
                        priority
                        className="opacity-100 3xl:w-[100px]"
                    />

                    <h3 className='font-bold text-sm text-black 3xl:text-4xl'>John Smith</h3>

                    <div className="my-2 md:my-0 md:mx-2">
                        <div className="w-full h-[40px] md:w-px md:h-50 3xl:h-[60px] 3xl:w-[1px] 3xl:bg-black bg-gray-100 md:bg-gray-200"></div>
                    </div>

                    <p className='text-sm text-gray-400 3xl:text-4xl'>15 March 2022</p>
                </div>
            </div>

            <div className="h-[600px] 3xl:h-[1500px] 3xl:w-full bg-cover bg-center bg-[url('/Images/image1.png')] rounded-[40px] m-10 mb-20"></div>

            <div className='grid grid-cols-1 3xl:mt-40 md:grid-cols-5 justify-center m-20'>
                <div className='col-span-4 w-[95%] flex flex-col gap-y-20'>

                    <div className='flex flex-col space-y-4'>
                        <h1 className='text-black font-bold text-[20px] 3xl:text-6xl'>How did you start out in the food industry?</h1>
                        <p className='text-black w-[95%] text-gray-500 text-sm 3xl:text-4xl'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <h1 className='text-black font-bold text-[20px] 3xl:text-6xl'>What do you like most about your job?</h1>
                        <p className='text-black w-[95%] text-gray-500 text-sm 3xl:text-4xl'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>

                    <div className='flex flex-col space-y-8'>
                        <h1 className='text-black font-bold text-[20px] 3xl:text-6xl'>Do you cook at home on your days off?</h1>
                        <Image
                            src="/Images/Rectangle 23.png"
                            alt="icon 1"
                            width={730}
                            height={500}
                            priority
                            className="opacity-100 rounded-3xl 3xl:w-full"
                        />
                        <p className='text-black w-[95%] text-gray-500 text-sm 3xl:text-4xl'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <h1 className='text-black font-bold text-[20px] 3xl:text-6xl'>What would your advice be to young people looking to get their foot in the door?</h1>
                        <p className='text-black w-[95%] text-gray-500 text-sm 3xl:text-4xl'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>

                    <div className='flex items-center justify-center w-full h-70 md:h-40 md:w-[830px] 3xl:w-[95%] bg-gray-200'>
                        <p className='text-left p-8 text-black text-center md:text-left tracking-wide 3xl:text-6xl italic text-3xl'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</p>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <h1 className='text-black font-bold text-[20px] 3xl:text-6xl'>What is the biggest misconception that people have about being a professional chef?</h1>
                        <p className='text-black w-[95%] text-gray-500 text-sm 3xl:text-4xl'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                </div>

                <div className='flex flex-rows gap-x-5 md:flex-col pt-5 items-center md:gap-y-5'>
                    <h1 className='text-black text-sm font-bold 3xl:text-4xl'>SHARE THIS ON:</h1>

                    <div className="flex flex-rows gap-x-5 md:flex-col md:space-y-4 p-2">
                        <a href="#" className="text-black hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </a>
                        <a href="#" className="text-black hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                        </a>
                        <a href="#" className="text-black hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </a>
                    </div>

                </div>
            </div>

            <div className="relative h-[400px] 3xl:mt-60 3xl:h-[800px] bg-[#E7F9FD] rounded-[40px] m-10 mb-20 mt-20 p-10 3xl:space-y-10 text-center flex flex-col items-center justify-center overflow-hidden">
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

            <div className='flex flex-col items-center 3xl:mt-60 3xl:mb-40 mt-20 gap-y-10'>
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
