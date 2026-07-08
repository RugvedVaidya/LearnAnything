import { generateLesson } from "../services/lesson.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const generate = async (req, res) => {

    try {

        const lessons = await generateLesson(req.params.chapterId);

        return successResponse(
            res,
            "Lessons generated successfully.",
            lessons
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