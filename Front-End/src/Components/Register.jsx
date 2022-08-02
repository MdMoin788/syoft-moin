import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate   } from "react-router-dom"
import { Registers } from '../Redux/action'
import Style from "../Styles/Style.module.css"
const Register = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        phone: "",
        role: [],
    })
    const handleRegister = (e) => {
        const { name, value } = e.target
        if (name == "role") {
            setUser({ ...user, [name]: [value] })
        } else {
            setUser({ ...user, [name]: value })
        }
    }
    const handleSubmitRegister = () => {
        dispatch(Registers(user))
        navigate("/login")
    }
    return (
        <div className={Style.register}>
            Register Here...
            <br />
            <br />
            Email :
            <br />
            <input type="text" onChange={handleRegister} name='email' placeholder='email here....' />
            <br />
            <br />
            Password :
            <br />
            <input type="password" onChange={handleRegister} name='password' placeholder='password here....' />
            <br />
            <br />
            Username  :
            <br />
            <input type="text" onChange={handleRegister} name='username' placeholder='username here....' />
            <br />
            <br />
            Phone :
            <br />
            <input type="number" onChange={handleRegister} name='phone' placeholder='phone here....' />
            <br />
            <br />
            Role :
            <br />
            <input type="text" onChange={handleRegister} name='role' placeholder='role here....' />
            <br />
            <br />
            <button onClick={handleSubmitRegister}>Register Now</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div > click Here... <Link to={"/login"}><button>Login</button></Link></div>
        </div>
    )
}
export default Register
