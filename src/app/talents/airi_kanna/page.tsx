export default function Home() {
    const a_style = "w-[150px] my-2 h-[50px] px-[25px] py-[10px] text-center transition rounded-2xl border-[#373584] xl:hover:border-white duration-300 border-2 xl:hover:text-white xl:hover:cursor-pointer xl:text-[#373584] xl:hover:text-white"
    const a_dummy = "w-[150px] h-[50px] px-[25px] py-[10px] text-center"
    return (
        <div className="text-center flex m-auto justify-center mt-4 z-10">
            <div className='flex justify-center flex-wrap my-[2.25rem]'>
                <div
                    className="w-[400px] xl:w-[1400px] 2xl:w-[1600px] min-h-[1000px] h-auto relative  rounded-2xl bg-white mx-4 mt-5"
                    style={{ boxShadow: "gray 0px 3px 6px 0px" }}
                >
                    <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12">

                        <p className="xl:hover:cursor-default flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#373584]">
                            Airi Kanna | 아이리 칸나
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
                        <img src="/static/kanna_body.png" alt="kanna" className=" w-[230px] h-[355px] xl:w-[440px] xl:h-[679px] rounded " width="240px" ></img>

                        <div className=" xl:block  mt-16 xl:ml-20">
                            <div className=" text-[2.25rem] xl:text-7xl text-[#373584] xl:hover:cursor-default">아이리 칸나</div>
                            <div className="text-[#373584] mt-4 xl:hover:cursor-default">Airi Kanna</div>
                            <div className="text-[#373584] mt-4 xl:hover:cursor-default font-sunf">12월 2일</div>
                            <div className="text-center mx-4 xl:text-left mt-8 xl:ml-14 text-[#373584] font-bold text-lg font-sunf xl:hover:cursor-default">
                                용궁의 황녀<br />

                                용궁의 부흥을 위해 지구를 찾아왔다.<br />
                                용궁의 황녀로서 지식과 시야를 넓히기 위해 용궁 생활을 뒤로하고 지구에 오게되었다.<br />
                                {/* 이는 바로 유메퍼센트에 “명예 100%”로 관측이 되었고, 합류하게 된다.<br /> */}
                                시청자들의 앞에 선 그녀에게선 지도자로서의 카리스마를 볼 수 있을 것이다.<br />
                            </div>
                            <div className="mx-10 xl:mx-0 xl:w-[500px] min-h-[250px] flex flex-wrap justify-between mt-20 xl:ml-16 text-center">
                                <a className={`${a_style} text-[#A970FF] xl:hover:bg-[#A970FF] `} href="https://www.twitch.tv/airikanna_stellive" target="blank">Twitch</a>
                                <a className={`${a_style} text-[#FF0000] xl:hover:bg-[#FF0000]`} href="https://www.youtube.com/@airikannach" target="blank">Youtube</a>
                                <a className={`${a_style} text-[#FF0000] xl:hover:bg-[#FF0000]`} href="https://www.youtube.com/@airikanna" target="blank">Music</a>
                                <a className={`${a_style} text-[#FF0000] xl:hover:bg-[#FF0000]`} href="https://www.youtube.com/channel/UC6CXZ-3mspWOXdxfpceumLw" target="blank">Replay</a>
                                <a className={`${a_style} text-[#F26E23] xl:hover:bg-[#F26E23]`} href="https://soundcloud.com/airikanna" target="blank">SoundCloud</a>
                                <a className={`${a_style} text-[#1D9BF0] xl:hover:bg-[#1D9BF0]`} href="https://twitter.com/AiriKannaKR" target="blank">Twitter KR</a>
                                <a className={`${a_style} text-[#1D9BF0] xl:hover:bg-[#1D9BF0]`} href="https://twitter.com/airikanna_" target="blank">Twitter JP</a>
                                <a className={`${a_style} text-[#03C75A] xl:hover:bg-[#03C75A]`} href="https://cafe.naver.com/ArticleList.nhn?search.clubid=29424353&search.menuid=131&search.boardtype=L" target="blank">Naver Cafe</a>
                                <a className={`${a_dummy} border-white hover:cursor-default`} href="#" target="blank"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}