import prisma from "../config/prisma.js";

/*
|--------------------------------------------------------------------------
| Mark Lesson Opened
|--------------------------------------------------------------------------
*/

export const markLessonOpened = async (userId, lessonId) => {

    return await prisma.lessonProgress.upsert({

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

};

/*
|--------------------------------------------------------------------------
| Mark Lesson Completed
|--------------------------------------------------------------------------
*/

export const markLessonCompleted = async (

    userId,

    lessonId

) => {

    return await prisma.lessonProgress.upsert({

        where: {

            userId_lessonId: {

                userId,

                lessonId,

            },

        },

        update: {

            completed: true,

            completedAt: new Date(),

        },

        create: {

            userId,

            lessonId,

            completed: true,

            completedAt: new Date(),

        },

    });

};

/*
|--------------------------------------------------------------------------
| Course Progress
|--------------------------------------------------------------------------
*/

export const getCourseProgress = async (

    userId,

    courseId

) => {

    const lessons = await prisma.lesson.findMany({

        where: {

            chapter: {

                module: {

                    courseId,

                },

            },

        },

        select: {

            id: true,

        },

    });

    const totalLessons = lessons.length;

    if (totalLessons === 0) {

        return {

            completedLessons: 0,

            totalLessons: 0,

            percentage: 0,

        };

    }

    const lessonIds = lessons.map(

        (lesson) => lesson.id

    );

    const completedLessons = await prisma.lessonProgress.count({

        where: {

            userId,

            lessonId: {

                in: lessonIds,

            },

            completed: true,

        },

    });

    return {

        completedLessons,

        totalLessons,

        percentage: Math.round(

            (completedLessons / totalLessons) * 100

        ),

    };

};

/*
|--------------------------------------------------------------------------
| Dashboard Progress
|--------------------------------------------------------------------------
*/

export const getDashboardProgress = async (

    userId

) => {

    const courses = await prisma.course.findMany({

        where: {

            userId,

        },

        select: {

            id: true,

            title: true,

        },

    });

    const result = [];

    for (const course of courses) {

        const progress = await getCourseProgress(

            userId,

            course.id

        );

        result.push({

            ...course,

            progress,

        });

    }

    return result;

};