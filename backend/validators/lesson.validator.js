import { param } from "express-validator";

export const generateLessonValidator = [
    param("chapterId")
        .notEmpty()
        .withMessage("Chapter ID is required."),
];