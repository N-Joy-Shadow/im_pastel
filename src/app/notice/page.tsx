"use client"
import { useEffect, useState } from "react"
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import '../globals.css'

export default function Home() {
    const KEY = "view";
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [articles, setArticles] = useState([<></>]);
    const tdStyle = "pl-6 xl:pl-20 min-w-[70px] xl:w-[120px]"
    useEffect(() => {
        async function initProducts() {

            await fetch(`https://pastel.im/notice/dbs/`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(async (response: any) => {
                    console.clear();
                    return response.json();
                })
                .then((response: any) => {
                    const value = response.reverse().map((item: any) => {
                        // console.log(item);
                        return (
                            <tr className={`md:hover:cursor-pointer h-[4rem] md:hover:bg-[#7c86df1e] transition-all text-[#666] font-sans font-bold`}
                                onClick={() => {
                                    const params = new URLSearchParams(searchParams);
                                    params.set("num", item.number);
                                    router.push('/notice/article/?' + params.toString());
                                }}>


                                <td key={`${item.number}${item.title}1`} className={`${tdStyle}xl:ml-[2rem] xl:w-[2rem] text-sm xl:text-lg`}>
                                    {item.number}
                                </td>
                                <td key={`${item.number}${item.title}2`} className="pl-[2rem] xl:pl-[8rem] text-left text-sm xl:text-[16px]">
                                    {item.title}
                                </td>

                                <td key={`${item.number}${item.title}3`} className="xl:ml-[2rem]  text-[10px] xl:text-sm">
                                    {item.article_date}
                                </td>
                            </tr>

                        )
                    })
                    setArticles(value);
                    // console.log(value);
                })
                .catch(err => console.error(err));

        }
        initProducts();
    }, []);
    return (
        <div className="text-center flex m-auto justify-center mt-4 z-10">
            <div className='flex justify-center flex-wrap my-[2.25rem]'>
                <div
                    className=" w-[400px] lg:w-[600px] xl:w-[1200px] min-h-[500px] h-auto relative pb-[92px] rounded-2xl bg-white mx-4 mt-5"
                    style={{ boxShadow: "gray 0px 3px 6px 0px" }}
                >
                    <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-12 ">

                        <p className="xl:hover:cursor-default flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#7C86DF] ">
                            Notice
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
                    <div className="inherit mt-[70px] xl:mt-0 xl:top-[77px]">
                        <table className="w-full xl:w-[1100px] mx-auto">
                            <tr className="text-[#666] font-sans font-bold">
                                <th className={`${tdStyle}  xl:pb-2`}>번호</th>
                                <th className="xl:pb-2">제목</th>
                                <th className="xl:w-[300px] min-w-[100px] xl:pb-2">작성일</th>
                            </tr>

                            {articles}
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}