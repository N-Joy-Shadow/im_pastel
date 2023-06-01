export default function Article() {
    return (
        <div>
            <form action="/article_post" method="post" className="form-example">
                <div className="form-example">
                    <label htmlFor="num">Enter number: </label>
                    <input type="text" name="num" id="num" required />
                </div>
                <div className="form-example">
                    <label htmlFor="title">Enter title: </label>
                    <input type="text" name="title" id="title" required />
                </div>
                <div className="form-example">
                    <label htmlFor="inner">Enter inner text: </label>
                    <textarea id="inner" name="inner" required
                        rows={5} cols={33}>
                    </textarea>
                </div>
                <div className="form-example">
                    <label htmlFor="wdate">Enter date: </label>
                    <input type="text" name="wdate" id="wdate" required />
                </div>
                <div className="form-example">
                    <label htmlFor="passwd">Enter passwd: </label>
                    <input type="password" name="passwd" id="passwd" required />
                </div>
                <div className="form-example">
                    <input type="submit" value="post" />
                </div>
            </form>
        </div>
    )
}