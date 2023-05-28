"use client"
import { useEffect, useState } from "react"
export default function Home() {
    const [products, setProducts] = useState([<></>]);
    useEffect(() => {
        async function initProducts() {
            await fetch(`https://pastel.im/notice?get=true`)
                .then(response => response.json())
                .then(response => {
                    const value = response.map((item: any) => {
                        return (<div key={item.Title}>
                            <div key={`${item.Num}${item.Title}1`}>
                                {item.Num}
                            </div>
                            <div key={`${item.Num}${item.Title}2`}>
                                {item.Title}
                            </div>
                        </div>)
                    })
                    setProducts(value);
                    console.log(value);
                })
                .catch(err => console.error(err));
        }
        initProducts();
    }, []);
    return (
        <div>
            {products}
        </div>
    )
}