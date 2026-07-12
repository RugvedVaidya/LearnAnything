import {

    openLesson,

    completeLesson,

} from "../services/progress.service.js";

import {

    successResponse,

    errorResponse,

} from "../utils/apiResponse.js";

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