import React from 'react'
import NavBar from './compnets/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/cart';
import PlaceOrder from './pages/placeorder/placeOrder';
import Footer from './compnets/Footer/Footer';
import { useState } from 'react';
import LoginPopUp from './compnets/Login/LoginPopUp';
const App = () => {
  const[showlogin, SetshowLogin]= useState(false)
  return (
    
    <>
      {showlogin?<LoginPopUp SetshowLogin={SetshowLogin}/>:<></>}
    <div className="app">
      <NavBar SetshowLogin={SetshowLogin}/>
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App