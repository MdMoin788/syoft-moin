import React from 'react'
import Style from "../Styles/Style.module.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <div>
            <div className={Style.navbar}>
                <div className={Style.nav}>
                    <div className={Style.box}><Link to={"/"}><button >Home</button></Link></div>
                    { user && <div className={Style.box}><Link to={"/productlist"}><button >Products Lists</button></Link></div>}
                    <div className={Style.box}><Link to={"/register"}><button>Sign up</button></Link></div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
