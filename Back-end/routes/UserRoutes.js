import express from "express";
import { deleteUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/alluser", getAllUsers);
router.delete("/delete/:id", deleteUser);

export default router;
