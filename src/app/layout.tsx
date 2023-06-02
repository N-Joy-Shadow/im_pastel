"use client"
import React, { Fragment, useEffect, useRef, useState } from "react";
import "./globals.css";
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation';
import ReactGA from "react-ga4";

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    const router = useRouter();
    const [visl, setVisual] = useState<string>();
    if (visl === undefined) {
        setVisual("hidden");
    }
    const chgVisl = () => {
        if (visl === "hidden") {
            setVisual("block");
        } else {
            setVisual("hidden");
        }
    };

    ReactGA.initialize("G-5XQQLB2M6F");
    return (
        <html lang="kr" className="min-h-full h-auto">
            <head>

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-5XQQLB2M6F"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){
                        // @ts-ignore
                        dataLayer.push(arguments)
                    }
                    gtag('js', new Date());

                    gtag('config', 'G-5XQQLB2M6F');
                </script>
                <meta
                    name="theme-color"
                    content="rgb(124, 134, 223)"
                    media="(prefers-color-scheme: light)"
                />
                <meta
                    name="theme-color"
                    content="rgb(124, 134, 223)"
                    media="(prefers-color-scheme: dark)"
                />
                <meta
                    name="description"
                    content="아임 파스텔은 버츄얼 아이돌 그룹 '스텔라이브'의 팬 사이트 입니다. 스텔라이브 관련 정보등을 제공합니다." />
                <title>I'm Pastel</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Sunflower:wght@300&display=swap" rel="stylesheet" />
            </head>
            <body className=" font-bold h-full">
                {/* <nav className="bg-[#eaddff] w-full border-white"> */}
                <nav className=" w-full  bg-[#C4CBF5] relative z-40">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between xl:justify-evenly mx-auto p-4">
                        <Link href="/" className="flex items-center xl:left-[-50px] xl:relative ">

                            {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-2"
                    >
                        <path d="M15.716 1.329a1.341 1.341 0 0 1 2.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.148 1.148 0 0 1-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6Zm.452 1.595L4.51 13.061a.25.25 0 0 0 .164.439h5.45a.749.749 0 0 1 .692 1.041l-2.559 6.066 11.215-9.668a.25.25 0 0 0-.164-.439H14a.75.75 0 0 1-.687-1.05Z"></path>
                    </svg> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="24"
                                height="24"
                                className="mr-2"
                            >
                                <path fill="rgb(255,247,0)" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                            <span className="self-center  text-2xl font-semibold whitespace-nowrap text-white font-['Helvetica'] mt-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                                I'm Pastel
                            </span>
                        </Link>
                        <button
                            data-collapse-toggle="navbar-solid-bg"
                            type="button"
                            className="font-bold inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none   "
                            aria-controls="navbar-solid-bg"
                            aria-expanded="false"
                            onClick={() => {
                                chgVisl();
                            }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <div
                            id="navbar-solid-bg"
                            className={`${visl} w-full md:block md:w-auto navbar-solid-bg transition-all xl:right-[-50px] xl:relative`}
                        >
                            <ul className="font-bold flex flex-col p-4 md:p-0 mt-4  text-white rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 z-0">
                                <li
                                    className="xl:p-[0.7rem] xl:hover:bg-slate-400 transition-all xl:hover:drop-shadow-none rounded drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                                    onClick={() => {
                                        chgVisl();
                                    }}>
                                    <Link
                                        href="/"
                                        className="block py-2 pl-3 pr-4 xxx rounded font-bold  md:border-0  md:p-0  "
                                        aria-current="page"
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <p className="hidden xl:p-[0.7rem] md:block cursor-default xxxx">|</p>
                                <li
                                    className="xl:p-[0.7rem] xl:hover:bg-slate-400 transition-all xl:hover:drop-shadow-none rounded drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] xxx z-0"
                                    onClick={() => {
                                        chgVisl();
                                    }}>
                                    <Link
                                        href="/notice"
                                        className="block py-2 pl-3 pr-4  rounded font-bold  md:border-0  md:p-0 z-[-1]"
                                    >
                                        NOTICE
                                    </Link>
                                </li>
                                <p className="hidden xl:p-[0.7rem] md:block cursor-default xxxx">|</p>
                                <li className="z-10 group relative dropdown xl:p-[0.7rem] xl:hover:bg-slate-400 transition-all xl:hover:drop-shadow-none rounded drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] xxx">

                                    <p onClick={() => { router.push(`/live`) }} className="block py-2 pl-3 pr-4 transition rounded font-bold md:border-0  md:p-0 xl:hover:cursor-pointer xl:hover:drop-shadow-none ">LIVE</p>

                                    <div className="group-hover:opacity-100 group-hover:block transition duration-200 dropdown-menu absolute opacity-0 hidden h-auto z-40  w-[250px] xl:left-[-30px] xl:top-[45px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                                        <ul className="top-0 bg-white shadow px-6 py-8 rounded-md text-left z-40">
                                            <li className="">
                                                <Link onClick={() => {
                                                    chgVisl();
                                                }} href="/live" className="px-6 block py-4 text-[#201e42] font-bold text-base transition-all xl:hover:text-white xl:hover:bg-[#7c86df] cursor-pointer">
                                                    ALL
                                                </Link>
                                            </li>
                                            <hr />
                                            <li className="font-sunf">
                                                <Link onClick={() => {
                                                    chgVisl();
                                                }} href="/live/gangg" className="px-6 block py-4 text-[#8182B8] font-bold text-base transition-all xl:hover:text-white xl:hover:bg-[#7c86df] cursor-pointer">
                                                    사장님
                                                </Link>
                                            </li>
                                            <hr />
                                            <li className="">
                                                <Link onClick={() => {
                                                    chgVisl();
                                                }} href="/live/kanna" className="px-6 block py-4 text-[#373584] font-bold text-base transition-all xl:hover:text-white xl:hover:bg-[#7c86df] cursor-pointer">
                                                    Airi Kanna
                                                </Link>
                                            </li>
                                            <hr />
                                            <li className="">
                                                <Link onClick={() => {
                                                    chgVisl();
                                                }} href="/live/yuni" className="px-6 block py-4 text-[#B77DE4] font-bold text-base transition-all xl:hover:text-white xl:hover:bg-[#7c86df] cursor-pointer">
                                                    Ayatsuno Yuni
                                                </Link>
                                            </li>
                                            <hr />
                                            <li className="">
                                                <Link onClick={() => {
                                                    chgVisl();
                                                }} href="/live/tabi" className="px-6 block py-4 text-[#7d7c7c] font-bold text-base transition-all xl:hover:text-white xl:hover:bg-[#7c86df] cursor-pointer">
                                                    Arahashi Tabi
                                                </Link>
                                            </li>
                                            <hr />
                                            <li className="">
                                                <Link onClick={() => {
                                                    chgVisl();
                                                }} href="/live/lize" className="px-6 block py-4 text-[#7d7c7c] font-bold text-base transition-all xl:hover:text-white xl:hover:bg-[#7c86df] cursor-pointer">
                                                    Akane Lize
                                                </Link>
                                            </li>
                                            <hr />
                                            <li className="">
                                                <Link onClick={() => {
                                                    chgVisl();
                                                }} href="/live/hina" className="px-6 block py-4 text-[#7d7c7c] font-bold text-base transition-all xl:hover:text-white xl:hover:bg-[#7c86df] cursor-pointer">
                                                    Shirayuki Hina
                                                </Link>
                                            </li>
                                            <hr />
                                            <li className="">
                                                <Link onClick={() => {
                                                    chgVisl();
                                                }} href="/live/mashiro" className="px-6 block py-4 text-[#7d7c7c] font-bold text-base transition-all xl:hover:text-white xl:hover:bg-[#7c86df] cursor-pointer">
                                                    Neneko Mashiro
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <p className="hidden xl:p-[0.7rem] md:block cursor-default xxxx">|</p>
                                <li
                                    className="xl:p-[0.7rem] xl:hover:bg-slate-400 transition-all xl:hover:drop-shadow-none rounded drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] xxx z-0"
                                    onClick={() => {
                                        chgVisl();
                                    }}>
                                    <Link
                                        href="/talents"
                                        className="block py-2 pl-3 pr-4  rounded font-bold  md:border-0  md:p-0 z-[-1]"
                                    >
                                        TALENTS
                                    </Link>
                                </li>
                                <p className="hidden xl:p-[0.7rem] md:block cursor-default xxxx">|</p>
                                <li
                                    className="xl:p-[0.7rem] xl:hover:bg-slate-400 transition-all xl:hover:drop-shadow-none rounded drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] xxx z-0"
                                    onClick={() => {
                                        chgVisl();
                                    }}>
                                    <a
                                        href="/tweet"
                                        className="block py-2 pl-3 pr-4  rounded font-bold  md:border-0  md:p-0 z-[-1]"
                                    >
                                        TWEETS
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                {children}
                <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" />
            </body>
        </html>
    )
}
