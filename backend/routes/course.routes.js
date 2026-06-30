import express from "express";

import {
    create,
    getAll,
    getById,
    update,
    remove,
} from "../controllers/course.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.post("/", create);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", update);

router.delete("/:id", remove);

export default router;