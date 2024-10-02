import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removecart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="foodimgcontainer">
        <img className='fooditemimg' src={image} alt={name} />
        {/* Add to cart or update quantity */}
        {!cartItems[id] ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='Add to cart' />
        ) : (
          <div className='fooditemcounter'>
            <img onClick={() => removecart(id)} src={assets.remove_icon_red} alt='Remove from cart' />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='Add more' />
          </div>
        )}
      </div>
      <div className="fooditeminfo">
        <div className="fooditemrating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt='Rating' />
        </div>
        <p className='fooditemdesc'>{description}</p>
        <p className="fooditemprice">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
