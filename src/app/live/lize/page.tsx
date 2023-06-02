import "../../globals.css"
import React from "react"

export default function Home() {
    return (
        <div className="text-center flex m-auto justify-center mt-4 z-10">
            <div className='twitch-live flex justify-center flex-wrap my-[2.25rem]'>
                <div
                    className=" w-[400px] h-[450px] xl:h-[44rem] relative  rounded-2xl bg-white mx-4 mt-5 twitch-live"
                    style={{ boxShadow: "gray 0px 3px 6px 0px" }}
                >
                    <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                        <p className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#0f2552]">
                        Akane Lize
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

                    <div className="flex inherit justify-center items-center text-center mx-auto w-[400px] twitch-live-player top-[77px] xl:h-[600px]">

                        <iframe className="h-[300px] xl:h-[565px]" src="https://player.twitch.tv/?channel=akanelize_stellive&parent=pastel.im" height="579" width="1030" allowFullScreen={true}></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}