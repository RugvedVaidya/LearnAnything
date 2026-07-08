import prisma from "../config/prisma.js";
import { generateLessons } from "./ai/lesson.service.js";

export const generateLesson = async (chapterId) => {

    const chapter = await prisma.chapter.findUnique({
        where: {
            id: chapterId,
        },
        include: {
            module: {
                include: {
                    course: true,
                },
            },
        },
    });

    if (!chapter) {
        throw new Error("Chapter not found.");
    }

    const aiResponse = await generateLessons({
        courseTitle: chapter.module.course.title,
        moduleTitle: chapter.module.title,
        chapterTitle: chapter.title,
        chapterDescription: chapter.description,
        difficulty: chapter.module.course.difficulty,
    });

    const lessons = await prisma.$transaction(async (tx) => {

        await tx.lesson.deleteMany({
            where: {
                chapterId,
            },
        });

        const createdLessons = [];

        for (const lesson of aiResponse.lessons) {

            const created = await tx.lesson.create({
                data: {
                    title: lesson.title,
                    summary: lesson.summary,
                    difficulty: lesson.difficulty,
                    readingTime: lesson.readingTime,
                    order: lesson.order,
                    chapterId,
                },
            });

            createdLessons.push(created);
        }

        return createdLessons;

    });

    return lessons;

};