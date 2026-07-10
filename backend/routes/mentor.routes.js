import express from "express";

import { ask } from "../controllers/mentor.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";

import { mentorValidator } from "../validators/mentor.validator.js";

const router = express.Router();

router.post(
    "/:lessonId",
    protect,
    mentorValidator,
    validate,
    ask
);

export default router;