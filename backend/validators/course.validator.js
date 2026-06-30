import { z } from "zod";

export const createCourseSchema = z.object({

    title: z.string().min(3),

    description: z.string().optional(),

    difficulty: z.enum([
        "BEGINNER",
        "INTERMEDIATE",
        "ADVANCED",
    ]),

    estimatedHours: z.number().min(1)

});