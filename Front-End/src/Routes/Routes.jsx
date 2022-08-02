import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Components/Home'
import Login from '../Components/Login'
import ProductList from '../Components/ProductList'
import Register from '../Components/Register'

const Routess = () => {
    return (
        <div>
            <Routes>
                < Route path='/' element={< Home />} />
                < Route path='/products' element={< ProductList />} />
                < Route path='/register' element={< Register/>} />
                < Route path='/login' element={< Login />} />
                < Route path='/productlist' element={< ProductList/>} />
            </Routes>
        </div>
    )
}
export default Routess
