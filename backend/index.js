import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";
import { placeorder } from "./controller/orderController.js";


const app = express();
const port = 4000;

// Middleware
app.use(express.json());  // Parse JSON bodies
app.use(cors());  // Enable CORS

// Connect to MongoDB
connectDB();

// API Endpoints
app.use("/api/user" ,userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static(`uploads`))
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRoute)
// /

// Test route
app.get("/", (req, res) => {
    res.send("API WORKING");
});

// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

