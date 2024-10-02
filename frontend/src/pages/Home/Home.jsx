import React, { useState } from 'react'
import './home.css'
import Header from '../../compnets/header/header'
import ExploreMenu from '../../compnets/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../compnets/FoodDisplay/FoodDisplay'

const Home = () => {
  const[category ,setCategory]=useState("All");
  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category} />
    </div>
  )
}

export default Home