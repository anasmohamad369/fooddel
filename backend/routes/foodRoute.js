import express from "express";
import { addFood,listFood,removeFood } from "../controller/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image storage engine using multer
const storage = multer.diskStorage({
    destination: "uploads",  // Ensure the uploads directory exists
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);  // Corrected file naming
    }
});

// Initialize multer with the storage engine
const upload = multer({ storage: storage });

// Define the route to add food with image upload
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;
 