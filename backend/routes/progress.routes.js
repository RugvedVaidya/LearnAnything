import express from "express";

import {

    protect,

} from "../middleware/auth.middleware.js";

import {
    open,
    complete,
    getProgress,
} from "../controllers/progress.controller.js";

const router = express.Router();

router.use(protect);

router.post("/open/:lessonId", open);

router.post("/complete/:lessonId", complete);

router.get("/:lessonId", getProgress);

export default router;