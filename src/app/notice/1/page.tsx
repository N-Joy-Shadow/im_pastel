const title = "Open! ⭐I'm Pastel"
const date = "2023.05.27. 23:52"
export default function Home() {
    return (
        <div className="text-center flex m-auto justify-center mt-4 z-10">
            <div className='flex justify-center flex-wrap my-[2.25rem]'>
                <div
                    className=" w-[400px] lg:w-[600px] xl:w-[1200px] min-h-[500px] h-auto relative pb-[92px] rounded-2xl bg-white mx-4 mt-5"
                    style={{ boxShadow: "gray 0px 3px 6px 0px" }}
                >
                    <div className="flex justify-between items-center xl:w-full absolute left-0 top-6 px-12 ">

                        <p className="xl:hover:cursor-default  text-sm font-semibold text-center text-[#7C86DF] ">
                            Notice
                        </p>
                        <p className="xl:hover:cursor-default  text-sm text-center text-[#666] font-sans font-bold">
                            {title}
                        </p>
                        <p className="xl:hover:cursor-default  text-sm text-center text-[#666] font-sans font-bold">
                            {date}
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
                    <div className="block xl:flex-none inherit justify-center text-center mt-[70px] xl:mt-0 xl:top-[97px]">
                        <p className="text-[#666] font-sans font-bold">
                            I'm Pastel 사이트가 오픈되었습니다.
                        </p>
                        <p className="text-[#666] font-sans font-bold">
                            본 사이트는 버츄얼 아이돌 '스텔라이브'의 팬 사이트입니다.
                        </p>
                        <p className="text-[#666] font-sans font-bold">
                            감사합니다,,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}