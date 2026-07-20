import express from "express";

import { protect } from "../middleware/auth.middleware.js";

import {

    openLesson,

    completeLesson,

    courseProgress,

    dashboardProgress,

} from "../controllers/progress.controller.js";

const router = express.Router();

router.post(

    "/lesson/:lessonId/open",

    protect,

    openLesson

);

router.post(

    "/lesson/:lessonId/complete",

    protect,

    completeLesson

);

router.get(

    "/course/:courseId",

    protect,

    courseProgress

);

router.get(

    "/dashboard",

    protect,

    dashboardProgress

);

export default router;