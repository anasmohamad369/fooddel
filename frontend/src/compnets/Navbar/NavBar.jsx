import React, { useState } from 'react'
import './NabBar.css'

import {assets} from '../../assets/assets'
const NavBar = () => {
  
    const[menu ,setMenu]=useState("home");

    return (
  

    <>
       <div className="navbar">
        <img src={assets.logo } alt="sc" className='logo'/>
        <ul className='navmenu'>
            <li
            onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("menu")}
            className={menu==='menu'?"active":""}>Menu</li>
            <li
            onClick={()=>setMenu("mobile-app")}
            className={menu==='mobile-app'?"active":""}
            >Mobile-app</li>
            <li
            onClick={()=>setMenu("contactus")}
            className={menu==='contactus'?"active":""}
            >Contact us</li>
        </ul>
        <div className="navbarright">
           
            <img src={assets.search_icon} alt=''/>
           <div className="navsearchicon">

            <img src={assets.basket_icon}/>
            <div className="dot"></div>
            </div>
        <button>Sigin</button>
        </div>

       </div>
    </>
  )
}

export default NavBar