import Image from 'next/image'
import React from 'react'

export const Blog = () => {
    return (
        <div className='justify-center'>

            <div className="relative m-10 gap-y-5 p-10 text-center flex flex-col items-center justify-center overflow-hidden">
                <h2 className="text-5xl font-bold text-black z-10 3xl:text-9xl">Blog & Article</h2>
                <p className="text-gray-500 mt-4 text-center mb-8 3xl:text-6xl text-lg z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
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

            <div className='grid grid-cols-1 3xl:mt-40 3xl:m-40 md:grid-cols-3 justify-center m-10'>
                <div className='col-span-2 flex flex-col gap-y-5'>
                    <div className='grid grid-rows-3 gap-8 3xl:w-[90%] w-[95%]'>
                        <div className='flex flex-col md:flex-row md:items-center space-y-5 md:space-x-10'>
                            <Image
                                src="/Images/image 26 (7).png"
                                alt="icon 1"
                                width={250}
                                height={100}
                                priority
                                className="opacity-100 rounded-2xl 3xl:w-[1500px]"
                            />
                            <div className='flex flex-col space-y-4'>
                                <a href='/blog_post' className='font-semibold text-[18px] text-black 3xl:text-[100px]'>Crochet Projects for Noodle Lovers</a>
                                <p className='text-sm text-gray-400 3xl:text-4xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                                <div className='flex flex-rows items-center space-x-5'>
                                    <Image
                                        src="/Images/Ellipse 1.png"
                                        alt="icon 1"
                                        width={35}
                                        height={35}
                                        priority
                                        className="opacity-100 3xl:w-[100px]"
                                    />

                                    <h3 className='font-bold text-sm text-black 3xl:text-4xl'>Wade Warren</h3>

                                    <div className="my-2 md:my-0 md:mx-2">
                                        <div className="w-full h-[40px] 3xl:h-20 3xl:bg-black md:w-px md:h-50 bg-gray-100 md:bg-gray-200"></div>
                                    </div>

                                    <p className='text-sm text-gray-400 3xl:text-4xl'>12 Novembre 2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center space-y-5 md:space-x-10'>
                            <Image
                                src="/Images/image 26.png"
                                alt="icon 1"
                                width={250}
                                height={100}
                                priority
                                className="opacity-100 rounded-2xl 3xl:w-[1700px]"
                            />
                            <div className='flex flex-col space-y-4'>
                                <a href='/blog_post' className='font-semibold text-[18px] text-black 3xl:text-[100px]'>10 Vegetarian Recipes To Eat This Month</a>
                                <p className='text-sm text-gray-400 3xl:text-4xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                                <div className='flex flex-rows items-center space-x-5'>
                                    <Image
                                        src="/Images/Ellipse 2 (1).png"
                                        alt="icon 1"
                                        width={35}
                                        height={35}
                                        priority
                                        className="opacity-100 3xl:w-[100px]"
                                    />

                                    <h3 className='font-bold text-sm text-black 3xl:text-4xl'>Robert Fox</h3>

                                    <div className="my-2 md:my-0 md:mx-2">
                                        <div className="w-full h-[40px] 3xl:h-20 3xl:bg-black md:w-px md:h-50 bg-gray-100 md:bg-gray-200"></div>
                                    </div>

                                    <p className='text-sm text-gray-400 3xl:text-4xl'>12 Novembre 2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center space-y-5 md:space-x-10'>
                            <Image
                                src="/Images/image1.png"
                                alt="icon 1"
                                width={250}
                                height={100}
                                priority
                                className="opacity-100 rounded-2xl 3xl:w-[1800px]"
                            />
                            <div className='flex flex-col space-y-4'>
                                <a href='/blog_post' className='font-semibold text-[18px] text-black 3xl:text-[100px]'>Full Guide to Becoming a Professional Chef</a>
                                <p className='text-sm text-gray-400 3xl:text-4xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                                <div className='flex flex-rows items-center space-x-5'>
                                    <Image
                                        src="/Images/Ellipse 2 (2).png"
                                        alt="icon 1"
                                        width={35}
                                        height={35}
                                        priority
                                        className="opacity-100 3xl:w-[100px]"
                                    />

                                    <h3 className='font-bold text-sm text-black 3xl:text-4xl'>Dianne Russell</h3>

                                    <div className="my-2 md:my-0 md:mx-2">
                                        <div className="w-full h-[40px] 3xl:h-20 3xl:bg-black md:w-px md:h-50 bg-gray-100 md:bg-gray-200"></div>
                                    </div>

                                    <p className='text-sm text-gray-400 3xl:text-4xl'>12 Novembre 2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center space-y-5 md:space-x-10'>
                            <Image
                                src="/Images/image 2.png"
                                alt="icon 1"
                                width={250}
                                height={100}
                                priority
                                className="opacity-100 rounded-2xl 3xl:w-[1600px]"
                            />
                            <div className='flex flex-col space-y-4'>
                                <a href='/blog_post' className='font-semibold text-[18px] text-black 3xl:text-[100px]'>Simple & Delicious Vegetarian Lasagna</a>
                                <p className='text-sm text-gray-400 3xl:text-4xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                                <div className='flex flex-rows items-center space-x-5'>
                                    <Image
                                        src="/Images/Ellipse 2 (3).png"
                                        alt="icon 1"
                                        width={35}
                                        height={35}
                                        priority
                                        className="opacity-100 3xl:w-[100px]"
                                    />

                                    <h3 className='font-bold text-sm text-black 3xl:text-4xl'>Leslie Alexander</h3>

                                    <div className="my-2 md:my-0 md:mx-2">
                                        <div className="w-full h-[40px] 3xl:h-20 3xl:bg-black md:w-px md:h-50 bg-gray-100 md:bg-gray-200"></div>
                                    </div>

                                    <p className='text-sm text-gray-400 3xl:text-4xl'>12 Novembre 2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center space-y-5 md:space-x-10'>
                            <Image
                                src="/Images/image 3.png"
                                alt="icon 1"
                                width={250}
                                height={100}
                                priority
                                className="opacity-100 rounded-2xl 3xl:w-[1600px]"
                            />
                            <div className='flex flex-col space-y-4'>
                                <a href='/blog_post' className='font-semibold text-[18px] text-black 3xl:text-[100px]'>Plantain and Pinto Stew with Aji Verde</a>
                                <p className='text-sm text-gray-400 3xl:text-4xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                                <div className='flex flex-rows items-center space-x-5'>
                                    <Image
                                        src="/Images/Ellipse 2 (4).png"
                                        alt="icon 1"
                                        width={35}
                                        height={35}
                                        priority
                                        className="opacity-100 3xl:w-[100px]"
                                    />

                                    <h3 className='font-bold text-sm text-black 3xl:text-4xl'>Courtney Henry</h3>

                                    <div className="my-2 md:my-0 md:mx-2">
                                        <div className="w-full h-[40px] 3xl:h-20 3xl:bg-black md:w-px md:h-50 bg-gray-100 md:bg-gray-200"></div>
                                    </div>

                                    <p className='text-sm text-gray-400 3xl:text-4xl'>12 Novembre 2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center space-y-5 md:space-x-10'>
                            <Image
                                src="/Images/image 4.png"
                                alt="icon 1"
                                width={250}
                                height={100}
                                priority
                                className="opacity-100 rounded-2xl 3xl:w-[1800px]"
                            />
                            <div className='flex flex-col space-y-4'>
                                <a href='/blog_post' className='font-semibold text-[18px] text-black 3xl:text-[100px]'>We&apos;re Hiring a Communications Assistant!</a>
                                <p className='text-sm text-gray-400 3xl:text-4xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                                <div className='flex flex-rows items-center space-x-5'>
                                    <Image
                                        src="/Images/Ellipse 2 (5).png"
                                        alt="icon 1"
                                        width={35}
                                        height={35}
                                        priority
                                        className="opacity-100 3xl:w-[100px]"
                                    />

                                    <h3 className='font-bold text-sm text-black 3xl:text-4xl'>Albert Flores</h3>

                                    <div className="my-2 md:my-0 md:mx-2">
                                        <div className="w-full h-[40px] 3xl:h-20 3xl:bg-black md:w-px md:h-50 bg-gray-100 md:bg-gray-200"></div>
                                    </div>

                                    <p className='text-sm text-gray-400 3xl:text-4xl'>12 Novembre 2021</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col gap-y-5'>
                    <h1 className='text-black text-xl font-bold 3xl:text-6xl '>Tasty Recipe</h1>

                    <div className='grid grid-rows-3 gap-5'>
                        <div className='flex flex-rows items-center 3xl:space-x-8 space-x-3'>
                            <Image
                                src="/Images/chicken.png"
                                alt="icon 1"
                                width={180}
                                height={120}
                                priority
                                className="opacity-100 rounded-2xl 3xl:w-[600px]"
                            />
                            <div className='flex flex-col space-y-1'>
                                <a href='#' className='font-semibold text-[15px] 3xl:text-6xl 3xl:rounded-[100px] text-black'>Chicken Meatball with Creamy Chees...</a>
                                <p className='text-sm text-gray-400 3xl:text-4xl '>By Andreas Paula</p>
                            </div>
                        </div>

                        <div className='flex flex-rows items-center 3xl:space-x-8 space-x-3'>
                            <Image
                                src="/Images/creamy.png"
                                alt="icon 1"
                                width={180}
                                height={120}
                                priority
                                className="opacity-100 rounded-2xl 3xl:w-[600px]"
                            />
                            <div className='flex flex-col space-y-1'>
                                <a className='font-semibold text-[15px] 3xl:text-6xl 3xl:rounded-[100px] text-black'>Chicken Meatball with Creamy Chees...</a>
                                <p className='text-sm text-gray-400 3xl:text-4xl'>By Andreas Paula</p>
                            </div>
                        </div>

                        <div className='flex flex-rows items-center 3xl:space-x-8 space-x-3'>
                            <Image
                                src="/Images/best.png"
                                alt="icon 1"
                                width={180}
                                height={120}
                                priority
                                className="opacity-100 rounded-2xl 3xl:w-[600px]"
                            />
                            <div className='flex flex-col space-y-1'>
                                <h3 className='font-semibold text-[15px] text-black 3xl:text-6xl 3xl:rounded-[100px] '>Chicken Meatball with Creamy Chees...</h3>
                                <p className='text-sm text-gray-400 3xl:text-4xl'>By Andreas Paula</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat pl-4 pr-4 pt-5 mt-5" style={{ backgroundImage: "url('/Images/Mask Group.png')" }}>
                        <h1 className='text-white text-center text-3xl text-bold 3xl:text-6xl italic font-lobster'>Don&apos;t forget to eat <br /> healthy food</h1>
                        <Image
                            src="/Images/01.png"
                            alt="icon 1"
                            width={354}
                            height={336}
                            priority
                            className="opacity-100 rounded-xl 3xl:w-full relative"
                        />
                        <p className='absolute 3xl:top-[1000px] 3xl:text-gray-400 top-[370px] z-30 text-gray-500 3xl:text-6xl text-lg'>www.foodieland.com</p>
                    </div>
                </div>
            </div>

            <nav className="flex justify-center items-center 3xl:mt-60 3xl:w-full gap-x-1 mt-20" aria-label="Pagination">

                <div className="flex items-center gap-x-3 3xl:gap-x-10">
                    <button type="button" className="min-h-[38px] min-w-[38px] 3xl:min-h-[150px] 3xl:min-w-[150px] 3xl:text-6xl 3xl:rounded-2xl flex justify-center items-center py-1 px-3 text-sm rounded-lg disabled:opacity-50 text-white bg-black" aria-current="page">1</button>
                    <button type="button" className="min-h-[38px] min-w-[38px] 3xl:min-h-[150px] 3xl:min-w-[150px] 3xl:text-6xl 3xl:rounded-2xl flex justify-center items-center border border-gray-300 py-1 px-3 text-sm rounded-lg disabled:opacity-50 text-black font-bold hover:bg-gray hover:opacity-50 bg-white" aria-current="page">2</button>
                    <button type="button" className="min-h-[38px] min-w-[38px] 3xl:min-h-[150px] 3xl:min-w-[150px] 3xl:text-6xl 3xl:rounded-2xl flex justify-center items-center border border-gray-300 py-1 px-3 text-sm rounded-lg disabled:opacity-50 text-black hover:bg-gray hover:opacity-50 font-bold bg-white" aria-current="page">3</button>
                    <button type="button" className="min-h-[38px] min-w-[38px] 3xl:min-h-[150px] 3xl:min-w-[150px] 3xl:text-6xl 3xl:rounded-2xl flex justify-center items-center border border-gray-300 py-1 px-3 text-sm rounded-lg disabled:opacity-50 text-black font-bold hover:bg-gray hover:opacity-50 bg-white" aria-current="page">4</button>
                    <button type="button" className="min-h-[38px] min-w-[38px] 3xl:min-h-[150px] 3xl:min-w-[150px] 3xl:text-6xl 3xl:rounded-2xl flex justify-center items-center border border-gray-300 py-1 px-3 text-sm rounded-lg disabled:opacity-50 text-black font-bold hover:bg-gray hover:opacity-50 bg-white" aria-current="page">5</button>
                    <button type="button" className="min-h-[38px] min-w-[38px] 3xl:min-h-[150px] 3xl:min-w-[150px] 3xl:text-6xl 3xl:rounded-2xl flex justify-center items-center border border-gray-300 py-1 px-3 text-sm rounded-lg disabled:opacity-50 text-black font-bold hover:bg-gray hover:opacity-50 bg-white" aria-current="page">...</button>
                    <button type="button" className="min-h-[38px] min-w-[38px] 3xl:min-h-[150px] 3xl:min-w-[150px] 3xl:text-6xl 3xl:rounded-2xl flex justify-center items-center border border-gray-300 py-1 px-3 text-sm rounded-lg disabled:opacity-50 text-black font-bold hover:bg-gray hover:opacity-50 bg-white" aria-current="page">)</button>
                </div>

            </nav>

            <div className="relative h-[400px] 3xl:m-40 3xl:h-[800px] 3xl:mt-60 3xl:mb-40 bg-[#E7F9FD] rounded-[40px] m-10 mb-20 mt-20 p-10 3xl:space-y-10 text-center flex flex-col items-center justify-center overflow-hidden">
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
        </div>
    )
}
