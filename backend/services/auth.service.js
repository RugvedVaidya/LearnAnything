import prisma from "../config/prisma.js";
import { hashPassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";
import { comparePassword } from "../utils/password.js";

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

export const loginUser = async ({ email, password }) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        throw new Error("Invalid email or password.");
    }

    const isPasswordValid = await comparePassword(
        password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error("Invalid email or password.");
    }

    const token = generateToken({
        id: user.id,
        email: user.email,
    });

    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        token,
    };
};