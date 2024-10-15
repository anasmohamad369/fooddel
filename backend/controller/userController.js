import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
// import { use } from "bcrypt/promises.js";

const loginUser = async(req,res)=>{

    const { email, password } = req.body;

    try {

      const user = await userModel.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: "User does not exist" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.json({ success: false, message: "Invalid credentials" });
      }
  
      const token = createToken(user._id);
  
      res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "An error occurred during login" });
    }

}

const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser = async(req,res)=>{

    const{name,password,email} =req.body;
    try {
        const exist = await userModel.findOne({email});
        if (exist) {
            return res.json({success:false, message:"user already exist"}) 
        }
    
    if(!validator.isEmail(email)){ 
       return res.json({success:false,message:"please enter a valid email"})
    }

    if(password.length<8){
     return res.json({success:false,message:"please enter strong password"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name :name,
        email:email,
        password:hashedPassword
})

    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true,token})


 }
    catch (error) {

        console.log(error);
        res.json({success:false,message:"error"})
    }

}

export {loginUser,registerUser}