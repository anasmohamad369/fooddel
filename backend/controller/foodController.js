import mongoose from "mongoose";
import foodModel from "../models/foodmodel.js";
// import fs from './fs';
import fs from 'fs';

// Function to add a food item
const addFood = async (req, res) => {
    let image_filename = req.file.filename;  // Corrected
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating,
        category: req.body.category,
        image: image_filename
    });
 
    

    try {
        await food.save();
        res.json({ success: true, message: "Food item added successfully" });
    } catch (error) {
        res.json({ success: false, message: "Error adding food item" });
    }
   
};

//food list

const listFood = async(req,res)=>{

 try {
    const foods = await foodModel.find({});
    res.json({success:true,data:foods})
 } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
 }

}
// remove

const removeFood = async(req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        // await foodModel.findByIdAndDelete(req.body.id);
        res.json({succes:true,message:"food removed"})
    } catch (error) {
          
            console.log(error);
            res.json({succes:false, message:"Error"});

    }
}

export { addFood ,listFood,removeFood};
