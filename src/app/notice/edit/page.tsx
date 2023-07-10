"use client"
import { use, useEffect, useState } from "react"


export default function EditPost() {

    const [articles, setArticles] = useState(false);
    const [num1, setNum] = useState("0");

    const [articleNum, setArticleNum] = useState("0");
    const [articleTitle, setArticleTitle] = useState("");
    const [articleInner, setArticleInner] = useState("");


    const onHandleChange1 = (e: any) => {
        const numbers = e.target.value;
        setNum(numbers);
    };
    async function initProducts(num: any) {

        await fetch(`https://pastel.im/notice/edit/?num=${num}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(async (response: any) => {
                return response.json();
            })
            .then((response: any) => {
                // console.log(item);
                console.log(response[0])
                setArticleInner(response[0].inner);
                setArticleNum(response[0].number);
                setArticleTitle(response[0].title);


                // console.log(value);
            }).then(() => {

                setArticles(true);


            }).catch(err => console.error(err));

    }
    const onHandleChange = (e: any) => {
        const numbers = e.target.value;
        setNum(numbers);
    };
    return (
        <div>
            <h1>edit post</h1>
            {/* <input type="text" className="w-[500px]" name="num" id="num" value={num1} required /> */}
            <label>
                <input
                    type="text"
                    onChange={onHandleChange}
                    value={num1}
                />
            </label>
            <button onClick={() => {
                initProducts(num1);
            }}>edit</button>
            {articles === true ?
                <div className="mx-auto text-center">
                    <form action="/article_edit" method="post" className="form-example mt-10">
                        <div className="form-example">
                            <label htmlFor="num">Enter number: </label>
                            <input type="text" className="w-[500px]" name="num" id="num" value={articleNum} required
                                onChange={(e) => {
                                    setArticleNum(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-example my-5">
                            <label htmlFor="title">Enter title: </label>
                            <input type="text" className="w-[500px]" name="title" id="title" value={articleTitle} required
                                onChange={(e) => {
                                    setArticleTitle(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-example my-5">
                            <label htmlFor="inner" >Enter inner text: </label>
                            <textarea id="inner" name="inner" required value={articleInner}
                                onChange={(e) => {
                                    setArticleInner(e.target.value);
                                }}
                                rows={40} cols={100}>
                            </textarea>
                        </div>

                        <div className="form-example my-5">
                            <label htmlFor="passwd">Enter passwd: </label>
                            <input type="password" name="passwd" id="passwd" required />
                        </div>
                        <div className="form-example my-5 hover:cursor-pointer transition-all hover:bg-slate-500 hover:text-white py-5 w-[300px] mx-auto mb-[100px]">
                            <input type="submit" value="post" />
                        </div>
                    </form>
                </div>

                : <></>}
        </div>
    )

}