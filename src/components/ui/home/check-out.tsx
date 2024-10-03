import Image from 'next/image'
import React from 'react'

export const Checkout = () => {
    return (
        <div className='flex flex-col gap-y-20 bg-gradient-to-t from-[#E7F9FD] to-transparent justify-center mt-20 p-10 pb-40'>
            <div className='flex flex-col items-center space-y-5'>
                <h1 className='font-bold text-4xl text-black'>Check out @foodieland on Instagram</h1>
                <p className='text-gray-400 text-md text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqut enim ad minim </p>
            </div>

            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
                <div className='bg-white'>
                    <div className='flex flex-rows bg-white items-center justify-between p-2'>
                        <div className='flex flex-rows items-center space-x-3'>
                            <Image
                                src="/Images/Oval.png"
                                alt="icon 1"
                                width={40}
                                height={40}
                                priority
                                className="opacity-100"
                            />

                            <div className='flex flex-col space-y-1'>
                                <h3 className='flex flex-row text-sm items-center space-x-2 font-bold text-black'>
                                    Foodieland.
                                    <Image
                                        src="/Images/Shape.png"
                                        alt="icon 1"
                                        width={10}
                                        height={10}
                                        priority
                                        className="opacity-100"
                                    />
                                </h3>
                                <p className='text-sm text-neutral-500'>Tokyo, Japan</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis "><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                    </div>

                    <div>
                        <Image
                            src="/Images/1.png"
                            alt="icon 1"
                            width={290}
                            height={290}
                            priority
                            className="opacity-100"
                        />
                    </div>

                    <div className='flex flex-col space-y-3 items-center pt-3 pr-3 pl-3 pb-4'>
                        <div className='flex flex-row justify-center gap-8 '>
                            <div className='w-1/3 flex flex-row items-center space-x-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>
                            </div>

                            <div className='w-1/3 flex flex-row items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="blue" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                            </div>

                            <Image
                                src="/Icons/Save.svg"
                                alt="icon 1"
                                width={20}
                                height={20}
                                priority
                                className="opacity-100 fill-black "
                            />
                        </div>

                        <div className='flex flex-col space-y-5 text-black'>
                            <div className='flex flex-row items-center space-x-2 pt-4'>
                                <Image
                                    src="/Images/Oval1.png"
                                    alt="icon 1"
                                    width={18}
                                    height={18}
                                    priority
                                    className="opacity-100 rounded-xl"
                                />
                                <p className='text-black text-sm'>Liked by craig_love and 44,686 others</p>
                            </div>
                            <p className='text-sm'>Foodieland. The vegetables dishes need to have certain vitamin for those people</p>
                            <span className='text-gray-400 text-sm '>September 19</span>
                        </div>
                    </div>

                </div>

                <div className='bg-white'>
                    <div className='flex flex-rows bg-white items-center justify-between p-2'>
                        <div className='flex flex-rows items-center space-x-3'>
                            <Image
                                src="/Images/Oval.png"
                                alt="icon 1"
                                width={40}
                                height={40}
                                priority
                                className="opacity-100"
                            />

                            <div className='flex flex-col space-y-1'>
                                <h3 className='flex flex-row text-sm items-center space-x-2 font-bold text-black'>
                                    Foodieland.
                                    <Image
                                        src="/Images/Shape.png"
                                        alt="icon 1"
                                        width={10}
                                        height={10}
                                        priority
                                        className="opacity-100"
                                    />
                                </h3>
                                <p className='text-sm text-neutral-500'>Tokyo, Japan</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis "><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                    </div>

                    <div>
                        <Image
                            src="/Images/1.png"
                            alt="icon 1"
                            width={290}
                            height={290}
                            priority
                            className="opacity-100"
                        />
                    </div>

                    <div className='flex flex-col space-y-3 items-center pt-3 pr-3 pl-3 pb-4'>
                        <div className='flex flex-row justify-center gap-8 '>
                            <div className='w-1/3 flex flex-row items-center space-x-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>
                            </div>

                            <div className='w-1/3 flex flex-row items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="blue" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                            </div>

                            <Image
                                src="/Icons/Save.svg"
                                alt="icon 1"
                                width={20}
                                height={20}
                                priority
                                className="opacity-100 fill-black "
                            />
                        </div>

                        <div className='flex flex-col space-y-5 text-black'>
                            <div className='flex flex-row items-center space-x-2 pt-4'>
                                <Image
                                    src="/Images/Oval1.png"
                                    alt="icon 1"
                                    width={18}
                                    height={18}
                                    priority
                                    className="opacity-100 rounded-xl"
                                />
                                <p className='text-black text-sm'>Liked by craig_love and 44,686 others</p>
                            </div>
                            <p className='text-sm'>Foodieland. The vegetables dishes need to have certain vitamin for those people</p>
                            <span className='text-gray-400 text-sm '>September 19</span>
                        </div>
                    </div>

                </div>

                <div className='bg-white'>
                    <div className='flex flex-rows bg-white items-center justify-between p-2'>
                        <div className='flex flex-rows items-center space-x-3'>
                            <Image
                                src="/Images/Oval.png"
                                alt="icon 1"
                                width={40}
                                height={40}
                                priority
                                className="opacity-100"
                            />

                            <div className='flex flex-col space-y-1'>
                                <h3 className='flex flex-row text-sm items-center space-x-2 font-bold text-black'>
                                    Foodieland.
                                    <Image
                                        src="/Images/Shape.png"
                                        alt="icon 1"
                                        width={10}
                                        height={10}
                                        priority
                                        className="opacity-100"
                                    />
                                </h3>
                                <p className='text-sm text-neutral-500'>Tokyo, Japan</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis "><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                    </div>

                    <div>
                        <Image
                            src="/Images/1.png"
                            alt="icon 1"
                            width={290}
                            height={290}
                            priority
                            className="opacity-100"
                        />
                    </div>

                    <div className='flex flex-col space-y-3 items-center pt-3 pr-3 pl-3 pb-4'>
                        <div className='flex flex-row justify-center gap-8 '>
                            <div className='w-1/3 flex flex-row items-center space-x-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>
                            </div>

                            <div className='w-1/3 flex flex-row items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="blue" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                            </div>

                            <Image
                                src="/Icons/Save.svg"
                                alt="icon 1"
                                width={20}
                                height={20}
                                priority
                                className="opacity-100 fill-black "
                            />
                        </div>

                        <div className='flex flex-col space-y-5 text-black'>
                            <div className='flex flex-row items-center space-x-2 pt-4'>
                                <Image
                                    src="/Images/Oval1.png"
                                    alt="icon 1"
                                    width={18}
                                    height={18}
                                    priority
                                    className="opacity-100 rounded-xl"
                                />
                                <p className='text-black text-sm'>Liked by craig_love and 44,686 others</p>
                            </div>
                            <p className='text-sm'>Foodieland. The vegetables dishes need to have certain vitamin for those people</p>
                            <span className='text-gray-400 text-sm '>September 19</span>
                        </div>
                    </div>

                </div>

                <div className='bg-white'>
                    <div className='flex flex-rows bg-white items-center justify-between p-2'>
                        <div className='flex flex-rows items-center space-x-3'>
                            <Image
                                src="/Images/Oval.png"
                                alt="icon 1"
                                width={40}
                                height={40}
                                priority
                                className="opacity-100"
                            />

                            <div className='flex flex-col space-y-1'>
                                <h3 className='flex flex-row text-sm items-center space-x-2 font-bold text-black'>
                                    Foodieland.
                                    <Image
                                        src="/Images/Shape.png"
                                        alt="icon 1"
                                        width={10}
                                        height={10}
                                        priority
                                        className="opacity-100"
                                    />
                                </h3>
                                <p className='text-sm text-neutral-500'>Tokyo, Japan</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis "><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                    </div>

                    <div>
                        <Image
                            src="/Images/1.png"
                            alt="icon 1"
                            width={290}
                            height={290}
                            priority
                            className="opacity-100"
                        />
                    </div>

                    <div className='flex flex-col space-y-3 items-center pt-3 pr-3 pl-3 pb-4'>
                        <div className='flex flex-row justify-center gap-8 '>
                            <div className='w-1/3 flex flex-row items-center space-x-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>
                            </div>

                            <div className='w-1/3 flex flex-row items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="blue" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot rounded-full"><circle cx="12.1" cy="12.1" r="1" /></svg>
                            </div>

                            <Image
                                src="/Icons/Save.svg"
                                alt="icon 1"
                                width={20}
                                height={20}
                                priority
                                className="opacity-100 fill-black "
                            />
                        </div>

                        <div className='flex flex-col space-y-5 text-black'>
                            <div className='flex flex-row items-center space-x-2 pt-4'>
                                <Image
                                    src="/Images/Oval1.png"
                                    alt="icon 1"
                                    width={18}
                                    height={18}
                                    priority
                                    className="opacity-100 rounded-xl"
                                />
                                <p className='text-black text-sm'>Liked by craig_love and 44,686 others</p>
                            </div>
                            <p className='text-sm'>Foodieland. The vegetables dishes need to have certain vitamin for those people</p>
                            <span className='text-gray-400 text-sm '>September 19</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex justify-center'>
                <button className='flex flex-rows w-[200px] justify-center items-center space-x-3 p-4 border rounded-2xl bg-black text-white'>
                    <p className='text-sm'>Visit Our Instagram</p>
                    <a href="#" className="text-black hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                </button>
            </div>

        </div>
    )
}
