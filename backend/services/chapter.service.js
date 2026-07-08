import prisma from "../config/prisma.js";
import { generateChapters } from "./ai/chapter.service.js";

export const generateChapter = async (moduleId) => {

    const module = await prisma.module.findUnique({
        where: {
            id: moduleId,
        },
        include: {
            course: true,
        },
    });

    if (!module) {
        throw new Error("Module not found.");
    }

    const aiResponse = await generateChapters({
        courseTitle: module.course.title,
        courseDescription: module.course.description,
        moduleTitle: module.title,
        moduleDescription: module.description,
        difficulty: module.course.difficulty,
    });

    const chapters = await prisma.$transaction(async (tx) => {

        await tx.chapter.deleteMany({
            where: {
                moduleId,
            },
        });

        const createdChapters = [];

        for (const chapter of aiResponse.chapters) {

            const created = await tx.chapter.create({
                data: {
                    title: chapter.title,
                    description: chapter.description,
                    order: chapter.order,
                    moduleId,
                },
            });

            createdChapters.push(created);
        }

        return createdChapters;

    });

    return chapters;

};