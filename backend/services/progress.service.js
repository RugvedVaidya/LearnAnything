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

export const getLessonProgress = async (userId, lessonId) => {

    return await prisma.lessonProgress.findUnique({

        where: {

            userId_lessonId: {

                userId,

                lessonId,

            },

        },

    });

};

export const getCourseProgress = async (userId, courseId) => {

    const course = await prisma.course.findUnique({

        where: {

            id: courseId,

        },

        include: {

            modules: {

                orderBy: {

                    order: "asc",

                },

                include: {

                    chapters: {

                        orderBy: {

                            order: "asc",

                        },

                        include: {

                            lessons: {

                                orderBy: {

                                    order: "asc",

                                },

                                include: {

                                    progress: {

                                        where: {

                                            userId,

                                        },

                                    },

                                },

                            },

                        },

                    },

                },

            },

        },

    });

    if (!course) {

        throw new Error("Course not found.");

    }

    const lessons = [];

    course.modules.forEach((module) => {

        module.chapters.forEach((chapter) => {

            chapter.lessons.forEach((lesson) => {

                lessons.push({

                    ...lesson,

                    module,

                    chapter,

                });

            });

        });

    });

    const totalLessons = lessons.length;

    const completedLessons = lessons.filter(

        lesson =>

            lesson.progress.length > 0 &&

            lesson.progress[0].completed

    ).length;

    const currentLesson =

        lessons.find(

            lesson =>

                lesson.progress.length === 0 ||

                !lesson.progress[0].completed

        ) || null;

    const percentage =

        totalLessons === 0

            ? 0

            : Math.round(

                (completedLessons / totalLessons) * 100

            );

    const lessonStatuses = lessons.map((lesson) => {

        const progress = lesson.progress[0];

        return {

            id: lesson.id,

            completed: progress?.completed || false,

            current: currentLesson ? currentLesson.id === lesson.id : false,

        };

    });

    return {

        totalLessons,

        completedLessons,

        percentage,

        currentLesson,

        lessonStatuses,

    };

};