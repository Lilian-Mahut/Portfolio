import express from "express";
const router = express.Router();

import UserController from "./controller";
import authorize from "../../helpers/authorize";

//Private routes, only accessible by admin rights
router.get("/", authorize("admin"), UserController.getAll);
router.get("/:id", authorize(), UserController.getById);

//Public routes
router.post("/authenticate", UserController.authenticate);
router.post("/register", UserController.register);

export default router;
