import React from 'react'
import "./exploremenu.css"
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => 
    {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore Our Menu</h1>
    <p className='exploretext'>Choose from a diverse menu feture </p>
    <div className="exploremenu-list">
        {menu_list.map((item,index)=>{
            return(
            
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name) }
          key={index}
          className="exploremenulistitem">
            <img className={category===item.menu_name?"active":""} 
            src={item.menu_image} alt=''/>
            <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu