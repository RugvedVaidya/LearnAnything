import express from "express";

import { navigation } from "../controllers/navigation.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.get("/:lessonId", navigation);

export default router;