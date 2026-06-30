import { loginUser, registerUser } from "../services/auth.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const register = async (req, res) => {

    try {

        const result = await registerUser(req.body);

        return successResponse(
            res,
            "User registered successfully.",
            result,
            201
        );

    } catch (error) {

        return errorResponse(
            res,
            error.message,
            [],
            400
        );

    }

};

export const login = async (req, res) => {
    try {
        const result = await loginUser(req.body);

        return successResponse(
            res,
            "Login successful.",
            result
        );

    } catch (error) {

        return errorResponse(
            res,
            error.message,
            [],
            401
        );

    }
};