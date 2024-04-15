import express from "express";
import {Login, logout, Register} from "../controllers/userController.js"

const router=express.Router()
router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/logout").get(logout)
// router.route("/bookmark/:id").put(isAuthenticated, bookmark)

export default router;