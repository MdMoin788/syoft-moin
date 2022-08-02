import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetApiProducts } from '../Redux/action'
import Style from "../Styles/Style.module.css"
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetApiProducts())
    }, [])
    const products = useSelector((store) => store.products.products)
    console.log('products', products);
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <div>
            Home
            <div>
                {
                    user && products.map((ele) => {
                        return (
                            <div className={Style.products}>
                             <div className={Style.products}>

                             <div >{ele.inventory_count}</div>
                                <div>{ele.product_name}</div>
                                <div>{ele.product_description}</div>
                                <div>{ele.product_price}</div>
                             </div>
                             <br />
                             <br />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Home
