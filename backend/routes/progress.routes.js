import express from "express";

import {

    open,

    complete,

} from "../controllers/progress.controller.js";

import {

    protect,

} from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.post("/open/:lessonId", open);

router.post("/complete/:lessonId", complete);

export default router;