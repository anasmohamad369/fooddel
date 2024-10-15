import React from 'react'
import NavBar from './componets/navbar/navBar'
import SideBar from './componets/Sidebar/sideBar'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import Add from './pages/Add/Add'
import { Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
    <ToastContainer/>
      <NavBar/>
      <hr/>
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path="/add" element ={<Add/>} />
          <Route path="/list" element ={<List/>} /> <Route path="/orders" element ={<Orders/>} />
          
        </Routes>
      </div>
    </div>
  )
}

export default App