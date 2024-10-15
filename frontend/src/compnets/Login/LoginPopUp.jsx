import React, {  useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const LoginPopUp = ({SetshowLogin}) => {

    const{url,setToken}= useContext(StoreContext)

    const [currentState ,setCurrentState]=useState("Login");
    const [data ,setData] = useState({
        name:"",
        email:"",
        password:""

    })
    const onChangeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
 const onLogin = async(event)=>{
    event.preventDefault()
    let newUrl = url;
    if (currentState==="Login") {
        newUrl += "/api/user/login"
    }
    else{
        newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl,data);
    if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token)
        SetshowLogin(false)
    }
    else{
        alert(response.data.mesage)
    }
 }
   

  return (
    <div className='LoginPopUp'>
    <form onSubmit={onLogin} className="LoginPopUp-container">
        <div className="loginpopup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>SetshowLogin(false)}  src={assets.cross_icon} alt='cross icon'/>

        </div>
        <div className="loginpopupinput">
            {currentState==="Login"?<></>:  <input name='name' type='text'  onChange={onChangeHandler} value={data.name} placeholder='Your Name' required/>  }
            <input  name='email'type='email' onChange={onChangeHandler} value={data.email}   placeholder='enter email' required/>
            <input  name='password'  type='password' onChange={onChangeHandler} value={data.password}  placeholder='enyter password' required/>
            
        </div>
        <button type='submit'> {currentState==="Signup"?"Create Account":"Login"} </button>
        <div className="loginpopupcondition">
            <input type='checkbox' required/>
            <p>By continuing,I agree that i was agree terms and conditons</p>
        </div>
        {currentState==="Login"? <p>Create a new account <span onClick={()=>setCurrentState("Signup")}>Click here</span></p>:  <p>Already have account <span onClick={()=>setCurrentState("Login")}> Click here</span></p>}
       
      
    </form>

    </div>
  )
}

export default LoginPopUp