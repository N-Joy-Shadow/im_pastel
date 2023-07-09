'use client'

import Link from 'next/link';
import React, { use, useEffect, useRef, useState } from "react"
import ReactGA from "react-ga4";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Autoplay]);


import "./about/style.css";
export default function Home() {

    const divWidth = " my-[30px] w-[400px] h-[625px] sm:w-[400px] sm:h-[625px] md:w-[400px] md:h-[625px] lg:w-[400px] lg:h-[625px] xl:w-[400px] xl:h-[625px] 2xl:w-[400px] 2xl:h-[625px] mb-[60px]"
    const content = " I'm Pastel은 버츄얼 아이돌 그룹 '스텔라이브'의 팬 사이트 입니다. ";
    const contentClassName = "font-bold font-emoji xl:text-4xl 2xl:text-6xl";
    const contentClassName2 = "font-bold font-emoji text-xl";
    ReactGA.initialize("G-5XQQLB2M6F");
    ReactGA.send({ hitType: "pageview", page: "/", title: "I'm Pastel / root" });
    const [SwiperVisible, setSwiperVisible] = useState("hidden11");
    useEffect(() => {
        if (SwiperVisible === "hidden11") {
            setSwiperVisible("visible")
        }
    }, [SwiperSlide])

    return (
        <main className="h-full xl:hover:cursor-default">
            <img src="/static/stellive.svg" alt="logo" className="  xl:ml-20 xl:mt-[-110px] w-[300px] xl:w-[500px] h-auto absolute z-[-1]"></img>
            <div className="text_div text-left ">
                <div className=" block py-5 xl:py-20 mt-[140px] xl:mt-[200px] xl-[10px] xl:ml-[130px]">
                    <figure className="xl:w-[1000px] pl-[1.5rem]  xl:pl-[2.25rem]">
                        <p className={`${contentClassName} qq`} >⭐I'm Pastel</p>
                        <blockquote cite="https://pastel.im/">
                            <p className={`${contentClassName2} min-w-[300px] xl:w-[520px] 2.5xl:w-[920px] qw font-sunf`}>{content}</p>
                        </blockquote>
                    </figure>


                    {/* <div className="hidden xl:block float-right xl:mt-[-415px] 2xl:mt-[-450px] xl:mr-[80px] 2xl:mr-[120px]">
                <div className="text-center flex m-auto justify-center mt-4 z-10">
                    <div className='flex justify-center  flex-wrap my-[2.25rem]'>
                        <div
                            className=" w-[400px] lg:w-[600px] 2xl:w-[800px] xl:min-h-[381px] 2xl:min-h-[500px] pt-[50px] inline-block h-auto 2xl:my-auto relative rounded-2xl bg-white mx-4 mt-5"
                            style={{ boxShadow: "gray 0px 3px 6px 0px" }}
                        >
                            <iframe loading="lazy" className="m-auto w-[300px] xl:w-[500px] xl:h-[281px] 2xl:w-[710px] 2xl:h-[400px] 2xl:px-0 " width="710" height="400" src="https://www.youtube.com/embed/oetu6DR5ySw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>
                    </div>
                </div>
            </div> */}</div>
            </div>
            <div className="slsl h-auto w-auto xl:absolute xl:bottom-0  xl:right-20 mt-[50px] z-30">
                <div className={`mx-auto w-auto ${SwiperVisible}`}>
                    <div className="text-center mx-auto my-[2.25rem] justify-center items-center flex flex-wrap w-auto">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}

                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className={`mySwiper w-[500px]`}
                        >
                            <SwiperSlide>

                                <Link href="/talents/airi_kanna">

                                    <div
                                        className={`${divWidth} relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out`}
                                    // style={{ boxShadow: "gray 0px 3px 6px 0px" }}

                                    >
                                        <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                                            <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#373584]">
                                                #1 Airi kanna
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
                                            <img alt='tabi' className='w-auto rounded-2xl' src='/static/kanna3.jpg'></img>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>

                                <Link href="/talents/ayatsuno_yuni">

                                    <div
                                        className={`${divWidth} relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out`}
                                    // style={{ boxShadow: "gray 0px 3px 6px 0px" }}

                                    >
                                        <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                                            <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#7c86df]">
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
                                            <img alt='tabi' className='w-auto rounded-2xl' src='/static/yuni3.jpg'></img>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>

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
                                            <img alt='tabi' className='w-auto rounded-2xl' src='/static/111-crop.jpg'></img>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                            <img alt='lize' className='w-auto rounded-2xl' src='/static/444-crop.jpg'></img>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href="/talents/shirayuki_hina">

                                    <div
                                        className={`${divWidth} relative  rounded-2xl bg-white mx-4 mt-5 cursor-pointer xl:hover:shadow-xl xl:hover:scale-105 transform transition duration-500 ease-in-out`}
                                    // style={{ boxShadow: "gray 0px 3px 6px 0px" }}

                                    >
                                        <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                                            <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#fca572]">
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
                                            <img alt='hina' className='w-auto rounded-2xl' src='/static/333-crop.jpg'></img>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                            <img alt='mashiro' className='w-auto rounded-2xl' src='/static/222-crop.jpg'></img>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
            </div>
        </main>
    )
}
