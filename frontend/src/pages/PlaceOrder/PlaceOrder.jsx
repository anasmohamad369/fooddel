import React, { useContext, useState } from 'react';
import './placeorder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
// import { log } from 'console';

const PlaceOrder = () => {
  const { getTotalAmount, token, food_list, cartItems, } = useContext(StoreContext);

  const url = "http://localhost:4000";
  const [data, setData] = useState({
    firstName: "", 
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    phone: ""
  });

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  // useEffect(()=>{
  //   console.log(data);
  // },[data])
 
 const Order = async(event)=>{

  event.preventDefault();
  let orderItmes=[];
    food_list.map((item)=>{

      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"]= cartItems[item._id];
        orderItmes.push(itemInfo)  
      }
      // console.log(orderItmes);
    })

    let orderData= {

      address:data,
      items:orderItmes,
      amount: getTotalAmount()
    }
    console.log(orderData);
    try {
      let response = await axios.post(url + "/api/order/place", { orderData }, { headers: { Authorization: `Bearer ${token}` } });

      console.log(response.data);
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        console.log(response.data.message); // Log the error message
        alert("Authorization error: Please log in.");
        // window.location.href = '/login'; // Redirect to login
      }
      
    } catch (error) {
      console.error("API error: ", error);
      alert("An error occurred while placing the order.");
    }
    

 
 }


  return (
    <form onSubmit={Order} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={data.firstName} 
            onChange={onChangeHandler}
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={data.lastName} 
            onChange={onChangeHandler}
          />
        </div>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={data.email} 
          onChange={onChangeHandler}
        />
        <input 
          type="text" 
          name="street" 
          placeholder="Street" 
          value={data.street} 
          onChange={onChangeHandler}
        />
        <div className="multi-fields">
          <input 
            type="text" 
            name="city" 
            placeholder="City" 
            value={data.city} 
            onChange={onChangeHandler}
          />
          <input 
            type="text" 
            name="state" 
            placeholder="State" 
            value={data.state} 
            onChange={onChangeHandler}
          />
        </div>
        <input 
          type="text" 
          name="phone" 
          placeholder="Phone" 
          value={data.phone} 
          onChange={onChangeHandler}
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>{getTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</b>
            </div>
            <hr />
          </div>
          <button type='submit'>Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
