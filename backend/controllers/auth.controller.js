import { loginUser, registerUser, getCurrentUser } from "../services/auth.service.js";
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

export const me = async (req, res) => {

    try {

        const user = await getCurrentUser(req.user.id);

        return successResponse(
            res,
            "Current user fetched successfully.",
            user
        );

    } catch (error) {

        return errorResponse(
            res,
            error.message
        );

    }

};