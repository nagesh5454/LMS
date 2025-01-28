import express from "express";
import { getUserProfile, login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.route("/register").post(register);  //https://lms-gtai.onrender.com/api/v1/user/register
router.route("/login").post(login);  //https://lms-gtai.onrender.com/api/v1/user/login
router.route("/logout").get(logout);  //https://lms-gtai.onrender.com/api/v1/user/logout
router.route("/profile").get(isAuthenticated, getUserProfile);   //https://lms-gtai.onrender.com/api/v1/user/profile
router.route("/profile/update").put(isAuthenticated, upload.single("profilePhoto"), updateProfile); //https://lms-gtai.onrender.com/api/v1/user/prfile/update

export default router;