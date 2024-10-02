import React from 'react'
import NavBar from './compnets/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/cart/cart';
import PlaceOrder from './pages/placeorder/placeOrder';
const App = () => {
  return (
    <div className="app">
      <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
    </Routes>
    </div>
  )
}

export default App