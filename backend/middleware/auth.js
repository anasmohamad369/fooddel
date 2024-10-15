import jwt from "jsonwebtoken";

const authMiddleware = async(req,res,next)=>{
 const {token} = req.headers;

console.log('Token:', token); 
console.log(req.headers.authorization);  


 if (!token) {
    return res.json({sucess:false,message:"Not Authrozied Login"})
 }
 try{
    const token_decode = jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
 }catch(error)
 {
   console.log(error)
   res.json({sucess:false, message:"Error"})  
 }
 


}

export default authMiddleware;