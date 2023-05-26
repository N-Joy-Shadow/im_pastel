
import React from "react"
export default function Test() {
    return (
        <div className="text-center flex m-auto justify-center mt-4">
            <div className='flex justify-center flex-wrap my-[2.25rem]'>
                <div
                    className="w-[400px] h-[450px] xl:w-[600px] xl:h-[540px] relative  rounded-2xl bg-white mx-4 mt-5"
                    style={{ boxShadow: "gray 0px 3px 6px 0px" }}
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

                    <div className="flex inherit justify-center items-center text-center mx-auto w-[400px] xl:w-[560px] top-[77px]">

                        <iframe className="m-8 h-[300px] xl:h-[378px] " src="https://player.twitch.tv/?channel=ayatsunoyuni_stellive&parent=pastel.im" height="378" width="620" allowFullScreen={true}></iframe>
                    </div>
                </div>
                <div
                    className="w-[400px] h-[450px] xl:w-[600px] xl:h-[540px] relative  rounded-2xl bg-white mx-4 mt-5"
                    style={{ boxShadow: "gray 0px 3px 6px 0px" }}
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

                    <div className="flex inherit justify-center items-center text-center mx-auto w-[400px] xl:w-[560px] top-[77px]">

                        <iframe className="m-8 h-[300px] xl:h-[378px]" src="https://player.twitch.tv/?channel=airikanna_stellive&parent=pastel.im" height="378" width="620" allowFullScreen={true}></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}