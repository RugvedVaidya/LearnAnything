import { z } from "zod";

export const curriculumResponseSchema = z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum([
        "BEGINNER",
        "INTERMEDIATE",
        "ADVANCED",
    ]),
    estimatedHours: z.number(),
    modules: z.array(
        z.object({
            order: z.number(),
            title: z.string(),
            description: z.string(),
            estimatedTime: z.number().optional(),
        })
    ),
});