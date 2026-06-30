import prisma from "../config/prisma.js";
import { generateCurriculum } from "./ai/curriculum.service.js";

export const generateCourse = async (input, userId) => {

    const curriculum = await generateCurriculum(input);

    return await prisma.$transaction(async (tx) => {

        const course = await tx.course.create({
            data: {
                title: curriculum.title,
                description: curriculum.description,
                difficulty: curriculum.difficulty,
                estimatedHours: curriculum.estimatedHours,
                userId,
            },
        });

        for (const module of curriculum.modules) {

            await tx.module.create({
                data: {
                    title: module.title,
                    description: module.description,
                    order: module.order,
                    courseId: course.id,
                },
            });

        }

        return course;

    });

};