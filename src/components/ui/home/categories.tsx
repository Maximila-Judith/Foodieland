import Image from 'next/image'
import React from 'react'

export const Categories = () => {
    return (
        <div className='w-full flex flex-col justify-center gap-y-20 mt-20 p-10'>
            <div className='flex flex-row items-center justify-between pr-5 pl-2'>
                <h1 className='font-bold text-4xl text-black'>Categories</h1>
                <button className='flex flex-rows items-center space-x-4 p-3 capitalize rounded-xl bg-[#E7F9FD] text-black'>
                    View all categories
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5'>
                <div className='flex flex-col items-center space-y-8 bg-gradient-to-t from-gray-50 to-transparent pl-8 pr-8 pb-5 rounded-2xl'>
                    <Image
                        src="/Images/image 25.png"
                        alt="icon 1"
                        width={100}
                        height={100}
                        priority
                        className="opacity-100"
                    />
                    <h3 className='text-extrabold text-black text-md'>Breakfast</h3>
                </div>

                <div className='flex flex-col items-center space-y-8 bg-gradient-to-t from-slate-50 to-transparent pl-8 pr-8 pb-5 rounded-2xl'>
                    <Image
                        src="/Images/image 20.png"
                        alt="icon 1"
                        width={100}
                        height={100}
                        priority
                        className="opacity-100 z-30"
                    />
                    <h3 className='text-semibold text-black text-md'>Breakfast</h3>
                </div>

                <div className='flex flex-col items-center space-y-8 bg-gradient-to-t from-rose-50 to-transparent pl-8 pr-8 pb-5 rounded-2xl'>
                    <Image
                        src="/Images/image 21.png"
                        alt="icon 1"
                        width={100}
                        height={100}
                        priority
                        className="opacity-100 z-30"
                    />
                    <h3 className='text-semibold text-black text-md'>Breakfast</h3>
                </div>

                <div className='flex flex-col items-center space-y-10 bg-gradient-to-t from-amber-50 to-transparent pl-8 pr-8 pb-5 rounded-2xl'>
                    <Image
                        src="/Images/image 22.png"
                        alt="icon 1"
                        width={100}
                        height={100}
                        priority
                        className="opacity-100 z-30"
                    />
                    <h3 className='text-semibold text-black text-md'>Breakfast</h3>
                </div>

                <div className='flex flex-col items-center space-y-10 space-y-8 bg-gradient-to-t from-gray-50 to-transparent pl-8 pr-8 pb-5 rounded-2xl'>
                    <Image
                        src="/Images/image 23.png"
                        alt="icon 1"
                        width={100}
                        height={100}
                        priority
                        className="opacity-100 z-30"
                    />
                    <h3 className='text-semibold text-black text-md'>Breakfast</h3>
                </div>

                <div className='flex flex-col items-center space-y-10 space-y-8 bg-gradient-to-t from-gray-50 to-transparent pl-8 pr-8 pb-5 rounded-2xl'>
                    <Image
                        src="/Images/image 24.png"
                        alt="icon 1"
                        width={100}
                        height={100}
                        priority
                        className="opacity-100 z-30"
                    />
                    <h3 className='text-semibold text-black text-md'>Breakfast</h3>
                </div>

            </div>
        </div>
    )
}

