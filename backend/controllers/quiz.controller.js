import {
    generateChapterQuiz,
    generateCourseQuiz,
    submitQuiz,
    getQuizHistory,
    getAttempt,
    getQuizCourses,
    getQuizById,
    getCourseQuizHistory,
} from "../services/quiz.service.js";

import {
    successResponse,
    errorResponse,
} from "../utils/apiResponse.js";

export const createChapterQuiz = async (req, res) => {

    try {

        const quiz = await generateChapterQuiz(

            req.params.chapterId

        );

        return successResponse(

            res,

            "Quiz generated successfully.",

            quiz,

            201

        );

    } catch (error) {

        return errorResponse(

            res,

            error.message,

            [],

            500

        );

    }

};

export const createCourseQuiz = async (req, res) => {

    try {

        const quiz = await generateCourseQuiz(

            req.params.courseId

        );

        return successResponse(

            res,

            "Quiz generated successfully.",

            quiz,

            201

        );

    } catch (error) {

        return errorResponse(

            res,

            error.message,

            [],

            500

        );

    }

};

export const submit = async (req, res) => {

    try {

        const result = await submitQuiz(

            req.user.id,

            req.params.quizId,

            req.body.answers

        );

        return successResponse(

            res,

            "Quiz submitted successfully.",

            result

        );

    } catch (error) {

        return errorResponse(

            res,

            error.message,

            [],

            500

        );

    }

};

export const history = async (req, res) => {

    try {

        const attempts = await getQuizHistory(

            req.user.id

        );

        return successResponse(

            res,

            "Quiz history fetched.",

            attempts

        );

    } catch (error) {

        return errorResponse(

            res,

            error.message,

            [],

            500

        );

    }

};

export const attempt = async (req, res) => {

    try {

        const result = await getAttempt(

            req.params.attemptId,

            req.user.id

        );

        return successResponse(

            res,

            "Attempt fetched.",

            result

        );

    } catch (error) {

        return errorResponse(

            res,

            error.message,

            [],

            500

        );

    }

};

export const courses = async (req, res) => {

    try {

        const result = await getQuizCourses(

            req.user.id

        );

        return successResponse(

            res,

            "Quiz courses fetched successfully.",

            result

        );

    }

    catch (error) {

        return errorResponse(

            res,

            error.message,

            [],

            500

        );

    }

};

export const getQuiz = async (req, res) => {

    try {

        const quiz = await getQuizById(

            req.params.quizId

        );

        res.status(200).json({

            success: true,

            data: quiz,

        });

    }

    catch (error) {

        res.status(404).json({

            success: false,

            message: error.message,

        });

    }

};

export const courseQuizHistory = async (

    req,

    res,

) => {

    try {

        const history = await getCourseQuizHistory(

            req.user.id,

            req.params.courseId

        );

        res.status(200).json({

            success: true,

            data: history,

        });

    }

    catch (error) {

        res.status(400).json({

            success: false,

            message: error.message,

        });

    }

};