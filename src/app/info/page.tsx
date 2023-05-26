"use client"
import Link from 'next/link';
import '../globals.css'
import React, { useState } from 'react';


export default function Home() {

  return (
    <main>
      <div className='flex justify-center'>
        <div className="text-center mt-5 justify-center items-center flex">
          <Link href="/ayatsuno_yuni">

            <div
              className="w-[400px] h-[625px] relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer hover:shadow-xl hover:scale-105 transform transition duration-500 ease-in-out"
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
                <img className='w-auto ' src='/static/yuni.png'></img>
              </div>
            </div>
          </Link>
          <Link href="/airi_kanna">

            <div
              className="w-[400px] h-[625px] relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer hover:shadow-xl hover:scale-105 transform transition duration-500 ease-in-out"
            // style={{ boxShadow: "gray 0px 3px 6px 0px" }}
            >
              <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

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
                <img className='w-auto ' src='/static/canna.png'></img>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

