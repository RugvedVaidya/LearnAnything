import express from "express";

import { generate } from "../controllers/chapter.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { generateChapterValidator } from "../validators/chapter.validator.js";

const router = express.Router();

router.post(
    "/generate/:moduleId",
    protect,
    generateChapterValidator,
    validate,
    generate
);

export default router;