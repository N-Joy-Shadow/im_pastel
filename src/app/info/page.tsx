"use client"
import Link from 'next/link';
import '../globals.css'
import React, { useState } from 'react';


export default function Home() {
  const divWidth = "w-[400px] h-[625px] sm:w-[400px] sm:h-[625px] md:w-[400px] md:h-[625px] lg:w-[400px] lg:h-[625px] xl:w-[400px] xl:h-[625px] 2xl:w-[400px] 2xl:h-[625px]"
  const imgWidth = "w-[308px] sm:w-[308px] md:w-[308px] lg:w-[308px] xl:w-[308px] 2xl:w-[308px]"
  return (
    <main>
      <div className='flex justify-center'>
        <div className="text-center mx-auto my-[2.25rem] justify-center items-center flex flex-wrap">
          <Link href="/ayatsuno_yuni">

            <div
              className={`${divWidth} relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out`}
            // style={{ boxShadow: "gray 0px 3px 6px 0px" }}

            >
              <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#0f2552]">
                  Ayatsuno Yuni
                </p>
              </div>
              <svg
                width={251}
                height={1}
                viewBox="0 0 251 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[28.1px] top-[60.1px]"
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
                <img className='w-auto rounded-2xl' src='/static/yuni.png'></img>
              </div>
            </div>
          </Link>
          <Link href="/airi_kanna">

            <div
              className="w-[400px] h-[625px] relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out"
            // style={{ boxShadow: "gray 0px 3px 6px 0px" }}
            >
              <div className={`flex justify-between items-center ${imgWidth} absolute left-0 top-6 px-12`}>

                <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#0f2552]">
                  Airi Kanna
                </p>
              </div>
              <svg
                width={251}
                height={1}
                viewBox="0 0 251 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[28.1px] top-[60.1px]"
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
                <img className='w-auto rounded-2xl' src='/static/canna.png'></img>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

