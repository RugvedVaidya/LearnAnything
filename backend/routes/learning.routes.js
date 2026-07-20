import express from "express";

import { myLearning } from "../controllers/learning.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get(
    "/",
    protect,
    myLearning
);

export default router;