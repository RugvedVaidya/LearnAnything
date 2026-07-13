import prisma from "../config/prisma.js";

export const getDashboardSummary = async (userId) => {

    const courses = await prisma.course.findMany({

        where: {
            userId,
        },

        include: {

            modules: {

                include: {

                    chapters: {

                        include: {

                            lessons: {

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

    let totalCourses = courses.length;

    let totalLessons = 0;

    let completedLessons = 0;

    let totalHours = 0;

    let continueLesson = null;

    for (const course of courses) {

        totalHours += course.estimatedHours;

        for (const module of course.modules) {

            for (const chapter of module.chapters) {

                for (const lesson of chapter.lessons) {

                    totalLessons++;

                    const progress = lesson.progress[0];

                    if (progress?.completed) {

                        completedLessons++;

                    }
                    else if (!continueLesson) {

                        continueLesson = {

                            lessonId: lesson.id,

                            lessonTitle: lesson.title,

                            chapterTitle: chapter.title,

                            moduleTitle: module.title,

                            courseTitle: course.title,

                            courseId: course.id,

                        };

                    }

                }

            }

        }

    }

    const percentage =

        totalLessons === 0

            ? 0

            : Math.round((completedLessons * 100) / totalLessons);

    return {

        totalCourses,

        totalHours,

        totalLessons,

        completedLessons,

        percentage,

        continueLesson,

    };

};