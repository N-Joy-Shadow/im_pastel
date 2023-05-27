export default function Home() {
    const content = " I'm Pastel은 버츄얼 아이돌 그룹 '스텔라이브'의 팬 페이지 입니다. ";
    const asd = "본 사이트는 수익창추릉ㄹ ";
    const contentClassName = "font-bold font-sans text-6xl";
    const contentClassName2 = "font-bold font-sans text-2xl";
    return (
        <main className="h-full xl:hover:cursor-default">
            <img src="/static/stellive.svg" className="mt-[-60px]  xl:ml-20 xl:mt-[-110px] w-[300px] xl:w-[500px] h-auto absolute z-[-1]"></img>
            <div className="text_div text-left ">
                <div className="hidden xl:block py-20 mt-[260px] ml-[130px]">
                    <figure className="w-[1000px]  px-[2.25rem]">
                        <p className={`${contentClassName} qq`} >⭐I'm Pastel</p>
                        <blockquote cite="https://pastel.im/">
                            <p className={`${contentClassName2} qw font-sunf`}>{content}</p>
                        </blockquote>
                    </figure>
                </div>
                <div className="block xl:hidden py-5 mt-[140px] ml-[10px]">
                    <figure className=" px-[1.5rem]">
                        <p className={`${contentClassName} qq`}>I'm Pastel</p>
                        <blockquote cite="https://pastel.im/">
                            <p className={`${contentClassName2} qw font-sunf`}>{content}</p>
                        </blockquote>
                    </figure>
                </div>
            </div>
        </main>
    )
}
