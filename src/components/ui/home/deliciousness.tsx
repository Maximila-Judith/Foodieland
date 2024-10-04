import Image from 'next/image'
import React from 'react'

export const Deliciousness = () => {
    return (
        <div className="relative h-[400px] 3xl:h-[800px] 3xl:mt-80 bg-[#E7F9FD] rounded-[40px] m-10 mb-20 mt-20 p-10 3xl:space-y-10 text-center flex flex-col items-center justify-center overflow-hidden">
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


    )
}
