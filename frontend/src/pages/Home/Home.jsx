import React, { useState } from 'react'
import './home.css'
import Header from '../../compnets/header/header'
import ExploreMenu from '../../compnets/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../compnets/FoodDisplay/FoodDisplay'
import Restaurant_list from '../../compnets/Restaurant/Restaurant_list'
import AppDownload from '../../compnets/AppDownload/AppDownload'
const Home = () => {
  const[category ,setCategory]=useState("All");
  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    {/* <Restaurant_list/> */}
    
    <FoodDisplay category={category} />
    <AppDownload/>
    </div>
  )
}

export default Home