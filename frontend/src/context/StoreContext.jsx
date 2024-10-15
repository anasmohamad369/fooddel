import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios"

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>
{
 const[cartItems, setCartItems]=useState({});
    const url ="http://localhost:4000";
// const[]
    const[token,setToken] = useState("");
    const[food_list , setFoodList]= useState([]);


 const addToCart = async(itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
     else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
     }
     if(token){
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
     }

 }
 const removecart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (token) {
        const apiUrl = url.endsWith('/') ? url : `${url}/`;
        console.log("API URL:", apiUrl + "api/cart/remove");
        
        await axios.post(apiUrl + "api/cart/remove", { itemId }, { headers: { token } });
    }
};


const localCartData = async (token)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData)
}


 const getTotalAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems)
    {
        if(cartItems[item] > 0)
        {
        let itemInfo = food_list.find((product)=>product._id === item)
        totalAmount += itemInfo.price* cartItems[item]; 
        }
    }
    return totalAmount;
 }

 const fetchFoodList = async ()=>{
         const response = await axios.get(url+"/api/food/list");
           setFoodList(response.data.data) 
         
 }

 useEffect(()=>{
   
    async function loadData() {
        await fetchFoodList()

        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            await localCartData(localStorage.getItem("token"));
       
        }
    }
    loadData();
 },[])

    const ContextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removecart,
        getTotalAmount,
        url,
        token,
        setToken,
    }
    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider