import { body, param } from "express-validator";

export const mentorValidator = [

    param("lessonId")
        .notEmpty()
        .withMessage("Lesson ID is required."),

    body("question")
        .trim()
        .notEmpty()
        .withMessage("Question is required.")
        .isLength({
            min: 3,
            max: 1000,
        }),

];