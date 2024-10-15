import mongoose from "mongoose";  // Corrected 'mangoose' to 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anasmohamad369:Anas-2004@cluster0.7zidp.mongodb.net/food-del')
        .then(() => {
            console.log("DB CONNECTED");
        })
        .catch((error) => {
            console.error("DB Connection Failed", error);
        });
};
