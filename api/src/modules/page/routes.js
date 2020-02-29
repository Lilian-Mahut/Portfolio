import express from "express";
const router = express.Router();

import PageController from "./controller";

// private routes, only access by admin rights
router.get("/", PageController.getAll);
router.get("/:id", PageController.getById);

// public routes

export default router;
