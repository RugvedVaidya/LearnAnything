import prisma from "../config/prisma.js";
import { verifyToken } from "../utils/jwt.js";
import { errorResponse } from "../utils/apiResponse.js";

export const protect = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return errorResponse(
                res,
                "Authentication required",
                [],
                401
            );
        }

        const token = authHeader.split(" ")[1];

        const decoded = verifyToken(token);

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.sub,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });

        if (!user) {
            return errorResponse(
                res, "User not found", [],
                401
            );
        }

        req.user = user;

        next();

    } catch (error) {

        return errorResponse(
            res,
            "Invalid or expired token",
            [],
            401
        );

    }
};