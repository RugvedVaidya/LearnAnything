import { validationResult } from "express-validator";
import { errorResponse } from "../utils/apiResponse.js";

export const validate = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return errorResponse(
            res,
            "Validation failed.",
            errors.array(),
            400
        );

    }

    next();

};