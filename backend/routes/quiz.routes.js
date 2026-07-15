import express from "express";

import {

    createChapterQuiz,

    createCourseQuiz,

    submit,

    history,

    attempt,

    courses,

    getQuiz,

    courseQuizHistory,

} from "../controllers/quiz.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.post(

    "/chapter/:chapterId",

    createChapterQuiz

);

router.post(

    "/course/:courseId",

    createCourseQuiz

);

router.post(

    "/:quizId/submit",

    submit

);

router.get(

    "/history",

    history

);

router.get(

    "/attempt/:attemptId",

    attempt

);

router.get("/", courses);

router.get(

    "/course/:courseId/history",

    protect,

    courseQuizHistory,

);

router.get(
    "/:quizId",
    protect,
    getQuiz
);

export default router;