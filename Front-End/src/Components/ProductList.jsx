import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate   } from "react-router-dom"
import { CreateProductApi } from '../Redux/action'
import Style from "../Styles/Style.module.css"
const ProductList = () => {
    const id = JSON.parse(localStorage.getItem('id'));
    

    const dispatch = useDispatch()
    const [products, setProducts] = useState({
        product_name: "",
        product_price: "",
        product_description: "",
        inventory_count: "",
        user_id: id,
    })
    const handleProductList = (e) => {
        const { name, value } = e.target
    
            setProducts({ ...products, [name]: value })
    }
    const handleSubmitProductList = () => {
        dispatch(CreateProductApi(products))
    }
    return (
        <div className={Style.ProductList}>
            ProductList Here...
            <br />
            <br />
            product_name :
            <br />
            <input type="text" onChange={handleProductList} name='product_name' placeholder='product_name here....' />
            <br />
            <br />
            product_price :
            <br />
            <input type="text" onChange={handleProductList} name='product_price' placeholder='product_price here....' />
            <br />
            <br />
            product_description :
            <br />
            <input type="password" onChange={handleProductList} name='product_description' placeholder='product_description here....' />
            <br />
            <br />
            inventory_count  :
            <br />
            <input type="text" onChange={handleProductList} name='inventory_count' placeholder='inventory_count here....' />
            <br />
            <br />
            <button onClick={handleSubmitProductList}> Add Product</button>
            <br />
            <br />
          
        </div>
    )
}
export default ProductList
