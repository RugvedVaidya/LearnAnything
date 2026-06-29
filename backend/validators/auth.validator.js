import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(2).max(100),

    email: z.string().email(),

    password: z.string()
        .min(8)
        .regex(/[A-Z]/, "Must contain one uppercase letter")
        .regex(/[a-z]/, "Must contain one lowercase letter")
        .regex(/[0-9]/, "Must contain one number"),
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});