"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";


export default function Article() {
    const searchParams = useSearchParams();
    const num = searchParams.get('num');
    const [articles, setArticles] = useState(<></>);
    useEffect(() => {
        async function initProducts() {

            await fetch(`https://pastel.im/notice/dbs/${num}`,
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
                    // console.log(response);
                    const inner: string = response[0].inner;
                    const value = (
                        <div>
                            <div className="text-center flex m-auto justify-center mt-4 z-10">
                                <div className='flex justify-center flex-wrap my-[2.25rem]'>
                                    <div
                                        className=" w-[400px] lg:w-[600px] xl:w-[1200px] min-h-[500px] h-auto relative pb-[132px] rounded-2xl bg-white mx-4 mt-5"
                                        style={{ boxShadow: "gray 0px 3px 6px 0px" }}
                                    >
                                        <div className="article-topbar flex justify-between items-center xl:w-full absolute left-0 top-6  ">

                                            <p className="md:hover:cursor-default  text-sm font-semibold text-center text-[#7C86DF] ">
                                                Notice
                                            </p>
                                            <p className="md:hover:cursor-default  text-sm text-center text-[#666] font-sans font-bold">
                                                {response[0].title}
                                            </p>
                                            <p className="md:hover:cursor-default  text-sm text-center text-[#666] font-sans font-bold">
                                                {response[0].article_date}
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
                                        <div className="article-body block xl:flex-none inherit justify-center font-normal text-center mt-[70px] xl:mt-0 xl:top-[97px]">
                                            {/* <div dangerouslySetInnerHTML={{ __html: inner }} className="xl:w-[1100px] mx-auto"></div> */}
                                            <ReactMarkdown rehypePlugins={[rehypeRaw]} className="xl:w-[1100px] mx-auto" children={inner} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    setArticles(value);
                    // console.log(value);
                })
                .catch(err => console.error(err));

        }
        initProducts();
    }, []);
    return (
        <div>
            {articles}
        </div>
    )
}