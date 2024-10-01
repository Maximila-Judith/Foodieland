import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import React from 'react';
import { Navigation } from "@/components/ui/home/menu-navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Foodieland",
  description: "Maximila",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <main>{children}</main>

        <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 mx-auto">
          <div className="flex lg:flex-row flex-col items-center justify-between gap-6 mb-5">
            <div className="col-span-full lg:col-span-2 space-y-5">
              <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-black" href="#" aria-label="Brand">
                <Image
                  src="/Icons/Foodieland.svg"
                  alt="icon 1"
                  width={110}
                  height={30}
                  priority
                  className="opacity-100"
                />
              </a>
              <p className="text-gray-300 text-md">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            </div>

            <div className="flex flex-row space-x-2">
              <a href="#" className="px-4 py-2 text-black font-semibold hover:bg-gray-200">Home</a>
              <a href="#" className="px-4 py-2 text-black font-semibold hover:bg-gray-200">Recipes</a>
              <a href="#" className="px-4 py-2 text-black font-semibold hover:bg-gray-200">Blog</a>
              <a href="#" className="px-4 py-2 text-black font-semibold hover:bg-gray-200">Contact</a>
              <a href="#" className="px-4 py-2 text-black font-semibold hover:bg-gray-200">About us</a>
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="flex flex-wrap flex self-center items-center gap-3">
                <div className="space-x-4 text-sm ">
                  <a className="inline-flex gap-x-2 text-gray-600 text-base hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-black" href="#">© 2020 Flowbase. Powered by <span className="text-red-400">Webflow</span></a>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="flex flex-row ietems-center space-x-4 text-sm">
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
          </div>
        </footer>
      </body>
    </html>
  );
}

