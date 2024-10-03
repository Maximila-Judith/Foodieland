'use client'
import { Categories } from "@/components/ui/home/categories";
import { Checkout } from "@/components/ui/home/check-out";
import { Delicious } from "@/components/ui/home/delicious-recipe";
import { Deliciousness } from "@/components/ui/home/deliciousness";
import { Kitchen } from "@/components/ui/home/own-kitchen";
import { Simple_tasty } from "@/components/ui/home/simple-and-tasty";
import { Spicy_delicious } from "@/components/ui/home/spicy-delicious";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div className=" w-full justify-center">
      <header className="w-full">
        <div className="p-5 flex justify-between items-center">

          <div className="lg:w-1/3 w-full flex flex-ow items-center justify-between">
            <Image
              src="/Icons/Foodieland.svg"
              alt="icon 1"
              width={110}
              height={30}
              priority
              className="opacity-100"
            />

            <button
              id="menu-button"
              onClick={toggleMenu}
              className="md:hidden block relative text-gray-800 bg-blue-500 p-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
            </button>
          </div>

          <div className={`lg:w-2/3 w-full absolute lg:top-0 lg:right-0 sm:top-20 sm:left-0 sm:bg-white sm:bg-white sm:shadow-lg md:shadow-none flex flex-col lg:flex-row justify-between lg:flex lg:relative items-center transition-all duration-300 ${open ? 'block' : 'hidden'}`} style={{ zIndex: 1000 }}>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <Link href="/" onClick={toggleMenu} className="px-4 py-2 text-black font-semibold hover:border-b-2 hover:border-gray-200">Home</Link>
              <Link href="/recipe" onClick={toggleMenu} className="px-4 py-2 text-black font-semibold hover:border-b-2 hover:border-gray-200">Recipes</Link>
              <Link href="/blog" onClick={toggleMenu} className="px-4 py-2 text-black font-semibold hover:border-b-2 hover:border-gray-200">Blog</Link>
              <Link href="/contact" onClick={toggleMenu} className="px-4 py-2 text-black font-semibold hover:border-b-2 hover:border-gray-200">Contact</Link>
              <Link href="/blog_post" onClick={toggleMenu} className="px-4 py-2 text-black font-semibold hover:border-b-2 hover:border-gray-200">About us</Link>
            </div>

            <div className="flex flex-row space-x-4 p-2">
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

        <div className="pt-5 border-b border-gray-200 dark:border-neutral-300 w-full"></div>
      </header>

      {/* <header className="w-full">
        <div className="p-5 flex justify-between items-center">

          <div className="lg:w-1/3 w-full flex flex-row items-center justify-between">
            <Image
              src="/Icons/Foodieland.svg"
              alt="icon 1"
              width={110}
              height={30}
              priority
              className="opacity-100"
            />

            <div className="relative w-full">
              <button
                id="menu-button"
                onClick={toggleMenu}
                className="md:hidden block relative text-gray-800 bg-blue-500 p-2 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                {!open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                )}
              </button>

              <div className={`absolute top-full left-0 w-full lg:w-[1000px] lg:-top-[18px] lg:block lg:left-[300px] transition-all duration-300 ${open ? 'block' : 'hidden'}`} style={{ zIndex: 1000 }}>
                <div className="flex flex-col lg:flex-row lg:space-x-4">
                  <Link href="/" onClick={toggleMenu} className="px-4 py-2 text-black font-semibold hover:border-b-2 hover:border-gray-200">Home</Link>
                  <Link href="/recipe" onClick={toggleMenu} className="px-4 py-2 text-black font-semibold hover:border-b-2 hover:border-gray-200">Recipes</Link>
                  <Link href="/blog" onClick={toggleMenu} className="px-4 py-2 text-black font-semibold hover:border-b-2 hover:border-gray-200">Blog</Link>
                  <Link href="/contact" onClick={toggleMenu} className="px-4 py-2 text-black font-semibold hover:border-b-2 hover:border-gray-200">Contact</Link>
                  <Link href="/blog_post" onClick={toggleMenu} className="px-4 py-2 text-black font-semibold hover:border-b-2 hover:border-gray-200">About us</Link>
                </div>
              </div>
            </div>
          </div>

          <div className={`lg:w-2/3 hidden lg:flex flex-row justify-end space-x-4`}>
            <a href="#" className="text-black hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-black hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="text-black hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-5 border-b border-gray-200 dark:border-neutral-300 w-full"></div>
      </header> */}


      <main className="mt-10">
        <Spicy_delicious />
        <Categories />
        <Simple_tasty />
        <Kitchen />
        <Checkout />
        <Delicious />
        <Deliciousness />
      </main>

    </div>
  );
}
