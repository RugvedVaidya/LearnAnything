import prisma from "../config/prisma.js";
import { generateCurriculum } from "./ai/curriculum.service.js";

export const generateCourse = async (input, userId) => {

    // 1. Ask AI for curriculum
    const curriculum = await generateCurriculum(input);

    // 2. Save everything atomically
    const course = await prisma.$transaction(async (tx) => {

        // Create Course
        const createdCourse = await tx.course.create({
            data: {
                title: curriculum.title,
                description: curriculum.description,
                difficulty: curriculum.difficulty,
                estimatedHours: curriculum.estimatedHours,
                status: "READY",
                userId,
            },
        });

        // Create Modules
        await tx.module.createMany({
            data: curriculum.modules.map((module) => ({
                title: module.title,
                description: module.description,
                order: module.order,
                estimatedTime: module.estimatedTime,
                courseId: createdCourse.id,
            })),
        });

        return createdCourse;
    });

    return course;
};