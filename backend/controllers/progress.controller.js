import {
    markLessonOpened,
    markLessonCompleted,
    getCourseProgress,
    getDashboardProgress,
} from "../services/progress.service.js";

import {
    successResponse,
    errorResponse,
} from "../utils/apiResponse.js";

/*
|--------------------------------------------------------------------------
| Mark Lesson Opened
|--------------------------------------------------------------------------
*/

export const openLesson = async (req, res) => {

    try {

        const progress = await markLessonOpened(

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

        console.error(error);

        return errorResponse(

            res,

            "Failed to update lesson.",

            [],

            500

        );

    }

};

/*
|--------------------------------------------------------------------------
| Mark Lesson Completed
|--------------------------------------------------------------------------
*/

export const completeLesson = async (req, res) => {

    try {

        const progress = await markLessonCompleted(

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

        console.error(error);

        return errorResponse(

            res,

            "Failed to complete lesson.",

            [],

            500

        );

    }

};

/*
|--------------------------------------------------------------------------
| Course Progress
|--------------------------------------------------------------------------
*/

export const courseProgress = async (req, res) => {

    try {

        const progress = await getCourseProgress(

            req.user.id,

            req.params.courseId

        );

        return successResponse(

            res,

            "Course progress fetched.",

            progress

        );

    }

    catch (error) {

        console.error(error);

        return errorResponse(

            res,

            "Failed to fetch progress.",

            [],

            500

        );

    }

};

/*
|--------------------------------------------------------------------------
| Dashboard Progress
|--------------------------------------------------------------------------
*/

export const dashboardProgress = async (req, res) => {

    try {

        const progress = await getDashboardProgress(

            req.user.id

        );

        return successResponse(

            res,

            "Dashboard progress fetched.",

            progress

        );

    }

    catch (error) {

        console.error(error);

        return errorResponse(

            res,

            "Failed to fetch dashboard progress.",

            [],

            500

        );

    }

};