import {

    openLesson,

    completeLesson,

    getCourseProgress

} from "../services/progress.service.js";

import {

    successResponse,

    errorResponse,

} from "../utils/apiResponse.js";

import {
    getLessonProgress,
} from "../services/progress.service.js";

export const open = async (req, res) => {

    try {

        const progress = await openLesson(

            req.user.id,

            req.params.lessonId

        );

        return successResponse(

            res,

            "Lesson opened.",

            progress

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

export const complete = async (req, res) => {

    try {

        const progress = await completeLesson(

            req.user.id,

            req.params.lessonId

        );

        return successResponse(

            res,

            "Lesson completed.",

            progress

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

export const getProgress = async (req, res) => {

    try {

        const progress = await getLessonProgress(

            req.user.id,

            req.params.lessonId

        );

        return successResponse(

            res,

            "Progress fetched successfully.",

            progress

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

export const courseProgress = async (req, res) => {

    try {

        const progress = await getCourseProgress(

            req.user.id,

            req.params.courseId

        );

        return successResponse(

            res,

            "Course progress fetched successfully.",

            progress

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