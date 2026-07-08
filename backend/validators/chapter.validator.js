import { param } from "express-validator";

export const generateChapterValidator = [
    param("moduleId")
        .notEmpty()
        .withMessage("Module ID is required."),
];