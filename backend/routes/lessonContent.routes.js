import express from "express";

import { getLesson } from "../controllers/lessonContent.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";

import { lessonContentValidator } from "../validators/lessonContent.validator.js";

const router = express.Router();

router.get(
    "/:lessonId",
    protect,
    lessonContentValidator,
    validate,
    getLesson
);

export default router;