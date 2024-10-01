import Image from 'next/image'
import React from 'react'

export const Deliciousness = () => {
    return (
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


    )
}
