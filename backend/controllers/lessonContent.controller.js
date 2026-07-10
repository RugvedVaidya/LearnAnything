import { getLessonContent } from "../services/lessonContent.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const getLesson = async (req, res) => {

    try {

        const lesson = await getLessonContent(req.params.lessonId);

        return successResponse(
            res,
            "Lesson fetched successfully.",
            lesson
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