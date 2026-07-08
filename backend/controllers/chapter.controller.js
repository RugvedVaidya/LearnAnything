import { generateChapter } from "../services/chapter.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const generate = async (req, res) => {

    try {

        const chapters = await generateChapter(req.params.moduleId);

        return successResponse(
            res,
            "Chapters generated successfully.",
            chapters
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