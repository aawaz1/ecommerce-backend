import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router()
import {createPaymentLink, updatePaymentInformation } from "../controllers/paymentController.js"


router.post(':id/' , requireSignIn, createPaymentLink);
router.get("/", requireSignIn, updatePaymentInformation)

export default  router;