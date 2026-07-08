import express from "express";

import { generate } from "../controllers/lesson.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";

import { generateLessonValidator } from "../validators/lesson.validator.js";

const router = express.Router();

router.post(
    "/generate/:chapterId",
    protect,
    generateLessonValidator,
    validate,
    generate
);

export default router;