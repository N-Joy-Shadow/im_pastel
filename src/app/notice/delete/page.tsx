export default function DeleteArticle() {
    return (
        <div>
            <form action="/article_delete" method="post" className="form-example">
                <div className="form-example">
                    <label htmlFor="num">Enter number: </label>
                    number <input type="text" name="num" id="num" required />
                    password <input type="password" name="passwd" id="passwd" required />
                    <input type="submit" value="delete" />
                </div>
            </form>
        </div>
    )


}