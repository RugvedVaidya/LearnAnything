import express from "express";

import {
    create,
    getAll,
    getById,
    update,
    remove,
    generateCourse
} from "../controllers/course.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { curriculumPrompt } from "../prompts/curriculum/curriculum.prompt.js";

const router = express.Router();

router.use(protect);

router.post("/", create);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", update);

router.delete("/:id", remove);

router.post("/generate", protect, generateCourse);

export default router;