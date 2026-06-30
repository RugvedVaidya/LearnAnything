import { z } from "zod";

export const generateCourseSchema = z.object({

    topic: z.string().min(3),

    currentKnowledge: z.enum([
        "BEGINNER",
        "INTERMEDIATE",
        "ADVANCED"
    ]),

    goal: z.enum([
        "Interview Preparation",
        "Job",
        "College",
        "Research",
        "Hobby"
    ])

});