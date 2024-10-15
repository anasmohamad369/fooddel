import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeorder } from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeorder);


export default orderRouter