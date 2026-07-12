import prisma from "../config/prisma.js";

export const getLessonNavigation = async (lessonId) => {

    const lesson = await prisma.lesson.findUnique({

        where: {
            id: lessonId,
        },

        include: {

            chapter: {

                include: {

                    module: {

                        include: {

                            course: {

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

                                                    },

                                                },

                                            },

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

    if (!lesson) {

        throw new Error("Lesson not found.");

    }

    const course = lesson.chapter.module.course;

    const allLessons = [];

    course.modules.forEach((module) => {

        module.chapters.forEach((chapter) => {

            chapter.lessons.forEach((lesson) => {

                allLessons.push({

                    ...lesson,

                    chapter,

                    module,

                });

            });

        });

    });

    const currentIndex = allLessons.findIndex(

        l => l.id === lessonId

    );

    return {

        course: {

            id: course.id,

            title: course.title,

        },

        module: {

            id: lesson.chapter.module.id,

            title: lesson.chapter.module.title,

        },

        chapter: {

            id: lesson.chapter.id,

            title: lesson.chapter.title,

        },

        currentLesson: allLessons[currentIndex],

        previousLesson:

            currentIndex > 0

                ? allLessons[currentIndex - 1]

                : null,

        nextLesson:

            currentIndex < allLessons.length - 1

                ? allLessons[currentIndex + 1]

                : null,

    };

};