import { param } from "express-validator";

export const lessonContentValidator = [

    param("lessonId")
        .notEmpty()
        .withMessage("Lesson ID is required."),

];