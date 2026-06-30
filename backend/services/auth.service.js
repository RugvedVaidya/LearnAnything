import prisma from "../config/prisma.js";
import { hashPassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";

export const registerUser = async ({ name, email, password }) => {

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        throw new Error("User already exists.");
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    const token = generateToken({
        id: user.id,
        email: user.email,
    });

    return {
        user,
        token,
    };
};