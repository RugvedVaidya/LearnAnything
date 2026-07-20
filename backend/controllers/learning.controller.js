import { getMyLearning } from "../services/learning.service.js";

import {

    successResponse,

    errorResponse

} from "../utils/apiResponse.js";

export const myLearning = async (req, res) => {

    try {

        const data = await getMyLearning(req.user.id);

        return successResponse(

            res,

            "Learning data fetched successfully.",

            data

        );

    }

    catch (error) {

        console.error(error);

        return errorResponse(

            res,

            "Failed to fetch learning data.",

            [],

            500

        );

    }

};