import React from "react";
import "./Reastaurant.css";
import { restaurant_list } from "../../assets/assets";

const Restaurant_list = (category, setCategory) => {
  return (
    <>
      <h1>Top Restaurants for you!</h1>
      <div className="restaurantlist">
        {restaurant_list.map((item, index) => {
          return (
            <div className="restaurant-list" key={index}>
              <div className="restaurantcard">
                <div className="restaurantimg">
                  <img
                  ClassName={category===item.restaurant_cat?"active":""} 
                    src={item.restaurant_img}
                    alt={item.restaurant_name}
                  />
                </div>
                <div className="restaurantinfo">
                  <p className="resname">{item.restaurant_name}</p>
                  <p>{item.restaurant_cat}</p>
                </div>
                <div className="restaurantinfo2">
                  <p className="res_area">{item.restuarant_area}</p>
                  <p className="res_star">{item.res_star}</p>
                  <button  onClick={()=>setCategory(prev=>prev===item.restaurant_cat?"All":item.restaurant_cat) }
          key={index} >View Menu</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Restaurant_list;
