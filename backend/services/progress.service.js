import prisma from "../config/prisma.js";

export const openLesson = async (userId, lessonId) => {

    const progress = await prisma.lessonProgress.upsert({

        where: {

            userId_lessonId: {

                userId,

                lessonId,

            },

        },

        update: {

            lastOpenedAt: new Date(),

        },

        create: {

            userId,

            lessonId,

            lastOpenedAt: new Date(),

        },

    });

    return progress;

};

export const completeLesson = async (userId, lessonId) => {

    const progress = await prisma.lessonProgress.upsert({

        where: {

            userId_lessonId: {

                userId,

                lessonId,

            },

        },

        update: {

            completed: true,

            completedAt: new Date(),

            lastOpenedAt: new Date(),

        },

        create: {

            userId,

            lessonId,

            completed: true,

            completedAt: new Date(),

            lastOpenedAt: new Date(),

        },

    });

    return progress;

};