export default function Article() {
    return (
        <div className="mx-auto text-center">
            <form action="/article_post" method="post" className="form-example mt-10">
                <div className="form-example">
                    <label htmlFor="num">Enter number: </label>
                    <input type="text" className="w-[500px]" name="num" id="num" required />
                </div>
                <div className="form-example my-5">
                    <label htmlFor="title">Enter title: </label>
                    <input type="text" className="w-[500px]" name="title" id="title" required />
                </div>
                <div className="form-example my-5">
                    <label htmlFor="inner" >Enter inner text: </label>
                    <textarea id="inner" name="inner" required
                        rows={40} cols={100}>
                    </textarea>
                </div>
                <div className="form-example my-5">
                    <label htmlFor="wdate">Enter date: </label>
                    {/* <input type="text" name="wdate" id="wdate" required /> */}
                    <input type="date" id="wdate" name="wdate"
                        required></input>
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
    )
}