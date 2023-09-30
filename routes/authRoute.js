import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
} from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
//REGISTER || METHOD PORT
router.post("/register", registerController);

// login
router.post("/login", loginController);

// forgot passWord
router.post('/forgot-password', forgotPasswordController)

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

// protected User route auth

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected Admin route auth

router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});



// 
router.put("/profile" , requireSignIn , updateProfileController)

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

export default router;