import React, { useEffect, useState } from 'react'
import "./Products.css"
import { IoCartOutline } from "react-icons/io5";
import axios from 'axios';
import yulduz from "../images/hero/div.product-rate.png"

let API_URL = "https://fakestoreapi.com/products/"

function Products() {

    const [data, setData] = useState([])
    const [count, setCount] = useState(4)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`${API_URL}?limit=${count}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(true))
    }, [count])

    let products = data?.map(el => (
        <div className="products__card">
            <img className='card__img' src={el.image} alt="" />
            <p className='card__category'>{el.category}</p>
            <h5 className='card__title'>{el.title}</h5>
            <div className='card__reyting'>
                <img src={yulduz} alt="" />
                <p>({el.rating.rate})</p>
            </div>
            <div className='card__by'>
                <p>By</p>
                <label htmlFor="">Stouffer</label>
            </div>
            <div className='card__add'>
                <div>
                    <span>${el.price}</span>
                    <p>${el.price - 1}</p>
                </div>
                <button ><IoCartOutline /> Add</button>
            </div>
        </div>))

    return (
        <div className='products__heros container '>

            {loading ? <h1 style={{ position: "fixed", width: "100vw", height: "100vh", zIndex: "2000" }}>loading.....</h1> : <></>}
            <div className='products__heros__title'>
                <h2>Popular Products</h2>
            </div>
            <div className="products">
                {products}
                <button onClick={() => setCount(p => p + 4)} className='see__more'>See more</button>
            </div>
        </div>
    )
}

export default Products