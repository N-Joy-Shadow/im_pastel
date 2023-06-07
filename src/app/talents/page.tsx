"use client"
import Link from 'next/link';

import '../globals.css'
import React, { useState } from 'react';
import ReactGA from "react-ga4";


export default function Home() {
  ReactGA.initialize("G-5XQQLB2M6F");
  ReactGA.send({ hitType: "pageview", page: "/talents", title: "talents" });
  const divWidth = " my-[30px] w-[400px] h-[625px] sm:w-[400px] sm:h-[625px] md:w-[400px] md:h-[625px] lg:w-[400px] lg:h-[625px] xl:w-[400px] xl:h-[625px] 2xl:w-[400px] 2xl:h-[625px]"
  const imgWidth = "w-[308px] sm:w-[308px] md:w-[308px] lg:w-[308px] xl:w-[308px] 2xl:w-[308px]"
  return (
    <main>
      <div className='flex justify-center'>
        <div className="text-center mx-auto my-[2.25rem] justify-center items-center flex flex-wrap">
          <Link href="/talents/airi_kanna">

            <div
              className={`${divWidth} relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out`}
            // style={{ boxShadow: "gray 0px 3px 6px 0px" }}
            >
              <div className={`flex justify-between items-center  w-[308px] absolute left-0 top-6 px-12`}>

                <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#373584]">
                  #1 Airi Kanna
                </p>
              </div>
              <svg
                width={251}
                height={1}
                viewBox="0 0 251 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[60.1px] px-12"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  y1="0.6"
                  x2={251}
                  y2="0.6"
                  stroke="#E4E5E7"
                  stroke-width="0.8"
                />
              </svg>

              <div className="flex inherit justify-center items-center text-center mx-auto w-[310px] top-[77px]">
                <img loading="lazy" alt='kanna' className='w-auto rounded-2xl' src='/static/kanna.png'></img>
              </div>
            </div>
          </Link>
          <Link href="/talents/ayatsuno_yuni">

            <div
              className={`${divWidth} relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out`}
            // style={{ boxShadow: "gray 0px 3px 6px 0px" }}

            >
              <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#7C86DF]">
                  #1 Ayatsuno Yuni
                </p>
              </div>
              <svg
                width={251}
                height={1}
                viewBox="0 0 251 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[60.1px] px-12"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  y1="0.6"
                  x2={251}
                  y2="0.6"
                  stroke="#E4E5E7"
                  stroke-width="0.8"
                />
              </svg>

              <div className="flex inherit justify-center items-center text-center mx-auto w-[310px] top-[77px]">
                <img loading="lazy" alt='yuni' className='w-auto rounded-2xl' src='/static/yuni.png'></img>
              </div>
            </div>
          </Link>
          <Link href="/talents/arahashi_tabi">

            <div
              className={`${divWidth} relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out`}
            // style={{ boxShadow: "gray 0px 3px 6px 0px" }}

            >
              <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#39a7d7]">
                  #2 Arahashi Tabi
                </p>
              </div>
              <svg
                width={251}
                height={1}
                viewBox="0 0 251 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[60.1px] px-12"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  y1="0.6"
                  x2={251}
                  y2="0.6"
                  stroke="#E4E5E7"
                  stroke-width="0.8"
                />
              </svg>

              <div className="flex inherit justify-center items-center text-center mx-auto w-[310px] top-[77px]">
                <img loading="lazy" alt='tabi' className='w-auto rounded-2xl' src='/static/111-crop.jpg'></img>
              </div>
            </div>
          </Link>
          <Link href="/talents/akane_lize">

            <div
              className={`${divWidth} relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out`}
            // style={{ boxShadow: "gray 0px 3px 6px 0px" }}

            >
              <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#b73f3f]">
                  #2 Akane Lize
                </p>
              </div>
              <svg
                width={251}
                height={1}
                viewBox="0 0 251 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[60.1px] px-12"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  y1="0.6"
                  x2={251}
                  y2="0.6"
                  stroke="#E4E5E7"
                  stroke-width="0.8"
                />
              </svg>

              <div className="flex inherit justify-center items-center text-center mx-auto w-[310px] top-[77px]">
                <img loading="lazy" alt='lize' className='w-auto rounded-2xl' src='/static/444-crop.jpg'></img>
              </div>
            </div>
          </Link>
          <Link href="/talents/shirayuki_hina">

            <div
              className={`${divWidth} relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out`}
            // style={{ boxShadow: "gray 0px 3px 6px 0px" }}

            >
              <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#936d5e]">
                  #2 Shirayuki Hina
                </p>
              </div>
              <svg
                width={251}
                height={1}
                viewBox="0 0 251 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[60.1px] px-12"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  y1="0.6"
                  x2={251}
                  y2="0.6"
                  stroke="#E4E5E7"
                  stroke-width="0.8"
                />
              </svg>

              <div className="flex inherit justify-center items-center text-center mx-auto w-[310px] top-[77px]">
                <img loading="lazy" alt='hina' className='w-auto rounded-2xl' src='/static/333-crop.jpg'></img>
              </div>
            </div>
          </Link>
          <Link href="/talents/neneko_mashiro">

            <div
              className={`${divWidth} relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out`}
            // style={{ boxShadow: "gray 0px 3px 6px 0px" }}

            >
              <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#69605e]">
                  #2 Neneko Mashiro
                </p>
              </div>
              <svg
                width={251}
                height={1}
                viewBox="0 0 251 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[60.1px] px-12"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  y1="0.6"
                  x2={251}
                  y2="0.6"
                  stroke="#E4E5E7"
                  stroke-width="0.8"
                />
              </svg>

              <div className="flex inherit justify-center items-center text-center mx-auto w-[310px] top-[77px]">
                <img loading="lazy" alt='mashiro' className='w-auto rounded-2xl' src='/static/222-crop.jpg'></img>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

