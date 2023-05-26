export default function Home() {
    const content = " I'm Pastel은 버츄얼 아이돌 그룹 '스텔라이브'의 팬 페이지 입니다. ";
    const asd = "본 사이트는 수익창추릉ㄹ ";
    const contentClassName = "font-bold font-sans text-6xl";
    const contentClassName2 = "font-bold font-sans text-2xl";
    return (
        <main className="h-full">

            <div className="hidden xl:block mt-[100px] ml-[100px]">
                <figure className="w-[1000px]  px-[2.25rem]">
                    <p className={contentClassName} >I'm Pastel</p>
                    <blockquote cite="https://pastel.im/">
                        <p className={contentClassName2}>{content}</p>
                    </blockquote>
                </figure>
            </div>
            <div className="block xl:hidden mt-[50px]">
                <figure className="w-[400px]  px-[2.25rem]">
                    <p className={contentClassName}>I'm Pastel</p>
                    <blockquote cite="https://pastel.im/">
                        <p className={contentClassName2}>{content}</p>
                    </blockquote>
                </figure>
            </div>
        </main>
    )
}
