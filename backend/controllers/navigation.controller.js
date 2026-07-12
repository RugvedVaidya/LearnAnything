import { getLessonNavigation } from "../services/navigation.service.js";

import {
    successResponse,
    errorResponse,
} from "../utils/apiResponse.js";

export const navigation = async (req, res) => {

    try {

        const navigationData = await getLessonNavigation(

            req.params.lessonId

        );

        return successResponse(

            res,

            "Lesson navigation fetched successfully.",

            navigationData

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