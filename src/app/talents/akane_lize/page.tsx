import ReactGA from "react-ga4";
export default function Home() {
    const text_color = "text-[#f46874]"
    const a_style = `my-2 w-[150px] h-[50px] px-[25px] py-[10px] text-center transition rounded-2xl border-[#f46874] xl:hover:border-white duration-300 border-2 xl:hover:text-white xl:hover:cursor-pointer xl:text-[#f46874] xl:hover:text-white`
    const a_dummy = "w-[150px] h-[50px] px-[25px] py-[10px] text-center"
    ReactGA.initialize("G-5XQQLB2M6F");
    ReactGA.send({ hitType: "pageview", page: "/talents", title: "lize" });
    return (
        <div className="text-center flex m-auto justify-center mt-4 z-10">
            <div className='flex justify-center flex-wrap my-[2.25rem]'>
                <div
                    className="w-[400px] xl:w-[1400px] 2xl:w-[1600px] min-h-[1000px] h-auto relative  rounded-2xl bg-white mx-4 mt-5"
                    style={{ boxShadow: "gray 0px 3px 6px 0px" }}
                >
                    <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12 ">

                        <p className={` xl:hover:cursor-default flex-grow-0 flex-shrink-0 text-sm font-semibold text-center ${text_color} `}>
                            Akane Lize | 아카네 리제
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
                    <div className="flex flex-wrap xl:flex-none inherit justify-center mt-[70px] xl:mt-0 xl:top-[177px]">
                        <img src="/static/lizemama.jpg" alt="lize" className=" w-[230px] h-[355px] xl:w-[440px] xl:h-[679px] rounded-lg " width="240px" ></img>

                        <div className=" xl:block  mt-16 xl:ml-20">
                            <div className={` text-[2.25rem] xl:text-7xl ${text_color} xl:hover:cursor-default`}>아카네 리제</div>
                            <div className={`${text_color} mt-4 xl:hover:cursor-default`}>Akane Lize</div>
                            <div className={`${text_color} mt-4 xl:hover:cursor-default font-sunf`}>혼혈 뱀파이어</div>
                            <div className={`${text_color} mt-4 xl:hover:cursor-default font-sunf`}>165cm | 700세 | 10월 1일</div>
                            <div className={`text-center mx-4 xl:text-left mt-8 xl:ml-8 ${text_color} font-bold text-lg font-sunf xl:hover:cursor-default`}>
                                아이돌을 동경해 흡혈 행위를 거의 하지 않는 혼혈 뱀파이어. <br />
                                흡혈을 하지 않고 음악을 더 좋아하는 모습에<br />
                                성에서 멸시받으며 쫓겨났다.<br />
                            </div>
                            <div className="mx-10 xl:mx-0 xl:w-[500px] min-h-[150px] flex flex-wrap justify-between mt-20 xl:ml-16 text-center">
                                <a className={`${a_style} text-[#A970FF] xl:hover:bg-[#A970FF] `} href="https://twitch.tv/akanelize_stellive" target="blank">Twitch</a>
                                <a className={`${a_style} text-[#FF0000] xl:hover:bg-[#FF0000]`} href="https://youtube.com/@akanelize" target="blank">Youtube</a>
                                <a className={`${a_style} text-[#FF0000] xl:hover:bg-[#FF0000]`} href="https://www.youtube.com/@lizereplay" target="blank">Replay</a>
                                <a className={`${a_style} text-[#1D9BF0] xl:hover:bg-[#1D9BF0]`} href="https://twitter.com/AkaneLize" target="blank">Twitter</a>
                                <a className={`${a_style} text-[#03C75A] xl:hover:bg-[#03C75A]`} href="https://cafe.naver.com/tteokbokk1" target="blank">Naver Cafe</a>
                                <a className={`${a_dummy} border-white hover:cursor-default`} href="#" target="blank"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}