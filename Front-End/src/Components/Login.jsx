import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Logins } from '../Redux/action'
import Style from "../Styles/Style.module.css"
import { Link, useNavigate   } from "react-router-dom"
const Login = () => {
const navigate = useNavigate()



    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleLogin = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmitLogin = () => {
        dispatch(Logins(user))
        navigate("/")
    }
    return (
        <div className={Style.Login}>
            Login Here...
            <br />
            <br />
            Email :
            <br />
            <input type="text" onChange={handleLogin} name='email' placeholder='email here....' />
            <br />
            <br />
            Password :
            <br />
            <input type="password" onChange={handleLogin} name='password' placeholder='password here....' />
            <br />
            <br />
            <button onClick={handleSubmitLogin}>Login Now</button>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
export default Login
