import { askLessonMentor } from "../services/mentor.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const ask = async (req, res) => {

    try {

        const { lessonId } = req.params;

        const { question } = req.body;

        const result = await askLessonMentor(
            lessonId,
            question
        );

        return successResponse(
            res,
            "Answer generated successfully.",
            result
        );

    } catch (error) {

        console.error(error);

        return errorResponse(
            res,
            error.message,
            [],
            500
        );

    }

};