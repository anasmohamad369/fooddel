import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import { toast } from 'react-toastify'
const List = () => {
  const url = "http://localhost:4000"  
  const[list,setList] = useState([]);

   const fethList = async()=>{
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data)

     if (response.data.success) {
      setList(response.data.data)
     } 
     else{
      toast.error("error")
     }
     }
     useEffect(()=>{
      fethList();
     },[])

     const removeFood = async (foodId) => {
      try {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
        await fethList(); 
        if (response.data.success) {
          toast.success("Food removed successfully");
         
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Error removing food item");
        console.error(error);
      }
    };
    
   

  return (
    <div className='list add flex-col'>

    <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
      {list.map((item,index)=>{
        return(
        <div key={index} className="list-table-format">
            <img src={`${url}/images/`+item.image} alt='' />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
        </div>
        )



      })}

      </div>

    </div>
  )
}

export default List