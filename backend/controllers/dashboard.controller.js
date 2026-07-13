import { getDashboardSummary } from "../services/dashboard.service.js";

import {

    successResponse,

    errorResponse,

} from "../utils/apiResponse.js";

export const summary = async (req, res) => {

    try {

        const data = await getDashboardSummary(req.user.id);

        return successResponse(

            res,

            "Dashboard loaded successfully.",

            data

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