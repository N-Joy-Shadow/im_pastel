'use client'
import Link from 'next/link';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import NaverButton from '@/components/button/NaverButton';
import TwitchButton from '@/components/button/TwitchButton';
import YoutubeButton from '@/components/button/YoutubeButton';
import TwitterButton from '@/components/button/TwitterButton';
import ButtonBase from '@/components/button/ButtonBase';
import Line from '@/components/Line';

export default function About() {
    const aa = "#9ab6f0"
    const a_style = "w-[150px] xl:mx-2 my-2 h-[50px] px-[25px] py-[10px] text-center transition rounded-2xl border-[#516794] xl:hover:border-white duration-300 border-2 xl:hover:text-white xl:hover:cursor-pointer xl:text-[#516794] xl:hover:text-white"
    const a_dummy = "w-[150px] xl:mx-2 h-[50px] px-[25px] py-[10px] text-center"
    const divWidth = " my-[30px] w-[400px] h-[625px] sm:w-[400px] sm:h-[625px] md:w-[400px] md:h-[625px] lg:w-[400px] lg:h-[625px] xl:w-[400px] xl:h-[625px] 2xl:w-[400px] 2xl:h-[625px] mb-[60px]"
    return (
        <div className="h-auto w-auto">
            <div className="text-center flex m-auto justify-center mt-4 z-10">
                <div className='flex justify-center flex-wrap my-[2.25rem]'>
                    <div
                        className=" w-[400px] lg:w-[600px] xl:w-[1200px] min-h-[500px] h-auto relative pb-[92px] rounded-2xl bg-white mx-4 mt-5"
                        style={{ boxShadow: "gray 0px 3px 6px 0px" }}
                    >
                        {/* <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12 ">

                            <p className="xl:hover:cursor-default flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#7C86DF] ">
                                About
                            </p>
                        </div> */}
                        <Line/>
                        <div className="mx-12 min-h-[250px] justify-between xl:justify-start mt-20 xl:mx-16 text-center mb-10 flex flex-wrap">
                            <NaverButton href='tteokbokk1' primary_color='#516794'/>
                            <TwitchButton href='stellive_official' primary_color='#516794'/>
                            <YoutubeButton href='@stellive_official' primary_color='#516794'/>
                            <TwitterButton href='StelLive_kr' primary_color='#516794'/>
                            <ButtonBase secondary_color='stellight' href='https://stellight.fans/#/schedule' primary_color="#516794" name='StelLight'  /> {/*<- 아니 색깔 다르면 출력되고 이게 말인가 */}
                        </div>
                        <div className='text-center'>
                            <a href='https://github.com/Ich-mag-dich/im_pastel' target='blank'>


                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    className='mx-auto inline-block mr-3'
                                    width="32"
                                    height="32">
                                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                </svg>
                            </a>
                            <a href='mailto:san02@kakao.com'>

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className='mx-auto inline-block ml-3'
                                    width="32"
                                    height="32">
                                    <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
